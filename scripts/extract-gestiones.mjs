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

function main() {
  console.log('Extrayendo gestiones de archivos de chat...\n');

  const allGestiones = [];
  const chatFiles = fs.readdirSync(CHATS_DIR).filter(f => f.endsWith('.txt'));

  for (const file of chatFiles) {
    const filePath = path.join(CHATS_DIR, file);
    const chatName = file.replace('Chat de WhatsApp con ', '').replace('.txt', '');

    console.log(`Procesando: ${file}`);
    const gestiones = processChat(filePath, chatName);
    console.log(`  -> ${gestiones.length} gestiones encontradas`);

    allGestiones.push(...gestiones);
  }

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
