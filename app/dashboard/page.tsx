'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { CommentCard } from '@/components/CommentCard';
import { DateCountdown } from '@/components/DateCountdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { ComentarioConUsuario } from '@/types/database';
import { PlusCircle, Search } from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [comentarios, setComentarios] = useState<ComentarioConUsuario[]>([]);
  const [filteredComentarios, setFilteredComentarios] = useState<ComentarioConUsuario[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [puedeComentarResponse, setPuedeComentarResponse] = useState<any>(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    // Obtener comentarios
    const fetchComentarios = async () => {
      try {
        const response = await fetch('/api/comentarios');
        if (response.ok) {
          const data = await response.json();
          setComentarios(data);
          setFilteredComentarios(data);
        }
      } catch (error) {
        console.error('Error al cargar comentarios:', error);
      } finally {
        setLoading(false);
      }
    };

    // Obtener info del usuario
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/usuarios/me');
        if (response.ok) {
          const data = await response.json();
          setPuedeComentarResponse(data.puede_comentar);
        }
      } catch (error) {
        console.error('Error al cargar info del usuario:', error);
      }
    };

    fetchComentarios();
    fetchUserInfo();
  }, [status, router]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredComentarios(comentarios);
    } else {
      const filtered = comentarios.filter(
        (c) =>
          c.departamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.apellido_razon_social.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.contenido.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredComentarios(filtered);
    }
  }, [searchTerm, comentarios]);

  const miComentario = comentarios.find(
    (c) => c.rut_usuario === session?.user?.rut
  );

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Sistema de Comentarios - Reglamento Interno
              </h1>
              {session?.user && (
                <p className="text-sm text-gray-600 mt-1">
                  {session.user.apellido_razon_social} • Depto {session.user.departamento} •{' '}
                  {session.user.tipo === 'propietario' ? 'Propietario' : 'Residente'}
                </p>
              )}
            </div>
            <Button
              variant="outline"
              onClick={() => router.push('/api/auth/signout')}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <DateCountdown />
        </div>

        {puedeComentarResponse?.puede_comentar && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-900 mb-2">
              ¡Puedes enviar tu comentario!
            </h2>
            <p className="text-green-700 mb-4">
              Tienes hasta el 25 de diciembre para compartir tus propuestas de modificación al
              Reglamento Interno.
            </p>
            <Button onClick={() => router.push('/comentario/nuevo')}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear mi comentario
            </Button>
          </div>
        )}

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por departamento, apellido o contenido..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Todos los comentarios ({filteredComentarios.length})
          </h2>
        </div>

        {filteredComentarios.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border">
            <p className="text-gray-500">
              {searchTerm
                ? 'No se encontraron comentarios que coincidan con tu búsqueda.'
                : 'Aún no hay comentarios publicados. ¡Sé el primero en participar!'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredComentarios.map((comentario) => (
              <CommentCard
                key={comentario.id}
                comentario={comentario}
                isOwn={comentario.rut_usuario === session?.user?.rut}
                onEdit={
                  comentario.rut_usuario === session?.user?.rut
                    ? () => router.push(`/comentario/${comentario.id}/editar`)
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
