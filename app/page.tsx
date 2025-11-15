export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Sistema de Comentarios para el Reglamento Interno
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Plataforma para recoger comentarios y propuestas de la comunidad
        </p>
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-6 py-4 rounded">
          <p className="font-bold">Fecha límite:</p>
          <p>25 de diciembre de 2025</p>
        </div>
      </div>
    </main>
  )
}
