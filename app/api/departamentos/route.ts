import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Obtener lista única de departamentos ordenados
    const { data: usuarios, error } = await supabase
      .from('usuarios')
      .select('departamento')
      .eq('activo', true)
      .order('departamento');

    if (error) {
      console.error('Error al obtener departamentos:', error);
      return NextResponse.json({ error: 'Error al obtener departamentos' }, { status: 500 });
    }

    // Extraer departamentos únicos
    const departamentos = [...new Set(usuarios?.map((u) => u.departamento) || [])];

    return NextResponse.json(departamentos);
  } catch (error) {
    console.error('Error en /api/departamentos:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
