import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { createClient } from '@/lib/supabase/server';
import { createComentarioSchema } from '@/lib/validations/comentario';
import type { ComentarioConUsuario, PuedeComentarResponse } from '@/types/database';

// GET /api/comentarios - Obtener todos los comentarios
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    const departamento = searchParams.get('departamento');
    const tipo = searchParams.get('tipo');

    let query = supabase
      .from('comentarios_con_usuarios')
      .select('*')
      .order('created_at', { ascending: false });

    // Aplicar filtros opcionales
    if (departamento) {
      query = query.eq('departamento', departamento);
    }
    if (tipo && (tipo === 'propietario' || tipo === 'residente')) {
      query = query.eq('tipo_usuario', tipo);
    }

    const { data: comentarios, error } = await query;

    if (error) {
      console.error('Error al obtener comentarios:', error);
      return NextResponse.json({ error: 'Error al obtener comentarios' }, { status: 500 });
    }

    return NextResponse.json(comentarios as ComentarioConUsuario[]);
  } catch (error) {
    console.error('Error en GET /api/comentarios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST /api/comentarios - Crear nuevo comentario
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const body = await request.json();
    const validation = createComentarioSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.issues },
        { status: 400 }
      );
    }

    const { contenido } = validation.data;
    const { rut, departamento, tipo } = session.user;

    const supabase = await createClient();

    // Verificar si puede comentar
    const { data: permisoData, error: permisoError } = await supabase.rpc(
      'puede_comentar',
      {
        p_rut: rut,
        p_departamento: departamento,
        p_tipo: tipo,
      }
    );

    if (permisoError) {
      console.error('Error al verificar permisos:', permisoError);
      return NextResponse.json(
        { error: 'Error al verificar permisos' },
        { status: 500 }
      );
    }

    const permiso = permisoData as PuedeComentarResponse;

    if (!permiso.puede_comentar) {
      return NextResponse.json({ error: permiso.mensaje }, { status: 403 });
    }

    // Crear comentario
    const { data: comentario, error: insertError } = await supabase
      .from('comentarios')
      .insert({
        rut_usuario: rut,
        departamento,
        tipo_usuario: tipo,
        contenido,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error al crear comentario:', insertError);

      // Manejar error de constraint unique
      if (insertError.code === '23505') {
        return NextResponse.json(
          { error: 'Ya existe un comentario para este departamento y tipo de usuario' },
          { status: 409 }
        );
      }

      return NextResponse.json({ error: 'Error al crear comentario' }, { status: 500 });
    }

    return NextResponse.json(comentario, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/comentarios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
