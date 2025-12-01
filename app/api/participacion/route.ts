import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export interface DepartamentoParticipacion {
  departamento: string;
  piso: number;
  propietario: {
    apellido: string;
    voto: 'aprobacion' | 'modificacion' | null;
    fecha: string | null;
  } | null;
  residente: {
    apellido: string;
    voto: 'aprobacion' | 'modificacion' | null;
    fecha: string | null;
  } | null;
  estado: 'propietario_voto' | 'residente_voto' | 'pendiente';
  votoValido: 'aprobacion' | 'modificacion' | null;
}

export interface ParticipacionResponse {
  departamentos: DepartamentoParticipacion[];
  estadisticas: {
    total: number;
    participaron: number;
    pendientes: number;
    porcentaje: number;
    aprobaciones: number;
    modificaciones: number;
    votoPropietario: number;
    votoResidente: number;
  };
  pisos: number[];
}

// Función para extraer el piso del número de departamento
function getPiso(depto: string): number {
  const num = parseInt(depto);
  if (num >= 100) {
    return Math.floor(num / 10);
  }
  return Math.floor(num / 10);
}

export async function GET() {
  try {
    const supabase = await createClient();

    // Obtener todos los usuarios activos
    const { data: usuarios, error: usuariosError } = await supabase
      .from('usuarios')
      .select('departamento, tipo, apellido_razon_social')
      .eq('activo', true)
      .order('departamento');

    if (usuariosError) {
      console.error('Error al obtener usuarios:', usuariosError);
      return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 });
    }

    // Obtener todos los comentarios (excluyendo eliminados)
    const { data: comentarios, error: comentariosError } = await supabase
      .from('comentarios')
      .select('departamento, tipo_usuario, tipo_comentario, created_at, contenido')
      .order('departamento');

    if (comentariosError) {
      console.error('Error al obtener comentarios:', comentariosError);
      return NextResponse.json({ error: 'Error al obtener comentarios' }, { status: 500 });
    }

    // Filtrar comentarios eliminados
    const comentariosActivos = comentarios?.filter(
      c => !c.contenido.includes('[Comentario eliminado')
    ) || [];

    // Agrupar usuarios por departamento
    const deptoMap = new Map<string, {
      propietario: { apellido: string } | null;
      residente: { apellido: string } | null;
    }>();

    usuarios?.forEach(u => {
      if (!deptoMap.has(u.departamento)) {
        deptoMap.set(u.departamento, { propietario: null, residente: null });
      }
      const depto = deptoMap.get(u.departamento)!;
      if (u.tipo === 'propietario') {
        depto.propietario = { apellido: u.apellido_razon_social };
      } else {
        depto.residente = { apellido: u.apellido_razon_social };
      }
    });

    // Crear mapa de comentarios por departamento y tipo
    const comentarioMap = new Map<string, {
      propietario: { voto: 'aprobacion' | 'modificacion'; fecha: string } | null;
      residente: { voto: 'aprobacion' | 'modificacion'; fecha: string } | null;
    }>();

    comentariosActivos.forEach(c => {
      if (!comentarioMap.has(c.departamento)) {
        comentarioMap.set(c.departamento, { propietario: null, residente: null });
      }
      const depto = comentarioMap.get(c.departamento)!;
      if (c.tipo_usuario === 'propietario') {
        depto.propietario = {
          voto: c.tipo_comentario as 'aprobacion' | 'modificacion',
          fecha: c.created_at
        };
      } else {
        depto.residente = {
          voto: c.tipo_comentario as 'aprobacion' | 'modificacion',
          fecha: c.created_at
        };
      }
    });

    // Construir respuesta por departamento
    const departamentos: DepartamentoParticipacion[] = [];
    const pisosSet = new Set<number>();

    deptoMap.forEach((usuarios, depto) => {
      const comentario = comentarioMap.get(depto);
      const piso = getPiso(depto);
      pisosSet.add(piso);

      let estado: 'propietario_voto' | 'residente_voto' | 'pendiente' = 'pendiente';
      let votoValido: 'aprobacion' | 'modificacion' | null = null;

      if (comentario?.propietario) {
        estado = 'propietario_voto';
        votoValido = comentario.propietario.voto;
      } else if (comentario?.residente) {
        estado = 'residente_voto';
        votoValido = comentario.residente.voto;
      }

      departamentos.push({
        departamento: depto,
        piso,
        propietario: usuarios.propietario ? {
          apellido: usuarios.propietario.apellido,
          voto: comentario?.propietario?.voto || null,
          fecha: comentario?.propietario?.fecha || null
        } : null,
        residente: usuarios.residente ? {
          apellido: usuarios.residente.apellido,
          voto: comentario?.residente?.voto || null,
          fecha: comentario?.residente?.fecha || null
        } : null,
        estado,
        votoValido
      });
    });

    // Ordenar departamentos por piso (descendente) y número
    departamentos.sort((a, b) => {
      if (a.piso !== b.piso) return b.piso - a.piso;
      return parseInt(a.departamento) - parseInt(b.departamento);
    });

    // Calcular estadísticas
    const participaron = departamentos.filter(d => d.estado !== 'pendiente').length;
    const aprobaciones = departamentos.filter(d => d.votoValido === 'aprobacion').length;
    const modificaciones = departamentos.filter(d => d.votoValido === 'modificacion').length;
    const votoPropietario = departamentos.filter(d => d.estado === 'propietario_voto').length;
    const votoResidente = departamentos.filter(d => d.estado === 'residente_voto').length;

    const response: ParticipacionResponse = {
      departamentos,
      estadisticas: {
        total: departamentos.length,
        participaron,
        pendientes: departamentos.length - participaron,
        porcentaje: Math.round((participaron / departamentos.length) * 100),
        aprobaciones,
        modificaciones,
        votoPropietario,
        votoResidente
      },
      pisos: Array.from(pisosSet).sort((a, b) => b - a)
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error en /api/participacion:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
