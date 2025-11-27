const data = require('./app/auditoria/gestiones.json');

const alto = data.gestiones.filter(g => g.impacto === 'alto' && g.descripcion.length < 100);

console.log('\n=== FINAL 3 ALTO GESTIONES ===\n');
console.log(`Total vague ALTO remaining: ${alto.length}\n`);

alto.forEach(g => {
  console.log(`ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
  console.log(`  "${g.descripcion}"`);
  console.log(`  Fecha: ${g.fecha}`);
  console.log('');
});
