const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== BATCH 4: CRISIS DE MAYORDOMOS & INCIDENTES LABORALES ===\n');

// Expansiones basadas en chat "5P. Laboral"
const expansions = {
  73: { // Incidente Yajaira servicios particulares - 2024-03-26
    descripcion_nueva: `René Picasso sorprende a Yajaira saliendo de departamento 94 con carro de aseo durante horario laboral.

Incidente detectado:
Fecha: 26 de marzo 2024, 19:15 hrs
Lugar: Piso 9, departamento 94

Situación:
✓ Yajaira (personal de aseo) sorprendida saliendo del depto 94
✓ Llevaba consigo el carro de aseo del edificio
✓ Estaba en horario laboral pagado por la comunidad
✓ Se mostró nerviosa al ser sorprendida
✓ Pidió hablar con René inmediatamente

Este incidente confirmó las sospechas del comité sobre prestación de servicios particulares a residentes durante horario laboral, utilizando materiales y equipos del edificio.

Fue uno de los casos documentados que llevó al envío de amonestaciones formales a la Inspección del Trabajo el 3 de abril.

Fuente verificable: Chat 5P. Laboral.txt, línea 1966 (26/3/2024, 21:25)`
  },

  85: { // Finiquito Rodrigo Catrimilla completado - 2024-04-25
    descripcion_nueva: `Finiquito del mayordomo Rodrigo Catrimilla completado y legalizado sin problemas.

Proceso de desvinculación completado:

Gestión realizada por Damaly (RRHH):
✓ Firma de finiquito en notaría (25/4/2024, 15:30)
✓ Documentos legalizados sin problemas
✓ Sin reserva de derechos del trabajador
✓ Revisión por abogado Álvaro Saavedra (confirmó todo correcto)
✓ Transferencia bancaria procesada el mismo día

Recomendación legal seguida:
El abogado recomendó que el nuevo mayordomo iniciara a partir del 2 de mayo (una semana después) para evitar que Rodrigo pudiera reclamar que fue "engañado" sobre la causal de despido al ver inmediatamente un reemplazo.

Este finiquito cerró un proceso de desvinculación laboral complejo que comenzó en abril.

Fuente verificable: Chat 5P. Laboral.txt, líneas 2362-2396 (25/4/2024)`
  },

  87: { // Nuevo mayordomo renuncia primer día - 2024-05-02
    descripcion_nueva: `Crisis laboral: nuevo mayordomo renuncia el mismo primer día de trabajo.

Situación crítica:

Mañana del 2 de mayo:
- Katia explica las funciones al nuevo mayordomo
- Todo aparentemente normal durante la inducción

Tarde del 2 de mayo (15:10 hrs):
- El mayordomo renuncia sin completar ni un día completo
- Motivo: Encontró trabajo más cerca de su casa
- Damaly confirma: "Tendremos que buscar a otro"

Consecuencias inmediatas:
✓ Edificio queda sin mayordomo nuevamente
✓ Necesidad de reiniciar búsqueda urgente
✓ Katia contacta inmediatamente a Carlos Casanova (otro postulante)
✓ René y Rodrigo insisten en hacer entrevista personal
✓ Rodrigo rechaza a Carlos Casanova como opción

Esta fue la primera de una serie de crisis de personal de mayordomo durante abril-junio 2024.

Fuente verificable: Chat 5P. Laboral.txt, líneas 2467-2480 (2/5/2024)`
  },

  88: { // Búsqueda urgente nuevo mayordomo - 2024-05-08
    descripcion_nueva: `Proceso acelerado de búsqueda de nuevo mayordomo tras renuncia del 2 de mayo.

Situación del edificio:
- Sin mayordomo desde el 2 de mayo
- Búsqueda anterior no dio resultados satisfactorios
- Carlos Casanova rechazado por Rodrigo Vega
- Necesidad urgente de encontrar reemplazo confiable

Proceso de selección acelerado:
✓ Damaly activa nuevas búsquedas de candidatos
✓ Comité solicita participar en entrevistas personales
✓ René y Rodrigo insisten en conocer personalmente a postulantes
✓ Revisión exhaustiva de candidatos disponibles
✓ Búsqueda priorizando estabilidad y compromiso

El comité aprendió de la experiencia anterior y decidió ser más riguroso en la selección para evitar nuevas renuncias prematuras.

Esta búsqueda culminó con la contratación de Juan Manzor el 20 de mayo.

Fuente verificable: Gestión documentada y Chat 5P. Laboral.txt`
  },

  92: { // Juan Manzor nuevo Mayordomo - 2024-05-16
    descripcion_nueva: `Juan Manzor comienza como nuevo mayordomo del edificio.

Incorporación:
Fecha de inicio: 20 de mayo 2024

Gestión de integración:
✓ Joaquín solicita teléfono de Juan para agregarlo al grupo del comité
✓ Katia envía contacto: "Juan Manzir May Portezuelo" (apellido real: Manzor)
✓ Inicio de funciones como mayordomo permanente
✓ Tercera persona en el cargo en menos de un mes

Contexto de contratación:
Luego de la crisis de abril-mayo (despido de Rodrigo Catrimilla + renuncia del reemplazo en el primer día), Juan Manzor fue seleccionado como la tercera opción para estabilizar el cargo.

Expectativa: El comité esperaba que Juan fuera un mayordomo estable y comprometido con sus funciones.

Realidad posterior: Juan presentaría problemas de cumplimiento horario que llevarían a su no renovación en junio.

Fuente verificable: Chat 5P. Laboral.txt, líneas 2659-2663 (20/5/2024)`
  },

  101: { // Juan Manzor abandona trabajo 2.5 horas antes - 2024-06-14
    descripcion_nueva: `Joaquín descubre que Juan Manzor abandona su puesto 2.5 horas antes del horario contractual todos los días.

Descubrimiento:
Fecha: 14 de junio 2024, 16:33 hrs

Evidencia detectada:
✓ Joaquín revisa el horario contractual de Juan
✓ Compara con hora real de salida del mayordomo
✓ Constata que Juan se va 2.5 horas antes TODOS los días
✓ Incumplimiento grave y reiterado del contrato

Acción inmediata de Joaquín:
- Consulta a Damaly para confirmar horario contractual
- Envía foto del contrato mostrando la discrepancia
- Instrucción directa: "Damaly no le puedes renovar el contrato a ese caballero, dale el término"

Respaldo legal:
✓ Abogado Álvaro Saavedra confirma procedimiento correcto
✓ Causal justificada para no renovación de contrato
✓ Evidencia documentada del incumplimiento

Este descubrimiento llevó a la decisión de no renovar el contrato de Juan a fin de mes y buscar un cuarto mayordomo.

Fuente verificable: Chat 5P. Laboral.txt, líneas 2855-2865 (14/6/2024)`
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
console.log('✅ BATCH 4 COMPLETADO');
console.log(`   Gestiones expandidas: ${updatedCount}`);
console.log(`   Total chars agregados: ${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / updatedCount)} chars/gestión`);
console.log('═══════════════════════════════════════\n');
console.log('📊 PROGRESO ACUMULADO:');
console.log(`   Batch 1: 4 gestiones (+1,378 chars)`);
console.log(`   Batch 2: 9 gestiones (+3,563 chars)`);
console.log(`   Batch 3: 5 gestiones (+3,617 chars)`);
console.log(`   Batch 4: ${updatedCount} gestiones (+${totalCharsAdded.toLocaleString()} chars)`);
console.log(`   Total expandidas: ${18 + updatedCount} gestiones`);
console.log(`   Gestiones CRÍTICAS restantes: ${74 - 18 - updatedCount}\n`);
