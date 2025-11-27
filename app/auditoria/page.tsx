'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Search,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Wrench,
  Users,
  Shield,
  DollarSign,
  Scale,
  AlertTriangle,
  Briefcase,
  Eye,
  MessageSquare,
  Home,
} from 'lucide-react';
import gestionesData from './gestiones.json';

interface Gestion {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  descripcion_completa?: string;
  tipo: string;
  fuente: string;
  impacto: string;
}

// Iconos por tipo
const tipoIconos: Record<string, React.ReactNode> = {
  reparacion: <Wrench className="h-4 w-4" />,
  mejora: <CheckCircle2 className="h-4 w-4" />,
  mantencion: <Wrench className="h-4 w-4" />,
  coordinacion: <Users className="h-4 w-4" />,
  supervision: <Eye className="h-4 w-4" />,
  contratacion: <Briefcase className="h-4 w-4" />,
  comunicacion: <MessageSquare className="h-4 w-4" />,
  gestion_administrativa: <FileText className="h-4 w-4" />,
  seguridad: <Shield className="h-4 w-4" />,
  resolucion_conflictos: <AlertTriangle className="h-4 w-4" />,
  financiero: <DollarSign className="h-4 w-4" />,
  legal: <Scale className="h-4 w-4" />,
  postventa: <Home className="h-4 w-4" />,
};

// Colores por impacto (sutiles)
const impactoColores: Record<string, string> = {
  critico: 'border-l-red-500',
  alto: 'border-l-orange-500',
  medio: 'border-l-yellow-500',
  bajo: 'border-l-blue-500',
};

export default function AuditoriaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [selectedImpacto, setSelectedImpacto] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gestiones = gestionesData.gestiones as Gestion[];
  const metadata = gestionesData.metadata;
  const estadisticas = gestionesData.estadisticas;
  const resumenImpacto = gestionesData.resumen_por_impacto;

  // Filtrar
  const filteredGestiones = useMemo(() => {
    return gestiones.filter((g) => {
      const matchesSearch =
        searchTerm === '' ||
        g.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTipo = !selectedTipo || g.tipo === selectedTipo;
      const matchesImpacto = !selectedImpacto || g.impacto === selectedImpacto;
      return matchesSearch && matchesTipo && matchesImpacto;
    });
  }, [gestiones, searchTerm, selectedTipo, selectedImpacto]);

  // Obtener tipos únicos
  const tiposUnicos = useMemo(() => {
    const tipos = new Map<string, number>();
    gestiones.forEach(g => {
      tipos.set(g.tipo, (tipos.get(g.tipo) || 0) + 1);
    });
    return Array.from(tipos.entries()).sort((a, b) => b[1] - a[1]);
  }, [gestiones]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString('es-CL');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header simple */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Registro de Gestiones
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Torre Portezuelo Oriente • {metadata.periodo}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Métricas clave - compactas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-lg border p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Gestiones</p>
            <p className="text-2xl font-semibold text-slate-800">{formatNumber(metadata.total_gestiones)}</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Certificaciones</p>
            <p className="text-2xl font-semibold text-slate-800">{estadisticas.certificaciones_obtenidas}</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Multas evitadas</p>
            <p className="text-2xl font-semibold text-slate-800">${formatNumber(estadisticas.multas_evitadas_clp / 1000000)}M</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Ahorros</p>
            <p className="text-2xl font-semibold text-slate-800">${formatNumber(estadisticas.ahorros_documentados_clp / 1000000)}M</p>
          </div>
        </div>

        {/* Filtros por impacto */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={selectedImpacto === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedImpacto(null)}
            className="text-xs"
          >
            Todos ({gestiones.length})
          </Button>
          {Object.entries(resumenImpacto).map(([impacto, count]) => (
            <Button
              key={impacto}
              variant={selectedImpacto === impacto ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedImpacto(selectedImpacto === impacto ? null : impacto)}
              className="text-xs capitalize"
            >
              {impacto} ({count})
            </Button>
          ))}
        </div>

        {/* Búsqueda y filtro por tipo */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Buscar por título o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white"
            />
          </div>
          <select
            value={selectedTipo || ''}
            onChange={(e) => setSelectedTipo(e.target.value || null)}
            className="px-3 py-2 border rounded-md bg-white text-sm text-slate-700"
          >
            <option value="">Todos los tipos</option>
            {tiposUnicos.map(([tipo, count]) => (
              <option key={tipo} value={tipo}>
                {tipo.replace('_', ' ')} ({count})
              </option>
            ))}
          </select>
        </div>

        {/* Resultados */}
        <div className="text-xs text-slate-500 mb-3">
          {filteredGestiones.length} de {gestiones.length} gestiones
        </div>

        {/* Lista de gestiones - simple y limpia */}
        <div className="space-y-2">
          {filteredGestiones.map((g) => (
            <div
              key={g.id}
              className={`bg-white rounded-lg border border-l-4 ${impactoColores[g.impacto]} overflow-hidden`}
            >
              <button
                onClick={() => setExpandedId(expandedId === g.id ? null : g.id)}
                className="w-full text-left p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-400">#{g.id}</span>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 capitalize">
                        {g.tipo.replace('_', ' ')}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-slate-800 text-sm leading-tight">
                      {g.titulo}
                    </h3>
                    {!expandedId || expandedId !== g.id ? (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {g.descripcion}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">{formatDate(g.fecha)}</span>
                    {expandedId === g.id ? (
                      <ChevronUp className="h-4 w-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </div>
              </button>

              {expandedId === g.id && (
                <div className="px-4 pb-4 pt-0 border-t bg-slate-50">
                  <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed pt-3">
                    {g.descripcion_completa || g.descripcion}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-3">
                    Fuente: {g.fuente}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredGestiones.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron gestiones.</p>
          </div>
        )}
      </main>

      {/* Footer simple */}
      <footer className="border-t bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-slate-400">
            {metadata.periodo} • {metadata.total_gestiones} gestiones documentadas
          </p>
        </div>
      </footer>
    </div>
  );
}
