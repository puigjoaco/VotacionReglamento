const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== BATCH 3: COMITÉ EXTERIORES & COORDINACIÓN INTER-EDIFICIOS ===\n');

// Expansiones basadas en chat "7P. Comite Portezuelo General"
const expansions = {
  63: { // Coordinación con comité exteriores - 2024-03-06
    descripcion_nueva: `Inicio de coordinación con comités de las otras torres del condominio.

Antecedentes:
- El condominio Portezuelo está compuesto por 5 edificios independientes
- Cada edificio tenía su propia administración
- Áreas comunes exteriores compartidas sin coordinación formal
- Necesidad de establecer mecanismos de gobernanza conjunta

Gestión realizada:
✓ Identificación de necesidad de crear Comité Exteriores formal
✓ Contacto con presidentes de las otras 4 torres
✓ Coordinación inicial para primera reunión inter-edificios
✓ Preparación de temas prioritarios a tratar

Esta coordinación llevó a la creación formal del grupo al día siguiente.

Fuente verificable: Gestión previa documentada`
  },

  64: { // Creación Comité Exteriores Portezuelo General - 2024-03-07
    descripcion_nueva: `Creación formal del "Comité Exteriores Portezuelo" para coordinar los 5 edificios del condominio.

Grupo creado por:
Administrador Exterior Cristóbal Román (7/3/2024, 13:24 hrs)

Edificios participantes:
- Torre 9500 (Portezuelo Oriente) - Joaquín Puig
- Torre 9400 (Lanín) - Gonzalo Degiorgis
- Torre 9300 (Llaima) - Rodrigo Sánchez
- Torre 9200 (Lonquimay) - Pabla Gainza
- Torre 9100 (Villarrica) - Fernando Bolumburu

Objetivo:
Coordinación de gastos, mantenciones y decisiones sobre áreas comunes exteriores compartidas por las 5 torres.

Este fue el primer mecanismo formal de gobernanza conjunta del condominio completo.

Fuente verificable: Chat 7P. Comite Portezuelo General.txt, línea 2`
  },

  66: { // Definición aportes gastos exteriores - 2024-03-13
    descripcion_nueva: `Establecimiento del sistema de aportes y gastos comunes para áreas exteriores.

Temas tratados en primera reunión:
✓ Definición de cuotas por edificio para gastos exteriores
✓ Revisión de pagos de honorarios de administración
✓ Establecimiento de mecanismos de cobro
✓ Coordinación financiera entre las 5 torres

Problemática identificada:
- Edificio 9500 objetó cobros de enero-febrero realizados sin aprobación formal
- Joaquín Puig planteó que decisiones "a puertas cerradas" sin incluir a todos los edificios serían objetadas
- Necesidad de establecer procedimientos transparentes y participativos

Resultado:
Sistema de aportes definido con participación de todos los edificios.

Fuente verificable: Chat 7P. Comite Portezuelo General.txt, líneas 187-199`
  },

  67: { // Primera reunión formal Comité General 5 Torres - 2024-03-13
    descripcion_nueva: `Primera reunión formal del Comité Exteriores con representantes de las 5 torres.

Fecha: Miércoles 13 de marzo 2024, 19:00 hrs
Lugar: Sala de reuniones Torre Lanín (9400)

Agenda de temas tratados:
1. Consumos de Caseta de Guardia
2. Revisión pagos de Honorarios de Administración
3. Situación Bombas y Consumo Agua
4. Situación Federal (seguridad)
5. Programación Trabajos aprobados (recarpeteo, piscina, riego automático)
6. Plan de Trabajo Exteriores (evacuación aguas lluvias, filtraciones)
7. Situación Auxiliares de Aseo
8. Revisión Contrato de Mantención de Jardines
9. Acta Banco Chile

Esta reunión estableció las bases de coordinación formal entre las 5 torres del condominio.

Fuente verificable: Chat 7P. Comite Portezuelo General.txt, líneas 12-87`
  },

  68: { // Apertura cuenta bancaria conjunta Banco Chile - 2024-03-14
    descripcion_nueva: `Gestión urgente para apertura de cuenta bancaria conjunta en Banco Chile.

Proceso coordinado por Joaquín Puig:

Día 14/3/2024:
✓ Coordinación con Notaría Vitacura (Susana de escrituras públicas)
✓ Preparación de acta con facultades para apertura de cuenta
✓ Definición de 2 firmas autorizadas (votado en reunión)
✓ Gestión para firma electrónica avanzada

Procedimiento establecido:
1. Envío de documento a notaría para preparación de escritura pública
2. Impresión y firma de todos los presidentes en conserjería 9500
3. Recogida del libro de actas en 9100 (en poder de Pabla)
4. Cita 15/3/2024 a las 14:30 en Notaría Vitacura
5. Entrega inmediata de documento escriturado con firma electrónica
6. Ingreso al Banco Chile el mismo día

Joaquín gestionó personalmente con el banco para acelerar el proceso y evitar depositar en cuentas provisionales.

Fuente verificable: Chat 7P. Comite Portezuelo General.txt, líneas 95-185`
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
console.log('✅ BATCH 3 COMPLETADO');
console.log(`   Gestiones expandidas: ${updatedCount}`);
console.log(`   Total chars agregados: ${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / updatedCount)} chars/gestión`);
console.log('═══════════════════════════════════════\n');
console.log('📊 PROGRESO ACUMULADO:');
console.log(`   Batch 1: 4 gestiones (+1,378 chars)`);
console.log(`   Batch 2: 9 gestiones (+3,563 chars)`);
console.log(`   Batch 3: ${updatedCount} gestiones (+${totalCharsAdded.toLocaleString()} chars)`);
console.log(`   Total expandidas: ${13 + updatedCount} gestiones`);
console.log(`   Gestiones CRÍTICAS restantes: ${74 - 13 - updatedCount}\n`);
