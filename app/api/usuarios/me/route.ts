import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { createClient } from '@/lib/supabase/server';
import type { Usuario, PuedeComentarResponse } from '@/types/database';

// GET /api/usuarios/me - Obtener info del usuario autenticado
export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { rut, departamento, tipo } = session.user;
    const supabase = await createClient();

    // Obtener datos completos del usuario
    const { data: usuario, error: userError } = await supabase
      .from('usuarios')
      .select('*')
      .eq('rut', rut)
      .single();

    if (userError || !usuario) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    // Verificar si ya tiene comentario
    const { data: comentarios, error: comentarioError } = await supabase
      .from('comentarios')
      .select('id')
      .eq('departamento', departamento)
      .eq('tipo_usuario', tipo);

    if (comentarioError) {
      console.error('Error al verificar comentarios:', comentarioError);
    }

    const tieneComentario = comentarios && comentarios.length > 0;

    // Verificar si puede comentar
    const { data: permisoData, error: permisoError } = await supabase.rpc(
      'puede_comentar',
      {
        p_rut: rut,
        p_departamento: departamento,
        p_tipo: tipo,
      }
    );

    let puedeComentarInfo: PuedeComentarResponse | null = null;
    if (!permisoError && permisoData) {
      puedeComentarInfo = permisoData as PuedeComentarResponse;
    }

    return NextResponse.json({
      usuario: usuario as Usuario,
      tiene_comentario: tieneComentario,
      puede_comentar: puedeComentarInfo,
    });
  } catch (error) {
    console.error('Error en GET /api/usuarios/me:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
