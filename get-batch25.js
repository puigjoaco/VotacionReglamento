const data = require('./app/auditoria/gestiones.json');

const alto = data.gestiones.filter(g => g.impacto === 'alto' && g.descripcion.length < 100);

console.log('\n=== NEXT 6 ALTO GESTIONES (Batch 25) ===\n');
alto.slice(66, 72).forEach(g => {
  console.log(`ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
  console.log(`  "${g.descripcion}"`);
  console.log('');
});
