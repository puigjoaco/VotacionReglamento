import fs from 'fs';
import path from 'path';

const CHATS_DIR = './chats';
const OUTPUT_FILE = './app/auditoria/gestiones.json';

// Palabras clave para identificar tipos de gestión
const tipoKeywords = {
  reparacion: ['reparar', 'arreglar', 'roto', 'falla', 'dañado', 'quebrado', 'filtración', 'gotea', 'no funciona', 'averiado'],
  mejora: ['mejorar', 'instalar', 'nuevo', 'actualizar', 'implementar', 'agregar', 'cambiar por', 'reemplazar'],
  mantencion: ['mantención', 'mantenimiento', 'revisar', 'chequear', 'inspección', 'preventivo'],
  coordinacion: ['coordinar', 'contactar', 'llamar', 'cotizar', 'cotización', 'proveedor', 'empresa', 'técnico'],
  supervision: ['supervisar', 'verificar', 'controlar', 'revisar trabajo', 'ver que', 'asegurar'],
  contratacion: ['contratar', 'entrevista', 'curriculum', 'finiquito', 'despedir', 'nuevo trabajador'],
  comunicacion: ['comunicar', 'informar', 'avisar', 'notificar', 'correo', 'mensaje', 'circular'],
  gestion_administrativa: ['tramitar', 'gestionar', 'documento', 'certificado', 'permiso', 'administración'],
  seguridad: ['seguridad', 'cámara', 'alarma', 'acceso', 'control', 'vigilancia', 'robo'],
  resolucion_conflictos: ['conflicto', 'queja', 'reclamo', 'problema con', 'molestia', 'ruido', 'discusión'],
  financiero: ['pago', 'transferencia', 'cobro', 'gasto', 'presupuesto', 'dinero', 'factura', 'boleta'],
  legal: ['legal', 'abogado', 'juzgado', 'multa', 'citación', 'demanda', 'reglamento'],
  postventa: ['postventa', 'inmobiliaria', 'garantía', 'constructora', 'defecto']
};

// Palabras clave para identificar impacto
const impactoKeywords = {
  critico: ['urgente', 'emergencia', 'inmediato', 'crítico', 'grave', 'peligro', 'millones', 'juzgado', 'corte'],
  alto: ['importante', 'prioritario', 'necesario', 'todos', 'edificio', 'comunidad', 'contrato'],
  medio: ['normal', 'regular', 'programado', 'revisar'],
  bajo: ['menor', 'pequeño', 'detalle', 'opcional']
};

function parseWhatsAppDate(line) {
  // Formato: DD/MM/YYYY, HH:MM - Autor: Mensaje
  const match = line.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2}):(\d{2})/);
  if (match) {
    const [, day, month, year] = match;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  return null;
}

function extractAuthor(line) {
  const match = line.match(/^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2} - ([^:]+):/);
  return match ? match[1].trim() : null;
}

function extractMessage(line) {
  const match = line.match(/^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2} - [^:]+: (.+)$/);
  return match ? match[1].trim() : null;
}

function detectTipo(text) {
  const lowerText = text.toLowerCase();
  for (const [tipo, keywords] of Object.entries(tipoKeywords)) {
    for (const keyword of keywords) {
      if (lowerText.includes(keyword)) {
        return tipo;
      }
    }
  }
  return 'coordinacion'; // default
}

function detectImpacto(text) {
  const lowerText = text.toLowerCase();
  for (const [impacto, keywords] of Object.entries(impactoKeywords)) {
    for (const keyword of keywords) {
      if (lowerText.includes(keyword)) {
        return impacto;
      }
    }
  }
  return 'medio'; // default
}

function isGestionMessage(message, author) {
  if (!message || message.length < 10) return false;
  if (message === '<Multimedia omitido>') return false;
  if (message.startsWith('http')) return false;

  // Palabras que indican acción/gestión
  const actionWords = [
    'hay que', 'necesito', 'voy a', 'estoy', 'hice', 'hicimos', 'coordiné',
    'llamé', 'contacté', 'revisé', 'verifiqué', 'aprobé', 'autoricé',
    'pagué', 'transferí', 'solicité', 'gestioné', 'arreglé', 'reparé',
    'instalé', 'compré', 'contraté', 'despedí', 'supervisé', 'inspeccioné',
    'comuniqué', 'informé', 'avisé', 'resolví', 'solucioné', 'atendí',
    'listo', 'hecho', 'completado', 'terminado', 'ok', 'dale', 'perfecto',
    'cotización', 'presupuesto', 'factura', 'urgente', 'importante'
  ];

  const lowerMessage = message.toLowerCase();
  return actionWords.some(word => lowerMessage.includes(word)) || message.length > 50;
}

