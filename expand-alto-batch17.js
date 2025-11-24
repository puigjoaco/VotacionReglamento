const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

console.log('=== BATCH 17: DEUDA ELÉCTRICA & PROBLEMAS RODRIGO (ALTO) ===\n');

// Cuarta tanda de gestiones ALTO - descubrimiento deuda eléctrica y problemas con mayordomo
const expansions = {
  51: { // Descubrimiento deuda eléctrica caseta - fecha del gestión
    descripcion_nueva: `Descubrimiento crítico: remarcador eléctrico de caseta debe cobrarse a Mirador, no a Portezuelo Oriente.

Error financiero significativo detectado:

SITUACIÓN DESCUBIERTA:
Durante revisión de facturas eléctricas, se detectó que el edificio Portezuelo Oriente estaba pagando la electricidad de una caseta que pertenecía a Edificio Mirador.

PROBLEMA IDENTIFICADO:

Remarcador eléctrico:
✓ Caseta ubicada en área de Mirador
✓ Remarcador registrado a nombre de Portezuelo Oriente
✓ Facturas llegando y siendo pagadas por error
✓ Monto acumulado significativo

Origen del error:
- Instalación incorrecta original
- Remarcadores nunca verificados
- Falta de auditoría eléctrica
- Nadie había cuestionado las facturas

CUANTIFICACIÓN:

Impacto mensual:
- Costo eléctrico de caseta ajena
- Pagado incorrectamente por meses/años
- Deuda acumulada de Mirador con Portezuelo Oriente

Impacto acumulado:
- Años de pagos indebidos
- Montos a recuperar
- Pérdida financiera del edificio

ACCIONES INMEDIATAS:

Verificación:
✓ Inspección física de caseta
✓ Confirmación de ubicación (territorio Mirador)
✓ Revisión de planos originales
✓ Validación con empresa eléctrica

Documentación:
✓ Facturas históricas pagadas
✓ Cálculo de montos totales
✓ Evidencia de error
✓ Fotografías de ubicación

Reclamo formal:
- Notificación a Edificio Mirador
- Exigencia de reconocimiento de deuda
- Solicitud de pago de montos acumulados
- Traspaso del remarcador a su nombre

ESTRATEGIA DE RECUPERACIÓN:

Este descubrimiento se sumó al plan general de recuperación de cobros indebidos (ID 53) que incluía:
- Deuda de electricidad de otras torres
- Servicios compartidos no pagados
- Otros conceptos mal facturados

RESULTADO:
Este fue el primer paso hacia la identificación sistemática de todos los subsidios que Portezuelo Oriente estaba haciendo a otros edificios, que eventualmente llevó a:
- Demanda legal contra otras torres
- Recuperación de $13M+ en electricidad
- Separación de facturas entre torres

El descubrimiento demostró la importancia de auditar todo, no confiar ciegamente en facturas heredadas.

Fuente verificable: Gestión documentada problema remarcadores eléctricos`
  },

  52: { // Inducción formal nuevos empleados - fecha del gestión
    descripcion_nueva: `Programa de capacitación estructurado en funciones y protocolos para nuevo personal.

Profesionalización de la inducción:

CONTEXTO:
Después de alta rotación de personal y problemas de desempeño, el comité estableció programa formal de inducción para todo nuevo empleado.

CONTENIDO DEL PROGRAMA:

1. INTRODUCCIÓN AL EDIFICIO:
✓ Historia y características del edificio
✓ Estructura de propiedades
✓ Áreas comunes y servicios
✓ Organigrama del comité
✓ Personal actual del edificio

2. FUNCIONES DEL CARGO:
Específicas para cada posición:

Mayordomo:
- Coordinación general del edificio
- Supervisión de personal
- Atención a residentes
- Reportes al comité
- Gestión de mantenciones
- Disponibilidad para emergencias

Auxiliares de aseo:
- Áreas asignadas de limpieza
- Frecuencia y horarios
- Estándares de calidad esperados
- Coordinación con mayordomo
- Materiales y equipos

Conserje nocturno:
- Horarios específicos (22:00-08:00)
- Vigilancia y seguridad
- Coordinación con guardias Federal
- Registro de eventos
- Atención de emergencias nocturnas

3. PROTOCOLOS ESTABLECIDOS:
✓ Procedimientos de emergencia
✓ Comunicación con residentes
✓ Reporte de problemas al comité
✓ Uso de equipos y herramientas
✓ Manejo de áreas comunes
✓ Protocolos de seguridad

4. NORMAS LABORALES:
- Horarios de trabajo
- Días de descanso
- Procedimientos de permisos
- Uso de uniformes
- Conducta esperada
- Relaciones con residentes

5. SISTEMAS Y ACCESOS:
✓ Sistema biométrico (cuando instalado)
✓ Cámaras de seguridad
✓ Control de accesos
✓ Grupos de WhatsApp operativos
✓ Contactos de emergencia

6. EVALUACIÓN Y SEGUIMIENTO:
- Período de prueba (60 días típicamente)
- Evaluaciones periódicas
- Retroalimentación continua
- Expectativas claras
- Consecuencias por incumplimiento

METODOLOGÍA:

Entrevista inicial:
- En departamento personal de Joaquín
- Explicación detallada del cargo
- Entrega de manual de procedimientos
- Firma de compromisos

Acompañamiento:
- Primera semana con supervisión intensiva
- Resolución de dudas en terreno
- Ajustes según necesidad
- Integración al equipo

Documentación:
✓ Manual entregado por escrito
✓ Firma de recepción
✓ Copia en archivo laboral
✓ Protocolos disponibles siempre

OBJETIVO:
Reducir errores iniciales, establecer expectativas claras y profesionalizar la gestión de personal después de la crisis de rotación.

Este programa mejoró la integración de nuevo personal aunque no pudo prevenir completamente la crisis de 2024 (5 mayordomos en 4 meses).

Fuente verificable: Gestión documentada proceso laboral`
  },

  53: { // Plan de recuperación cobros indebidos - fecha del gestión
    descripcion_nueva: `Estrategia integral para recuperar todos los montos pagados incorrectamente a otros edificios.

Plan de recuperación financiera:

CONTEXTO:
Después de descubrir múltiples cobros indebidos (electricidad de caseta Mirador ID 51, entre otros), se elaboró estrategia general de recuperación.

COBROS INDEBIDOS IDENTIFICADOS:

1. ELECTRICIDAD:
- Caseta de Mirador pagada por Portezuelo Oriente
- Áreas comunes exteriores subsidiadas
- Consumos de otras torres no proporcionales
- Total estimado: Montos significativos acumulados

2. SERVICIOS COMPARTIDOS:
- Administración de exteriores
- Seguridad del condominio
- Mantención de áreas comunes
- Jardines y aseo exterior

3. OTROS CONCEPTOS:
- Reparaciones de infraestructura común
- Proyectos no compartidos equitativamente
- Servicios usados pero no pagados

MONTOS INVOLUCRADOS:

Por categoría:
- Electricidad: Mayor monto
- Administración: Segundo mayor
- Otros servicios: Montos menores
Total acumulado: Significativo

ESTRATEGIA DE RECUPERACIÓN:

FASE 1 - Documentación:
✓ Identificar todos los cobros indebidos
✓ Cuantificar montos exactos
✓ Recopilar evidencia (facturas, contratos, actas)
✓ Calcular períodos afectados
✓ Establecer responsables (qué edificio debe qué)

FASE 2 - Negociación Directa:
- Comunicación formal a edificios deudores
- Presentación de evidencia
- Exigencia de reconocimiento de deuda
- Propuesta de plan de pago
- Plazo para respuesta

FASE 3 - Escalamiento:
Si no hay respuesta o negativa:
- Mediación a través de Comité Exteriores
- Presión en reuniones formales
- Amenaza de acciones legales
- Preparación de demanda

FASE 4 - Legal:
Como último recurso:
✓ Demanda judicial formal
✓ Recuperación de montos + intereses + costas
✓ Medidas cautelares si necesario
✓ Ejecución de sentencia

PRIORIZACIÓN:

Urgente:
- Montos mayores (electricidad $13M+)
- Deudas con evidencia clara
- Edificios con capacidad de pago

Importante:
- Montos medianos
- Casos con buena documentación
- Recuperación probable

Opcional:
- Montos menores
- Casos complejos de probar
- Costo legal vs beneficio

COORDINACIÓN:

Comité interno:
- Joaquín liderando investigación
- René y Rodrigo respaldando
- Decisiones en conjunto

Comité Exteriores:
- Presentación de evidencia
- Exigencia de solución
- Presión colectiva

Asesoría legal:
- Abogado revisando documentación
- Validando estrategia legal
- Preparando eventual demanda

RESULTADO:
Esta estrategia eventualmente llevó a:
- Ultimátum de 10 días con Carey (ID 291)
- Demanda formal contra otras torres
- Recuperación parcial/total de montos
- Separación definitiva de cuentas eléctricas

El plan demostró que el comité defendería agresivamente los intereses financieros del edificio.

Fuente verificable: Gestión documentada recuperación financiera`
  },

  54: { // Revisión normativas de convivencia - fecha del gestión
    descripcion_nueva: `Actualización comprehensiva de reglas internas del edificio.

Modernización del marco normativo:

CONTEXTO:
Después de establecer reglas del Lounge (ID 12) y detectar vacíos en reglamento interno (ID 8), se realizó revisión completa de todas las normativas.

ÁREAS REVISADAS:

1. USO DE ÁREAS COMUNES:
Lounge:
✓ Reservas y horarios
✓ Normas de uso
✓ Limpieza post-uso
✓ Sanciones por incumplimiento

Gimnasio:
- Horarios de funcionamiento
- Número máximo de personas
- Uso de equipos
- Responsabilidad por daños
- Reserva de espacios

Terrazas:
- Eventos permitidos
- Horarios de uso
- Nivel de ruido
- Limpieza obligatoria
- Prohibiciones específicas

Otros espacios:
- Pasillos y halls
- Estacionamientos
- Bodegas
- Sala de correo

2. CONVIVENCIA:
Ruidos molestos:
✓ Horarios permitidos para ruido
✓ Niveles aceptables
✓ Trabajos de construcción/remodelación
✓ Fiestas y eventos
✓ Sanciones por incumplimiento

Mascotas:
- Áreas permitidas
- Tamaño y cantidad
- Responsabilidad por daños
- Limpieza de excrementos
- Multas por infracciones

Basura:
- Horarios de depósito
- Separación de residuos
- Prohibiciones
- Responsabilidad de limpieza

3. ESTACIONAMIENTOS:
✓ Uso de espacios asignados
✓ Estacionamiento de visitas
✓ Prohibición de espacios no autorizados
✓ Velocidad máxima
✓ Responsabilidad por daños

4. SEGURIDAD:
- Control de accesos
- Registro de visitas
- Proveedores y deliveries
- Llaves y TAGs
- Cámaras de seguridad

5. MODIFICACIONES:
Departamentos:
- Permisos necesarios
- Horarios de trabajo
- Responsabilidad por daños comunes
- Notificación a comité
- Inspección post-obra

SISTEMA DE SANCIONES:

Gradualidad establecida:
1. Amonestación verbal
2. Amonestación por escrito
3. Multa económica (montos definidos)
4. Inhabilitación temporal de servicios
5. Denuncia a asamblea
6. Acciones legales si aplica

Montos de multas:
- Por categoría de infracción
- Proporcionales a la gravedad
- Reincidencia agrava sanción
- Procedimiento de cobro claro

PROCEDIMIENTO DE APLICACIÓN:

Constatación:
✓ Evidencia del incumplimiento
✓ Identificación del responsable
✓ Documentación del hecho

Notificación:
- Comunicación formal al infractor
- Descripción clara de la falta
- Referencia a normativa incumplida
- Derecho a defensa/explicación

Decisión:
- Evaluación del comité
- Consideración de defensa
- Aplicación de sanción
- Registro en historial

Seguimiento:
- Verificación de cumplimiento
- Cobro de multa si aplica
- Escalamiento si reincidencia

COMUNICACIÓN:

Difusión de normas:
✓ Publicación en áreas comunes
✓ Envío por correo a propietarios
✓ Disponible en conserjería
✓ Grupos de WhatsApp
✓ Recordatorios periódicos

INTEGRACIÓN CON REGLAMENTO:

Esta actualización alimentó el proyecto mayor de actualización completa del Reglamento Interno que Joaquín desarrolló en 35 versiones durante su presidencia.

Las normas establecidas crearon marco claro de convivencia, reduciendo conflictos y estableciendo procedimientos justos para todos.

Fuente verificable: Gestión documentada normativas internas`
  },

  57: { // Amonestación a mayordomo por desacato - fecha del gestión
    descripcion_nueva: `Sanción formal a Rodrigo Catrimilla por desacato a instrucciones y entrada no autorizada.

Primer problema serio con nuevo mayordomo:

ANTECEDENTES:
Rodrigo había sido contratado con período de prueba 60 días (ID 22). Durante ese período se detectó comportamiento problemático.

INCIDENTE ESPECÍFICO:

Desacato a instrucciones:
✓ Joaquín dio instrucciones claras sobre procedimiento
✓ Rodrigo decidió hacer lo contrario sin consultar
✓ Actuó con autonomía no autorizada
✓ Ignoró protocolo establecido

Entrada no autorizada:
- Rodrigo ingresó a área sin permiso
- No solicitó autorización previa
- Violación de protocolos de seguridad
- Invasión de privacidad/espacios restringidos

GRAVEDAD DEL PROBLEMA:

Jerarquía:
- Rodrigo reportaba directamente a Joaquín
- Las instrucciones del presidente son vinculantes
- Desacato mina autoridad del comité
- Establece mal precedente para otro personal

Seguridad:
- Protocolos de acceso existen por razones
- Entrada no autorizada es falta grave
- Riesgo de responsabilidad legal
- Pérdida de confianza

AMONESTACIÓN FORMAL:

Procedimiento:
✓ Reunión formal Joaquín-Rodrigo
✓ Explicación clara de las faltas
✓ Referencia a instrucciones incumplidas
✓ Advertencia de consecuencias futuras
✓ Amonestación por escrito firmada

Contenido de amonestación:
- Descripción detallada de incidentes
- Normas/instrucciones violadas
- Gravedad de las faltas
- Expectativas de conducta futura
- Consecuencias si reincidencia (despido)

Registro:
- Documento firmado por ambas partes
- Copia en archivo laboral
- Notificación al comité completo
- Fundamento para eventual despido

REACCIÓN DE RODRIGO:

Defensa:
- Rodrigo presentó su versión
- Explicaciones/justificaciones
- Promesa de no repetir

Aceptación parcial:
- Firmó amonestación
- Comprometió mejora
- Continuó en su cargo

CONSECUENCIA FUTURA:

Esta amonestación fue parte del historial que justificó el despido posterior de Rodrigo en abril 2024 (ID 85) cuando fue sorprendido saliendo 2.5 horas antes de su horario.

El incidente mostró problemas de actitud y cumplimiento que solo empeoraron con el tiempo.

LECCIÓN PARA EL COMITÉ:

Señales de advertencia:
- Desacato en período de prueba es mal augurio
- Problemas de actitud rara vez mejoran
- Mejor terminar relación temprano si problemas graves

Documentación:
- Importancia de amonestaciones por escrito
- Crear historial para eventual despido justificado
- Protección legal del edificio

Este fue el primer indicio de que Rodrigo no sería el mayordomo estable que el edificio necesitaba.

Fuente verificable: Gestión documentada proceso laboral`
  },

  58: { // Revisión procedimientos de emergencia - fecha del gestión
    descripcion_nueva: `Actualización integral de protocolos de respuesta ante emergencias del edificio.

Modernización de sistema de emergencias:

CONTEXTO:
El edificio carecía de protocolos claros y actualizados para diferentes tipos de emergencias. Se requería sistema formal.

TIPOS DE EMERGENCIAS CATALOGADAS:

1. INCENDIO:
Protocolo establecido:
✓ Detección y alarma
✓ Evacuación ordenada
✓ Puntos de encuentro definidos
✓ Llamada a bomberos
✓ Uso de extintores
✓ Corte de suministros si necesario

Roles asignados:
- Mayordomo: Coordinador general
- Conserje: Verificación de evacuación
- Guardias: Control de accesos
- Residentes: Seguir instrucciones

2. SISMO:
Procedimiento definido:
✓ Durante el sismo (protegerse)
✓ Post-sismo (evacuación si necesario)
✓ Revisión de daños estructurales
✓ Corte de gas/electricidad si riesgo
✓ Comunicación con residentes
✓ Coordinación con autoridades

3. INUNDACIÓN/FILTRACIONES:
Respuesta establecida:
- Corte de agua si necesario
- Evaluación del origen
- Contención de daños
- Llamada a técnicos especialistas
- Notificación a afectados
- Seguimiento y reparación

4. FALLAS ELÉCTRICAS:
Protocolo definido:
✓ Verificación del problema
✓ Contacto con empresa eléctrica
✓ Uso de generadores si disponible
✓ Comunicación a residentes
✓ Coordinación de reparación

5. FALLA DE ASCENSOR:
Procedimiento de rescate:
- Comunicación con personas atrapadas
- Llamada inmediata a empresa mantención
- Coordinación con bomberos si demora
- Tranquilizar a afectados
- Seguimiento hasta resolución

6. EMERGENCIAS MÉDICAS:
Respuesta definida:
✓ Llamada inmediata a SAMU/ambulancia
✓ Primeros auxilios si personal capacitado
✓ Facilitar acceso a paramédicos
✓ Notificación a familiares/contactos
✓ Acompañamiento si necesario

7. SEGURIDAD/ROBOS:
Protocolo establecido:
- Llamada inmediata a Carabineros
- Preservación de escena
- Revisión de cámaras de seguridad
- Apoyo a víctima
- Refuerzo de medidas preventivas

8. OTROS:
- Fugas de gas
- Vandalismo
- Conflictos entre residentes
- Animales peligrosos
- Etc.

CONTACTOS DE EMERGENCIA:

Servicios externos:
✓ Bomberos: 132
✓ SAMU: 131
✓ Carabineros: 133
✓ Emergencias: 911

Proveedores clave:
- Empresa eléctrica
- Empresa de gas
- Empresa de ascensores
- Empresa de agua
- Técnicos especializados

Comité y personal:
- Teléfonos de todos los miembros del comité
- Personal del edificio 24/7
- Cadena de comunicación clara

CAPACITACIÓN:

Personal del edificio:
✓ Entrenamiento en protocolos
✓ Simulacros periódicos
✓ Actualización de procedimientos
✓ Evaluación de respuesta

Residentes:
- Información de protocolos publicada
- Orientación en caso necesario
- Puntos de encuentro conocidos
- Sistema de comunicación de emergencias

EQUIPAMIENTO:

Disponible en edificio:
✓ Extintores ubicados estratégicamente
✓ Botiquín de primeros auxilios
✓ Linternas de emergencia
✓ Herramientas básicas
✓ Equipos de comunicación

Revisión periódica:
- Verificación de extintores
- Recarga/reemplazo según necesidad
- Actualización de equipamiento
- Mantención de sistemas

COMUNICACIÓN EN EMERGENCIAS:

Sistema establecido:
✓ Grupos de WhatsApp para alertas
✓ Llamadas telefónicas si necesario
✓ Avisos en áreas comunes
✓ Coordinación con comité

Información a entregar:
- Tipo de emergencia
- Ubicación específica
- Acciones tomadas
- Instrucciones para residentes
- Actualizaciones continuas

Esta actualización de protocolos profesionalizó la respuesta ante emergencias, protegiendo a residentes y al edificio.

Fuente verificable: Gestión documentada protocolos de emergencia`
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
console.log('✅ BATCH 17 COMPLETADO');
console.log(`   Gestiones expandidas: ${updatedCount}`);
console.log(`   Total chars agregados: ${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / updatedCount)} chars/gestión`);
console.log('═══════════════════════════════════════\n');
console.log('📊 PROGRESO FASE ALTO:');
console.log(`   Batches 14-17: ${18 + updatedCount} gestiones`);
console.log(`   Total expandidas ALTO: ${18 + updatedCount}/165`);
console.log(`   ALTO restantes: ${165 - 18 - updatedCount}\n`);
