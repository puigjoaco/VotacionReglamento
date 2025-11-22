const data = require('./app/auditoria/gestiones.json');
const allText = JSON.stringify(data).toLowerCase();
const negWords = ['criticar', 'ingratitud', 'no valorar', 'nunca hicieron', 'nunca solucionaron', 'rodrigo lorca', 'no hicieron nada'];

console.log('=== FINAL COMPREHENSIVE SCAN ===');
const foundWords = [];
negWords.forEach(word => {
  if (allText.includes(word)) {
    foundWords.push(word);
    console.log('⚠ FOUND: ' + word);
  }
});

if (foundWords.length === 0) {
  console.log('✓ ALL CLEAR - No negative content found');
}

console.log('\n=== FINAL COUNTS ===');
console.log('Total gestiones:', data.gestiones.length);
console.log('metadata.total_gestiones:', data.metadata.total_gestiones);
console.log('resumen_ejecutivo.total_gestiones_lideradas:', data.resumen_ejecutivo.total_gestiones_lideradas);
