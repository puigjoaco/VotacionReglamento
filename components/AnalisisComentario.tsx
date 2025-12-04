'use client';

import { BookOpen, Lightbulb, CheckCircle2 } from 'lucide-react';

interface PuntoExistente {
  tema: string;
  articulo: string;
  texto_articulo: string;
  mensaje_amable: string;
}

interface AporteNuevo {
  tema: string;
  mensaje_amable: string;
}

interface AnalisisData {
  mensaje_intro: string;
  puntos_existentes: PuntoExistente[];
  aportes_nuevos: AporteNuevo[];
  mensaje_cierre: string;
}

interface AnalisisComentarioProps {
  analisis: AnalisisData;
}

export default function AnalisisComentario({ analisis }: AnalisisComentarioProps) {
  return (
    <div className="mt-4 border-t border-slate-600 pt-4">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">
            Comparación con el Reglamento Interno
          </h3>
        </div>

        {/* Mensaje de introducción */}
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          {analisis.mensaje_intro}
        </p>

        {/* Puntos ya contemplados */}
        {analisis.puntos_existentes && analisis.puntos_existentes.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <h4 className="text-base font-semibold text-blue-300">
                Temas Ya Contemplados en el Reglamento
              </h4>
            </div>

            <div className="space-y-4">
              {analisis.puntos_existentes.map((punto, index) => (
                <div
                  key={index}
                  className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-blue-400 text-xs font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-blue-200 mb-1">
                        {punto.tema}
                      </h5>
                      <p className="text-sm text-slate-300 mb-3">
                        {punto.mensaje_amable}
                      </p>

                      {/* Artículo citado */}
                      <div className="bg-slate-900/50 rounded p-3 border-l-2 border-blue-400">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen className="h-4 w-4 text-blue-400" />
                          <span className="text-xs font-semibold text-blue-300">
                            {punto.articulo}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 italic leading-relaxed">
                          "{punto.texto_articulo}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aportes nuevos */}
        {analisis.aportes_nuevos && analisis.aportes_nuevos.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-5 w-5 text-green-400" />
              <h4 className="text-base font-semibold text-green-300">
                Aportes Nuevos para Considerar
              </h4>
            </div>

            <div className="space-y-3">
              {analisis.aportes_nuevos.map((aporte, index) => (
                <div
                  key={index}
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                >
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-green-400 text-xs font-bold">💡</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-green-200 mb-1">
                        {aporte.tema}
                      </h5>
                      <p className="text-sm text-slate-300">
                        {aporte.mensaje_amable}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mensaje de cierre */}
        <div className="border-t border-slate-700/50 pt-4 mt-2">
          <p className="text-slate-400 text-xs leading-relaxed">
            {analisis.mensaje_cierre}
          </p>
        </div>
      </div>
    </div>
  );
}
