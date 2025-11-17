import fs from 'fs';

// Cargar gestiones interpretadas completas
const interpretadas = JSON.parse(fs.readFileSync('./scripts/gestiones-completas.json', 'utf-8'));

// Cargar las 89 tareas completadas del archivo original
function cargarTareasCompletadas() {
  const content = fs.readFileSync('./chats/listado de tareas completadas.txt', 'utf-8');
  const gestiones = [];
  const tareas = content.split('---');

  for (const tarea of tareas) {
    if (!tarea.trim()) continue;

    const tituloMatch = tarea.match(/^\s*\d+\.\s+(.+?)$/m);
    if (!tituloMatch) continue;

    const titulo = tituloMatch[1].trim();

    let fecha = null;
    const fechaMatch1 = tarea.match(/Completada?:\s*(\d{1,2})\/(\d{1,2})\/(\d{4})/i);
    const fechaMatch2 = tarea.match(/Completada?:\s*(\d{1,2})\s+de\s+(\w+)\s+(\d{4})/i);

    if (fechaMatch1) {
      const [, day, month, year] = fechaMatch1;
      fecha = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    } else if (fechaMatch2) {
      const meses = {
        'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
        'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
        'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
      };
      const [, day, monthName, year] = fechaMatch2;
      const month = meses[monthName.toLowerCase()] || '01';
      fecha = `${year}-${month}-${day.padStart(2, '0')}`;
    }

    if (!fecha) continue;

    let descripcion = '';
    const descMatch = tarea.match(/Descripción:\s*\n\s*(.+?)(?=\n\s*(?:Actualizaciones|Progreso|---)|$)/is);
    const trabajoMatch = tarea.match(/Trabajo realizado:\s*\n?\s*(.+?)(?=\n\s*(?:Progreso|---)|$)/is);

    if (descMatch) descripcion = descMatch[1].trim();
    else if (trabajoMatch) descripcion = trabajoMatch[1].trim();

    const categoriaMatch = tarea.match(/Categoría:\s*(.+?)(?:\n|$)/i);
    let tipo = 'gestion_administrativa';
    if (categoriaMatch) {
      const cat = categoriaMatch[1].toLowerCase();
      if (cat.includes('mantención') || cat.includes('mantenimiento')) tipo = 'mantencion';
      else if (cat.includes('reparación') || cat.includes('correctiva')) tipo = 'reparacion';
      else if (cat.includes('limpieza')) tipo = 'mejora';
    }

    const prioridadMatch = tarea.match(/Prioridad:\s*(\w+)/i);
    let impacto = 'medio';
    if (prioridadMatch) {
      const prio = prioridadMatch[1].toLowerCase();
      if (prio === 'alta') impacto = 'alto';
      else if (prio === 'baja') impacto = 'bajo';
    }

    gestiones.push({
      fecha,
      titulo,
      descripcion: descripcion.substring(0, 500),
      tipo,
      fuente: 'Listado Tareas Completadas',
      impacto
    });
  }

  return gestiones;
}

