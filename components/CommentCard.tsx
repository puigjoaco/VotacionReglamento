'use client';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, Edit3, FileText, Loader2 } from 'lucide-react';
import type { ComentarioConUsuario } from '@/types/database';
import { useState } from 'react';
import AnalisisComentario from './AnalisisComentario';

interface CommentCardProps {
  comentario: ComentarioConUsuario;
  isOwn?: boolean;
  onEdit?: () => void;
}

export function CommentCard({ comentario, isOwn = false, onEdit }: CommentCardProps) {
  const [analizando, setAnalizando] = useState(false);
  const [analisis, setAnalisis] = useState<any>(null);
  const [mostrarAnalisis, setMostrarAnalisis] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fechaFormateada = format(new Date(comentario.created_at), "d 'de' MMMM, yyyy 'a las' HH:mm", {
    locale: es,
  });

  const esAprobacion = comentario.tipo_comentario === 'aprobacion';

  const handleAnalizar = async () => {
    // Si ya hay análisis, solo mostrar/ocultar
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

  return (
    <Card className={`border-slate-700/50 bg-slate-800/60 backdrop-blur-sm ${isOwn ? 'ring-2 ring-blue-500/30' : ''} ${esAprobacion ? 'border-emerald-500/30' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              Departamento {comentario.departamento}
              {esAprobacion && (
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  APRUEBA
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="text-sm text-slate-400">
              {comentario.apellido_razon_social}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <Badge
              variant={comentario.tipo_usuario === 'propietario' ? 'default' : 'secondary'}
              className={comentario.tipo_usuario === 'propietario'
                ? 'bg-blue-600/80 text-white'
                : 'bg-emerald-600/80 text-white'}
            >
              {comentario.tipo_usuario === 'propietario' ? 'Propietario' : 'Residente'}
            </Badge>
            {!esAprobacion && (
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
                <Edit3 className="h-3 w-3 mr-1" />
                PROPONE CAMBIOS
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{comentario.contenido}</p>

        {/* Botón de análisis - Solo para comentarios que NO son aprobación */}
        {!esAprobacion && (
          <div className="pt-2">
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
            {error && (
              <p className="text-red-400 text-xs mt-2">{error}</p>
            )}
          </div>
        )}

        {/* Mostrar análisis si existe */}
        {mostrarAnalisis && analisis && <AnalisisComentario analisis={analisis} />}

        <div className="flex items-center justify-between text-sm text-slate-400">
          <time dateTime={comentario.created_at}>{fechaFormateada}</time>
          {isOwn && onEdit && (
            <button
              onClick={onEdit}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Editar comentario
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
