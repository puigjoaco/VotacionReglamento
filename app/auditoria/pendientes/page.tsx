'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  AlertTriangle,
  Gavel,
  DollarSign,
  Droplet,
  Zap,
  Building2,
  ArrowLeft,
  Scale,
  FileText,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import pendientesData from './pendientes.json';

const iconMap: Record<string, any> = {
  'legal_demandas': Gavel,
  'financiero': DollarSign,
  'filtraciones_impermeabilizacion': Droplet,
  'electrico_instalaciones': Zap,
  'estructural_construccion': Building2,
};

const colorMap: Record<string, string> = {
  'critica': 'bg-red-500/20 text-red-300 border-red-500/30',
  'alta': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'media': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
};

const categoryNameMap: Record<string, string> = {
  'legal_demandas': 'Legal / Demandas',
  'financiero': 'Financiero',
  'filtraciones_impermeabilizacion': 'Filtraciones / Impermeabilización',
  'electrico_instalaciones': 'Eléctrico / Instalaciones',
  'estructural_construccion': 'Estructural / Construcción',
};

export default function PendientesPage() {
  const { metadata, resumen_ejecutivo, pendientes, acciones_legales_en_curso, contexto_entrega } = pendientesData;

  // Agrupar pendientes por categoría
  const pendientesPorCategoria = pendientes.reduce((acc: any, p: any) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/auditoria">
            <Button variant="ghost" className="mb-4 text-slate-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Auditoría
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-lg shadow-lg">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {metadata.titulo}
              </h1>
              <p className="text-slate-400 text-lg">
                {metadata.edificio} • Fecha de Entrega: {new Date(metadata.fecha_entrega).toLocaleDateString('es-CL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Alert Principal */}
        <Alert className="mb-8 border-red-500/50 bg-red-500/10">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <AlertTitle className="text-red-300 text-lg font-semibold">
            Nota Importante para el Nuevo Comité
          </AlertTitle>
          <AlertDescription className="text-red-200 mt-2">
            {metadata.nota_importante}
          </AlertDescription>
        </Alert>

        {/* Resumen Ejecutivo */}
        <Card className="mb-8 border-slate-600/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-slate-700/50">
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <FileText className="h-6 w-6 text-red-400" />
              Resumen Ejecutivo
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <div className="text-3xl font-bold text-red-400 mb-1">
                  {resumen_ejecutivo.total_pendientes}
                </div>
                <div className="text-sm text-slate-400">Problemas Pendientes</div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  {resumen_ejecutivo.criticos_urgentes}
                </div>
                <div className="text-sm text-slate-400">Críticos / Urgentes</div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {resumen_ejecutivo.demandas_en_curso}
                </div>
                <div className="text-sm text-slate-400">Demandas en Curso</div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  ${(resumen_ejecutivo.monto_deudas_terceros / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-slate-400">Deudas de Terceros</div>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <Badge className={colorMap[resumen_ejecutivo.riesgo_legal.toLowerCase()] || 'bg-red-500/20 text-red-300'}>
                  Riesgo Legal: {resumen_ejecutivo.riesgo_legal}
                </Badge>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                <Badge className={colorMap[resumen_ejecutivo.riesgo_estructural.toLowerCase()] || 'bg-red-500/20 text-red-300'}>
                  Riesgo Estructural: {resumen_ejecutivo.riesgo_estructural}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Acciones Legales en Curso */}
        <Card className="mb-8 border-amber-600/50 bg-gradient-to-br from-amber-900/20 to-slate-900/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-amber-700/50">
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Scale className="h-6 w-6 text-amber-400" />
              Acciones Legales en Curso
            </CardTitle>
            <CardDescription className="text-amber-200">
              Demandas iniciadas que el nuevo comité debe continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {acciones_legales_en_curso.map((accion: any, idx: number) => (
                <div key={idx} className="bg-slate-700/30 p-4 rounded-lg border border-amber-600/30">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white">{accion.titulo}</h3>
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                      {accion.estado}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-300 space-y-1">
                    <div>Monto: <span className="text-amber-300 font-semibold">{accion.monto}</span></div>
                    <div>Representación Legal: <span className="text-emerald-300">{accion.representacion_legal}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pendientes por Categoría */}
        <div className="space-y-8">
          {Object.entries(pendientesPorCategoria).map(([categoria, items]: [string, any]) => {
            const Icon = iconMap[categoria] || AlertTriangle;
            const pendientesCategoria = items as any[];

            return (
              <Card key={categoria} className="border-slate-600/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm shadow-xl">
                <CardHeader className="border-b border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-2.5 rounded-lg shadow-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">
                        {categoryNameMap[categoria]}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {pendientesCategoria.length} problema{pendientesCategoria.length > 1 ? 's' : ''} pendiente{pendientesCategoria.length > 1 ? 's' : ''}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {pendientesCategoria.map((pendiente: any) => (
                      <div key={pendiente.id}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-slate-300 border-slate-500">
                                #{pendiente.id}
                              </Badge>
                              <Badge className={colorMap[pendiente.prioridad]}>
                                {pendiente.prioridad.toUpperCase()}
                              </Badge>
                              {pendiente.demanda_legal && (
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                  <Gavel className="h-3 w-3 mr-1" />
                                  DEMANDA LEGAL
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              {pendiente.titulo}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="bg-slate-700/30 p-3 rounded-lg">
                            <div className="text-slate-400 font-medium mb-1">Descripción:</div>
                            <p className="text-slate-200 leading-relaxed">{pendiente.descripcion}</p>
                          </div>

                          <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                            <div className="text-red-400 font-medium mb-1">Impacto:</div>
                            <p className="text-red-200">{pendiente.impacto}</p>
                          </div>

                          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                            <div className="text-blue-400 font-medium mb-1">Acción Requerida:</div>
                            <p className="text-blue-200">{pendiente.accion_requerida}</p>
                          </div>

                          <div className="flex items-center gap-2 text-slate-400">
                            <Clock className="h-4 w-4" />
                            <span className="text-xs">Estado actual: <span className="text-slate-300">{pendiente.estado_actual}</span></span>
                          </div>
                        </div>

                        {pendiente.id !== pendientesCategoria[pendientesCategoria.length - 1].id && (
                          <Separator className="mt-6 bg-slate-700/50" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mensaje Final */}
        <Card className="mt-8 border-blue-600/50 bg-gradient-to-br from-blue-900/20 to-slate-900/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-blue-700/50">
            <CardTitle className="text-2xl text-white">
              Mensaje al Nuevo Comité de Administración
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-slate-200 leading-relaxed mb-6">
              {contexto_entrega.mensaje_al_nuevo_comite}
            </p>

            <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                Prioridades Inmediatas
              </h3>
              <ul className="space-y-2">
                {contexto_entrega.prioridades_inmediatas.map((prioridad: string, idx: number) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>{prioridad}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
              <h3 className="text-white font-semibold mb-3">Documentación Disponible</h3>
              <ul className="space-y-2">
                {contexto_entrega.documentacion_disponible.map((doc: string, idx: number) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-2">
                    <FileText className="h-4 w-4 text-blue-400 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Entrega formal realizada por {metadata.responsable_saliente}
          </p>
          <p className="text-slate-600 text-xs mt-1">
            {metadata.cargo} • {metadata.edificio}
          </p>
        </div>
      </div>
    </div>
  );
}
