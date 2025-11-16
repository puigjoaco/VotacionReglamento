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
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const validation = updateComentarioSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.issues },
        { status: 400 }
      );
    }

    const { contenido } = validation.data;
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

    if (comentarioExistente.rut_usuario !== session.user.rut) {
      return NextResponse.json(
        { error: 'No tienes permiso para editar este comentario' },
        { status: 403 }
      );
    }

    // Verificar fecha límite
    const fechaLimite = new Date('2025-12-25T23:59:59-03:00');
    const ahora = new Date();
    if (ahora > fechaLimite) {
      return NextResponse.json(
        { error: 'El plazo para editar comentarios ha finalizado' },
        { status: 403 }
      );
    }

    // Actualizar comentario
    const { data: comentarioActualizado, error: updateError } = await supabase
      .from('comentarios')
      .update({ contenido, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      console.error('Error al actualizar comentario:', updateError);
      return NextResponse.json({ error: 'Error al actualizar comentario' }, { status: 500 });
    }

    return NextResponse.json(comentarioActualizado);
  } catch (error) {
    console.error('Error en PATCH /api/comentarios/[id]:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
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

    if (comentarioExistente.rut_usuario !== session.user.rut) {
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
