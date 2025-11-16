import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ComentarioConUsuario } from '@/types/database';

interface CommentCardProps {
  comentario: ComentarioConUsuario;
  isOwn?: boolean;
  onEdit?: () => void;
}

export function CommentCard({ comentario, isOwn = false, onEdit }: CommentCardProps) {
  const fechaFormateada = format(new Date(comentario.created_at), "d 'de' MMMM, yyyy 'a las' HH:mm", {
    locale: es,
  });

  return (
    <Card className={`border-slate-700/50 bg-slate-800/60 backdrop-blur-sm ${isOwn ? 'ring-2 ring-blue-500/30' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-white">
              Departamento {comentario.departamento}
            </CardTitle>
            <CardDescription className="text-sm text-slate-400">
              {comentario.apellido_razon_social}
            </CardDescription>
          </div>
          <Badge
            variant={comentario.tipo_usuario === 'propietario' ? 'default' : 'secondary'}
            className={comentario.tipo_usuario === 'propietario'
              ? 'bg-blue-600/80 text-white'
              : 'bg-emerald-600/80 text-white'}
          >
            {comentario.tipo_usuario === 'propietario' ? 'Propietario' : 'Residente'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{comentario.contenido}</p>
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
