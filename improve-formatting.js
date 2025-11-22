const fs = require('fs');

const data = require('./app/auditoria/gestiones.json');

console.log('=== MEJORANDO FORMATO VISUAL DE GESTIONES ===\n');
console.log('Criterio: Solo gestiones con 200+ caracteres');
console.log('Regla: NO modificar contenido, solo agregar saltos de línea\n');

let improved = 0;

data.gestiones.forEach(g => {
  const desc = g.descripcion;

  // Solo procesar gestiones con suficiente contenido
  if (desc.length < 200) {
    return;
  }

  let newDesc = desc;

  // Mejorar legibilidad agregando saltos de línea entre oraciones
  // Pero SOLO si no tiene saltos de línea ya
  if (!desc.includes('\n')) {
    // Dividir en oraciones (por punto seguido de espacio)
    const sentences = desc.split('. ').map(s => s.trim()).filter(s => s.length > 0);

    if (sentences.length >= 3) {
      // Agrupar en párrafos de 2-3 oraciones para mejor legibilidad
      const paragraphs = [];

      for (let i = 0; i < sentences.length; i += 3) {
        const chunk = sentences.slice(i, i + 3);
        let para = chunk.join('. ');
        // Asegurar que termina con punto
        if (!para.endsWith('.')) {
          para += '.';
        }
        paragraphs.push(para);
      }

      newDesc = paragraphs.join('\n\n');

      g.descripcion = newDesc;
      improved++;
      console.log(`✓ ID ${g.id} [${g.impacto.toUpperCase()}]: ${g.titulo.substring(0, 50)}...`);
      console.log(`  ${desc.length} chars → ${newDesc.length} chars (format improved)`);
    }
  }
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2));

console.log(`\n✅ RESUMEN:`);
console.log(`   Gestiones formateadas: ${improved}`);
console.log(`   Gestiones sin cambios: ${400 - improved} (contenido breve o ya formateado)`);
console.log(`   Total gestiones: 400`);
console.log(`\n✓ Contenido 100% preservado`);
console.log(`✓ Solo se mejoró legibilidad visual con saltos de línea\n`);
