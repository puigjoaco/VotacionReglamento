'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  CheckCircle2,
  Wrench,
  Users,
  Shield,
  FileText,
  DollarSign,
  Scale,
  AlertTriangle,
  Briefcase,
  Eye,
  MessageSquare,
  Home,
  Target,
  Sparkles,
} from 'lucide-react';

interface GestionCardProps {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  descripcion_completa?: string;
  tipo: string;
  fuente: string;
  impacto: string;
}

// Iconos por tipo
const tipoIconos: Record<string, React.ReactNode> = {
  reparacion: <Wrench className="h-4 w-4" />,
  mejora: <CheckCircle2 className="h-4 w-4" />,
  mantencion: <Wrench className="h-4 w-4" />,
  coordinacion: <Users className="h-4 w-4" />,
  supervision: <Eye className="h-4 w-4" />,
  contratacion: <Briefcase className="h-4 w-4" />,
  comunicacion: <MessageSquare className="h-4 w-4" />,
  gestion_administrativa: <FileText className="h-4 w-4" />,
  seguridad: <Shield className="h-4 w-4" />,
  resolucion_conflictos: <AlertTriangle className="h-4 w-4" />,
  financiero: <DollarSign className="h-4 w-4" />,
  legal: <Scale className="h-4 w-4" />,
  postventa: <Home className="h-4 w-4" />,
};

// Colores por impacto
const impactoColores: Record<string, { bg: string; text: string; border: string }> = {
  critico: { bg: 'bg-red-500/20', text: 'text-red-300', border: 'border-red-500/40' },
  alto: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/40' },
  medio: { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/40' },
  bajo: { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/40' },
};

// Función para extraer información clave de la descripción
function extractKeyInfo(descripcion: string): {
  resumen: string;
  beneficio: string | null;
  inversion: string | null;
} {
  // Buscar patrones de información clave
  const lines = descripcion.split('\n').filter(l => l.trim());

  // Intentar extraer el primer párrafo significativo como resumen
  let resumen = '';
  let beneficio: string | null = null;
  let inversion: string | null = null;

  for (const line of lines) {
    const cleanLine = line.trim();

    // Buscar beneficios/resultados
    if (cleanLine.toLowerCase().includes('resultado') ||
        cleanLine.toLowerCase().includes('beneficio') ||
        cleanLine.toLowerCase().includes('ahorro') ||
        cleanLine.toLowerCase().includes('logr')) {
      if (!beneficio && cleanLine.length > 20 && cleanLine.length < 300) {
        beneficio = cleanLine.replace(/^[🎯💡✅📋⚠️⚙️💎💰\s]+/, '').replace(/^(RESULTADO|BENEFICIO|RESULTADOS|BENEFICIOS)[S]?:?\s*/i, '');
      }
    }

    // Buscar inversión/costo
    if (cleanLine.toLowerCase().includes('inversión') ||
        cleanLine.toLowerCase().includes('costo') ||
        cleanLine.toLowerCase().includes('$')) {
      const montoMatch = cleanLine.match(/\$[\d.,]+[KMk]?/);
      if (montoMatch && !inversion) {
        inversion = montoMatch[0];
      }
    }

    // Obtener resumen (primer contenido sustancial)
    if (!resumen && cleanLine.length > 50 && !cleanLine.startsWith('FECHA') && !cleanLine.includes('📅')) {
      resumen = cleanLine
        .replace(/^[🎯💡✅📋⚠️⚙️💎💰\s]+/, '')
        .replace(/^(CONTEXTO|DESAFÍO|PROBLEMA)[:]?\s*/i, '')
        .substring(0, 200);
      if (resumen.length === 200) resumen += '...';
    }
  }

  // Fallback: usar primeros 200 caracteres
  if (!resumen) {
    resumen = descripcion.substring(0, 200).replace(/\n/g, ' ').trim();
    if (descripcion.length > 200) resumen += '...';
  }

  return { resumen, beneficio, inversion };
}

export function GestionCard({ id, fecha, titulo, descripcion, descripcion_completa, tipo, fuente, impacto }: GestionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { resumen, beneficio, inversion } = extractKeyInfo(descripcion);
  const impactoStyle = impactoColores[impacto] || impactoColores.medio;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card className={`${impactoStyle.bg} ${impactoStyle.border} border backdrop-blur-sm transition-all hover:shadow-lg`}>
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-600 text-slate-300">
              #{id}
            </Badge>
            <Badge className={`text-xs ${impactoStyle.bg} ${impactoStyle.text} ${impactoStyle.border}`}>
              {impacto.toUpperCase()}
            </Badge>
            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
              {tipoIconos[tipo]}
              <span className="ml-1 capitalize">{tipo.replace('_', ' ')}</span>
            </Badge>
          </div>
          <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0">
            <Calendar className="h-3 w-3" />
            {formatDate(fecha)}
          </span>
        </div>

        {/* Título */}
        <h3 className="font-semibold text-white text-base mb-2 leading-tight">
          {titulo}
        </h3>

        {/* Resumen corto */}
        <p className="text-sm text-slate-300 leading-relaxed mb-3">
          {resumen}
        </p>

        {/* Info rápida: Beneficio e Inversión */}
        <div className="flex flex-wrap gap-2 mb-3">
          {beneficio && (
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-md px-2 py-1">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span className="text-xs text-emerald-300 truncate max-w-[200px]">
                {beneficio.length > 50 ? beneficio.substring(0, 50) + '...' : beneficio}
              </span>
            </div>
          )}
          {inversion && (
            <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-md px-2 py-1">
              <DollarSign className="h-3 w-3 text-amber-400" />
              <span className="text-xs text-amber-300">{inversion}</span>
            </div>
          )}
        </div>

        {/* Botón expandir */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-slate-400 hover:text-white hover:bg-slate-700/50"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Ver menos
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Ver detalles completos
            </>
          )}
        </Button>

        {/* Contenido expandido */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-600/50">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                Detalle completo
              </p>
              <div className="text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto">
                {descripcion_completa || descripcion}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Fuente: {fuente}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
