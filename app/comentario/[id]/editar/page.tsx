'use client';

import { useState, useEffect, FormEvent, use } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
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

      if (!response.ok) {
        setError(data.error || 'Error al actualizar comentario');
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando comentario...</p>
        </div>
      </div>
    );
  }

  if (error && !comentarioOriginal) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800 font-semibold">{error}</p>
            <Button onClick={() => router.push('/dashboard')} className="mt-4">
              Volver al dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" onClick={() => router.push('/dashboard')} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Editar Comentario</CardTitle>
            <CardDescription>
              Modifica tu comentario sobre el Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu comentario
                </label>
                <Textarea
                  id="contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  placeholder="Escribe aquí tus comentarios..."
                  rows={12}
                  className="resize-none"
                />
                <p className="mt-2 text-sm text-gray-500">
                  {contenido.length.toLocaleString()} caracteres
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  Puedes editar tu comentario hasta el <strong>25 de diciembre de 2025</strong>.
                  Los cambios serán visibles para todos inmediatamente.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  disabled={saving}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={
                    saving ||
                    contenido.trim().length === 0 ||
                    contenido === comentarioOriginal?.contenido
                  }
                >
                  {saving ? 'Guardando...' : 'Guardar cambios'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
