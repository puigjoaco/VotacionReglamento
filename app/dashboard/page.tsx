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
import { PlusCircle, Search, Building2, LogOut, MessageSquare, CheckCircle2, Loader2, Download, FileText, Edit3 } from 'lucide-react';

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
          // Eliminar duplicados por ID (la vista puede duplicar por JOINs incorrectos)
          const uniqueComentarios = data.filter(
            (comentario: ComentarioConUsuario, index: number, self: ComentarioConUsuario[]) =>
              index === self.findIndex((c) => c.id === comentario.id)
          );
          setComentarios(uniqueComentarios);
          setFilteredComentarios(uniqueComentarios);
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
        // Add cache-busting parameter to bypass CDN cache
        const response = await fetch(`/api/usuarios/me?_t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
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
    (c) => c.departamento === session?.user?.departamento && c.tipo_usuario === session?.user?.tipo
  );

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <Card className="w-80 shadow-xl">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 rounded-xl shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Sistema de Comentarios
                </h1>
                {session?.user && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-blue-200">
                      {session.user.apellido_razon_social}
                    </span>
                    <Badge variant="outline" className="text-xs border-blue-400/50 text-blue-200">
                      Depto {session.user.departamento}
                    </Badge>
                    <Badge
                      className={`text-xs ${session.user.tipo === 'propietario'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'}`}
                    >
                      {session.user.tipo === 'propietario' ? 'Propietario' : 'Residente'}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="/reglamento.pdf" download>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Reglamento PDF
                </Button>
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="border-white/40 bg-white/10 text-white hover:bg-red-500/20 hover:border-red-400/60"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Countdown */}
        <div className="mb-8">
          <DateCountdown />
        </div>

        {/* Call to Action - Crear comentario (SIEMPRE visible si no tiene comentario) */}
        {!miComentario && (
          <Alert className="mb-8 bg-gradient-to-r from-emerald-900/50 to-green-900/50 border-emerald-500/30 shadow-lg backdrop-blur-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <AlertTitle className="text-emerald-300 font-semibold text-lg">
              ¡Puedes enviar tu comentario!
            </AlertTitle>
            <AlertDescription className="text-emerald-200/90">
              <p className="mb-4">
                Tienes hasta el 25 de diciembre de 2025 para compartir tus propuestas de modificación al
                Reglamento Interno.
              </p>
              <Button onClick={() => router.push('/comentario/nuevo')} className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg">
                <PlusCircle className="mr-2 h-4 w-4" />
                Crear mi comentario
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Mi comentario existente */}
        {miComentario && (
          <Card className="mb-8 border-blue-500/30 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center text-blue-200">
                  <FileText className="mr-2 h-5 w-5 text-blue-400" />
                  Mi Comentario
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/comentario/${miComentario.id}/editar`)}
                  className="border-blue-400/50 text-blue-200 hover:bg-blue-800/50"
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CommentCard
                comentario={miComentario}
                isOwn={true}
                onEdit={() => router.push(`/comentario/${miComentario.id}/editar`)}
              />
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card className="mb-8 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-slate-100">
              <Search className="mr-2 h-5 w-5 text-blue-400" />
              Buscar Comentarios
            </CardTitle>
            <CardDescription className="text-slate-400">
              Filtra por número de departamento, apellido o contenido del comentario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              <Input
                type="text"
                placeholder="Escribe para buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Comments List */}
        <Card className="shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center text-slate-100">
                <MessageSquare className="mr-2 h-5 w-5 text-blue-400" />
                Todos los comentarios
              </CardTitle>
              <Badge className="text-sm bg-blue-600 text-white border-blue-700">
                {filteredComentarios.length} {filteredComentarios.length === 1 ? 'comentario' : 'comentarios'}
              </Badge>
            </div>
            <CardDescription className="text-slate-400">
              Comentarios de propietarios y residentes sobre el Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredComentarios.length === 0 ? (
              <div className="text-center py-12 bg-slate-700/50 rounded-lg border-2 border-dashed border-slate-600">
                <MessageSquare className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-300 font-medium">
                  {searchTerm
                    ? 'No se encontraron comentarios que coincidan con tu búsqueda.'
                    : 'Aún no hay comentarios publicados.'}
                </p>
                {!searchTerm && puedeComentarResponse?.puede_comentar && !miComentario && (
                  <Button
                    className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
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
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-blue-200/70">
            Sistema de Comentarios para la Revisión del Reglamento Interno
          </p>
        </div>
      </footer>
    </div>
  );
}
