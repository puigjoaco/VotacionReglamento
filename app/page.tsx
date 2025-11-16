import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, Shield, Eye, FileText, ArrowRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAgMHYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-4xl w-full space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-5 rounded-3xl shadow-2xl shadow-blue-500/30">
              <Building2 className="h-14 w-14 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Sistema de Comentarios
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200/90 font-medium">
              Reglamento Interno del Edificio
            </h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
              Plataforma oficial para recoger comentarios y propuestas de modificación del Reglamento
              Interno. Participación transparente de propietarios y residentes.
            </p>
          </div>

          {/* Deadline Card */}
          <Card className="bg-amber-500/10 border-amber-500/30 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="pt-6 pb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-amber-400" />
                <p className="font-semibold text-amber-300">Fecha límite para comentarios:</p>
              </div>
              <p className="text-3xl font-bold text-amber-200">25 de diciembre de 2025</p>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Ingresar al Sistema
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="/reglamento.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar Reglamento
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardContent className="pt-6 text-center">
                <Shield className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Seguro</h3>
                <p className="text-sm text-blue-100/70">
                  Autenticación con RUT. Solo usuarios autorizados pueden acceder.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardContent className="pt-6 text-center">
                <Eye className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Transparente</h3>
                <p className="text-sm text-blue-100/70">
                  Todos los comentarios son visibles para toda la comunidad.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardContent className="pt-6 text-center">
                <FileText className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Permanente</h3>
                <p className="text-sm text-blue-100/70">
                  Los comentarios no se eliminan. Registro permanente de propuestas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-blue-200/50">
              Sistema implementado según acuerdo de asamblea del 13 de noviembre de 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
