'use client';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { ComentarioConUsuario } from '@/types/database';
import { Building2, User, Home, Edit3, ThumbsUp, FileText, Loader2 } from 'lucide-react';
import { useState } from 'react';
import AnalisisComentario from './AnalisisComentario';

interface DepartmentCommentCardProps {
  departamento: string;
  comentarios: ComentarioConUsuario[];
  currentUserRut?: string;
  currentUserTipo?: 'propietario' | 'residente';
  onEdit: (comentarioId: string) => void;
}

// FEATURE DISABLED: AI Analysis button removed per user request
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AnalisisButton({ comentario }: { comentario: ComentarioConUsuario }) {
  // Feature disabled - returning null to hide button
  return null;

  /* ORIGINAL CODE COMMENTED OUT
  const [analizando, setAnalizando] = useState(false);
  const [analisis, setAnalisis] = useState<any>(comentario.analisis_ia || null);
  const [mostrarAnalisis, setMostrarAnalisis] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalizar = async () => {
    // Si ya hay análisis guardado en DB o estado, solo mostrar/ocultar
    if (analisis) {
      setMostrarAnalisis(!mostrarAnalisis);
      return;
    }

    // Si no hay análisis, llamar a la API
    setAnalizando(true);
    setError(null);

    try {
      const response = await fetch('/api/analizar-comentario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comentario: comentario.contenido,
          comentarioId: comentario.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al analizar el comentario');
      }

      const data = await response.json();
      setAnalisis(data.analisis);
      setMostrarAnalisis(true);
    } catch (err) {
      setError('No se pudo analizar el comentario. Intenta nuevamente.');
      console.error('Error:', err);
    } finally {
      setAnalizando(false);
    }
  };

  // Solo mostrar botón para comentarios que NO son aprobación
  if (comentario.tipo_comentario === 'aprobacion') {
    return null;
  }

  return (
    <div className="mt-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleAnalizar}
              disabled={analizando}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              {analizando ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analizando...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4" />
                  {analisis ? (mostrarAnalisis ? 'Ocultar análisis' : 'Ver análisis') : 'Comparar con el Reglamento Interno'}
                </>
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p className="text-sm">
              Analiza este comentario con Inteligencia Artificial para identificar qué puntos ya existen en el Reglamento Interno vigente y cuáles son nuevas sugerencias a considerar.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {error && (
        <p className="text-red-400 text-xs mt-2">{error}</p>
      )}
      {mostrarAnalisis && analisis && <AnalisisComentario analisis={analisis} />}
    </div>
  );
  */
}

export function DepartmentCommentCard({
  departamento,
  comentarios,
  currentUserRut,
  currentUserTipo,
  onEdit
}: DepartmentCommentCardProps) {
  // Separar comentarios por tipo
  const comentarioPropietario = comentarios.find(c => c.tipo_usuario === 'propietario');
  const comentarioResidente = comentarios.find(c => c.tipo_usuario === 'residente');

  const formatDate = (date: string) => {
    return format(new Date(date), "d 'de' MMMM, yyyy 'a las' HH:mm", {
      locale: es,
    });
  };

  return (
    <Card className="border-slate-600/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm shadow-xl">
      <CardHeader className="border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-lg shadow-lg">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl text-white">
                Departamento {departamento}
              </CardTitle>
              {comentarioPropietario && (
                <CardDescription className="text-sm text-slate-400 mt-1">
                  {comentarioPropietario.apellido_razon_social}
                </CardDescription>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {comentarioPropietario && (
              <Badge className="bg-blue-600/80 text-white">
                <Home className="mr-1 h-3 w-3" />
                Propietario
              </Badge>
            )}
            {comentarioResidente && (
              <Badge className="bg-emerald-600/80 text-white">
                <User className="mr-1 h-3 w-3" />
                Residente
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Comentario del Propietario */}
        {comentarioPropietario && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-300">
                  <Home className="mr-1 h-3 w-3" />
                  Comentario del Propietario
                </Badge>
                {comentarioPropietario.tipo_comentario === 'aprobacion' ? (
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    APRUEBA
                  </Badge>
                ) : (
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
                    <Edit3 className="h-3 w-3 mr-1" />
                    PROPONE CAMBIOS
                  </Badge>
                )}
              </div>
              {comentarioPropietario.rut_usuario === currentUserRut && currentUserTipo === 'propietario' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(String(comentarioPropietario.id))}
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/30"
                >
                  <Edit3 className="mr-1 h-3 w-3" />
                  Editar
                </Button>
              )}
            </div>
            <p className="text-slate-200 whitespace-pre-wrap leading-relaxed mb-3">
              {comentarioPropietario.contenido}
            </p>

            {/* Botón de análisis */}
            <AnalisisButton comentario={comentarioPropietario} />

            <time className="text-xs text-slate-500 block mt-3">
              {formatDate(comentarioPropietario.created_at)}
            </time>
          </div>
        )}

        {/* Separador si hay ambos comentarios */}
        {comentarioPropietario && comentarioResidente && (
          <Separator className="bg-slate-700/50" />
        )}

        {/* Comentario del Residente */}
        {comentarioResidente && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-300">
                  <User className="mr-1 h-3 w-3" />
                  Comentario del Residente
                </Badge>
                {comentarioResidente.tipo_comentario === 'aprobacion' ? (
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    APRUEBA
                  </Badge>
                ) : (
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
                    <Edit3 className="h-3 w-3 mr-1" />
                    PROPONE CAMBIOS
                  </Badge>
                )}
                {comentarioResidente.apellido_razon_social !== comentarioPropietario?.apellido_razon_social && (
                  <span className="text-sm text-slate-400">
                    {comentarioResidente.apellido_razon_social}
                  </span>
                )}
              </div>
              {comentarioResidente.rut_usuario === currentUserRut && currentUserTipo === 'residente' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(String(comentarioResidente.id))}
                  className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/30"
                >
                  <Edit3 className="mr-1 h-3 w-3" />
                  Editar
                </Button>
              )}
            </div>
            <p className="text-slate-200 whitespace-pre-wrap leading-relaxed mb-3">
              {comentarioResidente.contenido}
            </p>

            {/* Botón de análisis */}
            <AnalisisButton comentario={comentarioResidente} />

            <time className="text-xs text-slate-500 block mt-3">
              {formatDate(comentarioResidente.created_at)}
            </time>
          </div>
        )}

        {/* Si no hay comentarios */}
        {!comentarioPropietario && !comentarioResidente && (
          <div className="p-6 text-center text-slate-500">
            No hay comentarios para este departamento
          </div>
        )}
      </CardContent>
    </Card>
  );
}