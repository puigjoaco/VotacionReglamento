const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

// Función para crear un resumen estructurado y limpio
function createCleanSummary(descripcion, titulo) {
  // Limpiar emojis y caracteres especiales
  let clean = descripcion
    .replace(/[📅📋⚠️✅⚙️🎯💡💎💰]/g, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '')
    .replace(/\n{3,}/g, '\n\n');

  // Extraer secciones clave
  const sections = {
    contexto: '',
    accion: '',
    resultado: '',
    beneficio: '',
    inversion: ''
  };

  const lines = clean.split('\n').filter(l => l.trim());

  let currentSection = '';
  for (const line of lines) {
    const trimmed = line.trim();
    const lower = trimmed.toLowerCase();

    // Detectar secciones
    if (lower.includes('contexto') || lower.includes('fecha:')) {
      currentSection = 'contexto';
      continue;
    } else if (lower.includes('desafío') || lower.includes('problema')) {
      currentSection = 'contexto';
      continue;
    } else if (lower.includes('solución') || lower.includes('accion') || lower.includes('proceso') || lower.includes('gestión')) {
      currentSection = 'accion';
      continue;
    } else if (lower.includes('resultado') || lower.includes('logro')) {
      currentSection = 'resultado';
      continue;
    } else if (lower.includes('beneficio') || lower.includes('ahorro')) {
      currentSection = 'beneficio';
      continue;
    } else if (lower.includes('inversión') || lower.includes('costo')) {
      currentSection = 'inversion';
      continue;
    }

    // Agregar contenido a la sección actual
    if (currentSection && trimmed.length > 10) {
      if (!sections[currentSection]) {
        sections[currentSection] = trimmed;
      } else if (sections[currentSection].length < 300) {
        sections[currentSection] += ' ' + trimmed;
      }
    }
  }

  // Extraer monto de inversión si existe
  const montoMatch = clean.match(/\$[\d.,]+(?:\s*(?:CLP|pesos|mil|millones|M|K))?/i);
  if (montoMatch) {
    sections.inversion = montoMatch[0];
  }

  // Construir resumen limpio y estructurado
  let summary = '';

  // Contexto breve (máx 150 chars)
  if (sections.contexto) {
    const contexto = sections.contexto.substring(0, 150);
    summary += contexto + (sections.contexto.length > 150 ? '...' : '') + '\n\n';
  }

  // Acción principal
  if (sections.accion) {
    summary += '✓ ' + sections.accion.substring(0, 200) + '\n\n';
  }

  // Resultado/Beneficio
  if (sections.resultado || sections.beneficio) {
    const beneficio = sections.resultado || sections.beneficio;
    summary += '→ ' + beneficio.substring(0, 200);
  }

  // Si el resumen quedó muy corto, usar descripción simplificada
  if (summary.length < 100) {
    // Simplificar la descripción original
    summary = clean
      .split('\n')
      .filter(l => l.trim().length > 20)
      .slice(0, 5)
      .join('\n')
      .substring(0, 500);
  }

  return summary.trim();
}

// Función para crear versión ultra-resumida
function createUltraShortSummary(descripcion, titulo) {
  // Extraer solo lo esencial en máximo 3 líneas
  const clean = descripcion
    .replace(/[📅📋⚠️✅⚙️🎯💡💎💰]/g, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '');

  const lines = clean.split('\n').filter(l => l.trim().length > 20);

  // Buscar líneas con información clave
  let qué = '';
  let resultado = '';
  let monto = '';

  for (const line of lines) {
    const trimmed = line.trim();
    const lower = trimmed.toLowerCase();

    // Buscar el "qué se hizo"
    if (!qué && (lower.includes('se ') || lower.includes('joaquín') || lower.includes('realizó') || lower.includes('gestionó') || lower.includes('coordinó'))) {
      qué = trimmed.substring(0, 150);
    }

    // Buscar resultado
    if (!resultado && (lower.includes('resultado') || lower.includes('logrando') || lower.includes('consiguió') || lower.includes('exitosa'))) {
      resultado = trimmed.substring(0, 150);
    }

    // Buscar monto
    if (!monto) {
      const match = trimmed.match(/\$[\d.,]+(?:\s*(?:CLP|M|K))?/);
      if (match) monto = match[0];
    }
  }

  // Construir resumen de 3 líneas máximo
  let summary = '';

  if (qué) {
    summary = qué;
  } else {
    // Usar primera línea significativa
    summary = lines[0]?.substring(0, 150) || titulo;
  }

  if (resultado && resultado !== qué) {
    summary += '\n\n→ ' + resultado;
  }

  if (monto) {
    summary += '\n\n💰 Inversión: ' + monto;
  }

  return summary.trim() || titulo;
}

console.log('🔄 Creando resúmenes limpios para todas las gestiones...\n');

let processedCount = 0;
let totalOriginal = 0;
let totalNew = 0;

data.gestiones = data.gestiones.map((g, index) => {
  const originalLength = g.descripcion.length;
  totalOriginal += originalLength;

  // Crear versión resumida
  const newDescripcion = createUltraShortSummary(g.descripcion, g.titulo);
  totalNew += newDescripcion.length;

  processedCount++;

  if (processedCount <= 5) {
    console.log(`ID ${g.id}: ${g.titulo}`);
    console.log(`  Original: ${originalLength} chars → Nuevo: ${newDescripcion.length} chars`);
    console.log(`  Preview: ${newDescripcion.substring(0, 100)}...`);
    console.log('');
  }

  return {
    ...g,
    descripcion_completa: g.descripcion, // Guardar original
    descripcion: newDescripcion // Usar resumen
  };
});

// Guardar
fs.writeFileSync(
  './app/auditoria/gestiones.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

const reduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

console.log('✅ Resúmenes creados!');
console.log(`📊 Gestiones procesadas: ${processedCount}`);
console.log(`📉 Reducción total: ${reduction}%`);
console.log(`   Original: ${(totalOriginal / 1000000).toFixed(2)}MB → Nuevo: ${(totalNew / 1000000).toFixed(2)}MB`);
console.log('💾 Archivo guardado con campo descripcion_completa preservado');
