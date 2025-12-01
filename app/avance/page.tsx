'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Building2,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Users,
  ThumbsUp,
  Edit3,
  Home,
  User,
  Loader2
} from 'lucide-react';

interface DepartamentoParticipacion {
  departamento: string;
  piso: number;
  propietario: {
    apellido: string;
    voto: 'aprobacion' | 'modificacion' | null;
    fecha: string | null;
  } | null;
  residente: {
    apellido: string;
    voto: 'aprobacion' | 'modificacion' | null;
    fecha: string | null;
  } | null;
  estado: 'propietario_voto' | 'residente_voto' | 'pendiente';
  votoValido: 'aprobacion' | 'modificacion' | null;
}

interface ParticipacionData {
  departamentos: DepartamentoParticipacion[];
  estadisticas: {
    total: number;
    participaron: number;
    pendientes: number;
    porcentaje: number;
    aprobaciones: number;
    modificaciones: number;
    votoPropietario: number;
    votoResidente: number;
  };
  pisos: number[];
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function DepartamentoCell({ depto }: { depto: DepartamentoParticipacion }) {
  const getBgColor = () => {
    switch (depto.estado) {
      case 'propietario_voto':
        return 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30';
      case 'residente_voto':
        return 'bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-amber-500/30';
      default:
        return 'bg-slate-700/50 text-slate-400 border border-slate-600/50';
    }
  };

  const getVotoIcon = () => {
    if (depto.votoValido === 'aprobacion') {
      return <ThumbsUp className="h-3 w-3" />;
    } else if (depto.votoValido === 'modificacion') {
      return <Edit3 className="h-3 w-3" />;
    }
    return null;
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`
            relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center
            cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10
            ${getBgColor()}
          `}
        >
          <span className="font-bold text-sm sm:text-base">{depto.departamento}</span>
          {depto.estado !== 'pendiente' && (
            <span className="text-xs flex items-center gap-0.5 mt-0.5">
              {getVotoIcon()}
            </span>
          )}
          {depto.estado === 'residente_voto' && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
              <User className="h-2.5 w-2.5 text-white" />
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs bg-slate-800 border-slate-600">
        <div className="space-y-2 p-1">
          <div className="font-bold text-white border-b border-slate-600 pb-1">
            Departamento {depto.departamento}
          </div>

          {/* Propietario */}
          <div className="flex items-start gap-2">
            <Home className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <span className="text-slate-300">Propietario: </span>
              <span className="text-white font-medium">
                {depto.propietario?.apellido || 'N/A'}
              </span>
              {depto.propietario?.voto ? (
                <div className={`text-xs mt-0.5 ${
                  depto.propietario.voto === 'aprobacion' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {depto.propietario.voto === 'aprobacion' ? '✅ Aprueba' : '✏️ Propone cambios'}
                  <span className="text-slate-500 ml-1">
                    {formatDate(depto.propietario.fecha)}
                  </span>
                </div>
              ) : (
                <div className="text-xs text-slate-500 mt-0.5">No ha votado</div>
              )}
            </div>
          </div>

          {/* Residente */}
          {depto.residente && (
            <div className="flex items-start gap-2">
              <User className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="text-slate-300">Residente: </span>
                <span className="text-white font-medium">
                  {depto.residente.apellido}
                </span>
                {depto.residente.voto ? (
                  <div className={`text-xs mt-0.5 ${
                    depto.residente.voto === 'aprobacion' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {depto.residente.voto === 'aprobacion' ? '✅ Aprueba' : '✏️ Propone cambios'}
                    <span className="text-slate-500 ml-1">
                      {formatDate(depto.residente.fecha)}
                    </span>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 mt-0.5">No ha votado</div>
                )}
              </div>
            </div>
          )}

          {/* Estado del voto */}
          <div className="border-t border-slate-600 pt-2 mt-2">
            {depto.estado === 'propietario_voto' && (
              <div className="text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Voto del propietario (definitivo)
              </div>
            )}
            {depto.estado === 'residente_voto' && (
              <div className="text-xs text-amber-400 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Voto del residente (válido hasta que vote el propietario)
              </div>
            )}
            {depto.estado === 'pendiente' && (
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Pendiente de participación
              </div>
            )}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

export default function AvancePage() {
  const { status } = useSession();
  const router = useRouter();
  const [data, setData] = useState<ParticipacionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch('/api/participacion');
        if (response.ok) {
          const participacionData = await response.json();
          setData(participacionData);
        }
      } catch (error) {
        console.error('Error al cargar participación:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status, router]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <Card className="w-80 shadow-xl border-slate-600/30 bg-slate-800/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
              <p className="text-slate-200 font-medium">Cargando participación...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <Card className="w-80 shadow-xl border-slate-600/30 bg-slate-800/80">
          <CardContent className="pt-6">
            <p className="text-red-400 text-center">Error al cargar datos</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Agrupar departamentos por piso
  const deptosPorPiso = data.pisos.map(piso => ({
    piso,
    departamentos: data.departamentos
      .filter(d => d.piso === piso)
      .sort((a, b) => parseInt(a.departamento) - parseInt(b.departamento))
  }));

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-xl sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 rounded-xl shadow-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Avance de Participación</h1>
                  <p className="text-sm text-blue-200">Torre Oriente - Reglamento Interno</p>
                </div>
              </div>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-slate-800/80 border-slate-600/30">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-white">{data.estadisticas.porcentaje}%</div>
                <div className="text-sm text-slate-400">Participación</div>
                <div className="text-xs text-slate-500 mt-1">
                  {data.estadisticas.participaron}/{data.estadisticas.total} deptos
                </div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-900/30 border-emerald-500/30">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-emerald-400">{data.estadisticas.aprobaciones}</div>
                <div className="text-sm text-emerald-300">Aprueban</div>
                <div className="text-xs text-emerald-400/60 mt-1 flex items-center justify-center gap-1">
                  <ThumbsUp className="h-3 w-3" /> Sin cambios
                </div>
              </CardContent>
            </Card>
            <Card className="bg-amber-900/30 border-amber-500/30">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-amber-400">{data.estadisticas.modificaciones}</div>
                <div className="text-sm text-amber-300">Proponen cambios</div>
                <div className="text-xs text-amber-400/60 mt-1 flex items-center justify-center gap-1">
                  <Edit3 className="h-3 w-3" /> Modificaciones
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/50 border-slate-600/30">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-slate-300">{data.estadisticas.pendientes}</div>
                <div className="text-sm text-slate-400">Pendientes</div>
                <div className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" /> Sin votar
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8 bg-slate-800/80 border-slate-600/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-300">Progreso de votación</span>
                <span className="text-sm font-bold text-white">{data.estadisticas.porcentaje}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500 rounded-full"
                  style={{ width: `${data.estadisticas.porcentaje}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>{data.estadisticas.votoPropietario} votos propietario</span>
                <span>{data.estadisticas.votoResidente} votos residente (sin propietario)</span>
              </div>
            </CardContent>
          </Card>

          {/* Leyenda */}
          <Card className="mb-8 bg-slate-800/80 border-slate-600/30">
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg" />
                  <span className="text-slate-300">Propietario votó (definitivo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg" />
                  <span className="text-slate-300">Solo residente votó</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-slate-700/50 border border-slate-600/50" />
                  <span className="text-slate-300">Pendiente</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Edificio Visual */}
          <Card className="bg-slate-800/80 border-slate-600/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-700/50 to-blue-900/30 border-b border-slate-600/30">
              <CardTitle className="text-lg flex items-center text-slate-100">
                <Building2 className="mr-2 h-5 w-5 text-blue-400" />
                Torre Oriente
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1">
                {deptosPorPiso.map(({ piso, departamentos }) => (
                  <div
                    key={piso}
                    className="flex items-center gap-2 py-2 border-b border-slate-700/50 last:border-0"
                  >
                    {/* Número de piso */}
                    <div className="w-16 sm:w-20 flex-shrink-0 text-right pr-2 sm:pr-4">
                      <Badge variant="outline" className="text-slate-400 border-slate-600">
                        Piso {piso}
                      </Badge>
                    </div>

                    {/* Departamentos del piso */}
                    <div className="flex gap-2 sm:gap-3 flex-wrap justify-center flex-1">
                      {departamentos.map(depto => (
                        <DepartamentoCell key={depto.departamento} depto={depto} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lobby */}
              <div className="mt-6 pt-4 border-t-4 border-slate-600">
                <div className="text-center py-4 bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm font-medium">
                    🚪 LOBBY - ENTRADA PRINCIPAL 🚪
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info adicional */}
          <Card className="mt-8 bg-blue-900/20 border-blue-500/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-200">
                  <p className="font-medium mb-1">¿Cómo funciona la votación?</p>
                  <ul className="text-blue-300/80 space-y-1 list-disc list-inside">
                    <li>Si el <strong>propietario</strong> vota, su voto es el definitivo del departamento</li>
                    <li>Si <strong>solo el residente</strong> vota, su voto cuenta mientras el propietario no participe</li>
                    <li>El propietario puede votar en cualquier momento y su voto prevalece</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-blue-200/70">
              Fecha límite para participar: 25 de diciembre de 2025
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
