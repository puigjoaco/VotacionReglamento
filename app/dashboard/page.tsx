'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { CommentCard } from '@/components/CommentCard';
import { DateCountdown } from '@/components/DateCountdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { ComentarioConUsuario } from '@/types/database';
import { PlusCircle, Search, Building2, LogOut, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <Card className="w-80">
          <CardContent className="pt-6">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Cargando dashboard...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Sistema de Comentarios
                </h1>
                {session?.user && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600">
                      {session.user.apellido_razon_social}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      Depto {session.user.departamento}
                    </Badge>
                    <Badge
                      variant={session.user.tipo === 'propietario' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {session.user.tipo === 'propietario' ? 'Propietario' : 'Residente'}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut({ callbackUrl: '/login' })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Countdown */}
        <div className="mb-8">
          <DateCountdown />
        </div>

        {/* Call to Action */}
        {puedeComentarResponse?.puede_comentar && (
          <Alert className="mb-8 bg-green-50 border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-900 font-semibold">
              ¡Puedes enviar tu comentario!
            </AlertTitle>
            <AlertDescription className="text-green-700">
              <p className="mb-4">
                Tienes hasta el 25 de diciembre de 2025 para compartir tus propuestas de modificación al
                Reglamento Interno.
              </p>
              <Button onClick={() => router.push('/comentario/nuevo')} className="bg-green-600 hover:bg-green-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Crear mi comentario
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Buscar Comentarios
            </CardTitle>
            <CardDescription>
              Filtra por número de departamento, apellido o contenido del comentario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Escribe para buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Comments List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Todos los comentarios
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                {filteredComentarios.length} {filteredComentarios.length === 1 ? 'comentario' : 'comentarios'}
              </Badge>
            </div>
            <CardDescription>
              Comentarios de propietarios y residentes sobre el Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredComentarios.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">
                  {searchTerm
                    ? 'No se encontraron comentarios que coincidan con tu búsqueda.'
                    : 'Aún no hay comentarios publicados.'}
                </p>
                {!searchTerm && puedeComentarResponse?.puede_comentar && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => router.push('/comentario/nuevo')}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    ¡Sé el primero en participar!
                  </Button>
                )}
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
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Sistema de Comentarios para la Revisión del Reglamento Interno
          </p>
        </div>
      </footer>
    </div>
  );
}