function createGestionTitle(message) {
  // Truncar a primeras palabras significativas
  const words = message.split(' ').slice(0, 10);
  let title = words.join(' ');
  if (message.length > title.length) {
    title += '...';
  }
  return title.charAt(0).toUpperCase() + title.slice(1);
}

function processChat(filePath, chatName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const gestiones = [];

  let currentDate = null;
  let messageBuffer = '';
  let currentAuthor = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const date = parseWhatsAppDate(line);
    if (date) {
      // Procesar mensaje anterior si existe
      if (messageBuffer && currentAuthor && isGestionMessage(messageBuffer, currentAuthor)) {
        gestiones.push({
          fecha: currentDate,
          titulo: createGestionTitle(messageBuffer),
          descripcion: messageBuffer.substring(0, 500),
          tipo: detectTipo(messageBuffer),
          chat_origen: chatName,
          impacto: detectImpacto(messageBuffer)
        });
      }

      currentDate = date;
      currentAuthor = extractAuthor(line);
      messageBuffer = extractMessage(line) || '';
    } else {
      // Continuación del mensaje anterior
      messageBuffer += ' ' + line;
    }
  }

  // Procesar último mensaje
  if (messageBuffer && currentAuthor && isGestionMessage(messageBuffer, currentAuthor)) {
    gestiones.push({
      fecha: currentDate,
      titulo: createGestionTitle(messageBuffer),
      descripcion: messageBuffer.substring(0, 500),
      tipo: detectTipo(messageBuffer),
      chat_origen: chatName,
      impacto: detectImpacto(messageBuffer)
    });
  }

  return gestiones;
}

// Procesar el listado de tareas completadas (formato estructurado, NO WhatsApp)
function processTareasCompletadas(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const gestiones = [];

  // Dividir por separador de tareas
  const tareas = content.split('---');

  for (const tarea of tareas) {
    if (!tarea.trim()) continue;

    // Extraer título (línea que empieza con número y punto)
    const tituloMatch = tarea.match(/^\s*\d+\.\s+(.+?)$/m);
    if (!tituloMatch) continue;

    const titulo = tituloMatch[1].trim();

    // Extraer fecha completada
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

    // Extraer descripción
    let descripcion = '';
    const descMatch = tarea.match(/Descripción:\s*\n\s*(.+?)(?=\n\s*(?:Actualizaciones|Progreso|---)|$)/is);
    const trabajoMatch = tarea.match(/Trabajo realizado:\s*\n?\s*(.+?)(?=\n\s*(?:Progreso|---)|$)/is);

    if (descMatch) {
      descripcion = descMatch[1].trim();
    } else if (trabajoMatch) {
      descripcion = trabajoMatch[1].trim();
    }

    // Extraer progreso/actualizaciones si existe
    const progresoMatch = tarea.match(/(?:Actualizaciones\/Progreso|Progreso registrado):\s*\n(.+?)(?=\s*---|$)/is);
    if (progresoMatch) {
      descripcion += ' ' + progresoMatch[1].trim().replace(/^\d+\.\s*\d{2}\/\d{2}\/\d{4}\s*\d{2}:\d{2}:\d{2}\s*-\s*\w+\s*/gm, '');
    }

    // Extraer categoría/prioridad para determinar tipo
    const categoriaMatch = tarea.match(/Categoría:\s*(.+?)(?:\n|$)/i);
    const prioridadMatch = tarea.match(/Prioridad:\s*(\w+)/i);

    let tipo = 'gestion_administrativa';
    if (categoriaMatch) {
      const cat = categoriaMatch[1].toLowerCase();
      if (cat.includes('mantención') || cat.includes('mantenimiento')) tipo = 'mantencion';
      else if (cat.includes('reparación') || cat.includes('correctiva')) tipo = 'reparacion';
      else if (cat.includes('limpieza')) tipo = 'mejora';
      else if (cat.includes('preventiva')) tipo = 'mantencion';
    }

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
      chat_origen: 'Listado Tareas Completadas',
      impacto
    });
  }

  return gestiones;
}

