'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Calendar,
  Search,
  Filter,
  Clock,
  CheckCircle2,
  Wrench,
  Users,
  Shield,
  FileText,
  DollarSign,
  Scale,
  AlertTriangle,
  Briefcase,
  Eye,
  MessageSquare,
  Home,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Award,
  Plane,
} from 'lucide-react';
import gestionesData from './gestiones.json';

// Definir tipo para gestión
interface Gestion {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  tipo: string;
  fuente: string;
  impacto: string;
}

// Iconos por tipo de gestión
const tipoIconos: Record<string, React.ReactNode> = {
  reparacion: <Wrench className="h-5 w-5" />,
  mejora: <CheckCircle2 className="h-5 w-5" />,
  mantencion: <Wrench className="h-5 w-5" />,
  coordinacion: <Users className="h-5 w-5" />,
  supervision: <Eye className="h-5 w-5" />,
  contratacion: <Briefcase className="h-5 w-5" />,
  comunicacion: <MessageSquare className="h-5 w-5" />,
  gestion_administrativa: <FileText className="h-5 w-5" />,
  seguridad: <Shield className="h-5 w-5" />,
  resolucion_conflictos: <AlertTriangle className="h-5 w-5" />,
  financiero: <DollarSign className="h-5 w-5" />,
  legal: <Scale className="h-5 w-5" />,
  postventa: <Home className="h-5 w-5" />,
};

// Colores por tipo
const tipoColores: Record<string, string> = {
  reparacion: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  mejora: 'bg-green-500/20 text-green-300 border-green-500/30',
  mantencion: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  coordinacion: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  supervision: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  contratacion: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  comunicacion: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  gestion_administrativa: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  seguridad: 'bg-red-500/20 text-red-300 border-red-500/30',
  resolucion_conflictos: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  financiero: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  legal: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  postventa: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
};

