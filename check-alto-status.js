const data = require('./app/auditoria/gestiones.json');

const alto = data.gestiones.filter(g => g.impacto === 'alto');
const vague = alto.filter(g => g.descripcion.length < 100);
const expanded = alto.filter(g => g.descripcion.length >= 100);

console.log('\n=== ALTO GESTIONES STATUS ===\n');
console.log('Total ALTO gestiones:', alto.length);
console.log('Vague (<100 chars):', vague.length);
console.log('Expanded (>=100 chars):', expanded.length);

console.log('\n=== VAGUE ALTO IDS (showing first 20) ===\n');
vague.slice(0, 20).forEach((g, i) => {
  console.log(`${i}. ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
});

if (vague.length > 20) {
  console.log(`\n... and ${vague.length - 20} more`);
}

console.log('\n=== NEXT 6 FOR BATCH 28 (indices 84-89 if available) ===\n');
if (vague.length > 84) {
  vague.slice(84, 90).forEach((g, i) => {
    console.log(`${i}. ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
  });
} else {
  console.log('NO MORE GESTIONES AT INDEX 84+');
  console.log('Total vague:', vague.length);
  console.log('Need index:', 84);
}
