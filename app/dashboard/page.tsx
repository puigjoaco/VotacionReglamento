'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { CommentCard } from '@/components/CommentCard';
import { DepartmentCommentCard } from '@/components/DepartmentCommentCard';
import { DateCountdown } from '@/components/DateCountdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { ComentarioConUsuario } from '@/types/database';
import { PlusCircle, Search, Building2, LogOut, MessageSquare, CheckCircle2, Loader2, Download, FileText, Edit3, ThumbsUp } from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [comentarios, setComentarios] = useState<ComentarioConUsuario[]>([]);
  const [filteredComentarios, setFilteredComentarios] = useState<ComentarioConUsuario[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [puedeComentarResponse, setPuedeComentarResponse] = useState<any>(null);
  const [aprobando, setAprobando] = useState(false);

  console.log('[Dashboard] Component rendered, session status:', status, 'session:', session);

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
          // Y filtrar comentarios eliminados
          const uniqueComentarios = data.filter(
            (comentario: ComentarioConUsuario, index: number, self: ComentarioConUsuario[]) =>
              index === self.findIndex((c) => c.id === comentario.id) &&
              !comentario.contenido.includes('[Comentario eliminado')
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
        const url = `/api/usuarios/current?_t=${Date.now()}`;
        console.log('[Dashboard] Fetching user info from:', url);

        const response = await fetch(url, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });

        console.log('[Dashboard] Response status:', response.status, response.statusText);
        console.log('[Dashboard] Response headers:', Object.fromEntries(response.headers.entries()));

        if (response.ok) {
          const data = await response.json();
          console.log('[Dashboard] User info received:', data);
          setPuedeComentarResponse(data.puede_comentar);
        } else {
          const errorText = await response.text();
          console.error('[Dashboard] Error response:', response.status, errorText);
        }
      } catch (error) {
        console.error('[Dashboard] Error al cargar info del usuario:', error);
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

  // Buscar TODOS los comentarios del departamento del usuario actual (excluyendo eliminados)
  const misComentarios = comentarios.filter(
    (c) => c.departamento === session?.user?.departamento &&
           !c.contenido.includes('[Comentario eliminado')
  );

  // El comentario específico del tipo de usuario actual (para compatibilidad)
  const miComentario = misComentarios.find(
    (c) => c.tipo_usuario === session?.user?.tipo
  );

  // Función para aprobar rápidamente el reglamento
  const handleAprobarReglamento = async () => {
    if (aprobando) return;
    setAprobando(true);
    try {
      const response = await fetch('/api/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contenido: '✅ Apruebo el Reglamento Interno de fecha 4 de agosto de 2025 sin modificaciones',
          tipo_comentario: 'aprobacion'
        })
      });

      if (response.ok) {
        // Recargar comentarios
        const comentariosResponse = await fetch('/api/comentarios');
        if (comentariosResponse.ok) {
          const data = await comentariosResponse.json();
          const uniqueComentarios = data.filter(
            (comentario: ComentarioConUsuario, index: number, self: ComentarioConUsuario[]) =>
              index === self.findIndex((c) => c.id === comentario.id) &&
              !comentario.contenido.includes('[Comentario eliminado')
          );
          setComentarios(uniqueComentarios);
          setFilteredComentarios(uniqueComentarios);
        }
      } else {
        const error = await response.json();
        alert(error.error || 'Error al registrar aprobación');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar aprobación');
    } finally {
      setAprobando(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <Card className="w-80 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
              <p className="text-slate-200 font-medium">Cargando dashboard...</p>
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
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}
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

        {/* Call to Action - Opciones para participar (SIEMPRE visible si no tiene comentario) */}
        {!miComentario && (
          <div className="mb-8 space-y-4">
            <h2 className="text-xl font-bold text-white text-center mb-6">
              ¿Qué opinas del Reglamento Interno de fecha 4 de agosto de 2025?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opción 1: Aprobar */}
              <Card className="bg-gradient-to-br from-emerald-900/60 to-green-900/60 border-emerald-500/40 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer group"
                    onClick={handleAprobarReglamento}>
                <CardContent className="pt-6 text-center">
                  <div className="bg-emerald-500/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                    <ThumbsUp className="h-12 w-12 text-emerald-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-2">
                    ESTOY DE ACUERDO
                  </h3>
                  <p className="text-emerald-200/80 text-sm mb-4">
                    Apruebo el Reglamento Interno actual sin modificaciones
                  </p>
                  <Button
                    disabled={aprobando}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg w-full"
                  >
                    {aprobando ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registrando...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Aprobar con 1 click
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Opción 2: Proponer cambios */}
              <Card className="bg-gradient-to-br from-amber-900/60 to-yellow-900/60 border-amber-500/40 shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer group"
                    onClick={() => router.push('/comentario/nuevo')}>
                <CardContent className="pt-6 text-center">
                  <div className="bg-amber-500/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-amber-500/30 transition-colors">
                    <Edit3 className="h-12 w-12 text-amber-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    PROPONGO CAMBIOS
                  </h3>
                  <p className="text-amber-200/80 text-sm mb-4">
                    Quiero sugerir modificaciones al Reglamento
                  </p>
                  <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 shadow-lg w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Escribir mi propuesta
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-slate-400 text-sm">
              Tienes hasta el 25 de diciembre de 2025 para participar
            </p>
          </div>
        )}

        {/* Mis comentarios del departamento */}
        {misComentarios.length > 0 && (
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-blue-200 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-400" />
                Comentarios de mi Departamento
              </h2>
            </div>
            <DepartmentCommentCard
              departamento={session?.user?.departamento || ''}
              comentarios={misComentarios}
              currentUserRut={session?.user?.rut}
              currentUserTipo={session?.user?.tipo}
              onEdit={(comentarioId) => router.push(`/comentario/${comentarioId}/editar`)}
            />
          </div>
        )}

        {/* Estadísticas de participación */}
        {comentarios.length > 0 && (
          <Card className="mb-8 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-3xl font-bold text-white">{comentarios.length}</p>
                  <p className="text-sm text-slate-400">Total participaciones</p>
                </div>
                <div className="text-center p-4 bg-emerald-900/30 rounded-lg border border-emerald-500/20">
                  <p className="text-3xl font-bold text-emerald-400">
                    {comentarios.filter(c => c.tipo_comentario === 'aprobacion').length}
                  </p>
                  <p className="text-sm text-emerald-300">Aprueban el reglamento</p>
                </div>
                <div className="text-center p-4 bg-amber-900/30 rounded-lg border border-amber-500/20">
                  <p className="text-3xl font-bold text-amber-400">
                    {comentarios.filter(c => c.tipo_comentario === 'modificacion' || !c.tipo_comentario).length}
                  </p>
                  <p className="text-sm text-amber-300">Proponen modificaciones</p>
                </div>
              </div>
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
                {(() => {
                  // Agrupar comentarios por departamento
                  const comentariosPorDepartamento = filteredComentarios.reduce((acc, comentario) => {
                    if (!acc[comentario.departamento]) {
                      acc[comentario.departamento] = [];
                    }
                    acc[comentario.departamento].push(comentario);
                    return acc;
                  }, {} as Record<string, ComentarioConUsuario[]>);

                  // Ordenar departamentos numéricamente
                  const departamentosOrdenados = Object.keys(comentariosPorDepartamento).sort((a, b) => {
                    const numA = parseInt(a);
                    const numB = parseInt(b);
                    return numA - numB;
                  });

                  return departamentosOrdenados.map((departamento) => (
                    <DepartmentCommentCard
                      key={departamento}
                      departamento={departamento}
                      comentarios={comentariosPorDepartamento[departamento]}
                      currentUserRut={session?.user?.rut}
                      currentUserTipo={session?.user?.tipo}
                      onEdit={(comentarioId) => router.push(`/comentario/${comentarioId}/editar`)}
                    />
                  ));
                })()}
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
