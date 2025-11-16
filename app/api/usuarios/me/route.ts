import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';
import type { Usuario, PuedeComentarResponse } from '@/types/database';

export const dynamic = 'force-dynamic';

// GET /api/usuarios/me - Obtener info del usuario autenticado
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    // Verificar que la sesión tiene todos los campos necesarios
    if (!session.user.rut || !session.user.departamento || !session.user.tipo) {
      return NextResponse.json({
        error: 'Sesión incompleta. Por favor cierra sesión y vuelve a ingresar.',
        debug: {
          hasRut: !!session.user.rut,
          hasDepartamento: !!session.user.departamento,
          hasTipo: !!session.user.tipo,
        }
      }, { status: 401 });
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

    // Verificar si puede comentar (simplificado - solo verificar fecha límite y si ya tiene comentario)
    const fechaLimite = new Date('2025-12-25T23:59:59-03:00');
    const ahora = new Date();
    const dentroDelPlazo = ahora <= fechaLimite;

    const puedeComentarInfo: PuedeComentarResponse = {
      puede_comentar: dentroDelPlazo && !tieneComentario,
      mensaje: tieneComentario
        ? 'Ya tienes un comentario registrado'
        : !dentroDelPlazo
          ? 'El plazo para comentar ha finalizado'
          : 'Puedes crear tu comentario',
    };

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
