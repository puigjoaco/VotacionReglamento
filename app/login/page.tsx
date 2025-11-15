'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RutInput } from '@/components/RutInput';

export default function LoginPage() {
  const router = useRouter();
  const [rut, setRut] = useState('');
  const [apellido, setApellido] = useState('');
  const [isRutValid, setIsRutValid] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!isRutValid) {
      setError('Por favor ingresa un RUT válido');
      return;
    }

    if (!apellido.trim()) {
      setError('Por favor ingresa tu apellido o razón social');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        rut,
        apellido,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Por favor intenta nuevamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Sistema de Comentarios
          </h1>
          <h2 className="mt-2 text-center text-xl text-gray-600">
            Reglamento Interno
          </h2>
          <p className="mt-4 text-center text-sm text-gray-500">
            Ingresa con tu RUT y apellido para acceder
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Fecha límite:</strong> 25 de diciembre de 2025
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="rut" className="block text-sm font-medium text-gray-700">
                RUT
              </label>
              <div className="mt-1">
                <RutInput
                  value={rut}
                  onChange={setRut}
                  onValidChange={setIsRutValid}
                  placeholder="12.345.678-9"
                />
              </div>
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                Apellido o Razón Social
              </label>
              <div className="mt-1">
                <input
                  id="apellido"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="González"
                  required
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading || !isRutValid}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verificando...' : 'Ingresar'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Este sistema permite a propietarios y residentes del edificio</p>
          <p>enviar comentarios para la revisión del Reglamento Interno.</p>
        </div>
      </div>
    </div>
  );
}
