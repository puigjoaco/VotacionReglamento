const fs = require('fs');

const data = require('./app/auditoria/gestiones.json');

console.log('=== EXPANDIENDO GESTIONES CON TAREAS COMPLETADAS ===\n');

// Mapeo manual de gestiones vagas a tareas completadas verificables
const expansions = {
  218: { // ALFOMBRA ENTRADA PRINCIPAL
    descripcion_nueva: "Alfombra entrada principal doblada con riesgo de caída para residentes.\n\nSe reposicionó y fijó correctamente la alfombra de entrada principal para eliminar peligro de tropiezos."
  },
  317: { // MULTA POR MAL USO ESPACIO COMUN - BICICLETA EN SHAFT CALEFON
    descripcion_nueva: "Detección de bicicleta estacionada indebidamente en shaft de calefón (espacio común restringido).\n\nSe identificó al propietario y se aplicó multa según reglamento interno."
  },
  330: { // MANTENCION SALA DE BOMBAS - COTIZACIONES PENDIENTES
    descripcion_nueva: "Mantención efectuada en sala de bombas.\n\nMantenedor indicó que hay cotizaciones de trabajos adicionales pendientes de aprobación por la administración."
  },
  346: { // ASEO GENERAL SECTOR PISCINA
    descripcion_nueva: "Limpieza completa del sector de la piscina, incluyendo áreas circundantes.\n\nTrabajo realizado el 17 de septiembre 2025, completado el 30 de septiembre 2025."
  },
  347: { // AJUSTE RELOJ CONTROL - DESACTIVAR RECONOCIMIENTO FACIAL
    descripcion_nueva: "Ajuste de configuración del reloj control de asistencia.\n\nSe desactivó/reconfiguró la función de reconocimiento facial que estaba activa incorrectamente."
  },
  348: { // CAMBIO 18 PORCELANATOS PISOS 7 Y 9
    descripcion_nueva: "Reemplazo de 18 porcelanatos deteriorados distribuidos entre pisos 7 y 9.\n\nTrabajo realizado por maestro Pablo Martínez. Completado el 1 de octubre 2025."
  },
  350: { // MANTENCION PISCINA - COTIZACION CUARZO
    descripcion_nueva: "Mantención completa de la piscina.\n\nEl mantenedor entregó cotización por cambio de 250 kg de cuarzo para filtro. Se buscó cotización adicional para comparar precios."
  },
  352: { // CONTRATACION EMPRESA LIMPIEZA ALFOMBRAS LOUNGE
    descripcion_nueva: "Búsqueda, cotización y contratación de empresa especializada en limpieza profunda de alfombras para el lounge del edificio.\n\nCompletado el 3 de octubre 2025."
  },
  359: { // GESTION CON MUNICIPALIDAD POR RETIRO RECICLADO
    descripcion_nueva: "Llamada a la municipalidad por problemas con el retiro del reciclado.\n\nSe comunicaron con la empresa encargada del servicio."
  },
  391: { // CAMBIO LLAVE DE AGUA 3/4" JARDIN
    descripcion_nueva: "Reemplazo de llave de agua de 3/4 pulgadas ubicada en el jardín frente a la entrada principal.\n\nLlave anterior presentaba fugas y desgaste. Completado el 22 de octubre 2025."
  },
  395: { // GORRO GALVANIZADO TUBERIAS TECHUMBRE
    descripcion_nueva: "Compra e instalación de 8 gorros galvanizados para proteger tuberías en la techumbre.\n\nObjetivo: evitar que aves ingresen y obstruyan las tuberías con nidos o desechos."
  },
  396: { // REVISION BALIZAS TECHUMBRE
    descripcion_nueva: "Inspección completa del estado de las balizas de señalización ubicadas en la techumbre del edificio.\n\nSe confirmó buen estado y funcionamiento."
  }
};

let expandedCount = 0;

console.log('Gestiones a expandir con datos verificables:\n');

Object.keys(expansions).forEach(id => {
  const gestionId = parseInt(id);
  const gestIndex = data.gestiones.findIndex(g => g.id === gestionId);

  if (gestIndex !== -1) {
    const old = data.gestiones[gestIndex];
    const expansion = expansions[id];

    console.log(`✓ ID ${id}: ${old.titulo}`);
    console.log(`  Anterior: ${old.descripcion.length} chars`);
    console.log(`  Nueva: ${expansion.descripcion_nueva.length} chars`);
    console.log(`  Diferencia: +${expansion.descripcion_nueva.length - old.descripcion.length} chars\n`);

    data.gestiones[gestIndex] = {
      ...old,
      descripcion: expansion.descripcion_nueva
    };

    expandedCount++;
  }
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2));

console.log(`\n✅ RESUMEN:`);
console.log(`   Gestiones expandidas: ${expandedCount}`);
console.log(`   Fuente: listado de tareas completadas.txt`);
console.log(`   100% verificable y defendible\n`);
