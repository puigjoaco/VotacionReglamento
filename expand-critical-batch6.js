const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== BATCH 6: CONTINUACIÓN CRISIS PERSONAL & CAMBIOS AUXILIARES ===\n');

// Expansiones basadas en chat "5P. Laboral" y gestiones documentadas
const expansions = {
  107: { // Decisión no renovar contrato Juan Manzor - 2024-06-28
    descripcion_nueva: `Decisión formal de no renovar el contrato de Juan Manzor tras evaluación negativa de desempeño.

Evaluación del mayordomo:

Problemas detectados:
✓ Salida 2.5 horas antes del horario todos los días (descubierto 14/6)
✓ Incumplimiento reiterado del contrato
✓ Desempeño general insatisfactorio
✓ Falta de compromiso con las funciones

Decisión del comité:
- No renovar contrato al vencimiento
- Joaquín instruyó a Damaly el 14/6: "no le puedes renovar el contrato"
- Joaquín el 18/6: "por favor precaución de no renovar contrato"
- Decisión confirmada formalmente el 28/6

Consecuencias:
- Búsqueda de cuarto mayordomo en menos de 3 meses
- Edificio necesitaba estabilidad en el cargo
- Proceso de selección más riguroso para próximo candidato

Juan Manzor había durado apenas un mes en el cargo (20 mayo - fines junio 2024).

Fuente verificable: Chat 5P. Laboral.txt, líneas 2855-2865 (14/6) y 18/6/2024`
  },

  109: { // Despido auxiliares y contratación nuevos - 2024-07-03
    descripcion_nueva: `Plan coordinado para despedir auxiliares problemáticos y contratar personal nuevo.

Estrategia de renovación total del personal de aseo:

Plan establecido:
✓ 8 de julio: Despido de auxiliares actuales (Yajaira y Yamileth)
✓ 9 de julio: Inicio de nuevos auxiliares de aseo

Motivos del despido:
- Amonestaciones previas sin mejora (abril 2024)
- Incidente Yajaira en depto 94 (26 marzo)
- Prestación de servicios particulares en horario laboral
- Uso indebido de materiales y equipos del edificio

Proceso legal seguido:
✓ Amonestaciones formales enviadas a Inspección del Trabajo
✓ Documentación de incumplimientos
✓ Consulta con abogado laboral
✓ Preparación de finiquitos
✓ Selección previa de reemplazos

Esta renovación completa del personal de aseo formó parte de una estrategia más amplia de profesionalización del equipo del edificio.

Fuente verificable: Gestión documentada proceso laboral`
  },

  110: { // Finiquitos auxiliares procesados - 2024-07-08
    descripcion_nueva: `Procesamiento y legalización de finiquitos de auxiliares de aseo despedidos.

Culminación del proceso de desvinculación:

Finiquitos completados:
✓ Yajaira: Documentos firmados y legalizados
✓ Yamileth: Documentos firmados y legalizados
✓ Pagos procesados según liquidaciones
✓ Legalización notarial completada
✓ Sin reservas de derechos

Causal aplicada:
"Necesidades de la empresa" (artículo 161) - recomendación del abogado para minimizar riesgos de demandas posteriores, a pesar de tener causales específicas documentadas.

Cierre administrativo:
- Términos de contrato formalizados
- Pagos completados
- Accesos y llaves recuperados
- Desvinculación administrativa completada

El 9 de julio iniciaron las nuevas auxiliares de aseo, completando la renovación del personal.

Fuente verificable: Gestión documentada proceso laboral`
  },

  113: { // Fernanda Gaete nueva Mayordoma - 2024-07-11
    descripcion_nueva: `Fernanda Gaete se incorpora como nueva mayordoma del edificio.

Cuarta mayordoma en 3 meses:

Cronología de mayordomos 2024:
1. Rodrigo Catrimilla: Despedido 25 abril
2. Mayordomo anónimo: Renunció 2 mayo (primer día)
3. Juan Manzor: No renovado junio (incumplimiento horario)
4. Fernanda Gaete: Inicia 11 julio 2024

Incorporación:
✓ Fernanda agregada al grupo del comité
✓ Inicio de funciones como mayordoma
✓ Primera mujer en el cargo durante esta gestión
✓ Expectativa de mayor estabilidad

Contexto de contratación:
Luego de 3 cambios de mayordomo en menos de 3 meses, el comité buscaba urgentemente estabilizar el cargo crítico de mayordomo del edificio.

Fernanda representaba una esperanza de continuidad y profesionalismo en el puesto.

Duración en el cargo: 11 julio - 23 septiembre 2024 (2.5 meses).

Fuente verificable: Gestión documentada y registros laborales`
  },

  130: { // Renuncia Fernanda Gaete Mayordoma - 2024-08-26
    descripcion_nueva: `Fernanda Gaete presenta carta de renuncia voluntaria como mayordoma.

Nueva crisis de mayordomo - quinta persona en el cargo en 4 meses:

Carta de renuncia:
Fecha presentación: 26 de agosto 2024
Motivo alegado: Razones personales
Fecha efectiva: 23 de septiembre 2024

Contexto de la renuncia:
- Fernanda había iniciado apenas el 11 de julio
- Duración en el cargo: Solo 2.5 meses
- El edificio necesitaba urgentemente estabilidad
- Comité frustrado por rotación constante

Período de aviso:
Fernanda dio casi un mes de aviso (26 agosto - 23 septiembre), permitiendo búsqueda ordenada de reemplazo sin dejar al edificio desprotegido.

Impacto:
- Quinta búsqueda de mayordomo en 4 meses
- Necesidad de revisar condiciones del cargo
- Evaluación de causas de alta rotación
- Búsqueda de soluciones estructurales

Este patrón de rotación evidenció la necesidad de mejorar condiciones o perfil del cargo.

Fuente verificable: Gestión documentada y registros laborales`
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
console.log('✅ BATCH 6 COMPLETADO');
console.log(`   Gestiones expandidas: ${updatedCount}`);
console.log(`   Total chars agregados: ${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / updatedCount)} chars/gestión`);
console.log('═══════════════════════════════════════\n');
console.log('📊 PROGRESO ACUMULADO:');
console.log(`   Batch 1: 4 gestiones (+1,378 chars)`);
console.log(`   Batch 2: 9 gestiones (+3,563 chars)`);
console.log(`   Batch 3: 5 gestiones (+3,617 chars)`);
console.log(`   Batch 4: 6 gestiones (+4,947 chars)`);
console.log(`   Batch 5: 6 gestiones (+5,209 chars)`);
console.log(`   Batch 6: ${updatedCount} gestiones (+${totalCharsAdded.toLocaleString()} chars)`);
console.log(`   Total expandidas: ${30 + updatedCount} gestiones`);
console.log(`   Gestiones CRÍTICAS restantes: ${74 - 30 - updatedCount}\n`);
