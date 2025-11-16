'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RutInput } from '@/components/RutInput';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Building2, Calendar, AlertCircle, Loader2, Home, User, KeyRound, Shield } from 'lucide-react';

// Generar lista de departamentos: Pisos 2-18, 4 departamentos por piso
const generarDepartamentos = () => {
  const departamentos: { piso: number; deptos: string[] }[] = [];

  for (let piso = 2; piso <= 18; piso++) {
    const deptos: string[] = [];
    for (let unidad = 1; unidad <= 4; unidad++) {
      deptos.push(`${piso}${unidad}`);
    }
    departamentos.push({ piso, deptos });
  }

  return departamentos;
};

const DEPARTAMENTOS = generarDepartamentos();

export default function LoginPage() {
  const router = useRouter();
  const [departamento, setDepartamento] = useState('');
  const [tipo, setTipo] = useState('');
  const [rut, setRut] = useState('');
  const [isRutValid, setIsRutValid] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!departamento) {
      setError('Por favor selecciona tu departamento');
      return;
    }

    if (!tipo) {
      setError('Por favor selecciona tu tipo (propietario o residente)');
      return;
    }

    if (!isRutValid) {
      setError('Por favor ingresa un RUT válido');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        departamento,
        tipo,
        rut,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Por favor intenta nuevamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAgMHYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-4 rounded-2xl shadow-2xl shadow-blue-500/30">
              <Building2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Sistema de Comentarios
            </h1>
            <p className="text-blue-200/80 mt-2 text-lg">
              Revisión del Reglamento Interno
            </p>
          </div>
        </div>

        {/* Deadline Badge */}
        <div className="flex justify-center">
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Fecha límite: 25 de diciembre de 2025
          </Badge>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-white/10 bg-white/95 backdrop-blur-xl">
          <CardHeader className="space-y-2 pb-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-2xl font-bold text-gray-900">Iniciar Sesión</CardTitle>
            </div>
            <CardDescription className="text-base text-gray-600">
              Ingresa tus credenciales para acceder al sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Departamento */}
              <div className="space-y-2">
                <Label htmlFor="departamento" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Home className="h-4 w-4 text-blue-600" />
                  Departamento
                </Label>
                <Select value={departamento} onValueChange={setDepartamento}>
                  <SelectTrigger className="w-full h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Selecciona tu departamento" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {DEPARTAMENTOS.map(({ piso, deptos }) => (
                      <SelectGroup key={piso}>
                        <SelectLabel className="text-xs font-bold text-blue-600 bg-blue-50 py-2 px-2 -mx-1">
                          Piso {piso}
                        </SelectLabel>
                        {deptos.map((depto) => (
                          <SelectItem key={depto} value={depto} className="text-base py-2">
                            <span className="font-medium">Departamento {depto}</span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tipo */}
              <div className="space-y-2">
                <Label htmlFor="tipo" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  Tipo de Usuario
                </Label>
                <Select value={tipo} onValueChange={setTipo}>
                  <SelectTrigger className="w-full h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Selecciona tu tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="propietario" className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="font-medium text-base">Propietario</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="residente" className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="font-medium text-base">Residente</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* RUT */}
              <div className="space-y-2">
                <Label htmlFor="rut" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-blue-600" />
                  RUT (Contraseña)
                </Label>
                <RutInput
                  value={rut}
                  onChange={setRut}
                  onValidChange={setIsRutValid}
                  placeholder="12.345.678-9"
                  className="h-12 text-base"
                />
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
                  Tu RUT es tu contraseña de acceso al sistema
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive" className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="font-medium">{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 transition-all duration-200"
                disabled={isLoading || !isRutValid || !departamento || !tipo}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Verificando credenciales...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-5 w-5" />
                    Ingresar al Sistema
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center space-y-2">
          <p className="text-blue-200/70 text-sm">
            Sistema exclusivo para propietarios y residentes del edificio
          </p>
          <p className="text-blue-200/50 text-xs">
            Participa en la revisión del Reglamento Interno de forma segura y transparente
          </p>
        </div>
      </div>
    </div>
  );
}
