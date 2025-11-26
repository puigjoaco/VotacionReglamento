const data = require('./app/auditoria/gestiones.json');

// Count all gestiones by impact and whether they're vague or expanded
const stats = {
  total: data.gestiones.length,
  critico: { total: 0, vague: 0, expanded: 0 },
  alto: { total: 0, vague: 0, expanded: 0 },
  medio: { total: 0, vague: 0, expanded: 0 },
  bajo: { total: 0, vague: 0, expanded: 0 }
};

data.gestiones.forEach(g => {
  const impact = g.impacto.toLowerCase();
  if (stats[impact]) {
    stats[impact].total++;
    if (g.descripcion.length < 100) {
      stats[impact].vague++;
    } else {
      stats[impact].expanded++;
    }
  }
});

console.log('\n=== COMPLETION STATUS ===\n');
console.log(`Total gestiones: ${stats.total}\n`);

Object.entries(stats).filter(([k]) => k !== 'total').forEach(([impact, data]) => {
  const impactUpper = impact.toUpperCase();
  const completion = data.total > 0 ? ((data.expanded / data.total) * 100).toFixed(1) : 0;
  console.log(`${impactUpper}:`);
  console.log(`  Total: ${data.total}`);
  console.log(`  Expanded: ${data.expanded} (${completion}%)`);
  console.log(`  Vague remaining: ${data.vague}`);
  console.log('');
});

// Check if ALTO phase is complete
if (stats.alto.vague === 0) {
  console.log('✅ ¡FASE ALTO 100% COMPLETADA!');
  console.log(`   ${stats.alto.expanded}/${stats.alto.total} gestiones expandidas\n`);
} else {
  console.log(`⏳ FASE ALTO en progreso: ${stats.alto.expanded}/${stats.alto.total} (${stats.alto.vague} restantes)\n`);
}
