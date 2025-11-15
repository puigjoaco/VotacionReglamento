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
    <Card className={isOwn ? 'border-blue-300 bg-blue-50' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">
              Departamento {comentario.departamento}
            </CardTitle>
            <CardDescription className="text-sm">
              {comentario.apellido_razon_social}
            </CardDescription>
          </div>
          <Badge variant={comentario.tipo_usuario === 'propietario' ? 'default' : 'secondary'}>
            {comentario.tipo_usuario === 'propietario' ? 'Propietario' : 'Residente'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 whitespace-pre-wrap">{comentario.contenido}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={comentario.created_at}>{fechaFormateada}</time>
          {isOwn && onEdit && (
            <button
              onClick={onEdit}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Editar comentario
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
