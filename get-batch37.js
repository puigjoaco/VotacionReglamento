const data = require('./app/auditoria/gestiones.json');

const alto = data.gestiones.filter(g => g.impacto === 'alto' && g.descripcion.length < 100);

console.log('\n=== NEXT 6 ALTO GESTIONES (Batch 37) ===\n');
console.log(`Total vague ALTO remaining: ${alto.length}\n`);
alto.slice(0, 6).forEach(g => {
  console.log(`ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
  console.log(`  "${g.descripcion}"`);
  console.log('');
});
