'use client';

import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Send, AlertTriangle } from 'lucide-react';

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
            <CardTitle className="text-2xl text-white">Crear Comentario</CardTitle>
            <CardDescription className="text-slate-400">
              Comparte tus propuestas de modificación al Reglamento Interno
            </CardDescription>
          </CardHeader>
          <CardContent>
            {session?.user && (
              <div className="mb-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300 font-semibold">
                  Tu información:
                </p>
                <p className="text-sm text-blue-200/90 mt-1">
                  {session.user.apellido_razon_social} • Departamento {session.user.departamento} •{' '}
                  {session.user.tipo === 'propietario' ? 'Propietario' : 'Residente'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contenido" className="block text-sm font-medium text-slate-200 mb-2">
                  Tu comentario
                </label>
                <Textarea
                  id="contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  placeholder="Escribe aquí tus comentarios y propuestas para modificar el Reglamento Interno..."
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

              <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-4">
                <p className="text-sm text-amber-200/90 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-300">Importante:</strong> Una vez enviado, tu comentario será visible para
                    todos los propietarios y residentes. Podrás editarlo hasta el 25 de diciembre de
                    2025, pero no podrás eliminarlo.
                  </span>
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  disabled={loading}
                  className="border-slate-500/50 bg-slate-700/30 text-slate-300 hover:bg-slate-600/50 hover:text-white hover:border-slate-400/50"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={loading || contenido.trim().length === 0}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar comentario
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
