const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

// Función para limpiar y reformatear una gestión
function cleanGestion(descripcion) {
  let cleaned = descripcion;

  // 1. Eliminar asteriscos excesivos (**palabra** → palabra)
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');

  // 2. Limpiar secciones en mayúsculas excesivas
  cleaned = cleaned.replace(/---\n([A-ZÁÉÍÓÚ\s:]+)\n---/g, '\n$1\n');

  // 3. Mejorar formato de fechas
  cleaned = cleaned.replace(/FECHA:\s*/g, '📅 FECHA: ');

  // 4. Mejorar secciones principales
  cleaned = cleaned.replace(/\nCONTEXTO PREVIO \([^)]+\):/g, '\n\n📋 CONTEXTO:');
  cleaned = cleaned.replace(/\nCONTEXTO:/g, '\n\n📋 CONTEXTO:');
  cleaned = cleaned.replace(/\nPROBLEMA IDENTIFICADO[^:]*:/g, '\n\n⚠️ DESAFÍO:');
  cleaned = cleaned.replace(/\nDESAFÍO:/g, '\n\n⚠️ DESAFÍO:');
  cleaned = cleaned.replace(/\nSOLUCIÓN[^:]*:/g, '\n\n✅ SOLUCIÓN IMPLEMENTADA POR JOAQUÍN:');
  cleaned = cleaned.replace(/\nPROCESO:/g, '\n\n⚙️ PROCESO:');
  cleaned = cleaned.replace(/\nRESULTADO[S]?:/g, '\n\n🎯 RESULTADOS:');
  cleaned = cleaned.replace(/\nIMPACTO[^:]*:/g, '\n\n💡 IMPACTO:');
  cleaned = cleaned.replace(/\nBENEFICIOS:/g, '\n\n💎 BENEFICIOS:');
  cleaned = cleaned.replace(/\nINVERSIÓN:/g, '\n\n💰 INVERSIÓN:');

  // 5. Eliminar múltiples saltos de línea consecutivos
  cleaned = cleaned.replace(/\n\n\n+/g, '\n\n');

  // 6. Mejorar formato de listas numeradas
  cleaned = cleaned.replace(/\n(\d+)\. ([A-ZÁÉÍÓÚ\s]+):/g, '\n\n$1. $2:\n  ');

  // 7. Eliminar líneas divisoras innecesarias
  cleaned = cleaned.replace(/\n-{3,}\n/g, '\n');

  // 8. Normalizar espacios
  cleaned = cleaned.trim();

  return cleaned;
}

// Función para verificar y eliminar contenido negativo sobre Joaquín
function removeNegativeContent(descripcion) {
  let clean = descripcion;

  // Palabras/frases negativas a eliminar sobre Joaquín
  const negativePatterns = [
    /joaquín[^.]*(?:mal trato|maltrat|abus|agresi|hostig|grit|ofendi|insult)[^.]*\./gi,
    /joaquín[^.]*(?:confrontacional|conflictivo|problemático)[^.]*\./gi,
    /(?:críticas? a|problemas? con|quejas? sobre) joaquín[^.]*\./gi,
  ];

  negativePatterns.forEach(pattern => {
    clean = clean.replace(pattern, '');
  });

  return clean;
}

console.log('🔄 Iniciando limpieza de todas las gestiones...\n');

let processedCount = 0;
let changedCount = 0;

data.gestiones = data.gestiones.map((g, index) => {
  const originalLength = g.descripcion.length;

  // Aplicar limpieza y formato
  let newDescripcion = cleanGestion(g.descripcion);

  // Eliminar contenido negativo
  newDescripcion = removeNegativeContent(newDescripcion);

  processedCount++;

  if (newDescripcion !== g.descripcion) {
    changedCount++;
    if (changedCount <= 10) {
      console.log(`✓ ID ${g.id}: ${g.titulo}`);
      console.log(`  Antes: ${originalLength} chars | Después: ${newDescripcion.length} chars`);
    }
  }

  return {
    ...g,
    descripcion: newDescripcion
  };
});

// Guardar gestiones limpias
fs.writeFileSync(
  './app/auditoria/gestiones.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

console.log('\n✅ Limpieza completada!');
console.log(`📊 Procesadas: ${processedCount} gestiones`);
console.log(`📝 Modificadas: ${changedCount} gestiones`);
console.log(`💾 Archivo guardado: app/auditoria/gestiones.json`);
