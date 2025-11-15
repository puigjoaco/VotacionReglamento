'use client';

import { useState, ChangeEvent } from 'react';
import { formatRut, validateRut } from '@/lib/utils/rut';
import { Check, X } from 'lucide-react';

interface RutInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidChange?: (isValid: boolean) => void;
  placeholder?: string;
  className?: string;
}

export function RutInput({
  value,
  onChange,
  onValidChange,
  placeholder = '12.345.678-9',
  className = '',
}: RutInputProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    // Validar solo si hay algo escrito
    if (inputValue.trim().length > 0) {
      const valid = validateRut(inputValue);
      setIsValid(valid);
      onValidChange?.(valid);
    } else {
      setIsValid(null);
      onValidChange?.(false);
    }
  };

  const handleBlur = () => {
    // Formatear automáticamente al salir del input si es válido
    if (value.trim().length > 0 && isValid) {
      const formatted = formatRut(value);
      if (formatted) {
        onChange(formatted);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
          isValid === null
            ? 'border-gray-300 focus:ring-blue-500'
            : isValid
              ? 'border-green-500 focus:ring-green-500'
              : 'border-red-500 focus:ring-red-500'
        } ${className}`}
        aria-label="RUT"
        aria-describedby="rut-validation"
      />
      {isValid !== null && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {isValid ? (
            <Check className="h-5 w-5 text-green-500" aria-label="RUT válido" />
          ) : (
            <X className="h-5 w-5 text-red-500" aria-label="RUT inválido" />
          )}
        </div>
      )}
      {isValid === false && (
        <p id="rut-validation" className="mt-1 text-sm text-red-600">
          RUT inválido. Verifica el formato y el dígito verificador.
        </p>
      )}
    </div>
  );
}
