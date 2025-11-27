const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== CORRIGIENDO LINEA TEMPORAL ===');
console.log('REALIDAD: Joaquín renunció el 13 de noviembre de 2025');
console.log('TODAS las gestiones hasta el 12 nov 2025 son de Joaquín\n');

const fechaRenuncia = new Date('2025-11-13');
let corregidas = 0;

// Función para corregir texto
function corregirTexto(texto, gestion) {
  if (!texto) return texto;

  let corregido = texto;
  const fecha = new Date(gestion.fecha);

  // Si la gestión es ANTES del 13 nov 2025, Joaquín era presidente
  if (fecha < fechaRenuncia) {

    // Corregir referencias a "nuevo comité que asumió nov 2024"
    corregido = corregido.replace(
      /El nuevo comité,? que asumió la presidencia del edificio el 18 de noviembre de 2024 tras la salida de Joaquín Puig,?/gi,
      'Joaquín Puig, como presidente del comité,'
    );

    corregido = corregido.replace(
      /nuevo comité \(asumió nov 2024\)/gi,
      'comité liderado por Joaquín'
    );

    corregido = corregido.replace(
      /el nuevo comité \(asumió/gi,
      'el comité de Joaquín (asumió'
    );

    // Corregir "nuevo presidente" por "Joaquín"
    corregido = corregido.replace(
      /El nuevo presidente/gi,
      'Joaquín'
    );

    corregido = corregido.replace(
      /el sucesor de Joaquín Puig/gi,
      'Joaquín Puig'
    );

    // Corregir "post-renuncia" - ERROR total en 2025 antes de nov
    corregido = corregido.replace(
      /CONTEXTO POST-RENUNCIA:/gi,
      'CONTEXTO:'
    );

    corregido = corregido.replace(
      /POST-RENUNCIA/gi,
      ''
    );

    // Corregir referencias a entrega de cargo en nov 2024
    corregido = corregido.replace(
      /entregar formalmente la presidencia en la asamblea del 18 de noviembre/gi,
      'continuar gestionando el edificio como presidente'
    );

    corregido = corregido.replace(
      /ya había entregado el cargo/gi,
      'continuaba como presidente'
    );

    corregido = corregido.replace(
      /transición desde la gestión de Joaquín Puig/gi,
      'gestión de Joaquín Puig'
    );

    // Corregir "primera asamblea nuevo comité"
    corregido = corregido.replace(
      /primera bajo la presidencia del nuevo comité/gi,
      'durante la presidencia de Joaquín'
    );

    // Corregir referencias a documentación de transición nov 2024
    corregido = corregido.replace(
      /transición \(16-30 noviembre 2024\)/gi,
      'gestión continua de Joaquín'
    );

    corregido = corregido.replace(
      /carpeta transición Joaquín Puig \(entregada 30 noviembre 2024\)/gi,
      'documentación organizada por Joaquín'
    );

    // Corregir "5to mes del nuevo comité"
    corregido = corregido.replace(
      /\d+(?:to|vo|er|do) mes del nuevo comité \(asumió nov 2024\)/gi,
      'continuación de la gestión de Joaquín'
    );

    // Corregir "Noviembre 2024: Elección nuevo comité"
    corregido = corregido.replace(
      /Noviembre 2024: Elección nuevo comité \(fin mandato Joaquín\)/gi,
      'Joaquín continuaba como presidente'
    );

    // Corregir cualquier mención de "tras la salida de Joaquín" antes de nov 2025
    corregido = corregido.replace(
      /tras la salida de Joaquín Puig/gi,
      'durante la gestión de Joaquín'
    );

    // Limpiar texto redundante
    corregido = corregido.replace(/\s{3,}/g, ' ');
    corregido = corregido.replace(/\n{3,}/g, '\n\n');
  }

  return corregido;
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
fs.writeFileSync(
  './app/auditoria/gestiones.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

console.log('\n=== RESUMEN ===');
console.log(`Gestiones corregidas: ${corregidas}`);
console.log('Archivo guardado correctamente.');
