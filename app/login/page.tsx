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
import { Building2, Calendar, AlertCircle, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-blue-600 p-3 rounded-full">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Sistema de Comentarios
          </h1>
          <p className="text-gray-600">
            Revisión del Reglamento Interno
          </p>
        </div>

        {/* Deadline Badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">
            <Calendar className="h-4 w-4 mr-2" />
            Fecha límite: 25 de diciembre de 2025
          </Badge>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
            <CardDescription>
              Selecciona tu departamento y tipo, luego ingresa tu RUT como contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Departamento */}
              <div className="space-y-2">
                <Label htmlFor="departamento">Departamento</Label>
                <Select value={departamento} onValueChange={setDepartamento}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTAMENTOS.map(({ piso, deptos }) => (
                      <SelectGroup key={piso}>
                        <SelectLabel>Piso {piso}</SelectLabel>
                        {deptos.map((depto) => (
                          <SelectItem key={depto} value={depto}>
                            Departamento {depto}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tipo */}
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Usuario</Label>
                <Select value={tipo} onValueChange={setTipo}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="propietario">
                      <div className="flex items-center">
                        <span className="font-medium">Propietario</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="residente">
                      <div className="flex items-center">
                        <span className="font-medium">Residente</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* RUT */}
              <div className="space-y-2">
                <Label htmlFor="rut">RUT (Contraseña)</Label>
                <RutInput
                  value={rut}
                  onChange={setRut}
                  onValidChange={setIsRutValid}
                  placeholder="12.345.678-9"
                />
                <p className="text-xs text-muted-foreground">
                  Tu RUT es tu contraseña de acceso
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !isRutValid || !departamento || !tipo}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  'Ingresar al Sistema'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>Sistema exclusivo para propietarios y residentes</p>
          <p>del edificio para enviar comentarios sobre el Reglamento Interno</p>
        </div>
      </div>
    </div>
  );
}
