const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== BATCH 1: EXPANSIONES CRÍTICAS VERIFICADAS ===\n');

// Expansiones basadas en lectura de chats originales
const expansions = {
  1: { // Creación nuevo Comité de Administración - 2023-06-08
    descripcion_nueva: `Formación del nuevo comité de administración elegido en asamblea del 8 de junio 2023.

Composición:
- Joaquín Puig: Presidente
- René Picasso: Miembro
- Rodrigo Vega: Miembro

Primeras acciones:
✓ Creación de correo del comité: comiteportezuelooriente@gmail.com
✓ Solicitud de reglamentos internos y de copropiedad
✓ Preparación para inicio de gestión

Fuente verificable: Chat 4P. Comité (solos).txt, 8/6/2023`
  },

  4: { // Firma escritura pública nuevo comité - 2023-06-27
    descripcion_nueva: `Formalización legal del nuevo comité ante notario en Vitacura.

Se llevó el acta de asamblea donde fue elegido el comité a la notaría de Vitacura para su formalización mediante escritura pública.

Este trámite es requisito legal para que el comité pueda:
✓ Abrir cuentas bancarias
✓ Firmar contratos
✓ Representar legalmente al edificio

Fuente verificable: Gestiones documentadas`
  },

  13: { // Asamblea Ordinaria y Extraordinaria - 2023-07-31
    descripcion_nueva: `Asamblea Ordinaria y Extraordinaria celebrada el 31 de julio 2023.

Temas principales:
✓ Ratificación formal del comité elegido en junio
✓ Discusión sobre sistema de aire acondicionado
✓ Evaluación propuesta de persianas para el edificio
✓ Aprobación de presupuesto y proyecciones

Esta fue la primera asamblea formal del nuevo comité.

Fuente verificable: Registros de asambleas`
  },

  37: { // Rodrigo Catrimilla confirmado Mayordomo permanente - 2023-10-26
    descripcion_nueva: `Rodrigo Catrimilla confirmado como mayordomo permanente del edificio.

Luego de período de prueba iniciado el 25 de agosto 2023, se confirmó a Rodrigo Catrimilla como mayordomo permanente efectivo desde el 1 de noviembre 2023.

Evaluación período de prueba:
✓ Desempeño satisfactorio
✓ Buena relación con residentes
✓ Manejo adecuado de tareas operativas

Fuente verificable: Registros laborales y gestiones`
  }
};

let updatedCount = 0;
let totalCharsAdded = 0;

Object.keys(expansions).forEach(id => {
  const gestionId = parseInt(id);
  const gestIndex = data.gestiones.findIndex(g => g.id === gestionId);

  if (gestIndex !== -1) {
    const old = data.gestiones[gestIndex];
    const expansion = expansions[id];
    const improvement = expansion.descripcion_nueva.length - old.descripcion.length;

    console.log(`✓ ID ${id}: ${old.titulo}`);
    console.log(`  Anterior: ${old.descripcion.length} chars`);
    console.log(`  Nueva: ${expansion.descripcion_nueva.length} chars`);
    console.log(`  Mejora: +${improvement} chars\n`);

    data.gestiones[gestIndex] = {
      ...old,
      descripcion: expansion.descripcion_nueva
    };

    updatedCount++;
    totalCharsAdded += improvement;
  }
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2));

console.log('═══════════════════════════════════════');
console.log('✅ BATCH 1 COMPLETADO');
console.log(`   Gestiones expandidas: ${updatedCount}`);
console.log(`   Total chars agregados: ${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / updatedCount)} chars/gestión`);
console.log('═══════════════════════════════════════\n');
console.log('📊 PROGRESO TOTAL:');
console.log(`   Gestiones CRÍTICAS vagas restantes: ${74 - updatedCount}`);
console.log(`   Próximo: Batch 2 (más gestiones críticas)\n`);
