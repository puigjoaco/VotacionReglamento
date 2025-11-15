/**
 * Utilidades para validación y formateo de RUT chileno
 */

/**
 * Limpia un RUT removiendo puntos, guiones y espacios
 * @param rut - RUT a limpiar
 * @returns RUT limpio en formato "12345678K"
 */
export function cleanRut(rut: string): string {
  return rut.replace(/[.\-\s]/g, '').toUpperCase();
}

/**
 * Valida un RUT chileno usando algoritmo módulo 11
 * @param rut - RUT a validar (puede tener puntos y guión)
 * @returns true si el RUT es válido
 */
export function validateRut(rut: string): boolean {
  const rutLimpio = cleanRut(rut);

  // Validar que no esté vacío
  if (!rutLimpio || rutLimpio.length < 2) {
    return false;
  }

  // Separar números del dígito verificador
  const rutNumeros = rutLimpio.slice(0, -1);
  const digitoVerificador = rutLimpio.slice(-1);

  // Validar que la parte numérica contenga solo dígitos
  if (!/^\d+$/.test(rutNumeros)) {
    return false;
  }

  // Validar que el dígito verificador sea válido (0-9 o K)
  if (!/^[0-9K]$/.test(digitoVerificador)) {
    return false;
  }

  // Calcular dígito verificador usando módulo 11
  let suma = 0;
  let multiplicador = 2;

  for (let i = rutNumeros.length - 1; i >= 0; i--) {
    suma += parseInt(rutNumeros[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);
  let digitoCalculado: string;

  if (resto === 11) {
    digitoCalculado = '0';
  } else if (resto === 10) {
    digitoCalculado = 'K';
  } else {
    digitoCalculado = resto.toString();
  }

  return digitoCalculado === digitoVerificador;
}

/**
 * Formatea un RUT con puntos y guión
 * @param rut - RUT a formatear
 * @returns RUT formateado "12.345.678-9" o string vacío si es inválido
 */
export function formatRut(rut: string): string {
  const rutLimpio = cleanRut(rut);

  if (!rutLimpio || rutLimpio.length < 2) {
    return '';
  }

  const rutNumeros = rutLimpio.slice(0, -1);
  const digitoVerificador = rutLimpio.slice(-1);

  // Agregar puntos cada 3 dígitos desde el final
  let rutFormateado = '';
  for (let i = rutNumeros.length - 1, contador = 0; i >= 0; i--, contador++) {
    if (contador > 0 && contador % 3 === 0) {
      rutFormateado = '.' + rutFormateado;
    }
    rutFormateado = rutNumeros[i] + rutFormateado;
  }

  return `${rutFormateado}-${digitoVerificador}`;
}

/**
 * Normaliza texto para comparaciones (lowercase, sin tildes)
 * @param text - Texto a normalizar
 * @returns Texto normalizado
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}
