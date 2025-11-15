'use client';

import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function NuevoComentarioPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [contenido, setContenido] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (contenido.trim().length === 0) {
      setError('El comentario no puede estar vacío');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/comentarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contenido }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error al crear comentario');
        setLoading(false);
        return;
      }

      // Éxito - redirigir al dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Error al enviar el comentario. Por favor intenta nuevamente.');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.push('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Crear Comentario</CardTitle>
            <CardDescription>
              Comparte tus propuestas de modificación al Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            {session?.user && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tu información:</strong>
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  {session.user.apellido_razon_social} • Departamento {session.user.departamento} •{' '}
                  {session.user.tipo === 'propietario' ? 'Propietario' : 'Residente'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu comentario
                </label>
                <Textarea
                  id="contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  placeholder="Escribe aquí tus comentarios y propuestas para modificar el Reglamento Interno..."
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

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Una vez enviado, tu comentario será visible para
                  todos los propietarios y residentes. Podrás editarlo hasta el 25 de diciembre de
                  2025, pero no podrás eliminarlo.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading || contenido.trim().length === 0}>
                  {loading ? 'Enviando...' : 'Enviar comentario'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
