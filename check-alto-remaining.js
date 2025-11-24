const data = require('./app/auditoria/gestiones.json');

const altoVague = data.gestiones.filter(g => g.impacto === 'alto' && g.descripcion.length < 100);

console.log(`\n=== ALTO VAGUE GESTIONES: ${altoVague.length} ===\n`);

// Group by length ranges
const ranges = {
  'Very short (<50 chars)': altoVague.filter(g => g.descripcion.length < 50),
  'Short (50-74 chars)': altoVague.filter(g => g.descripcion.length >= 50 && g.descripcion.length < 75),
  'Medium (75-99 chars)': altoVague.filter(g => g.descripcion.length >= 75)
};

Object.keys(ranges).forEach(range => {
  const gestiones = ranges[range];
  console.log(`${range}: ${gestiones.length} gestiones`);
});

console.log('\n=== FIRST 20 ALTO VAGUE GESTIONES ===\n');
altoVague.slice(0, 20).forEach(g => {
  console.log(`ID ${g.id} (${g.descripcion.length} chars) - ${g.fecha}`);
  console.log(`  ${g.titulo}`);
  console.log(`  "${g.descripcion}"`);
  console.log('');
});

console.log(`\n... and ${altoVague.length - 20} more\n`);
