import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Sistema de Comentarios
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
          Reglamento Interno del Edificio
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Plataforma oficial para recoger comentarios y propuestas de modificación del Reglamento
          Interno. Participación transparente de propietarios y residentes.
        </p>

        <div className="bg-blue-100 border-2 border-blue-400 text-blue-800 px-8 py-6 rounded-lg mb-8">
          <p className="font-bold text-lg mb-2">Fecha límite para comentarios:</p>
          <p className="text-2xl font-semibold">25 de diciembre de 2025</p>
        </div>

        <div className="space-y-4">
          <Link href="/login">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
              Ingresar al Sistema
            </Button>
          </Link>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">🔒 Seguro</h3>
              <p className="text-sm text-gray-600">
                Autenticación con RUT y apellido. Solo usuarios autorizados pueden acceder.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">👁️ Transparente</h3>
              <p className="text-sm text-gray-600">
                Todos los comentarios son visibles para toda la comunidad. Transparencia absoluta.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">📝 Permanente</h3>
              <p className="text-sm text-gray-600">
                Los comentarios no se eliminan. Registro permanente de todas las propuestas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Sistema implementado según acuerdo de asamblea del 13 de noviembre de 2025</p>
        </div>
      </div>
    </main>
  );
}
