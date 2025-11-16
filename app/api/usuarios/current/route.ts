import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// GET /api/usuarios/current - Obtener info del usuario autenticado
export async function GET(request: NextRequest) {
  // Consume request to ensure Next.js recognizes this as a dynamic route
  void request;
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('[API /usuarios/current] No session found, returning 401');
      const res = NextResponse.json({ error: 'No autenticado' }, { status: 401 });
      res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.headers.set('Content-Type', 'application/json');
      return res;
    }

    // Verificar que la sesión tiene todos los campos necesarios
    if (!session.user.rut || !session.user.departamento || !session.user.tipo) {
      const res = NextResponse.json({
        error: 'Sesión incompleta. Por favor cierra sesión y vuelve a ingresar.',
        debug: {
          hasRut: !!session.user.rut,
          hasDepartamento: !!session.user.departamento,
          hasTipo: !!session.user.tipo,
        }
      }, { status: 401 });
      res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      return res;
    }

    const { rut, departamento, tipo } = session.user;
    const supabase = await createClient();

    // Obtener datos completos del usuario (buscar por rut, departamento y tipo para evitar duplicados)
    const { data: usuario, error: userError } = await supabase
      .from('usuarios')
      .select('*')
      .eq('rut', rut)
      .eq('departamento', departamento)
      .eq('tipo', tipo)
      .single();

    if (userError || !usuario) {
      console.error('[API /usuarios/current] User not found:', { rut, departamento, tipo, error: userError });
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

    const puedeComentarInfo = {
      puede_comentar: dentroDelPlazo && !tieneComentario,
      mensaje: tieneComentario
        ? 'Ya tienes un comentario registrado'
        : !dentroDelPlazo
          ? 'El plazo para comentar ha finalizado'
          : 'Puedes crear tu comentario',
    };

    const response = NextResponse.json({
      usuario: usuario,
      tiene_comentario: tieneComentario,
      puede_comentar: puedeComentarInfo,
    });

    // Prevent CDN caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (error) {
    console.error('Error en GET /api/usuarios/current:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorResponse = NextResponse.json(
      { error: 'Error interno del servidor', details: errorMessage },
      { status: 500 }
    );

    // Prevent CDN caching errors too
    errorResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');

    return errorResponse;
  }
}
