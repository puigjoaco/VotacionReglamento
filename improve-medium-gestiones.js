const fs = require('fs');

const data = require('./app/auditoria/gestiones.json');

console.log('=== MEJORANDO GESTIONES MEDIAS (100-200 chars) ===\n');
console.log('Objetivo: Agregar estructura visual sin modificar contenido\n');

let improved = 0;

data.gestiones.forEach(g => {
  const desc = g.descripcion;
  const len = desc.length;

  // Solo procesar gestiones entre 100-200 caracteres
  if (len < 100 || len > 200) {
    return;
  }

  let newDesc = desc;

  // Si no tiene saltos de línea y tiene al menos 2 oraciones
  if (!desc.includes('\n') && desc.includes('. ')) {
    const sentences = desc.split('. ').map(s => s.trim()).filter(s => s.length > 0);

    if (sentences.length >= 2) {
      // Agregar salto de línea entre oraciones para mejor legibilidad
      newDesc = sentences.map(s => s.endsWith('.') ? s : s + '.').join('\n\n');

      g.descripcion = newDesc;
      improved++;
      console.log(`✓ ID ${g.id} [${g.impacto.toUpperCase()}]: ${g.titulo.substring(0, 45)}...`);
    }
  }
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2));

console.log(`\n✅ Total mejoradas: ${improved} gestiones`);
console.log(`✓ Solo formato visual, contenido 100% preservado\n`);