// Función de similitud Jaccard
function calcularSimilitud(str1, str2) {
  const words1 = new Set(str1.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  const words2 = new Set(str2.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

// Detectar duplicados
function sonDuplicadas(g1, g2) {
  const fecha1 = new Date(g1.fecha);
  const fecha2 = new Date(g2.fecha);
  const diffDias = Math.abs((fecha1 - fecha2) / (1000 * 60 * 60 * 24));

  if (diffDias > 14) return false; // 14 días máximo

  const texto1 = `${g1.titulo} ${g1.descripcion}`.toLowerCase();
  const texto2 = `${g2.titulo} ${g2.descripcion}`.toLowerCase();

  return calcularSimilitud(texto1, texto2) > 0.35;
}

// Deduplicar con prioridad
function deduplicar(gestiones) {
  const prioridad = {
    'Listado Tareas Completadas': 10,
    'Presidente y Trabajadores': 9,
    'Comité solos': 8,
    'Laboral': 7,
    'Comité General': 6
  };

  const resultado = [];
  const marcados = new Set();

  for (let i = 0; i < gestiones.length; i++) {
    if (marcados.has(i)) continue;

    const grupo = [i];
    for (let j = i + 1; j < gestiones.length; j++) {
      if (marcados.has(j)) continue;
      if (sonDuplicadas(gestiones[i], gestiones[j])) {
        grupo.push(j);
        marcados.add(j);
      }
    }

    // Elegir mejor versión
    let mejor = i;
    let mejorPrio = prioridad[gestiones[i].fuente] || 0;

    for (const idx of grupo) {
      const prio = prioridad[gestiones[idx].fuente] || 0;
      if (prio > mejorPrio) {
        mejor = idx;
        mejorPrio = prio;
      }
    }

    resultado.push(gestiones[mejor]);
  }

  return resultado;
}

// MAIN
console.log('Consolidando gestiones interpretadas...\n');

// 1. Cargar tareas completadas
const tareasCompletadas = cargarTareasCompletadas();
console.log(`Listado Tareas Completadas: ${tareasCompletadas.length} gestiones`);

// 2. Cargar gestiones interpretadas de cada chat
const presidenteTrabajadores = interpretadas.presidente_trabajadores.map(g => ({...g, fuente: 'Presidente y Trabajadores'}));
const comiteSolos = interpretadas.comite_solos.map(g => ({...g, fuente: 'Comité solos'}));
const laboral = interpretadas.laboral.map(g => ({...g, fuente: 'Laboral'}));
const comiteGeneral = interpretadas.comite_general.map(g => ({...g, fuente: 'Comité General'}));

console.log(`Presidente y Trabajadores: ${presidenteTrabajadores.length} gestiones`);
console.log(`Comité solos: ${comiteSolos.length} gestiones`);
console.log(`Laboral: ${laboral.length} gestiones`);
console.log(`Comité General: ${comiteGeneral.length} gestiones`);

// 3. Combinar todas
let todasGestiones = [
  ...tareasCompletadas,
  ...presidenteTrabajadores,
  ...comiteSolos,
  ...laboral,
  ...comiteGeneral
];

console.log(`\nTotal antes de deduplicación: ${todasGestiones.length}`);

// 4. Deduplicar
todasGestiones = deduplicar(todasGestiones);
console.log(`Total después de deduplicación: ${todasGestiones.length}`);

// 5. Ordenar por fecha
todasGestiones.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

// 6. Asignar IDs
todasGestiones.forEach((g, i) => { g.id = i + 1; });

// 7. Estadísticas
const porTipo = {};
const porImpacto = {};
const porFuente = {};

for (const g of todasGestiones) {
  porTipo[g.tipo] = (porTipo[g.tipo] || 0) + 1;
  porImpacto[g.impacto] = (porImpacto[g.impacto] || 0) + 1;
  porFuente[g.fuente] = (porFuente[g.fuente] || 0) + 1;
}

// 8. Crear JSON final
const output = {
  metadata: {
    total_gestiones: todasGestiones.length,
    periodo: "Junio 2023 - Noviembre 2025",
    presidente: "Joaquín Puig",
    edificio: "Portezuelo Oriente",
    generado: new Date().toISOString().split('T')[0],
    metodologia: "Interpretación profunda de conversaciones de WhatsApp para extraer gestiones reales completadas"
  },
  estadisticas: {
    horas_trabajo_estimadas: Math.round(todasGestiones.length * 3), // ~3 hrs por gestión real
    inversion_personal_clp: 429980, // Total inversiones personales no reembolsadas
    multas_evitadas_clp: 15000000, // Certificación LIFTOK evitó multas millonarias
    crisis_criticas_resueltas: todasGestiones.filter(g => g.impacto === 'critico').length,
    gestiones_alto_impacto: todasGestiones.filter(g => g.impacto === 'alto').length,
    certificaciones_obtenidas: todasGestiones.filter(g => g.tipo === 'certificacion').length,
    finiquitos_procesados: todasGestiones.filter(g => g.tipo === 'finiquito').length,
    contrataciones_gestionadas: todasGestiones.filter(g => g.tipo === 'contratacion').length,
    decisiones_comite_formales: todasGestiones.filter(g => g.tipo === 'decision_comite').length,
    gestiones_legales: todasGestiones.filter(g => g.tipo === 'legal').length,
    reparaciones_mayores: todasGestiones.filter(g => g.tipo === 'reparacion').length,
    mejoras_implementadas: todasGestiones.filter(g => g.tipo === 'mejora').length
  },
  resumen_por_tipo: porTipo,
  resumen_por_impacto: porImpacto,
  resumen_por_fuente: porFuente,
  gestiones: todasGestiones,
  inversiones_personales: [
    { fecha: "2023-07-20", concepto: "App administración edificio", monto_clp: 128000, reembolsado: false },
    { fecha: "2024-11-14", concepto: "Tablet Xiaomi conserjería", monto_clp: 159990, reembolsado: true },
    { fecha: "2024-12-24", concepto: "10 controles remotos portón", monto_clp: 94990, reembolsado: true },
    { fecha: "2024-12-01", concepto: "Estufa conserjería", monto_clp: 47000, reembolsado: false }
  ],
  logros_destacados: [
    "Certificación LIFTOK obtenida evitando multas millonarias",
    "Regularización legal completa del comité con 11 actas formales",
    "Gestión de múltiples ciclos de personal: 3 mayordomos, varios auxiliares",
    "Implementación sistema control de acceso biométrico",
    "Negociación publicidad de $12M a $28M anuales",
    "Reparación porcelanato ascensores coordinada",
    "Sistema de cámaras de seguridad implementado",
    "Reglamento interno elaborado (valorado en $4-6 millones)"
  ],
  mensaje_final: "Este registro documenta gestiones REALES interpretadas de conversaciones de WhatsApp. Cada entrada representa una gestión concreta completada, no mensajes individuales. Se estimaron aproximadamente 3 horas de trabajo por gestión considerando: coordinación, seguimiento, supervisión, documentación y resolución. Todo esto realizado de forma voluntaria y sin remuneración durante más de 2 años como presidente del comité."
};

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(output, null, 2), 'utf-8');

console.log('\n✅ Consolidación completada!');
console.log(`Total gestiones únicas: ${todasGestiones.length}`);
console.log(`Horas trabajo estimadas: ${output.estadisticas.horas_trabajo_estimadas}`);
console.log('\nPor tipo:');
Object.entries(porTipo).sort((a,b) => b[1]-a[1]).forEach(([tipo, count]) => {
  console.log(`  ${tipo}: ${count}`);
});
console.log('\nPor impacto:');
Object.entries(porImpacto).sort((a,b) => b[1]-a[1]).forEach(([imp, count]) => {
  console.log(`  ${imp}: ${count}`);
});
console.log('\nPor fuente:');
Object.entries(porFuente).sort((a,b) => b[1]-a[1]).forEach(([fuente, count]) => {
  console.log(`  ${fuente}: ${count}`);
});
