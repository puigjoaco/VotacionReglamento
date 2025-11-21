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
  Activity
} from 'lucide-react';

export default function RevisionPage() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [searchTerm, setSearchTerm] = useState('');

  const gestionesData = [
    { date: "2024-08-08", cat: "Emergencia", desc: "Crisis Energética: Gestión de petróleo para generadores durante corte masivo", status: "Crítico" },
    { date: "2024-08-08", cat: "Emergencia", desc: "Coordinación de emergencia con edificios vecinos (Lanin, Llaima)", status: "Completado" },
    { date: "2024-06-15", cat: "Seguridad", desc: "Conflicto Federal: Rechazo de barreras de baja calidad ('añadidas')", status: "Crítico" },
    { date: "2024-06-30", cat: "RRHH", desc: "Término de contrato Mayordomo Juan Manzor (No superó prueba)", status: "Completado" },
    { date: "2024-05-01", cat: "RRHH", desc: "Desvinculación Mayordomo Rodrigo Catrimilla (Pérdida de confianza)", status: "Completado" },
    { date: "2024-04-15", cat: "RRHH", desc: "Contratación Fernanda Gaete (Asistente Operaciones/Admin)", status: "Activo" },
    { date: "2024-03-10", cat: "RRHH", desc: "Finiquito Jorge Villaseca y cálculo de haberes", status: "Completado" },
    { date: "2025-10-29", cat: "Mantención", desc: "Compra de ampolletas para focos quemados en todo el edificio", status: "Completado" },
    { date: "2025-10-29", cat: "Seguridad", desc: "Arreglo de chapa eléctrica puerta peatonal (trabada)", status: "Completado" },
    { date: "2025-10-29", cat: "Mantención", desc: "Pintura de cielo dañado en conserjería por filtración", status: "Completado" },
    { date: "2025-10-29", cat: "Jardines", desc: "Poda de árboles perimetrales que tapaban cámaras", status: "Completado" },
    { date: "2024-07-20", cat: "Infraestructura", desc: "Reparación de filtraciones en Sala de Bombas", status: "Completado" },
    { date: "2024-05-10", cat: "Infraestructura", desc: "Mantención y reordenamiento de Gimnasio", status: "Completado" },
    { date: "2024-04-05", cat: "Infraestructura", desc: "Reparación de ascensores (Coordinación con proveedor)", status: "En Proceso" },
    { date: "2023-08-24", cat: "Infraestructura", desc: "Levantamiento de filtraciones post-lluvia (Cristian Armas)", status: "Completado" },
    { date: "2024-07-12", cat: "Ahorro", desc: "Importación directa TAGs desde China (75 CLP vs Mercado)", status: "Ahorro" },
    { date: "2024-07-15", cat: "Tecnología", desc: "Compra de grabador de TAGs para autonomía del edificio", status: "Completado" },
    { date: "2024-06-01", cat: "Legal", desc: "Actualización de poderes bancarios para nuevo comité", status: "Completado" },
    { date: "2023-07-20", cat: "Legal", desc: "Consulta Escrita: Estandarización Aire Acondicionado", status: "Completado" },
    { date: "2024-05-15", cat: "Convivencia", desc: "Multas reiteradas Depto 23 (Gato/Cartones en fachada)", status: "En Proceso" },
    { date: "2024-05-20", cat: "Seguridad", desc: "Fiscalización uso indebido estacionamientos de visita", status: "Activo" },
    { date: "2024-04-10", cat: "Convivencia", desc: "Gestión ruidos molestos y fiestas en horario no permitido", status: "Completado" },
    { date: "2023-06-08", cat: "Administración", desc: "Toma de control nuevo comité (Salida Acodef)", status: "Completado" }
  ];

  const filteredGestiones = gestionesData.filter(item => 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    if (status === "Completado" || status === "Ahorro") return "text-green-400";
    if (status === "Crítico") return "text-red-400";
    if (status === "Activo") return "text-blue-400";
    return "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] p-6 font-sans selection:bg-white selection:text-black">
      
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Auditoría de Gestión</h1>
          <p className="text-zinc-400">Presidencia Joaquín Puig (2023 - 2025)</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-full bg-green-900/30 border border-green-800 text-green-400 text-sm font-medium flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Auditoría Completada
          </div>
          <div className="px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Alta Integridad
          </div>
        </div>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-zinc-400">Total Gestiones</p>
              <h3 className="text-3xl font-bold text-white mt-1">128</h3>
            </div>
            <div className="p-2 bg-zinc-800 rounded-lg text-white">
              <ListTodo className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center text-xs text-green-400">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+15% vs periodo anterior</span>
          </div>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-zinc-400">Ahorro Proyectado</p>
              <h3 className="text-3xl font-bold text-white mt-1">$4.2M</h3>
            </div>
            <div className="p-2 bg-zinc-800 rounded-lg text-white">
              <PiggyBank className="w-5 h-5" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">
            Principalmente en Tags e Insumos
          </div>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-zinc-400">Multas Cursadas</p>
              <h3 className="text-3xl font-bold text-white mt-1">35 UF</h3>
            </div>
            <div className="p-2 bg-zinc-800 rounded-lg text-white">
              <Gavel className="w-5 h-5" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">
            Enfoque "Tolerancia Cero"
          </div>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-zinc-400">Conflictos Resueltos</p>
              <h3 className="text-3xl font-bold text-white mt-1">12</h3>
            </div>
            <div className="p-2 bg-zinc-800 rounded-lg text-white">
              <CheckSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="text-xs text-zinc-400">
            Incl. Crisis Energética Ago '24
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="w-full mb-6 border-b border-zinc-800 overflow-x-auto">
        <div className="flex min-w-max">
          {[
            { id: 'timeline', label: 'Línea de Tiempo', icon: Calendar },
            { id: 'gestiones', label: 'Registro de Gestiones', icon: ListTodo },
            { id: 'conflicts', label: 'Conflictos y Crisis', icon: AlertTriangle },
            { id: 'staff', label: 'Personal y RRHH', icon: Users },
            { id: 'report', label: 'Reporte Completo', icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-white text-white bg-zinc-800/50'
                  : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        
        {/* TIMELINE */}
        {activeTab === 'timeline' && (
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 animate-in fade-in duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white">Hitos Principales</h3>
            <div className="relative border-l border-zinc-800 ml-3 space-y-8">
              {[
                { date: "Agosto 2024", title: "Crisis Energética y Generadores", desc: "Corte masivo de luz. El edificio se quedó sin petróleo. Gestión de emergencia coordinada con otros edificios (Lanin, Llaima) para reabastecimiento y conexión a la red.", tag: "Crítico", color: "red" },
                { date: "Julio 2024", title: "Importación Directa de TAGs", desc: "Investigación y propuesta para importar TAGs desde China a $75 CLP vs precio de mercado. Compra de grabador para autonomía del edificio.", tag: "Ahorro", color: "green" },
                { date: "Junio 2024", title: "Conflicto Barreras de Acceso", desc: "Disputa con Administración Exterior (Cristóbal Román) y Federal por instalación de barreras de menor calidad ('añadidas') y falta de luces LED. Exigencia de cumplimiento de estándares.", tag: null, color: null },
                { date: "Mayo 2024", title: "Reestructuración de Personal", desc: "Despido de Mayordomo Rodrigo Catrimilla por 'ocultamiento de información' y mala actitud. Contratación y posterior despido de Juan Manzor.", tag: null, color: null },
                { date: "Agosto 2023", title: "Proyecto Aire Acondicionado", desc: "Implementación de 'Consulta Escrita' para estandarizar instalación de A/C en fachadas. Aprobación de calculista y definición de estética.", tag: null, color: null },
              ].map((event, idx) => (
                <div key={idx} className="ml-6 relative">
                  <div className="absolute -left-[31px] bg-zinc-900 border border-zinc-700 w-4 h-4 rounded-full mt-1.5"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-zinc-400">{event.date}</time>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mb-2 text-base font-normal text-zinc-400">{event.desc}</p>
                  {event.tag && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-${event.color}-900/30 text-${event.color}-400 border border-${event.color}-800`}>
                      {event.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GESTIONES */}
        {activeTab === 'gestiones' && (
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <h3 className="text-xl font-semibold text-white">Registro Detallado de Gestiones</h3>
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-zinc-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Buscar gestión..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-zinc-900 border border-zinc-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-zinc-400">
                <thead className="text-xs text-zinc-200 uppercase bg-zinc-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-tl-lg">Fecha</th>
                    <th scope="col" className="px-6 py-3">Categoría</th>
                    <th scope="col" className="px-6 py-3">Descripción</th>
                    <th scope="col" className="px-6 py-3 rounded-tr-lg">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredGestiones.map((item, idx) => (
                    <tr key={idx} className="bg-zinc-900 border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{item.date}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded text-xs bg-zinc-800 border border-zinc-700 text-zinc-300">{item.cat}</span></td>
                      <td className="px-6 py-4">{item.desc}</td>
                      <td className={`px-6 py-4 font-medium ${getStatusColor(item.status)}`}>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredGestiones.length === 0 && (
                <div className="text-center py-8 text-zinc-500">No se encontraron resultados</div>
              )}
            </div>
          </div>
        )}

        {/* CONFLICTS */}
        {activeTab === 'conflicts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 border-l-4 border-l-red-500">
              <h3 className="text-lg font-bold text-white mb-2">El "Caso Gato" (Depto 23)</h3>
              <p className="text-zinc-400 mb-4 text-sm">Propietario instaló cartones en la fachada para evitar que su gato escapara. Se negó a retirarlos y acumuló multas.</p>
              <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800 mb-3">
                <p className="text-xs text-zinc-500 uppercase font-semibold mb-1">Acción Tomada</p>
                <p className="text-sm text-zinc-300">Multas reiteradas de 5 UF diarias. Amenaza de acciones legales y corte de servicios. Presión constante al dueño (Mario Cruz).</p>
              </div>
              <span className="px-2 py-1 bg-red-900/20 text-red-400 text-xs rounded border border-red-900">En Proceso Legal</span>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 border-l-4 border-l-yellow-500">
              <h3 className="text-lg font-bold text-white mb-2">Administración Exterior (Cristóbal Román)</h3>
              <p className="text-zinc-400 mb-4 text-sm">Tensión constante por falta de respuesta y gestión deficiente en temas de seguridad (barreras) y mantención.</p>
              <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800 mb-3">
                <p className="text-xs text-zinc-500 uppercase font-semibold mb-1">Acción Tomada</p>
                <p className="text-sm text-zinc-300">Fiscalización rigurosa de cada correo. Exigencia de cumplimiento de contratos (Barreras nuevas, no reparadas). "A río revuelto ganancia de pescadores".</p>
              </div>
              <span className="px-2 py-1 bg-yellow-900/20 text-yellow-400 text-xs rounded border border-yellow-900">Vigilancia Activa</span>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 border-l-4 border-l-blue-500">
              <h3 className="text-lg font-bold text-white mb-2">Uso Indebido Estacionamientos</h3>
              <p className="text-zinc-400 mb-4 text-sm">Residentes y visitas usando estacionamientos de visita como propios o bodegas.</p>
              <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800 mb-3">
                <p className="text-xs text-zinc-500 uppercase font-semibold mb-1">Acción Tomada</p>
                <p className="text-sm text-zinc-300">Implementación de multas automáticas. Cartas de advertencia inmediatas. Control estricto por conserjería.</p>
              </div>
              <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-900">Resuelto / Controlado</span>
            </div>
          </div>
        )}

        {/* STAFF */}
        {activeTab === 'staff' && (
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 animate-in fade-in duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white">Historial de Personal Clave</h3>
            <div className="space-y-4">
              
              <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
                    <UserX className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Rodrigo Catrimilla</h4>
                    <p className="text-sm text-zinc-400">Ex-Mayordomo</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-red-400 block">Desvinculado Abril 2024</span>
                  <span className="text-xs text-zinc-500">Motivo: Ocultamiento de info / Actitud</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400">
                    <UserMinus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Juan Manzor</h4>
                    <p className="text-sm text-zinc-400">Ex-Mayordomo</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-yellow-400 block">Termino Contrato Junio 2024</span>
                  <span className="text-xs text-zinc-500">Motivo: No superó periodo prueba</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Fernanda Gaete</h4>
                    <p className="text-sm text-zinc-400">Administración / Operaciones</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-green-400 block">Activa</span>
                  <span className="text-xs text-zinc-500">Rol clave en gestión actual</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* FULL REPORT */}
        {activeTab === 'report' && (
          <div className="bg-white text-zinc-900 rounded-xl p-8 shadow-xl animate-in fade-in duration-300 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-zinc-800 border-b-2 border-blue-500 pb-4 mb-6">Reporte de Auditoría: Presidencia de Joaquín Puig (2023-2025)</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">1. Resumen Ejecutivo</h2>
              <p className="mb-4 leading-relaxed">
                La presidencia de Joaquín Puig se caracteriza por un <strong>estilo de gestión enérgico, autoritario y de involucramiento directo ("hands-on")</strong>. Es altamente eficaz en la identificación y resolución de problemas de infraestructura (iluminación, bombas, estética) y en la generación de ahorros en áreas específicas. Sin embargo, su mandato está marcado por <strong>conflictos interpersonales significativos</strong>, alta rotación de personal y un enfoque de gobernanza rígido y a menudo agresivo que alienó a miembros del comité y residentes. Se apoya fuertemente en amenazas legales para forzar el cumplimiento y ve la disidencia como ignorancia o ataque personal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">2. Estilo de Gestión y Dinámica del Comité</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Liderazgo Autoritario:</strong> Joaquín impulsa todas las iniciativas importantes. Frecuentemente da órdenes directas al personal y a los miembros del comité. Cuando es desafiado, a menudo recurre a insultos ("ignorante", "miserable") o amenazas legales ("te demandaré personalmente").</li>
                <li><strong>Inestabilidad del Comité:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-700">
                    <li><strong>Fase 1 (Ene - Jun 2024):</strong> Conflicto con <strong>Rene Picasso</strong> y <strong>Rodrigo Vega</strong>. Termina con una "purga" donde Joaquín los elimina del chat/comité.</li>
                    <li><strong>Fase 2 (Jun 2024 - Nov 2025):</strong> Se unen nuevos miembros, <strong>Paula González</strong> y <strong>Jonathan Nambrard</strong>. Jonathan actúa como mediador de apoyo. Paula se convierte en la principal "oposición", cuestionando procedimientos e interpretaciones legales.</li>
                    <li><strong>Quiebre (Ago - Nov 2025):</strong> Las relaciones con Paula colapsan por la firma del nuevo Reglamento Interno. Joaquín amenaza con denunciarla por no firmar un acta con la que no estaba de acuerdo. Para nov de 2025, declara que ella "no puede continuar" en el comité.</li>
                  </ul>
                </li>
                <li><strong>Falta de Delegación:</strong> Joaquín se queja frecuentemente de estar abrumado y tener que hacerlo todo él mismo, sin embargo, le cuesta confiar tareas a otros (ej., problemas de acceso bancario durante la enfermedad de su hermano).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">3. Gestión de Personal</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Alta Rotación:</strong> La administración vio cambios frecuentes en el rol de "Mayordomo":
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-700">
                    <li><strong>Rodrigo Catrimilla/Vega:</strong> Despedido en abril de 2024 debido a un ambiente "tóxico".</li>
                    <li><strong>Fernando Mira:</strong> Contratado, luego despedido en sept de 2025 por mentir sobre horarios de clases, mala asistencia y dormir en el trabajo.</li>
                    <li><strong>Axel Cruzalegui:</strong> El Mayordomo más reciente (a fines de 2025), quien parece más proactivo y alineado con las expectativas de Joaquín.</li>
                  </ul>
                </li>
                <li><strong>Estrategia de Despidos:</strong> Joaquín prefiere usar "Necesidades de la Empresa" para los despidos para evitar batallas legales, incluso cuando hay causa (ej., Yahaira trabajando en departamentos privados), basándose en asesoría legal para minimizar riesgos.</li>
                <li><strong>Microgestión:</strong> El personal es monitoreado de cerca (cámaras, listas de tareas). Joaquín entrevista personalmente al personal auxiliar y negocia sus contratos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">4. Supervisión Financiera y Administrativa</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Control de Costos:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-700">
                    <li><strong>Ahorros:</strong> Buscó activamente alternativas más baratas para basureros (Tecnoplus vs. Medeso), cuestionó cotizaciones altas para limpieza de estacionamientos (1.5M CLP) y negoció reclamos de seguros.</li>
                    <li><strong>Gastos:</strong> Aprobó fondos significativos para reparaciones de ascensores (Otis), mantenimiento de bombas y mejoras estéticas (persianas, pintura).</li>
                  </ul>
                </li>
                <li><strong>Cuello de Botella Bancario:</strong> Un punto de falla crítico ocurrió en feb de 2025 cuando el hermano de Joaquín estaba terminalmente enfermo. Él no estaba disponible para autorizar pagos, y otros miembros del comité (Jonathan/Paula) no habían sido configurados correctamente con las claves bancarias, arriesgando facturas impagas.</li>
                <li><strong>Disputa Inter-Condominio:</strong> Descubrió que "Portezuelo Oriente" estaba pagando la electricidad de la caseta de guardias compartida para el vecino "Mirador de Portezuelo". Inició cobros retroactivos, lo que llevó a una hostilidad significativa ("odio") de los vecinos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">5. Infraestructura y Mantenimiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mantenimiento Proactivo:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-700">
                    <li><strong>Ascensores:</strong> Lucha constante con Otis respecto a la confiabilidad y reemplazos de partes costosas (cables, placas).</li>
                    <li><strong>Iluminación:</strong> Reemplazo masivo de luces fluorescentes por LED; reparación de temporizadores de escaleras.</li>
                    <li><strong>Pisos:</strong> Reemplazo de porcelanato en varios pisos.</li>
                    <li><strong>Seguridad:</strong> Instalación de lectores de huella (huelleros) y botones de pánico.</li>
                  </ul>
                </li>
                <li><strong>Estética:</strong> Fuerte enfoque en la uniformidad (ej., estandarización de colores de cortinas a "plata", pintura de zonas de estacionamiento de discapacitados).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">6. Legal y Cumplimiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Reglamento Interno:</strong> Un proyecto mayor para actualizar el reglamento para ene de 2026 (Ley 21.442). Esto se convirtió en el conflicto central con Paula, quien exigía una fase de consulta comunitaria antes de la notarización. Joaquín forzó el proceso, creyendo que el comité tenía la autoridad para aprobarlo y registrarlo primero.</li>
                <li><strong>Postura Legal Agresiva:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-zinc-700">
                    <li><strong>Residentes:</strong> Amenazó con cortar la electricidad del Depto 63 (6 meses de deuda). Multó a un residente con 3 UTM por un incendio causado por negligencia (cocinar ebrio).</li>
                    <li><strong>EBCO/Alterra:</strong> Respuesta furiosa a la venta de una unidad a <strong>Mauro Dellafiori</strong> (un ex arrendatario problemático). Redactó quejas legales fuertes a la inmobiliaria.</li>
                    <li><strong>Comité:</strong> Amenazó con demandar a Paula González por "abandono de deberes" por no firmar actas de reuniones.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">7. Cronología de Incidentes Clave</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ene 2024:</strong> Joaquín admite aprobar gastos sin revisión debido al estrés.</li>
                <li><strong>Abr 2024:</strong> Despido de Yahaira y Rodrigo (Mayordomo).</li>
                <li><strong>Jun 2024:</strong> Remoción de Rene y Rodrigo Vega del comité.</li>
                <li><strong>Feb 2025:</strong> Crisis sobre acceso bancario durante emergencia familiar de Joaquín.</li>
                <li><strong>Ago 2025:</strong> "Guerra" con Paula sobre la firma del Reglamento Interno.</li>
                <li><strong>Sept 2025:</strong> Despido de Fernando (Mayordomo).</li>
                <li><strong>Oct 2025:</strong> Aprobación para cortar electricidad al Depto 63.</li>
                <li><strong>Nov 2025:</strong> Incidente de incendio en Depto 12; multa de 3 UTM aplicada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-700 border-b border-zinc-200 pb-2 mb-4">8. Conclusión</h2>
              <p className="leading-relaxed">
                Joaquín Puig es un "solucionador" que hace que las cosas sucedan pero quema puentes en el proceso. Su presidencia aseguró que el edificio se mantuviera y que las fugas financieras (como la electricidad de la caseta) se taparan. Sin embargo, su incapacidad para tolerar la disidencia y su estilo de comunicación agresivo crearon un ambiente de gobernanza volátil, llevando a un comité fracturado y posibles responsabilidades legales respecto a la aplicación de los nuevos reglamentos.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}
