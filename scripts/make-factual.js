const fs = require('fs');
const data = require('../app/auditoria/gestiones.json');

console.log('=== HACIENDO TODO FACTUAL E IMPERSONAL ===\n');

// Limpiar metadata - solo hechos, sin autopromoción
const newMetadata = {
  periodo: "Junio 2023 - Noviembre 2025",
  edificio: "Torre Portezuelo Oriente",
  total_gestiones: 400
};

// Estadísticas simples sin elogios
const newEstadisticas = {
  gestiones_totales: 400,
  certificaciones_obtenidas: 5,
  reparaciones_mayores: 22,
  mejoras_implementadas: 15,
  multas_evitadas_clp: 15000000,
  ahorros_documentados_clp: 21140000
};

// Función para hacer texto impersonal
function makeImpersonal(text) {
  if (!text) return text;

  let clean = text;

  // Remover frases de autopromoción explícita
  const patronesRemover = [
    /Joaquín Puig,? como presidente(,| del comité)?,?\s*/gi,
    /Joaquín,? como presidente,?\s*/gi,
    /bajo la presidencia de Joaquín\s*/gi,
    /durante la presidencia de Joaquín\s*/gi,
    /liderado por Joaquín\s*/gi,
    /coordinado por Joaquín\s*/gi,
    /gestionado por Joaquín\s*/gi,
    /supervisado por Joaquín\s*/gi,
    /Joaquín personalmente\s*/gi,
    /Joaquín contrató\s*/gi,
    /Joaquín compró\s*/gi,
    /Joaquín negoció\s*/gi,
    /Joaquín gestionó\s*/gi,
    /Joaquín coordinó\s*/gi,
    /Joaquín supervisó\s*/gi,
    /Joaquín lideró\s*/gi,
    /Joaquín decidió\s*/gi,
    /Joaquín implementó\s*/gi,
    /Joaquín resolvió\s*/gi,
    /Joaquín detectó\s*/gi,
    /Joaquín identificó\s*/gi,
    /Joaquín entrevistó\s*/gi,
    /Joaquín revisó\s*/gi,
    /Joaquín consolidó\s*/gi,
    /Joaquín envió\s*/gi,
    /Joaquín aprobó\s*/gi,
    /Joaquín firmó\s*/gi,
    /Joaquín pagó\s*/gi,
    /Joaquín evaluó\s*/gi,
    /el comité de Joaquín\s*/gi,
    /comité liderado por Joaquín\s*/gi,
    /gestión de Joaquín\s*/gi,
    /trabajo de Joaquín\s*/gi,
    /esfuerzo de Joaquín\s*/gi,
    /dedicación de Joaquín\s*/gi,
  ];

  for (const patron of patronesRemover) {
    clean = clean.replace(patron, '');
  }

  // Reemplazos para hacer impersonal
  const reemplazos = [
    [/Joaquín Puig/gi, 'el comité'],
    [/Joaquín/gi, 'el comité'],
    [/el presidente del comité/gi, 'el comité'],
    [/el presidente/gi, 'el comité'],
    [/su abogado personal/gi, 'un abogado'],
    [/su departamento personal/gi, 'las instalaciones'],
    [/trabajo voluntario/gi, 'gestión'],
    [/horas de trabajo voluntario/gi, 'horas de gestión'],
    [/sin compensación/gi, ''],
    [/sin remuneración/gi, ''],
    [/voluntariamente/gi, ''],
    [/de forma voluntaria/gi, ''],
    [/dedicación excepcional/gi, ''],
    [/gestión excepcional/gi, ''],
    [/liderazgo comprometido/gi, ''],
    [/compromiso total/gi, ''],
    [/esfuerzo extraordinario/gi, ''],
    [/trabajo incansable/gi, ''],
  ];

  for (const [buscar, reemplazar] of reemplazos) {
    clean = clean.replace(buscar, reemplazar);
  }

  // Limpiar espacios múltiples
  clean = clean.replace(/\s{2,}/g, ' ').trim();
  clean = clean.replace(/^[-•✓]\s*$/gm, '');
  clean = clean.replace(/\n{3,}/g, '\n\n');

  // Capitalizar inicio si quedó en minúscula
  if (clean.length > 0 && /^[a-z]/.test(clean)) {
    clean = clean.charAt(0).toUpperCase() + clean.slice(1);
  }

  return clean;
}

// Procesar gestiones
let modificadas = 0;
const gestiones = data.gestiones.map(g => {
  const descOriginal = g.descripcion;
  const descCompletaOriginal = g.descripcion_completa;

  const descNueva = makeImpersonal(g.descripcion);
  const descCompletaNueva = makeImpersonal(g.descripcion_completa);

  if (descNueva !== descOriginal || descCompletaNueva !== descCompletaOriginal) {
    modificadas++;
  }

  // Quitar campo responsable
  const { responsable, ...rest } = g;

  return {
    ...rest,
    descripcion: descNueva,
    descripcion_completa: descCompletaNueva
  };
});

// Crear nuevo JSON limpio
const newData = {
  metadata: newMetadata,
  estadisticas: newEstadisticas,
  resumen_por_impacto: data.resumen_por_impacto,
  gestiones: gestiones
};

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(newData, null, 2), 'utf-8');

console.log(`Gestiones modificadas: ${modificadas}`);
console.log('Metadata simplificada');
console.log('Campo "responsable" eliminado de todas las gestiones');
console.log('\nArchivo guardado.');
