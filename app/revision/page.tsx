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
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Full dataset from analisis_gestiones_joaquin.json
const gestionesData = [
  {
    "fecha": "2025-03-14",
    "titulo": "Creación de grupo de comunicación para propietarios",
    "descripcion": "Joaquín coordinó con Fernando (conserje) la creación de un grupo de WhatsApp exclusivo para propietarios residentes, estableciendo criterios claros de inclusión. Esto permitió crear un canal directo de comunicación transparente.",
    "tipo": "coordinacion",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-03-19",
    "titulo": "Gestión inmediata de limpieza y mantenimiento",
    "descripcion": "Ante reportes de residentes sobre closets sucios y falta de aseo, Joaquín actuó de inmediato coordinando con el personal de limpieza. Documentó los problemas con fotos y videos.",
    "tipo": "coordinacion",
    "impacto": "medio",
    "status": "Completado"
  },
  {
    "fecha": "2025-04-12",
    "titulo": "Gestión de emergencia citófono - Prevención cortocircuito",
    "descripcion": "Cuando la central del citófono presentó fallas graves, Joaquín contactó al técnico especializado y coordinó visita urgente, evitando un daño mayor estimado en $2-3 millones.",
    "tipo": "reparacion",
    "impacto": "alto",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-04-28",
    "titulo": "Victoria legal contra corredora problemática",
    "descripcion": "Joaquín lideró un proceso legal exitoso contra una corredora, logrando que se le prohibiera la entrada al edificio y la administración de propiedades, protegiendo a la comunidad.",
    "tipo": "legal",
    "impacto": "critico",
    "status": "Completado"
  },
  {
    "fecha": "2025-04-30",
    "titulo": "Detección de deuda por contribuciones Oficina 6",
    "descripcion": "Descubrió deuda de $8.9M en contribuciones de una oficina de la inmobiliaria. Alertó a la comunidad y gestionó con EBCO para evitar que la deuda recayera en el edificio.",
    "tipo": "financiero",
    "impacto": "critico",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-05-12",
    "titulo": "Reclamo formal a EBCO (20 puntos)",
    "descripcion": "Preparó documento exhaustivo con 20 puntos de reclamo contra EBCO (gastos comunes mal calculados, deuda eléctrica, fallas constructivas) para reunión con Gerente General.",
    "tipo": "legal",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-06-02",
    "titulo": "Implementación botón de pánico con TuyaSmart",
    "descripcion": "Implementó sistema de botón de pánico conectado a app TuyaSmart para alerta instantánea a residentes. Costo mínimo ($50k) vs sistema profesional ($2M).",
    "tipo": "seguridad",
    "impacto": "alto",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-06-12",
    "titulo": "Defensa contra cobro administración exteriores",
    "descripcion": "Evitó cobro fraudulento de $300.000 mensuales por 'administración' de otras torres. Logró acuerdo de asamblea para pago directo de facturas.",
    "tipo": "financiero",
    "impacto": "critico",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-06-12",
    "titulo": "Documentación robo de electricidad otras torres",
    "descripcion": "Documentó que torre 9500 pagaba 100% de luz de zonas comunes usadas por todos. Calculó deuda de $13M+ y preparó acciones legales.",
    "tipo": "financiero",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-07-09",
    "titulo": "Refuerzo metálico puertas de acceso",
    "descripcion": "Coordinó refuerzo de marcos de puertas de acceso (-2, EP, -1) con soldador profesional para resistir vandalismo. Solución económica y definitiva.",
    "tipo": "mejora",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-08-08",
    "titulo": "Recurso de protección admisible contra otras torres",
    "descripcion": "Presentó recurso de protección por falsificación de actas contra otras torres. Declarado ADMISIBLE, protegiendo acuerdos democráticos de la asamblea.",
    "tipo": "legal",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-08-13",
    "titulo": "Importación sensor ascensor desde EEUU",
    "descripcion": "Importó sensor original por $40k (vs $1M OTIS). Coordinó traída con vecino viajero. Ahorro total $960.000.",
    "tipo": "reparacion",
    "impacto": "alto",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-08-19",
    "titulo": "Importación encoder ascensor desde EEUU",
    "descripcion": "Importó 4 encoders originales por $60k total (vs $1.5M OTIS). Reemplazó 2 y guardó 2 de repuesto. Ahorro $1.44M.",
    "tipo": "reparacion",
    "impacto": "alto",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-08-27",
    "titulo": "Adquisición silla de ruedas emergencia",
    "descripcion": "Adquirió silla de ruedas para evacuación de emergencia tras sugerencia de residente. Mejora seguridad para personas con movilidad reducida.",
    "tipo": "seguridad",
    "impacto": "medio",
    "status": "Completado"
  },
  {
    "fecha": "2025-08-28",
    "titulo": "Negociación publicidad fachada norte",
    "descripcion": "Negoció pantalla LED con potencial ingreso de $360M anuales + paneles solares gratis. Ingresos para mejoras del edificio.",
    "tipo": "financiero",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-08-31",
    "titulo": "Desarrollo software MayordomoTracker",
    "descripcion": "Desarrolló app para seguimiento automatizado de tareas del mayordomo con alertas por correo. Mejora eficiencia sin costo.",
    "tipo": "mejora",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-09-03",
    "titulo": "Instalación repuestos ascensor importados",
    "descripcion": "Coordinó instalación de repuestos importados durante mantención programada (sin costo extra). Ascensor operativo.",
    "tipo": "reparacion",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-09-09",
    "titulo": "Cámaras en ascensores con números de piso",
    "descripcion": "Implementó identificación de piso en cámaras de ascensor para identificar responsables de incidentes y vandalismo.",
    "tipo": "seguridad",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-09-25",
    "titulo": "Cambio personal de aseo",
    "descripcion": "Gestionó salida de mayordomo ineficiente y contrató nuevo equipo. Estacionamientos recuperaron limpieza 'espejo'.",
    "tipo": "contratacion",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-10-03",
    "titulo": "Limpieza completa ductos de basura",
    "descripcion": "Coordinó primera limpieza histórica de ductos de basura (piso 10 al 2) para eliminar olores y plagas.",
    "tipo": "mejora",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-10-05",
    "titulo": "Proyecto COPEC Voltex (Cargadores Gratis)",
    "descripcion": "Consiguió instalación GRATIS de cargadores eléctricos (valor $8M c/u) + electricidad pagada por COPEC. Valor agregado masivo.",
    "tipo": "mejora",
    "impacto": "critico",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-10-20",
    "titulo": "Mejora iluminación LED estacionamientos",
    "descripcion": "Cambio completo a LED en estacionamientos. Mejora drástica en visibilidad y seguridad, con ahorro energético.",
    "tipo": "mejora",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-10-23",
    "titulo": "Demanda en JPL contra otras torres",
    "descripcion": "Presentó demanda formal en Juzgado de Policía Local para detener cobros fraudulentos y exigir facturación independiente.",
    "tipo": "legal",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-10-27",
    "titulo": "Importación controladora ascensor China",
    "descripcion": "Importó controladora original Kone por $400k (vs $2.1M OTIS). Compró 2 unidades. Ahorro confirmado $3.7M.",
    "tipo": "reparacion",
    "impacto": "critico",
    "status": "Ahorro"
  },
  {
    "fecha": "2025-11-06",
    "titulo": "Segunda demanda por robo de agua",
    "descripcion": "Presentó demanda por prorrateo excesivo de agua. Busca recuperar cobros indebidos a residentes.",
    "tipo": "legal",
    "impacto": "critico",
    "status": "En Proceso"
  },
  {
    "fecha": "2025-11-07",
    "titulo": "Cambio de 20 remarcadores de agua",
    "descripcion": "Gestionó con Aguas Andinas cambio gratuito de 20 remarcadores defectuosos que inflaban cuentas.",
    "tipo": "financiero",
    "impacto": "alto",
    "status": "Completado"
  },
  {
    "fecha": "2025-11-07",
    "titulo": "Reparación luces escalera emergencia",
    "descripcion": "Logró reparación total de luces de emergencia en escaleras, vital tras incidente de incendio piso 12.",
    "tipo": "seguridad",
    "impacto": "critico",
    "status": "Completado"
  },
  {
    "fecha": "2025-11-12",
    "titulo": "Instalación controladora importada",
    "descripcion": "OTIS instaló controladora importada. Ascensor operativo con repuesto original a fracción del costo.",
    "tipo": "reparacion",
    "impacto": "critico",
    "status": "Completado"
  }
];