export default function AuditoriaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [showAllStats, setShowAllStats] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gestiones = gestionesData.gestiones as Gestion[];
  const metadata = gestionesData.metadata as any;
  const estadisticas = gestionesData.estadisticas as any;
  const resumenCategoria = gestionesData.resumen_por_tipo as Record<string, number>;
  const resumenEjecutivo = (gestionesData as any).resumen_ejecutivo;
  const logrosDestacados = (gestionesData as any).logros_destacados_joaquin as string[];
  const inversionesPersonales = (gestionesData as any).inversiones_personales_joaquin as any[];
  const horariosTrabajo = (gestionesData as any).horarios_trabajo_voluntario as any;
  const contextoImportante = (gestionesData as any).contexto_importante as any;

  // Filtrar gestiones
  const filteredGestiones = useMemo(() => {
    return gestiones.filter((g) => {
      const matchesSearch =
        searchTerm === '' ||
        g.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.impacto.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTipo = selectedTipo === null || g.tipo === selectedTipo;

      return matchesSearch && matchesTipo;
    });
  }, [gestiones, searchTerm, selectedTipo]);

  // Usar estadísticas del JSON
  const statsPorTipo = resumenCategoria;

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString('es-CL');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-amber-500 to-yellow-400 p-3 rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Auditoría de Gestiones - Joaquín Puig</h1>
              <p className="text-blue-200 text-sm">
                Registro completo del trabajo voluntario realizado como {metadata.cargo}
              </p>
              <p className="text-blue-300 text-xs mt-1">
                {metadata.edificio} • {metadata.periodo}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 border-blue-700/50 shadow-xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium">Total Gestiones</p>
                  <p className="text-4xl font-bold text-white">{formatNumber(metadata.total_gestiones)}</p>
                </div>
                <BarChart3 className="h-10 w-10 text-blue-400" />
              </div>
              <p className="text-xs text-blue-300 mt-2">
                documentadas en chats de WhatsApp
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 border-emerald-700/50 shadow-xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-200 text-sm font-medium">Horas Trabajo</p>
                  <p className="text-4xl font-bold text-white">
                    {formatNumber(estadisticas.horas_trabajo_estimadas)}+
                  </p>
                </div>
                <Clock className="h-10 w-10 text-emerald-400" />
              </div>
              <p className="text-xs text-emerald-300 mt-2">
                horas de trabajo voluntario
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/80 to-purple-800/80 border-purple-700/50 shadow-xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Inversión Personal</p>
                  <p className="text-4xl font-bold text-white">
                    ${formatNumber(estadisticas.inversion_personal_clp)}
                  </p>
                </div>
                <DollarSign className="h-10 w-10 text-purple-400" />
              </div>
              <p className="text-xs text-purple-300 mt-2">CLP sin reembolso</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-900/80 to-amber-800/80 border-amber-700/50 shadow-xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-200 text-sm font-medium">Multas Evitadas</p>
                  <p className="text-4xl font-bold text-white">${formatNumber(estadisticas.multas_evitadas_clp / 1000000)}M</p>
                </div>
                <Scale className="h-10 w-10 text-amber-400" />
              </div>
              <p className="text-xs text-amber-300 mt-2">CLP en multas evitadas</p>
            </CardContent>
          </Card>
        </div>

        {/* Resumen Ejecutivo */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-green-100">
              <Award className="mr-2 h-5 w-5 text-green-400" />
              Resumen Ejecutivo - Impacto Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Gestiones Lideradas</p>
                <p className="text-2xl font-bold text-white">{formatNumber(resumenEjecutivo.total_gestiones_lideradas)}</p>
              </div>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Horas Voluntarias</p>
                <p className="text-2xl font-bold text-white">{formatNumber(resumenEjecutivo.horas_trabajo_voluntario)}</p>
              </div>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Crisis Críticas Resueltas</p>
                <p className="text-2xl font-bold text-white">{resumenEjecutivo.crisis_criticas_resueltas}</p>
              </div>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Inversión Personal</p>
                <p className="text-2xl font-bold text-white">${formatNumber(resumenEjecutivo.inversiones_personales_clp)}</p>
              </div>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Multas Evitadas</p>
                <p className="text-2xl font-bold text-white">${formatNumber(resumenEjecutivo.multas_evitadas_clp / 1000000)}M</p>
              </div>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-green-300 text-xs font-medium">Ahorro Total Comunidad</p>
                <p className="text-2xl font-bold text-white">${formatNumber(resumenEjecutivo.ahorro_total_comunidad_clp / 1000000)}M</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logros Destacados */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-500/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-purple-100">
              <CheckCircle2 className="mr-2 h-5 w-5 text-purple-400" />
              Logros Destacados de Joaquín Puig
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {logrosDestacados.map((logro, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-purple-100/90">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>{logro}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Inversiones Personales */}
        <Card className="mb-8 bg-gradient-to-r from-rose-900/50 to-pink-900/50 border-rose-500/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-rose-100">
              <DollarSign className="mr-2 h-5 w-5 text-rose-400" />
              Inversiones Personales (Nunca Reembolsadas)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {inversionesPersonales.map((inv, index) => (
                <div key={index} className="bg-rose-800/30 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-rose-100 font-medium text-sm">{inv.concepto}</p>
                      <p className="text-rose-300 text-xs">{inv.fecha}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">${formatNumber(inv.monto_clp)}</p>
                      <Badge className={inv.reembolsado ? 'bg-green-600/50 text-green-200' : 'bg-red-600/50 text-red-200'}>
                        {inv.reembolsado ? 'Reembolsado' : 'Sin reembolso'}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-rose-200/70 text-xs mt-1">{inv.nota}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Horarios de Trabajo Voluntario */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-cyan-500/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-cyan-100">
              <Clock className="mr-2 h-5 w-5 text-cyan-400" />
              Horarios de Trabajo Voluntario
            </CardTitle>
            <CardDescription className="text-cyan-200/70">
              {horariosTrabajo.descripcion}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Madrugadas</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.madrugadas}</p>
              </div>
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Noches</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.noches}</p>
              </div>
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Fines de Semana</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.fines_de_semana}</p>
              </div>
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Feriados</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.feriados}</p>
              </div>
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Horas Laborales</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.horas_laborales}</p>
              </div>
              <div className="bg-cyan-800/30 p-3 rounded-lg">
                <p className="text-cyan-300 text-xs font-medium">Vacaciones</p>
                <p className="text-cyan-100 text-sm">{horariosTrabajo.vacaciones}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contexto Importante */}
        <Card className="mb-8 bg-gradient-to-r from-amber-900/50 to-orange-900/50 border-amber-500/30 shadow-xl">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-amber-200 font-semibold text-lg mb-2">
                  Contexto Importante
                </h3>
                <p className="text-amber-100/80 text-sm leading-relaxed mb-3">
                  <strong>Situación:</strong> {contextoImportante.situacion}
                </p>
                <p className="text-amber-100/80 text-sm leading-relaxed mb-3">
                  <strong>Realidad:</strong> {contextoImportante.realidad}
                </p>
                <p className="text-amber-100/80 text-sm leading-relaxed mb-3">
                  <strong>Valor Ignorado:</strong> {contextoImportante.valor_ignorado}
                </p>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  <strong>La ingratitud:</strong> {contextoImportante.ingratitud}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metodología */}
        <Card className="mb-8 bg-gradient-to-r from-slate-800/50 to-gray-900/50 border-slate-500/30 shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-slate-200 font-semibold text-lg mb-2">
                Metodología de Auditoría
              </h3>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-2">
                {metadata.metodologia}
              </p>
              <p className="text-slate-300/80 text-sm leading-relaxed">
                <strong>Nota importante:</strong> {metadata.nota_importante}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Distribución por tipo */}
        <Card className="mb-8 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center text-slate-100">
                <Filter className="mr-2 h-5 w-5 text-blue-400" />
                Distribución por Tipo de Gestión
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllStats(!showAllStats)}
                className="text-blue-300 hover:text-blue-200"
              >
                {showAllStats ? 'Mostrar menos' : 'Ver todo'}
                {showAllStats ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.entries(statsPorTipo)
                .sort((a, b) => b[1] - a[1])
                .slice(0, showAllStats ? undefined : 8)
                .map(([tipo, count]) => (
                  <button
                    key={tipo}
                    onClick={() => setSelectedTipo(selectedTipo === tipo ? null : tipo)}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedTipo === tipo
                        ? 'ring-2 ring-blue-400 bg-blue-900/50'
                        : 'hover:bg-slate-700/50'
                    } ${tipoColores[tipo] || 'bg-slate-700/50 text-slate-300 border-slate-600'}`}
                  >
                    <div className="flex items-center gap-2">
                      {tipoIconos[tipo] || <CheckCircle2 className="h-5 w-5" />}
                      <span className="text-sm font-medium capitalize">{tipo.replace('_', ' ')}</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{count}</p>
                  </button>
                ))}
            </div>
            {selectedTipo && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTipo(null)}
                  className="text-blue-300 border-blue-500/50 hover:bg-blue-900/50"
                >
                  Limpiar filtro
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Búsqueda */}
        <Card className="mb-8 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-slate-100">
              <Search className="mr-2 h-5 w-5 text-blue-400" />
              Buscar Gestiones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              <Input
                type="text"
                placeholder="Buscar por título, descripción o impacto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {(searchTerm || selectedTipo) && (
              <p className="text-sm text-slate-400 mt-2">
                Mostrando {filteredGestiones.length} de {gestiones.length} gestiones
              </p>
            )}
          </CardContent>
        </Card>

        {/* Timeline de gestiones */}
        <Card className="shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center text-slate-100">
                <Clock className="mr-2 h-5 w-5 text-blue-400" />
                Línea de Tiempo de Gestiones
              </CardTitle>
              <Badge className="text-sm bg-blue-600 text-white border-blue-700">
                {filteredGestiones.length} gestiones
              </Badge>
            </div>
            <CardDescription className="text-slate-400">
              Registro cronológico de todas las acciones realizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredGestiones.map((gestion, index) => (
                <div
                  key={gestion.id}
                  className="relative pl-8 pb-4 border-l-2 border-slate-600 last:border-l-0"
                >
                  {/* Punto en la línea de tiempo */}
                  <div
                    className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                      tipoColores[gestion.tipo]
                        ? tipoColores[gestion.tipo].split(' ')[0]
                        : 'bg-slate-600'
                    } border-slate-800`}
                  />

                  {/* Card de gestión */}
                  <div
                    className={`bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden transition-all ${
                      expandedCards.has(gestion.id) ? 'shadow-lg' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleCard(gestion.id)}
                      className="w-full p-4 text-left hover:bg-slate-700/70 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="text-xs border-blue-400/50 text-blue-300"
                            >
                              #{gestion.id}
                            </Badge>
                            <Badge
                              className={`text-xs ${
                                tipoColores[gestion.tipo] ||
                                'bg-slate-600 text-slate-300 border-slate-500'
                              }`}
                            >
                              <span className="mr-1">
                                {tipoIconos[gestion.tipo] || (
                                  <CheckCircle2 className="h-3 w-3 inline" />
                                )}
                              </span>
                              {gestion.tipo}
                            </Badge>
                            <span className="text-xs text-slate-400 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(gestion.fecha)}
                            </span>
                          </div>
                          <h3 className="font-semibold text-slate-100">{gestion.titulo}</h3>
                        </div>
                        {expandedCards.has(gestion.id) ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {expandedCards.has(gestion.id) && (
                      <div className="px-4 pb-4 border-t border-slate-600/50">
                        <div className="mt-3 space-y-3">
                          <div>
                            <p className="text-xs font-medium text-slate-400 mb-1">Descripción:</p>
                            <p className="text-sm text-slate-200">{gestion.descripcion}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-slate-400 mb-1">Impacto:</p>
                            <p className="text-sm text-emerald-300">{gestion.impacto}</p>
                          </div>
                          <div className="flex items-center gap-4 pt-2">
                            <span className="text-xs text-slate-500">
                              Fuente: {gestion.fuente}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredGestiones.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-300">No se encontraron gestiones con los filtros actuales.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Nota final */}
        <Card className="mt-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-500/30 shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-blue-200 font-semibold text-lg mb-2">
                Más de 3 años de trabajo voluntario documentado
              </h3>
              <p className="text-blue-100/80 text-sm">
                {(gestionesData as any).mensaje_final}
              </p>
              <p className="text-blue-100/80 text-sm mt-2">
                Cada gestión aquí documentada representa horas de coordinación, seguimiento y
                responsabilidad asumida sin remuneración alguna.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-blue-200/70">
            Auditoría de Gestiones • Edificio Portezuelo Oriente • {metadata.periodo}
          </p>
        </div>
      </footer>
    </div>
  );
}
