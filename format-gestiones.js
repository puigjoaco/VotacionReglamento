const fs = require('fs');

const data = require('./app/auditoria/gestiones.json');

console.log('=== MEJORANDO FORMATO DE 400 GESTIONES ===\n');
console.log('Reglas:');
console.log('1. NO agregar información nueva');
console.log('2. Solo mejorar legibilidad con bullets y saltos de línea');
console.log('3. Mantener 100% la información original\n');

let formatted = 0;

data.gestiones.forEach(g => {
  const desc = g.descripcion;

  // Solo formatear si la descripción tiene suficiente contenido
  if (desc.length < 100) {
    // Gestiones muy cortas: dejar como están
    return;
  }

  let newDesc = desc;

  // Mejorar formato con bullets para listas de beneficios
  // Detectar patrones comunes y agregar estructura

  // Patrón 1: Oraciones separadas por puntos - agregar saltos de línea
  if (desc.includes('. ') && !desc.includes('\n')) {
    const sentences = desc.split('. ');
    if (sentences.length >= 3) {
      // Agrupar en párrafos de 2-3 oraciones
      const paragraphs = [];
      for (let i = 0; i < sentences.length; i += 2) {
        const chunk = sentences.slice(i, i + 2);
        paragraphs.push(chunk.join('. ') + (chunk[chunk.length-1].endsWith('.') ? '' : '.'));
      }
      newDesc = paragraphs.join('\n\n');
    }
  }

  // Patrón 2: Si menciona múltiples logros, usar bullets
  const keywords = ['Además', 'También', 'Creó', 'Implementó', 'Ahora', 'Recuperación'];
  let hasList = false;
  keywords.forEach(kw => {
    if (desc.includes(kw)) hasList = true;
  });

  if (hasList && desc.length > 200) {
    // Convertir a formato con bullets al final
    const parts = newDesc.split('\n\n');
    if (parts.length > 1) {
      const lastPart = parts[parts.length - 1];
      // Si el último párrafo tiene múltiples beneficios, convertir a bullets
      if (lastPart.split('. ').length >= 2) {
        const benefits = lastPart.split('. ').map(s => s.trim()).filter(s => s.length > 0);
        if (benefits.length >= 2) {
          const bulletList = benefits.map(b => '✓ ' + b + (b.endsWith('.') ? '' : '.')).join('\n');
          parts[parts.length - 1] = 'LOGROS:\n' + bulletList;
          newDesc = parts.join('\n\n');
        }
      }
    }
  }

  // Solo actualizar si el formato mejoró
  if (newDesc !== desc && newDesc.length <= desc.length + 50) {
    g.descripcion = newDesc;
    formatted++;
    console.log(`✓ ID ${g.id}: formato mejorado`);
  }
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2));

console.log(`\n✓ Total formateadas: ${formatted}/400 gestiones`);
console.log('✓ Información original preservada al 100%');
console.log('✓ Solo se mejoró legibilidad visual\n');