// Función para calcular similitud entre dos strings (Jaccard similarity)
function calcularSimilitud(str1, str2) {
  const words1 = new Set(str1.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  const words2 = new Set(str2.toLowerCase().split(/\s+/).filter(w => w.length > 3));

  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);

  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

// Función para detectar si dos gestiones son duplicadas
function sonDuplicadas(g1, g2) {
  // Si las fechas están muy separadas, no son duplicadas
  const fecha1 = new Date(g1.fecha);
  const fecha2 = new Date(g2.fecha);
  const diffDias = Math.abs((fecha1 - fecha2) / (1000 * 60 * 60 * 24));

  if (diffDias > 7) return false; // Más de 7 días de diferencia

  // Calcular similitud del contenido
  const textoCompleto1 = `${g1.titulo} ${g1.descripcion}`.toLowerCase();
  const textoCompleto2 = `${g2.titulo} ${g2.descripcion}`.toLowerCase();

  const similitud = calcularSimilitud(textoCompleto1, textoCompleto2);

  // Si similitud > 40%, considerar duplicado
  return similitud > 0.4;
}

// Deduplicar gestiones
function deduplicarGestiones(gestiones) {
  console.log(`\nDeduplicando ${gestiones.length} gestiones...`);

  // Prioridad de fuentes (mayor número = mayor prioridad)
  const prioridadFuente = {
    'Listado Tareas Completadas': 10,
    '1P. Presidente y Trabajadores': 9,
    '4P. Comité (solos)': 8,
    '5P. Laboral': 7,
    '2P. Mayordomo, Admin y comite': 6,
    '7P. Comite Portezuelo General': 5,
    '3P. Solo Administración Portezuelo': 4,
    '6P. Postventa': 3,
    '2P. Focos después de Andamios': 2
  };

  const resultado = [];
  const marcados = new Set();

  for (let i = 0; i < gestiones.length; i++) {
    if (marcados.has(i)) continue;

    const grupo = [i];

    // Buscar duplicados
    for (let j = i + 1; j < gestiones.length; j++) {
      if (marcados.has(j)) continue;

      if (sonDuplicadas(gestiones[i], gestiones[j])) {
        grupo.push(j);
        marcados.add(j);
      }
    }

    // Del grupo, elegir el de mayor prioridad (y más descripción)
    let mejor = i;
    let mejorPrioridad = prioridadFuente[gestiones[i].chat_origen] || 0;
    let mejorLongitud = gestiones[i].descripcion.length;

    for (const idx of grupo) {
      const prio = prioridadFuente[gestiones[idx].chat_origen] || 0;
      const long = gestiones[idx].descripcion.length;

      if (prio > mejorPrioridad || (prio === mejorPrioridad && long > mejorLongitud)) {
        mejor = idx;
        mejorPrioridad = prio;
        mejorLongitud = long;
      }
    }

    resultado.push(gestiones[mejor]);
  }

  console.log(`   Gestiones únicas: ${resultado.length}`);
  console.log(`   Duplicados eliminados: ${gestiones.length - resultado.length}`);

  return resultado;
}

function main() {
  console.log('Extrayendo gestiones de archivos de chat...\n');

  let allGestiones = [];
  const chatFiles = fs.readdirSync(CHATS_DIR).filter(f => f.endsWith('.txt'));

  // 1. Procesar archivos de WhatsApp
  for (const file of chatFiles) {
    const filePath = path.join(CHATS_DIR, file);

    // Verificar si es el listado de tareas (formato diferente)
    if (file.toLowerCase().includes('listado de tareas')) {
      console.log(`Procesando listado estructurado: ${file}`);
      const gestiones = processTareasCompletadas(filePath);
      console.log(`  -> ${gestiones.length} tareas completadas encontradas`);
      allGestiones.push(...gestiones);
    } else {
      const chatName = file.replace('Chat de WhatsApp con ', '').replace('.txt', '');
      console.log(`Procesando chat WhatsApp: ${file}`);
      const gestiones = processChat(filePath, chatName);
      console.log(`  -> ${gestiones.length} gestiones encontradas`);
      allGestiones.push(...gestiones);
    }
  }

  console.log(`\nTotal antes de deduplicación: ${allGestiones.length}`);

  // 2. Deduplicar gestiones (eliminar repetidas entre chats)
  allGestiones = deduplicarGestiones(allGestiones);

  // Ordenar por fecha
  allGestiones.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  // Asignar IDs
  allGestiones.forEach((g, i) => {
    g.id = i + 1;
  });

  // Calcular estadísticas por tipo
  const resumenPorCategoria = {};
  for (const g of allGestiones) {
    resumenPorCategoria[g.tipo] = (resumenPorCategoria[g.tipo] || 0) + 1;
  }

  // Crear estructura final
  const output = {
    metadata: {
      total_gestiones: allGestiones.length,
      periodo: "Abril 2022 - Noviembre 2025",
      presidente: "Joaquín Puig",
      edificio: "Portezuelo Oriente",
      generado: new Date().toISOString().split('T')[0],
      archivos_procesados: chatFiles.map(f => f.replace('Chat de WhatsApp con ', '').replace('.txt', ''))
    },
    estadisticas: {
      horas_trabajo_estimadas: Math.round(allGestiones.length * 1.5), // ~1.5 hrs por gestión promedio
      inversion_personal_clp: 428000,
      crisis_gestionadas: allGestiones.filter(g => g.impacto === 'critico').length,
      proveedores_coordinados: 89,
      trabajadores_gestionados: 12,
      certificaciones_logradas: 8,
      multas_evitadas_clp: 15000000,
      reparaciones_mayores: resumenPorCategoria.reparacion || 0,
      mejoras_implementadas: resumenPorCategoria.mejora || 0
    },
    gestiones: allGestiones,
    resumen_por_categoria: resumenPorCategoria,
    inversiones_personales: [
      { fecha: "2023-07-20", concepto: "App de administración de edificio", monto_clp: 128000, reembolsado: false },
      { fecha: "2024-02-20", concepto: "Tablet para conserjería", monto_clp: 159000, reembolsado: false },
      { fecha: "2024-08-03", concepto: "Controles de acceso adicionales", monto_clp: 94000, reembolsado: false },
      { fecha: "2024-12-01", concepto: "Estufa para conserjería", monto_clp: 47000, reembolsado: false }
    ],
    crisis_mayores: [
      { fecha: "2024-01-08", descripcion: "Falla total sistema eléctrico - Resolución a las 02:00 AM" },
      { fecha: "2024-06-08", descripcion: "Rotura tuberías agua potable - $1.4M en reparaciones" },
      { fecha: "2024-08-20", descripcion: "Certificación LIFTOK urgente - Evitar multas millonarias" },
      { fecha: "2025-02-10", descripcion: "Amenazas de trabajador - Gestión de seguridad" },
      { fecha: "2024-04-10", descripcion: "Piezas ascensores desde China - Ahorro de $615,000" }
    ],
    trabajadores_gestionados: [
      { nombre: "Fernando", cargo: "Conserje permanente", estado: "Activo con conflictos", periodo: "2022-presente" },
      { nombre: "Eduardo Ramos", cargo: "Mayordomo", estado: "Desvinculado por incumplimiento", periodo: "2023-2024" },
      { nombre: "Cristián Barrios", cargo: "Auxiliar", estado: "Finiquito procesado", periodo: "2024-2025" },
      { nombre: "Axel Cruzalegui", cargo: "Mayordomo actual", estado: "Activo", periodo: "2025-presente" }
    ],
    horarios_trabajo_voluntario: {
      madrugadas: "Múltiples gestiones hasta 02:00-03:00 AM",
      noches: "Supervisiones regulares hasta 22:00-00:00",
      fines_semana: "Disponibilidad permanente incluyendo domingos",
      feriados: "Atención de emergencias sin excepción"
    },
    mensaje_final: "Este registro documenta las gestiones realizadas de forma voluntaria y sin remuneración durante 3+ años como presidente del comité. Incluye inversiones personales de $428,000 CLP nunca reembolsadas, trabajo en horarios extremos, gestión de crisis mayores, y la elaboración de un Reglamento Interno valorado en $4-6 millones de pesos. Todo esto realizado mientras se mantenía un trabajo de tiempo completo y vida personal. El objetivo siempre fue el bienestar de la comunidad y el correcto funcionamiento del edificio."
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`\n✅ Extracción completada!`);
  console.log(`   Total gestiones: ${allGestiones.length}`);
  console.log(`   Archivo guardado: ${OUTPUT_FILE}`);
  console.log('\nResumen por categoría:');
  for (const [tipo, count] of Object.entries(resumenPorCategoria).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${tipo}: ${count}`);
  }
}

main();
