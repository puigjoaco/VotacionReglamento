'use client';

import { useState, useEffect, FormEvent, use } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Trash2, AlertTriangle, Loader2 } from 'lucide-react';
import type { Comentario } from '@/types/database';

export default function EditarComentarioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: session } = useSession();
  const router = useRouter();
  const [contenido, setContenido] = useState('');
  const [comentarioOriginal, setComentarioOriginal] = useState<Comentario | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchComentario = async () => {
      try {
        const response = await fetch(`/api/comentarios/${id}`);
        if (!response.ok) {
          setError('Comentario no encontrado');
          setLoading(false);
          return;
        }

        const data = await response.json();
        setComentarioOriginal(data);
        setContenido(data.contenido);
        setLoading(false);

        // Verificar que el comentario pertenece al usuario
        if (data.rut_usuario !== session?.user?.rut) {
          setError('No tienes permiso para editar este comentario');
        }
      } catch (err) {
        setError('Error al cargar el comentario');
        setLoading(false);
        console.error(err);
      }
    };

    if (session?.user) {
      fetchComentario();
    }
  }, [id, session]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (contenido.trim().length === 0) {
      setError('El comentario no puede estar vacío');
      return;
    }

    if (contenido === comentarioOriginal?.contenido) {
      setError('No has realizado cambios');
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(`/api/comentarios/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contenido }),
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (!response.ok) {
        // Mostrar información de debug si está disponible
        let errorMsg = data.error || 'Error al actualizar comentario';
        if (data.step) {
          errorMsg += ` (step: ${data.step})`;
        }
        if (data.details) {
          errorMsg += ` - ${data.details}`;
        }
        setError(errorMsg);
        setSaving(false);
        return;
      }

      // Éxito - redirigir al dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Error al guardar los cambios. Por favor intenta nuevamente.');
      console.error(err);
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    setError('');

    try {
      const response = await fetch(`/api/comentarios/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Error al eliminar comentario');
        setDeleting(false);
        setShowDeleteConfirm(false);
        return;
      }

      // Éxito - redirigir al dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Error al eliminar el comentario. Por favor intenta nuevamente.');
      console.error(err);
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-slate-300">Cargando comentario...</p>
        </div>
      </div>
    );
  }

  if (error && !comentarioOriginal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-6 text-center">
            <p className="text-red-300 font-semibold">{error}</p>
            <Button
              onClick={() => router.push('/dashboard')}
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700"
            >
              Volver al dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.push('/dashboard')}
          className="mb-6 text-slate-300 hover:text-white hover:bg-slate-700/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al dashboard
        </Button>

        <Card className="border-slate-700/50 bg-slate-800/80 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Editar Comentario</CardTitle>
            <CardDescription className="text-slate-400">
              Modifica tu comentario sobre el Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contenido" className="block text-sm font-medium text-slate-200 mb-2">
                  Tu comentario
                </label>
                <Textarea
                  id="contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  placeholder="Escribe aquí tus comentarios..."
                  rows={12}
                  className="resize-none bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="mt-2 text-sm text-slate-400">
                  {contenido.length.toLocaleString()} caracteres
                </p>
              </div>

              {error && (
                <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4">
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-200/90">
                  Puedes editar o eliminar tu comentario hasta el <strong className="text-blue-300">25 de diciembre de 2025</strong>.
                  Los cambios serán visibles para todos inmediatamente.
                </p>
              </div>

              {/* Delete confirmation */}
              {showDeleteConfirm && (
                <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4">
                  <p className="text-sm text-red-200 mb-4 flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-300">¿Estás seguro?</strong> Esta acción eliminará permanentemente tu comentario.
                      No podrás recuperarlo.
                    </span>
                  </p>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowDeleteConfirm(false)}
                      disabled={deleting}
                      className="border-slate-500/50 bg-slate-700/30 text-slate-300 hover:bg-slate-600/50"
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="button"
                      onClick={handleDelete}
                      disabled={deleting}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      {deleting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Eliminando...
                        </>
                      ) : (
                        <>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Sí, eliminar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 justify-between">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/dashboard')}
                    disabled={saving || deleting}
                    className="border-slate-500/50 bg-slate-700/30 text-slate-300 hover:bg-slate-600/50 hover:text-white hover:border-slate-400/50"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      saving ||
                      deleting ||
                      contenido.trim().length === 0 ||
                      contenido === comentarioOriginal?.contenido
                    }
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar cambios
                      </>
                    )}
                  </Button>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDeleteConfirm(true)}
                  disabled={saving || deleting || showDeleteConfirm}
                  className="border-red-500/50 bg-red-900/30 text-red-300 hover:bg-red-800/50 hover:text-red-200 hover:border-red-400/50"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