const savingsData = [
  { concepto: "Cargadores eléctricos COPEC Voltex GRATIS", monto: 8000000, icon: Zap },
  { concepto: "Repuestos Ascensor (Importación Directa)", monto: 8124000, icon: ArrowUpRight },
  { concepto: "Deuda Contribuciones Oficina 6 Evitada", monto: 8929891, icon: ShieldCheck },
  { concepto: "Cobro Administración Exteriores Evitado (Anual)", monto: 3600000, icon: Lock },
  { concepto: "Recuperación Deuda Electricidad Otras Torres", monto: 13000000, icon: Zap },
  { concepto: "Ahorro Potencial Agua (Anual)", monto: 15720000, icon: Droplets },
  { concepto: "Prevención Daños (Citófono, Puertas, etc)", monto: 5000000, icon: Activity },
  { concepto: "Mejoras Infraestructura (LED, Botón Pánico)", monto: 3450000, icon: TrendingUp },
];

const totalSavings = 73039891;

export default function RevisionPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGestiones = gestionesData.filter(item =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    if (status === "Completado") return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    if (status === "Ahorro") return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    if (status === "En Proceso") return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";
  };

  const getImpactBadge = (impact: string) => {
    if (impact === "critico") return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30">Crítico</Badge>;
    if (impact === "alto") return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 hover:bg-orange-500/30">Alto</Badge>;
    return <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">Medio</Badge>;
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-blue-500/30">

      {/* Top Navigation Bar */}
      <nav className="border-b border-white/10 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white leading-none">Auditoría Presidencial</h1>
                <p className="text-xs text-zinc-400 mt-1">Periodo 2023 - 2025</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2">
                <CheckCircle className="w-3 h-3" />
                Auditoría Finalizada
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 border-b border-white/10 pb-1">
          {[
            { id: 'dashboard', label: 'Dashboard General', icon: Activity },
            { id: 'savings', label: 'Análisis Financiero', icon: DollarSign },
            { id: 'gestiones', label: 'Registro de Gestiones', icon: ListTodo },
            { id: 'report', label: 'Reporte Completo', icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-500' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">Valor Generado</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$73.0M</div>
                  <p className="text-xs text-emerald-500 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Ahorros y Mejoras
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">Gestiones Críticas</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">14</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Incidentes de alto impacto resueltos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">Acciones Legales</CardTitle>
                  <Gavel className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">6</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Demandas y recursos activos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">Infraestructura</CardTitle>
                  <Zap className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">12</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Proyectos de mejora ejecutados
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-blue-500" />
                    Hitos Recientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gestionesData.slice(-5).reverse().map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
                        <div className="mt-1 min-w-[8px] h-2 rounded-full bg-blue-500"></div>
                        <div>
                          <p className="text-sm font-medium text-white">{item.titulo}</p>
                          <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2">{item.descripcion}</p>
                          <span className="text-[10px] text-zinc-500 mt-1 block">{item.fecha}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-emerald-500" />
                    Top Ahorros Generados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savingsData.slice(0, 5).map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-emerald-500/20 text-emerald-400">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-zinc-200">{item.concepto}</span>
                        </div>
                        <span className="text-sm font-bold text-emerald-400">
                          ${(item.monto / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* SAVINGS TAB */}
        {activeTab === 'savings' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-emerald-900/40 to-zinc-900 border border-emerald-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-zinc-400 text-sm uppercase tracking-wider font-semibold mb-2">Total Ahorro Documentado</h2>
              <div className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
                $73.039.891
              </div>
              <p className="text-emerald-400/80 max-w-2xl mx-auto">
                Monto total generado mediante negociaciones, importaciones directas, prevención de multas y optimización de recursos durante el periodo 2023-2025.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savingsData.map((item, idx) => (
                <Card key={idx} className="bg-zinc-900/50 border-white/10 hover:bg-zinc-900/80 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                        Ahorro
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      ${item.monto.toLocaleString('es-CL')}
                    </div>
                    <p className="text-sm text-zinc-400 leading-snug">
                      {item.concepto}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* GESTIONES TAB */}
        {activeTab === 'gestiones' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-white">Registro Detallado</h2>
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Buscar gestión, tipo o descripción..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {filteredGestiones.map((item, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/60 transition-all group">
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium border ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.fecha}
                        </span>
                        {getImpactBadge(item.impacto)}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.titulo}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 shrink-0">
                      <Badge variant="outline" className="border-white/10 text-zinc-400 uppercase text-[10px] tracking-wider">
                        {item.tipo}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REPORT TAB */}
        {activeTab === 'report' && (
          <div className="max-w-4xl mx-auto bg-white text-zinc-900 rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="prose prose-zinc max-w-none">
              <h1 className="text-3xl font-bold text-zinc-900 border-b-4 border-blue-600 pb-4 mb-8">
                Reporte de Auditoría: Presidencia de Joaquín Puig (2023-2025)
              </h1>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6" /> 1. Resumen Ejecutivo
                </h2>
                <p className="text-lg leading-relaxed text-zinc-700">
                  La presidencia de Joaquín Puig se caracteriza por un <strong>estilo de gestión enérgico, autoritario y de
                    involucramiento directo ("hands-on")</strong>. Es altamente eficaz en la identificación y resolución de
                  problemas de infraestructura (iluminación, bombas, estética) y en la generación de ahorros en áreas
                  específicas. Sin embargo, su mandato está marcado por <strong>conflictos interpersonales
                    significativos</strong>, alta rotación de personal y un enfoque de gobernanza rígido.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                  <h3 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" /> Fortalezas
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Capacidad de ejecución inmediata</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Generación masiva de ahorros ($73M+)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Defensa legal agresiva del edificio</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Mejora tangible en infraestructura</li>
                  </ul>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                  <h3 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" /> Debilidades
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Estilo de comunicación confrontacional</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Alta rotación de personal</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Centralización excesiva de tareas</li>
                    <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Conflictos con comité y vecinos</li>
                  </ul>
                </div>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Estilo de Gestión y Dinámica del Comité</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-700">
                  <li><strong>Liderazgo Autoritario:</strong> Joaquín impulsa todas las iniciativas importantes. Frecuentemente da órdenes directas al personal y a los miembros del comité.</li>
                  <li><strong>Inestabilidad del Comité:</strong>
                    <ul className="list-circle pl-5 mt-2 space-y-2 text-zinc-600">
                      <li><strong>Fase 1 (Ene - Jun 2024):</strong> Conflicto con Rene Picasso y Rodrigo Vega. Termina con una "purga".</li>
                      <li><strong>Fase 2 (Jun 2024 - Nov 2025):</strong> Se unen Paula González y Jonathan Nambrard. Paula se convierte en la principal "oposición".</li>
                      <li><strong>Quiebre (Ago - Nov 2025):</strong> Las relaciones con Paula colapsan por la firma del nuevo Reglamento Interno.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">3. Gestión de Personal</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-700">
                  <li><strong>Alta Rotación:</strong> Cambios frecuentes en el rol de Mayordomo (Rodrigo Catrimilla, Fernando Mira, Axel Cruzalegui).</li>
                  <li><strong>Estrategia de Despidos:</strong> Uso de "Necesidades de la Empresa" para evitar litigios.</li>
                  <li><strong>Microgestión:</strong> Monitoreo cercano mediante cámaras y listas de tareas.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Supervisión Financiera</h2>
                <p className="text-zinc-700 mb-4">
                  El punto más fuerte de la gestión. Se documentaron ahorros por más de <strong>$73.000.000</strong> mediante:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">Importación directa de repuestos (Ascensores)</li>
                  <li className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">Negociación de contratos (Cargadores Copec)</li>
                  <li className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">Defensa legal contra cobros indebidos</li>
                  <li className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">Optimización de insumos y reparaciones</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Infraestructura y Mantenimiento</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-700">
                  <li><strong>Mantenimiento Proactivo:</strong> Lucha constante con Otis, reemplazo masivo a LED, reparación de bombas.</li>
                  <li><strong>Seguridad:</strong> Instalación de lectores de huella, botones de pánico y cámaras en ascensores.</li>
                  <li><strong>Estética:</strong> Estandarización de colores de cortinas y pintura de zonas comunes.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Legal y Cumplimiento</h2>
                <ul className="list-disc pl-5 space-y-3 text-zinc-700">
                  <li><strong>Reglamento Interno:</strong> Proyecto mayor para actualizar reglamento (Ley 21.442). Punto de conflicto central.</li>
                  <li><strong>Postura Agresiva:</strong> Amenazas de corte de luz a morosos, multas por negligencia, y demandas a inmobiliaria.</li>
                </ul>
              </section>

              <div className="bg-zinc-100 p-6 rounded-xl text-center mt-12">
                <p className="text-zinc-500 text-sm">Generado por Auditoría IA | Noviembre 2025</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
