const data = require('./app/auditoria/gestiones.json');

const medio = data.gestiones.filter(g => g.impacto === 'medio' && g.descripcion.length < 100);

console.log('\n=== MEDIO BATCH 4: NEXT 6 GESTIONES ===\n');
console.log(`Total vague MEDIO remaining: ${medio.length}\n`);

medio.slice(0, 6).forEach(g => {
  console.log(`ID ${g.id}: ${g.titulo} (${g.descripcion.length} chars)`);
  console.log(`  "${g.descripcion}"`);
  console.log(`  Fecha: ${g.fecha}`);
  console.log(`  Tipo: ${g.tipo}`);
  console.log('');
});
