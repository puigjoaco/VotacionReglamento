'use client';

import React, { useState } from 'react';
import {
  CheckCircle,
  ShieldCheck,
  ListTodo,
  TrendingUp,
  PiggyBank,
  Gavel,
  CheckSquare,
  UserX,
  UserMinus,
  UserCheck,
  FileText,
  AlertTriangle,
  Search,
  Calendar,
  Users,
  Activity,
  DollarSign,
  Zap,
  Droplets,
  Lock,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Scale,
  AlertOctagon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import rawData from '@/analisis_gestiones_joaquin.json';

// Type definitions based on the JSON structure
type Gestion = {
  fecha: string;
  titulo: string;
  descripcion: string;
  tipo: string;
  impacto: string;
  costo_real: number | null;
  costo_alternativa: number | null;
  ahorro_generado: number | null;
  beneficio_comunidad: string;
};

type SavingsItem = {
  concepto: string;
  monto_clp: number;
};

const gestionesData: Gestion[] = rawData.gestiones_detalladas;
const savingsData: SavingsItem[] = rawData.resumen_ahorros.desglose;
const totalSavings = rawData.resumen_ahorros.total_ahorro_documentado;

export default function RevisionPage() {
  const [activeTab, setActiveTab] = useState('cases');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (idx: number) => {
    setExpandedItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const filteredGestiones = gestionesData.filter(item =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatMoney = (amount: number | null) => {
    if (amount === null) return 'N/A';
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critico': return 'text-red-400 border-red-500/50 bg-red-500/10';
      case 'alto': return 'text-orange-400 border-orange-500/50 bg-orange-500/10';
      case 'medio': return 'text-yellow-400 border-yellow-500/50 bg-yellow-500/10';
      default: return 'text-blue-400 border-blue-500/50 bg-blue-500/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'legal': return <Scale className="w-4 h-4" />;
      case 'financiero': return <DollarSign className="w-4 h-4" />;
      case 'seguridad': return <ShieldCheck className="w-4 h-4" />;
      case 'reparacion': return <Zap className="w-4 h-4" />;
      case 'coordinacion': return <Users className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-blue-900/50">

      {/* Executive Header */}
      <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white uppercase tracking-wider">Auditoría Ejecutiva</h1>
              <p className="text-[10px] text-zinc-400 font-mono">REF: PRESIDENCIA-PUIG-2023-25</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="hidden md:flex border-emerald-500/30 text-emerald-400 bg-emerald-500/10 gap-2">
              <CheckCircle className="w-3 h-3" />
              AUDIT COMPLETED
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Ahorro Total Documentado</p>
                  <h2 className="text-3xl font-bold text-emerald-400 mt-2">{formatMoney(totalSavings)}</h2>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <CheckSquare className="w-3 h-3" />
                <span>Verificado en registros contables y facturas</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Gestiones Críticas</p>
                  <h2 className="text-3xl font-bold text-white mt-2">{gestionesData.filter(g => g.impacto === 'critico').length}</h2>
                </div>
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <AlertOctagon className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="w-3 h-3" />
                <span>Riesgos mayores mitigados (Legal/Seguridad)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Total Intervenciones</p>
                  <h2 className="text-3xl font-bold text-blue-400 mt-2">{gestionesData.length}</h2>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <ListTodo className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <Activity className="w-3 h-3" />
                <span>Promedio: 2.5 gestiones mayores / mes</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-zinc-800">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {[
              { id: 'cases', label: 'Casos de Estudio Detallados', icon: FileText },
              { id: 'financial', label: 'Análisis Financiero', icon: DollarSign },
              { id: 'report', label: 'Informe Completo', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'}
                `}
              >
                <tab.icon className={`-ml-0.5 mr-2 h-4 w-4 ${activeTab === tab.id ? 'text-blue-500' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* DETAILED CASE STUDIES */}
        {activeTab === 'cases' && (
          <div className="space-y-6 animate-in fade-in duration-500">

            <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
              <Search className="w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Filtrar por palabra clave, tipo o impacto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-zinc-600"
              />
              <div className="text-xs text-zinc-500 whitespace-nowrap">
                {filteredGestiones.length} registros encontrados
              </div>
            </div>

            <div className="space-y-4">
              {filteredGestiones.map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">

                  {/* Header - Always Visible */}
                  <div
                    className="p-5 cursor-pointer flex items-center justify-between group"
                    onClick={() => toggleExpand(idx)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 p-2 rounded-md bg-zinc-800 text-zinc-400 group-hover:text-white transition-colors`}>
                        {getTypeIcon(item.tipo)}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-xs text-zinc-500">{item.fecha}</span>
                          <Badge variant="outline" className={`text-[10px] uppercase tracking-wider ${getImpactColor(item.impacto)}`}>
                            Impacto {item.impacto}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                          {item.titulo}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      {item.ahorro_generado && (
                        <div className="text-right hidden md:block">
                          <p className="text-[10px] text-zinc-500 uppercase">Ahorro Generado</p>
                          <p className="text-emerald-400 font-mono font-medium">{formatMoney(item.ahorro_generado)}</p>
                        </div>
                      )}
                      <Button variant="ghost" size="icon" className="text-zinc-500 group-hover:text-white">
                        {expandedItems.includes(idx) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedItems.includes(idx) && (
                    <div className="px-5 pb-5 pt-0 animate-in slide-in-from-top-2 duration-200">
                      <Separator className="bg-zinc-800 mb-5" />

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Narrative Column */}
                        <div className="lg:col-span-2 space-y-4">
                          <div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <AlertTriangle className="w-3 h-3" /> Contexto / Problema
                            </h4>
                            <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-950/50 p-3 rounded border border-zinc-800/50">
                              {/* Simulating split if description allows, otherwise full text */}
                              {item.descripcion.split('.')[0]}.
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <CheckSquare className="w-3 h-3" /> Gestión Realizada
                            </h4>
                            <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-950/50 p-3 rounded border border-zinc-800/50">
                              {item.descripcion}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <TrendingUp className="w-3 h-3" /> Resultado / Beneficio
                            </h4>
                            <p className="text-emerald-400/90 text-sm leading-relaxed font-medium bg-emerald-950/10 p-3 rounded border border-emerald-900/20">
                              {item.beneficio_comunidad}
                            </p>
                          </div>
                        </div>

                        {/* Data Column */}
                        <div className="space-y-4">
                          <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Análisis Financiero</h4>

                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-zinc-400">Costo Alternativa</span>
                                <span className="text-xs font-mono text-red-400">{formatMoney(item.costo_alternativa)}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-zinc-400">Costo Real</span>
                                <span className="text-xs font-mono text-zinc-200">{formatMoney(item.costo_real)}</span>
                              </div>
                              <Separator className="bg-zinc-800" />
                              <div className="flex justify-between items-center pt-1">
                                <span className="text-sm font-bold text-white">Ahorro Neto</span>
                                <span className="text-sm font-mono font-bold text-emerald-400">{formatMoney(item.ahorro_generado)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Evidencia</h4>
                            <div className="flex items-center gap-2 text-xs text-blue-400">
                              <FileText className="w-3 h-3" />
                              <span>Registro de Chats: {item.fecha}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINANCIAL ANALYSIS */}
        {activeTab === 'financial' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <h2 className="text-zinc-400 text-sm uppercase tracking-wider font-semibold mb-2">Impacto Financiero Total</h2>
              <div className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 font-mono">
                {formatMoney(totalSavings)}
              </div>
              <p className="text-emerald-400/80 max-w-2xl mx-auto">
                Valor total generado para la comunidad mediante optimización de recursos, negociaciones estratégicas y prevención de riesgos legales/operativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savingsData.map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-emerald-900/20 flex items-center justify-center text-emerald-500 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-zinc-300 font-medium">{item.concepto}</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">{formatMoney(item.monto_clp)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FULL REPORT */}
        {activeTab === 'report' && (
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12 animate-in fade-in duration-500">
            <div className="prose prose-invert prose-zinc max-w-none">
              <h1 className="text-3xl font-bold text-white border-b border-zinc-700 pb-4 mb-8">
                Informe de Auditoría de Gestión
              </h1>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" /> 1. Resumen Ejecutivo
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  La presidencia de Joaquín Puig se caracteriza por un <strong>estilo de gestión enérgico, autoritario y de
                    involucramiento directo ("hands-on")</strong>. Es altamente eficaz en la identificación y resolución de
                  problemas de infraestructura (iluminación, bombas, estética) y en la generación de ahorros en áreas
                  específicas. Sin embargo, su mandato está marcado por <strong>conflictos interpersonales
                    significativos</strong>, alta rotación de personal y un enfoque de gobernanza rígido.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" /> Fortalezas
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Capacidad de ejecución inmediata</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Generación masiva de ahorros ($73M+)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Defensa legal agresiva del edificio</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Mejora tangible en infraestructura</li>
                  </ul>
                </div>
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Debilidades
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Estilo de comunicación confrontacional</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Alta rotación de personal</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Centralización excesiva de tareas</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Conflictos con comité y vecinos</li>
                  </ul>
                </div>
              </div>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4">2. Estilo de Gestión y Dinámica del Comité</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-300">
                  <li><strong>Liderazgo Autoritario:</strong> Joaquín impulsa todas las iniciativas importantes. Frecuentemente da órdenes directas al personal y a los miembros del comité.</li>
                  <li><strong>Inestabilidad del Comité:</strong>
                    <ul className="list-circle pl-5 mt-2 space-y-2 text-zinc-400">
                      <li><strong>Fase 1 (Ene - Jun 2024):</strong> Conflicto con Rene Picasso y Rodrigo Vega. Termina con una "purga".</li>
                      <li><strong>Fase 2 (Jun 2024 - Nov 2025):</strong> Se unen Paula González y Jonathan Nambrard. Paula se convierte en la principal "oposición".</li>
                      <li><strong>Quiebre (Ago - Nov 2025):</strong> Las relaciones con Paula colapsan por la firma del nuevo Reglamento Interno.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4">3. Gestión de Personal</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-300">
                  <li><strong>Alta Rotación:</strong> Cambios frecuentes en el rol de Mayordomo (Rodrigo Catrimilla, Fernando Mira, Axel Cruzalegui).</li>
                  <li><strong>Estrategia de Despidos:</strong> Uso de "Necesidades de la Empresa" para evitar litigios.</li>
                  <li><strong>Microgestión:</strong> Monitoreo cercano mediante cámaras y listas de tareas.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4">4. Supervisión Financiera</h2>
                <p className="text-zinc-300 mb-4">
                  El punto más fuerte de la gestión. Se documentaron ahorros por más de <strong>$73.000.000</strong> mediante:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="bg-blue-900/20 p-3 rounded border border-blue-500/20 text-sm text-zinc-300">Importación directa de repuestos (Ascensores)</li>
                  <li className="bg-blue-900/20 p-3 rounded border border-blue-500/20 text-sm text-zinc-300">Negociación de contratos (Cargadores Copec)</li>
                  <li className="bg-blue-900/20 p-3 rounded border border-blue-500/20 text-sm text-zinc-300">Defensa legal contra cobros indebidos</li>
                  <li className="bg-blue-900/20 p-3 rounded border border-blue-500/20 text-sm text-zinc-300">Optimización de insumos y reparaciones</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4">5. Infraestructura y Mantenimiento</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-300">
                  <li><strong>Mantenimiento Proactivo:</strong> Lucha constante con Otis, reemplazo masivo a LED, reparación de bombas.</li>
                  <li><strong>Seguridad:</strong> Instalación de lectores de huella, botones de pánico y cámaras en ascensores.</li>
                  <li><strong>Estética:</strong> Estandarización de colores de cortinas y pintura de zonas comunes.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-400 mb-4">6. Legal y Cumplimiento</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-300">
                  <li><strong>Reglamento Interno:</strong> Proyecto mayor para actualizar reglamento (Ley 21.442). Punto de conflicto central.</li>
                  <li><strong>Postura Agresiva:</strong> Amenazas de corte de luz a morosos, multas por negligencia, y demandas a inmobiliaria.</li>
                </ul>
              </section>

              <div className="bg-zinc-950 p-6 rounded-xl text-center mt-12 border border-zinc-800">
                <p className="text-zinc-500 text-sm">Generado por Auditoría IA | Noviembre 2025</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
