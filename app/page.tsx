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
                className="text-lg px-12 py-7 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 font-bold text-white border-2 border-emerald-400/50"
              >
                Ingresar al Sistema
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <a href="/reglamento.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar Reglamento
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-emerald-500/20 to-green-600/10 border-emerald-500/30 backdrop-blur-sm hover:from-emerald-500/30 hover:to-green-600/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="bg-emerald-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-emerald-300">Seguro</h3>
                <p className="text-sm text-emerald-100/80">
                  Autenticación con RUT. Solo usuarios autorizados pueden acceder.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border-cyan-500/30 backdrop-blur-sm hover:from-cyan-500/30 hover:to-blue-600/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="bg-cyan-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Eye className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-cyan-300">Transparente</h3>
                <p className="text-sm text-cyan-100/80">
                  Todos los comentarios son visibles para toda la comunidad.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/20 to-violet-600/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/30 hover:to-violet-600/20 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="bg-purple-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-purple-300">Permanente</h3>
                <p className="text-sm text-purple-100/80">
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
