import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
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
    const session = await getServerSession(authOptions);

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

    console.log('Creando comentario:', { rut, departamento, tipo });

    const supabase = await createClient();

    // Verificar fecha límite
    const fechaLimite = new Date('2025-12-25T23:59:59-03:00');
    const ahora = new Date();
    if (ahora > fechaLimite) {
      return NextResponse.json(
        { error: 'El plazo para comentar ha finalizado (25 de diciembre de 2025)' },
        { status: 403 }
      );
    }

    // Verificar si ya tiene comentario (que no esté eliminado)
    const { data: existente, error: checkError } = await supabase
      .from('comentarios')
      .select('id, contenido')
      .eq('departamento', departamento)
      .eq('tipo_usuario', tipo)
      .maybeSingle();

    console.log('Verificación de existencia:', {
      departamento,
      tipo,
      existente,
      checkError
    });

    // Si existe un comentario que NO esté eliminado, bloquear
    if (existente && !existente.contenido.includes('[Comentario eliminado')) {
      return NextResponse.json(
        {
          error: 'Ya existe un comentario para este departamento y tipo de usuario',
          debug: { departamento, tipo }
        },
        { status: 409 }
      );
    }

    // Si el comentario existe pero está eliminado, actualizarlo en lugar de crear uno nuevo
    if (existente && existente.contenido.includes('[Comentario eliminado')) {
      // Usar cliente admin para bypass de RLS
      const adminClient = createAdminClient();
      const { data: comentarioActualizado, error: updateError } = await adminClient
        .from('comentarios')
        .update({ contenido })
        .eq('id', existente.id)
        .select()
        .single();

      if (updateError) {
        console.error('Error al reactivar comentario:', updateError);
        return NextResponse.json({ error: 'Error al crear comentario' }, { status: 500 });
      }

      return NextResponse.json(comentarioActualizado, { status: 201 });
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
