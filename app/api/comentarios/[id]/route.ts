import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';
import { updateComentarioSchema } from '@/lib/validations/comentario';

// GET /api/comentarios/[id] - Obtener un comentario específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data: comentario, error } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !comentario) {
      return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(comentario);
  } catch (error) {
    console.error('Error en GET /api/comentarios/[id]:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// PATCH /api/comentarios/[id] - Actualizar un comentario
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  let step = 'init';
  try {
    step = 'getSession';
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado', step }, { status: 401 });
    }

    step = 'checkSessionFields';
    // Verificar que la sesión tiene los campos necesarios
    if (!session.user.departamento || !session.user.tipo) {
      return NextResponse.json(
        {
          error: 'Sesión incompleta. Por favor cierra sesión y vuelve a ingresar.',
          step,
          debug: {
            hasRut: !!session.user.rut,
            hasDepartamento: !!session.user.departamento,
            hasTipo: !!session.user.tipo,
            sessionUser: session.user
          }
        },
        { status: 401 }
      );
    }

    step = 'getParams';
    const { id } = await params;

    step = 'parseBody';
    const body = await request.json();

    step = 'validateSchema';
    const validation = updateComentarioSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', step, details: validation.error.issues },
        { status: 400 }
      );
    }

    const { contenido } = validation.data;

    step = 'createSupabaseClient';
    const supabase = await createClient();

    step = 'fetchExistingComment';
    // Verificar que el comentario existe y pertenece al usuario
    const { data: comentarioExistente, error: fetchError } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !comentarioExistente) {
      return NextResponse.json({ error: 'Comentario no encontrado', step, fetchError: fetchError?.message }, { status: 404 });
    }

    step = 'checkOwnership';
    // Verificar propiedad por departamento y tipo (más confiable que RUT)
    if (
      comentarioExistente.departamento !== session.user.departamento ||
      comentarioExistente.tipo_usuario !== session.user.tipo
    ) {
      return NextResponse.json(
        {
          error: 'No tienes permiso para editar este comentario',
          step,
          debug: {
            comentario_depto: comentarioExistente.departamento,
            session_depto: session.user.departamento,
            comentario_tipo: comentarioExistente.tipo_usuario,
            session_tipo: session.user.tipo,
          },
        },
        { status: 403 }
      );
    }

    step = 'checkDeadline';
    // Verificar fecha límite
    const fechaLimite = new Date('2025-12-25T23:59:59-03:00');
    const ahora = new Date();
    if (ahora > fechaLimite) {
      return NextResponse.json(
        { error: 'El plazo para editar comentarios ha finalizado', step },
        { status: 403 }
      );
    }

    step = 'updateComment';
    // Actualizar comentario
    const { data: comentarioActualizado, error: updateError } = await supabase
      .from('comentarios')
      .update({ contenido })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      console.error('Error al actualizar comentario:', updateError);
      return NextResponse.json({ error: 'Error al actualizar comentario', step, details: updateError.message }, { status: 500 });
    }

    step = 'success';
    return NextResponse.json(comentarioActualizado);
  } catch (error) {
    console.error('Error en PATCH /api/comentarios/[id]:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json({
      error: 'Error interno del servidor',
      step,
      details: errorMessage,
      stack: errorStack
    }, { status: 500 });
  }
}

// DELETE /api/comentarios/[id] - Eliminar un comentario
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { id } = await params;
    const supabase = await createClient();

    // Verificar que el comentario existe y pertenece al usuario
    const { data: comentarioExistente, error: fetchError } = await supabase
      .from('comentarios')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !comentarioExistente) {
      return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 });
    }

    // Verificar propiedad por departamento y tipo (más confiable que RUT)
    if (
      comentarioExistente.departamento !== session.user.departamento ||
      comentarioExistente.tipo_usuario !== session.user.tipo
    ) {
      return NextResponse.json(
        { error: 'No tienes permiso para eliminar este comentario' },
        { status: 403 }
      );
    }

    // Verificar fecha límite
    const fechaLimite = new Date('2025-12-25T23:59:59-03:00');
    const ahora = new Date();
    if (ahora > fechaLimite) {
      return NextResponse.json(
        { error: 'El plazo para eliminar comentarios ha finalizado' },
        { status: 403 }
      );
    }

    // Eliminar comentario
    const { error: deleteError } = await supabase
      .from('comentarios')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error al eliminar comentario:', deleteError);
      return NextResponse.json({ error: 'Error al eliminar comentario' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Comentario eliminado exitosamente' });
  } catch (error) {
    console.error('Error en DELETE /api/comentarios/[id]:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
