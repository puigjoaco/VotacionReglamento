const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== CORRECCIONES FINALES ESPECÍFICAS ===\n');

data.gestiones = data.gestiones.map(g => {
  let changed = false;

  // ID 123: transición ordenada: relevo noviembre 2024
  if (g.id === 123) {
    const before = g.descripcion_completa;
    g.descripcion = (g.descripcion || '').replace(
      /transición ordenada: relevo noviembre 2024/gi,
      'gestión ordenada con procedimientos documentados'
    );
    g.descripcion_completa = (g.descripcion_completa || '').replace(
      /transición ordenada: relevo noviembre 2024/gi,
      'gestión ordenada con procedimientos documentados'
    );
    if (before !== g.descripcion_completa) changed = true;
  }

  // ID 134: transición: noviembre 2024
  if (g.id === 134) {
    const before = g.descripcion_completa;
    g.descripcion = (g.descripcion || '').replace(
      /- transición: noviembre 2024/gi,
      '- implementación: a partir de la fecha'
    );
    g.descripcion_completa = (g.descripcion_completa || '').replace(
      /- transición: noviembre 2024/gi,
      '- implementación: a partir de la fecha'
    );
    if (before !== g.descripcion_completa) changed = true;
  }

  // ID 148: ya no es presidente (renunció julio 2024) - ERROR GRAVE
  if (g.id === 148) {
    const before = g.descripcion_completa;
    g.descripcion = (g.descripcion || '').replace(
      /✓ Joaquín ya no es presidente \(renunció julio 2024\)/gi,
      '✓ Joaquín continúa como presidente activo'
    );
    g.descripcion_completa = (g.descripcion_completa || '').replace(
      /✓ Joaquín ya no es presidente \(renunció julio 2024\)/gi,
      '✓ Joaquín continúa como presidente activo'
    );
    if (before !== g.descripcion_completa) changed = true;
  }

  // ID 166: ya no es presidente desde julio 2024 - ERROR GRAVE
  if (g.id === 166) {
    const before = g.descripcion_completa;
    g.descripcion = (g.descripcion || '').replace(
      /✓ Ya no es presidente desde julio 2024/gi,
      '✓ Joaquín continúa como presidente activo'
    );
    g.descripcion_completa = (g.descripcion_completa || '').replace(
      /✓ Ya no es presidente desde julio 2024/gi,
      '✓ Joaquín continúa como presidente activo'
    );
    if (before !== g.descripcion_completa) changed = true;
  }

  if (changed) console.log('Corregida ID ' + g.id);
  return g;
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('\nGuardado.');
