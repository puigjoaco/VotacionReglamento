const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== CORRECCIÓN PROFUNDA LÍNEA TEMPORAL v2 ===');
console.log('REALIDAD: Joaquín renunció el 13 de noviembre de 2025');
console.log('NO HUBO cambio de comité en 2024. Joaquín fue presidente todo el tiempo.\n');

const fechaRenuncia = new Date('2025-11-13');
let corregidas = 0;

function corregirTexto(texto, gestion) {
  if (!texto) return texto;
  let c = texto;
  const fecha = new Date(gestion.fecha);

  // Solo corregir gestiones ANTES de la renuncia (13 nov 2025)
  if (fecha >= fechaRenuncia) return c;

  // ========================================
  // CORRECCIONES ESPECÍFICAS
  // ========================================

  // "nuevo comité elegido en asamblea de junio 2024" -> "el comité de Joaquín"
  c = c.replace(/nuevo comité elegido en asamblea de junio 2024/gi, 'el comité liderado por Joaquín');

  // "nuevo comité electo" -> "comité de Joaquín"
  c = c.replace(/NUEVO COMITÉ ELECTO:/gi, 'COMITÉ DE JOAQUÍN:');
  c = c.replace(/nuevo comité electo/gi, 'comité de Joaquín');

  // "Nuevo Presidente (elegido por propietarios)" -> "Joaquín Puig (Presidente)"
  c = c.replace(/✓ Nuevo Presidente \(elegido por propietarios\)/gi, '✓ Joaquín Puig (Presidente)');
  c = c.replace(/✓ Nuevos miembros del comité/gi, '✓ Miembros del comité de Joaquín');

  // "Primera reunión formal del nuevo comité" -> "Reunión del comité de Joaquín"
  c = c.replace(/Primera reunión formal del nuevo comité/gi, 'Reunión del comité de Joaquín');

  // "Después de la Segunda Asamblea Extraordinaria de junio 2024, donde se eligió un nuevo comité directivo"
  c = c.replace(/donde se eligió un nuevo comité directivo/gi, 'donde el comité de Joaquín presentó sus avances');

  // "Nuevo comité está en funciones hace X meses" -> eliminar
  c = c.replace(/✓ Nuevo comité está en funciones hace \d+ meses/gi, '✓ Joaquín continúa como presidente');
  c = c.replace(/✓ Nuevo comité en funciones hace \d+ meses/gi, '✓ Joaquín continúa como presidente');

  // "para el nuevo comité" -> "para la comunidad"
  c = c.replace(/para el nuevo comité/gi, 'para la comunidad');
  c = c.replace(/al nuevo comité/gi, 'a la comunidad');

  // "Coordinación con nuevo comité" -> "Coordinación del comité"
  c = c.replace(/Coordinación con nuevo comité/gi, 'Coordinación del comité');
  c = c.replace(/coordinación con nuevo comité/gi, 'coordinación del comité');

  // "Apoyo voluntario al nuevo comité" -> "Gestión del comité"
  c = c.replace(/Apoyo voluntario al nuevo comité/gi, 'Gestión del comité de Joaquín');

  // "WhatsApp con nuevo comité" -> "WhatsApp del comité"
  c = c.replace(/WhatsApp con nuevo comité/gi, 'WhatsApp del comité');

  // "nuevo comité mantiene" -> "Joaquín mantiene"
  c = c.replace(/nuevo comité mantiene/gi, 'Joaquín mantiene');

  // "Preparar transición para nuevo comité (noviembre)" -> eliminar la parte de transición
  c = c.replace(/Preparar transición para nuevo comité \(noviembre\)/gi, 'Consolidar procedimientos operativos');

  // "cuando entre nuevo comité en noviembre" -> "durante la gestión"
  c = c.replace(/cuando entre nuevo comité en noviembre/gi, 'durante la gestión');
  c = c.replace(/Nuevo presidente solo supervisa/gi, 'Joaquín supervisa');

  // "A un mes del término de su período presidencial (noviembre 2024)"
  c = c.replace(/término de su período presidencial \(noviembre 2024\)/gi, 'continuar su gestión presidencial');
  c = c.replace(/A un mes del término de su período presidencial/gi, 'Durante su gestión presidencial');

  // "Mi recomendación al nuevo comité" -> "Mi decisión como presidente"
  c = c.replace(/Mi recomendación al nuevo comité/gi, 'Mi decisión como presidente');
  c = c.replace(/Recomendación a nuevo comité:/gi, 'Decisión de Joaquín:');

  // "Nuevos presidentes de los 5 edificios" -> solo si implica que Joaquín ya no era presidente
  // Mantener esto ya que puede referirse a otros edificios

  // "Capacitación nuevo presidente" -> si es antes de nov 2025, es error
  c = c.replace(/Capacitación del sucesor:/gi, 'Documentación de procesos:');
  c = c.replace(/Transferencia de conocimientos operativos y lecciones aprendidas al nuevo presidente/gi,
    'Documentación de conocimientos operativos y lecciones aprendidas por Joaquín');

  // "[Sucesor de X]" -> eliminar sucesor
  c = c.replace(/\[Sucesor de [^\]]+\]/gi, '[Personal actual]');

  // "transición junio 2024" -> "gestión junio 2024"
  c = c.replace(/transición junio 2024/gi, 'gestión junio 2024');
  c = c.replace(/transición noviembre 2024/gi, 'gestión de Joaquín');

  // "elegido en 2024" cuando implica nuevo presidente
  c = c.replace(/Todos son presidentes nuevos elegidos en 2024/gi, 'Los presidentes de los otros edificios');

  // "Respaldo mutuo entre presidentes nuevos" -> "Respaldo mutuo entre presidentes"
  c = c.replace(/presidentes nuevos/gi, 'presidentes de los edificios');

  // Limpiar espacios múltiples
  c = c.replace(/\s{3,}/g, ' ');
  c = c.replace(/\n{3,}/g, '\n\n');

  return c;
}

// Procesar todas las gestiones
data.gestiones = data.gestiones.map(g => {
  const descOriginal = g.descripcion;
  const descCompletaOriginal = g.descripcion_completa;

  const descCorregida = corregirTexto(g.descripcion, g);
  const descCompletaCorregida = corregirTexto(g.descripcion_completa, g);

  if (descCorregida !== descOriginal || descCompletaCorregida !== descCompletaOriginal) {
    corregidas++;
    console.log(`Corregida ID ${g.id} (${g.fecha}): ${g.titulo.substring(0, 40)}`);
  }

  return {
    ...g,
    descripcion: descCorregida,
    descripcion_completa: descCompletaCorregida
  };
});

// Guardar
fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('\n=== RESUMEN v2 ===');
console.log(`Gestiones corregidas: ${corregidas}`);
console.log('Archivo guardado.');
