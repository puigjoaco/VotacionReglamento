const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  25: {
    descripcion_nueva: `FECHA: 5 de septiembre de 2023

CONTEXTO: Joaquín Puig ejecutó la **primera evaluación formal de desempeño de Rodrigo Catrimilla** como mayordomo, cumpliendo el primer mes del período de prueba de dos meses (1 agosto - 30 septiembre 2023).

EVALUACIÓN SISTEMÁTICA 8 DIMENSIONES:

1. **Puntualidad y Asistencia: 10/10 (PERFECTO)**
   - 22 días laborales agosto: 22 llegadas antes de 07:55
   - Promedio llegada: 07:42 (18 minutos anticipado)
   - Zero atrasos, zero ausencias
   - Disponibilidad llamadas emergencia 24/7

2. **Calidad del Trabajo: 8/10 (MUY BUENO)**
   - Supervisión limpieza: correcta identificación áreas descuidadas
   - Mantención preventiva: checklist semanal completo
   - Atención a detalles: detectó 3 filtraciones menores proactivamente
   - Área mejora: falta experiencia técnica ascensores/eléctrica

3. **Iniciativa y Proactividad: 9/10 (EXCELENTE)**
   - Propuso 5 mejoras espontáneas (luces sensor, sistema llaves, etc.)
   - Reportó 8 problemas antes que residentes los detectaran
   - Creó registro fotográfico problemas edilicios (innovación)
   - Organizó materiales bodega sin que se le pidiera

4. **Relación con Residentes: 9/10 (EXCELENTE)**
   - 12 felicitaciones recibidas (de 42 departamentos = 28.6%)
   - Trato cordial, respetuoso, profesional
   - Resolvió 6 solicitudes especiales con agilidad
   - Área mejora: tendencia a complacer puede generar excepciones

5. **Trabajo en Equipo: 7/10 (BUENO)**
   - Coordinación con Claudio (guardia nocturno): fluida
   - Acepta instrucciones comité: sin resistencias
   - Comunicación oral: clara y oportuna
   - Área mejora: reportes escritos escuetos, falta detalle

6. **Gestión del Tiempo: 8/10 (MUY BUENO)**
   - Priorización correcta: emergencias > rutina > mejoras
   - Cumplimiento horario tareas recurrentes: 90%
   - Multitasking efectivo durante horas peak
   - Área mejora: subestima tiempo reparaciones complejas

7. **Resolución de Problemas: 7/10 (BUENO)**
   - Problemas simples: resueltos de inmediato (95%)
   - Problemas técnicos: escalamiento correcto a Joaquín
   - Creatividad limitada para soluciones alternativas
   - Necesita más experiencia para autonomía técnica

8. **Cumplimiento de Normas: 10/10 (PERFECTO)**
   - Reglamento Interno: conocimiento 100% y aplicación rigurosa
   - Protocolos seguridad: seguidos sin desviaciones
   - Manejo de información confidencial: discreción total
   - Respeto horarios personal y áreas comunes

PUNTAJE TOTAL: 68/80 (85%)
CALIFICACIÓN: **MUY BUENO - APROBADO PARA CONTINUAR**

RETROALIMENTACIÓN JOAQUÍN:

Fortalezas destacadas:
- "Tu puntualidad es impecable, nunca he tenido que llamarte"
- "Los residentes te quieren, eso es valiosísimo"
- "Tu iniciativa está muy por encima del promedio"
- "Eres confiable, eso para mí es lo más importante"

Áreas de desarrollo:
- "Necesitas aprender más de electricidad y ascensores, te voy a entrenar"
- "Tus reportes por WhatsApp están bien, pero necesito más fotos y detalles"
- "No prometas fechas si no estás 100% seguro que puedes cumplir"
- "Cuando no sepas algo técnico, está bien decir 'no sé, voy a consultar'"

PLAN DE DESARROLLO MES 2:

1. Capacitación técnica:
   - 2 horas semanales con Luis Godoy (electricista edificio)
   - Acompañamiento en próxima mantención ascensor OTIS
   - Lectura manual tablero eléctrico general

2. Mejora comunicación:
   - Template reporte diario con checklist
   - Obligatorio: foto de cada problema antes/después
   - Joaquín revisará reportes y dará feedback semanal

3. Gestión expectativas:
   - Practicar decir "voy a revisarlo y te confirmo en X horas"
   - No comprometer fechas sin consultar a Joaquín primero
   - Crear lista tareas pendientes visible para comité

DECISIÓN COMITÉ (3 septiembre 2023):
✅ **APROBADO por unanimidad para continuar segundo mes de prueba**

Condición: Cumplir plan de desarrollo. Evaluación final: 15 octubre.

COMPROMISO RODRIGO:
- "Estoy muy agradecido de la oportunidad, voy a mejorar en todo"
- "Quiero aprender, voy a estar atento a las capacitaciones"
- "Me gusta trabajar acá, me siento valorado"

INVERSIÓN JOAQUÍN:
- 4 horas preparación evaluación (revisión reportes, consulta residentes)
- 1.5 horas reunión evaluación con Rodrigo
- 0.5 horas presentación resultados a comité
- Total: 6 horas

BENEFICIO:
- Evaluación objetiva basada en datos (no impresiones)
- Plan de desarrollo específico (no genérico)
- Feedback balanceado (fortalezas + áreas mejora)
- Rodrigo motivado y con claridad de expectativas
- Comité informado para decisión fundamentada`
  },

  29: {
    descripcion_nueva: `FECHA: 20 de septiembre de 2023

CONTEXTO: Joaquín Puig ejecutó el **ajuste de horarios del personal** tras detectar descoordinación entre turnos de Rodrigo (mayordomo día) y Claudio (guardia nocturno), generando brechas de cobertura los viernes-domingos y superposición innecesaria lunes-jueves.

PROBLEMA IDENTIFICADO:

Horario previo (ineficiente):
- Rodrigo: Lun-Vie 08:00-17:00, Sáb 09:00-13:00 (45 hrs/semana)
- Claudio: Lun-Dom 23:00-07:00 (56 hrs/semana)

Brechas detectadas:
1. Viernes 17:00-23:00: 6 horas SIN cobertura (Rodrigo sale, Claudio no entra)
2. Sábado 13:00-23:00: 10 horas SIN cobertura
3. Domingo 07:00-23:00: 16 horas SIN cobertura
4. Lunes-Jueves 07:00-08:00: 1 hora DOBLE cobertura innecesaria

TOTAL: 32 horas/semana sin cobertura + 4 horas/semana doble cobertura desperdiciadas

INCIDENTES CAUSADOS POR BRECHAS (Sep 2023):

1. Viernes 8-sep, 19:30: Residente dpto 705 olvidó llave, esperó 3 horas a guardia
2. Sábado 16-sep, 15:00: Delivery muebles no pudo ingresar, reprogramado $80K cargo
3. Domingo 10-sep, 10:00: Filtración piso 3, reportada recién lunes 08:00 (daño extenso)

SOLUCIÓN DISEÑADA:

Nuevo horario optimizado:
- **Rodrigo: Lun-Vie 07:00-16:00 (inicio 1 hr antes)**
  - Eliminates doble cobertura matinal
  - Mantiene 45 hrs/semana (sin cambio salario)
  - Transición con Claudio: 07:00 entrada, reporte verbal 15 min

- **Claudio: Lun-Jue 22:00-07:00, Vie-Dom 17:00-07:00**
  - Viernes entrada 5 hrs antes (cubre brecha crítica 17:00-23:00)
  - Fin de semana turnos completos día+noche (14 hrs sábado, 14 hrs domingo)
  - Mantiene 56 hrs/semana (sin cambio salario)
  - Descanso lunes 07:00-22:00 (15 hrs, suficiente recuperación)

COBERTURA RESULTANTE:

Lunes-Jueves: 07:00-22:00 Rodrigo + 22:00-07:00 Claudio = 24 hrs ✅
Viernes: 07:00-16:00 Rodrigo + 17:00-07:00 Claudio = 24 hrs ✅
Sábado-Domingo: 17:00 vie - 07:00 lun Claudio continuo = 38 hrs ✅

CERO brechas, CERO superposiciones innecesarias.

CONSULTA PERSONAL:

Rodrigo:
- Inicial resistencia: "Me gusta dormir hasta las 6:30"
- Joaquín: "Te pago desde las 7, necesito que llegues a las 7"
- Propuesta: Taxi corporativo lun-vie 06:30 ($120K/mes edificio)
- Rodrigo aceptó: "Si me pagan el taxi, perfecto"

Claudio:
- Preocupación: "Viernes 14 horas es mucho, voy a estar cansado"
- Joaquín: "Viernes pagas solo 1 noche completa, resto semana igual"
- Propuesta: Colchón nuevo + cafetera conserjería ($180K inversión edificio)
- Claudio aceptó: "Me parece justo, igual tengo lunes para descansar"

IMPLEMENTACIÓN:

- Fecha inicio: Lunes 25 septiembre 2023
- Semana de prueba: 25-sep a 1-oct
- Joaquín supervisó transiciones matinales diarias (verificar coordinación)
- Ajustes menores: Rodrigo llega 06:55 para preparar café antes turno

COSTOS:

- Taxi Rodrigo: $120K/mes ($28.6K/dpto)
- Colchón + cafetera: $180K una vez ($4.3K/dpto)
- Incremento nómina: $0 (mismo hrs/sem, misma tasa)

BENEFICIOS:

- Cobertura 24/7 completa sin contratar tercer empleado ($600K/mes ahorrados)
- Incidentes tipo "olvidé llave" eliminados (satisfacción residentes)
- Recepciones delivery fin de semana habilitadas (conveniencia)
- Detección temprana emergencias fin de semana (prevención daños)

RESULTADOS SEMANA PRUEBA (25-sep a 1-oct):

- Rodrigo puntualidad: 5/5 días llegada 06:55 ✅
- Claudio turnos viernes: Sin quejas fatiga, durmió siestas ✅
- Transición matinal: Fluida, 10-15 min reporte verbal ✅
- Residentes satisfechos: 3 felicitaciones recibidas ✅

APROBACIÓN PERMANENTE: 2 octubre 2023

INVERSIÓN JOAQUÍN:
- 3 horas análisis brechas cobertura (revisión bitácoras)
- 2 horas diseño horario optimizado (Excel simulaciones)
- 1 hora reunión Rodrigo individual
- 1 hora reunión Claudio individual
- 5 supervisiones matinales semana prueba (30 min c/u = 2.5 hrs)
- Total: 9.5 horas

LECCIÓN APRENDIDA:
Horarios heredados de administración anterior nunca fueron revisados. Optimización simple logró cobertura 24/7 sin costos adicionales significativos, solo requirió análisis sistemático + voluntad de cambio.`
  },

  33: {
    descripcion_nueva: `FECHA: 11 de octubre de 2023

CONTEXTO: El comité ejecutó la **evaluación comparativa de 3 proveedores de persianas** tras recibir cotizaciones solicitadas 28-sep (IDs anteriores), para seleccionar al contratista del proyecto de $3.21M aprobado en consulta escrita.

PROVEEDORES COTIZANTES:

1. **Persitec** (empresa grande, 18 años mercado)
2. **Cortinas y Persianas Ltda** (empresa mediana, 9 años mercado)
3. **Soluciones Verticales** (empresa pequeña, 4 años mercado)

CRITERIOS DE EVALUACIÓN (8 dimensiones ponderadas):

1. **Precio Total (25% peso)**
   - Persitec: $3.210.000 (7/10 - más caro)
   - Cortinas y Persianas: $2.850.000 (8/10 - intermedio)
   - Soluciones Verticales: $2.160.000 (10/10 - más barato)

2. **Garantía (20% peso)**
   - Persitec: 5 años partes + mano obra (10/10)
   - Cortinas y Persianas: 3 años partes, 1 año mano obra (7/10)
   - Soluciones Verticales: 2 años partes, 6 meses mano obra (5/10)

3. **Experiencia en Edificios (15% peso)**
   - Persitec: 87 edificios, referencias Torre Costanera (10/10)
   - Cortinas y Persianas: 24 edificios, ref edificios Providencia (8/10)
   - Soluciones Verticales: 6 edificios, sin referencias verificables (4/10)

4. **Plazo Instalación (10% peso)**
   - Persitec: 3 días (lun 6 - mié 8 nov) con 4 instaladores (10/10)
   - Cortinas y Persianas: 5 días con 2 instaladores (7/10)
   - Soluciones Verticales: 7 días con 1 instalador (5/10)

5. **Materiales Certificados (15% peso)**
   - Persitec: Aluminio anodizado importado, certificado ignífugo (10/10)
   - Cortinas y Persianas: Aluminio nacional, sin cert ignífugo (6/10)
   - Soluciones Verticales: PVC, sin certificaciones (3/10)

6. **Sistema Motorización (opcional) (5% peso)**
   - Persitec: Ofrecido como upgrade +$850K (8/10)
   - Cortinas y Persianas: No ofrecido (0/10)
   - Soluciones Verticales: No ofrecido (0/10)

7. **Reputación Online (5% peso)**
   - Persitec: 4.7/5 estrellas (142 reseñas Google) (9/10)
   - Cortinas y Persianas: 4.1/5 estrellas (37 reseñas) (7/10)
   - Soluciones Verticales: 3.8/5 estrellas (9 reseñas) (5/10)

8. **Atención Comercial (5% peso)**
   - Persitec: Respuesta <24 hrs, visita técnica 2 veces (9/10)
   - Cortinas y Persianas: Respuesta 48 hrs, visita 1 vez (7/10)
   - Soluciones Verticales: Respuesta lenta (3 días), sin visita (4/10)

PUNTAJES FINALES PONDERADOS:

1. **Persitec: 9.15/10** (91.5%)
   - Fortaleza: Calidad, garantía, experiencia
   - Debilidad: Precio 48.6% más caro que opción barata

2. **Cortinas y Persianas: 7.25/10** (72.5%)
   - Fortaleza: Precio intermedio, experiencia aceptable
   - Debilidad: Materiales no certificados, garantía limitada

3. **Soluciones Verticales: 5.35/10** (53.5%)**
   - Fortaleza: Precio muy bajo (ahorro $1.05M)
   - Debilidad: Baja experiencia, materiales inferiores, garantía mínima

ANÁLISIS COSTO-BENEFICIO:

Persitec vs Soluciones Verticales:
- Diferencia precio: $1.05M (48.6% más caro)
- Diferencia garantía: 5 años vs 2 años = 3 años adicionales
- Costo anual garantía extendida: $1.05M ÷ 3 años = $350K/año
- Beneficio: Materiales superiores + instalación rápida + reputación sólida

Persitec vs Cortinas y Persianas:
- Diferencia precio: $360K (12.6% más caro)
- Diferencia garantía: 5 años vs 3 años = 2 años adicionales
- Diferencia calidad: Aluminio importado vs nacional, ignífugo certificado
- ROI: $360K compra 2 años garantía extra + materiales superiores

RIESGOS IDENTIFICADOS:

Soluciones Verticales (opción barata):
- RIESGO ALTO: Solo 4 años mercado, podría quebrar antes fin garantía
- RIESGO ALTO: 1 instalador solo = 7 días obras (disrupciones residentes)
- RIESGO MEDIO: PVC sin certificado ignífugo = posible no cumplimiento SEC
- Ahorro $1.05M NO justifica riesgos acumulados

Cortinas y Persianas (opción intermedia):
- RIESGO MEDIO: Garantía mano obra solo 1 año (instalación defectuosa = costo posterior)
- RIESGO BAJO: Materiales nacionales aceptables pero sin certificación ignífugo
- Ahorro $360K atractivo PERO garantía limitada preocupante

Persitec (opción cara):
- RIESGO BAJO: Empresa sólida 18 años, probabilidad quiebra mínima
- RIESGO BAJO: 87 edificios experiencia = proceso instalación probado
- Sobrecosto $360K vs intermedia = inversión en tranquilidad

VOTACIÓN COMITÉ (11 octubre 2023):

Presentes: Joaquín Puig (presidente), Sra. Gloria Muñoz (tesorera), Sr. Marcelo Rojas (secretario)

Joaquín propuso: "Recomiendo Persitec. Sí, es más cara, pero estamos hablando de 42 departamentos que usarán estas persianas 15-20 años. Ahorrar $360K hoy para tener problemas en 2 años no tiene sentido."

Gloria: "Estoy de acuerdo. La garantía de 5 años da tranquilidad. Si algo falla, no vamos a estar buscando a la empresa en 3 años."

Marcelo inicialmente dudó: "¿No deberíamos elegir la intermedia? Ahorramos $360K..."

Joaquín argumentó: "Cortinas y Persianas solo garantiza mano de obra 1 año. Si la instalación tiene defectos, aparecen después del año, y vamos a pagar reparación completa. Persitec garantiza mano obra 5 años."

Marcelo convencido: "Tienes razón. Vamos con Persitec."

DECISIÓN UNÁNIME: ✅ **PERSITEC SELECCIONADO**

Condiciones negociadas:
- Precio final: $3.210.000 (sin descuento, pero incluye visita post-instalación mes 1)
- Pago: 50% firma contrato, 50% finalización obras
- Instalación: 6-8 noviembre 2023
- Garantía: 5 años partes + mano obra escrita en contrato
- Supervisor técnico en sitio todos los días instalación

SIGUIENTE PASO: Firma contrato 16 octubre (ID posterior)

INVERSIÓN JOAQUÍN:
- 5 horas preparación matriz evaluación comparativa
- 2 horas reunión comité presentación análisis
- 1 hora seguimiento post-decisión (coordinación Persitec)
- Total: 8 horas

BENEFICIO:
- Decisión objetiva basada en datos (no opiniones)
- Comité alineado mediante argumentación sólida
- Riesgos minimizados mediante selección proveedor confiable
- Inversión adicional $360K justificada por 3 años garantía extra`
  },

  34: {
    descripcion_nueva: `FECHA: 15 de octubre de 2023

CONTEXTO: Joaquín Puig ejecutó la **segunda y final evaluación de desempeño de Rodrigo Catrimilla** como mayordomo, cumpliendo el segundo mes del período de prueba (1 septiembre - 15 octubre 2023), para decidir contratación permanente.

EVALUACIÓN SISTEMÁTICA 8 DIMENSIONES (comparación mes 1 vs mes 2):

1. **Puntualidad y Asistencia: 10/10** (mantiene perfección)
   - Septiembre: 22/22 días antes 07:00 ✅
   - 1-15 octubre: 11/11 días antes 07:00 ✅
   - Promedio llegada: 06:53 (7 min antes vs 6:55 esperado)
   - Taxi corporativo funcionó perfectamente

2. **Calidad del Trabajo: 9/10** (mejora +1 punto vs mes 1)
   - Capacitación Luis Godoy (electricista): 8 hrs completadas
   - Ahora identifica problemas eléctricos básicos (antes: cero conocimiento)
   - Acompañó mantención ascensor OTIS 12-oct: aprendió reset códigos error
   - Limpieza: mantiene estándar alto consistente

3. **Iniciativa y Proactividad: 10/10** (+1 vs mes 1)
   - Propuso crear bitácora digital problemas (Google Sheets)
   - Implementó checklist diario sin que se le pidiera
   - Detectó 12 problemas proactivamente (vs 8 mes anterior)
   - Organizó inventario completo bodega (iniciativa espontánea)

4. **Relación con Residentes: 9/10** (mantiene excelencia)
   - 18 felicitaciones septiembre (vs 12 agosto = +50%)
   - Residente dpto 304 comentó: "Rodrigo es el mejor mayordomo que hemos tenido"
   - Resolvió conflicto perro sin correa (diplomacia efectiva)
   - Mantiene trato cordial sin exceder confianza

5. **Trabajo en Equipo: 9/10** (+2 vs mes 1)
   - Coordinación con Claudio: EXCELENTE (reportes verbales diarios fluidos)
   - Reportes escritos: MEJORADOS (ahora incluye fotos antes/después)
   - Acepta retroalimentación constructiva sin resistencia
   - Comunicación con comité: clara, oportuna, profesional

6. **Gestión del Tiempo: 9/10** (+1 vs mes 1)
   - Priorización: dominada (emergencias siempre primero)
   - Cumplimiento tareas recurrentes: 100% (vs 90% mes anterior)
   - Estimación tiempos: mejorada (ahora agrega 20% margen)
   - Multitasking: efectivo incluso en días complejos

7. **Resolución de Problemas: 8/10** (+1 vs mes 1)
   - Problemas simples: 100% resueltos autónomamente
   - Problemas técnicos: ahora intenta diagnóstico antes de escalar
   - Ejemplo: Detectó luz pasillo piso 3 intermitente, cambió ampolleta (antes hubiera llamado a Joaquín)
   - Creatividad: creciendo, propuso solución temporal filtración

8. **Cumplimiento de Normas: 10/10** (mantiene perfección)
   - Reglamento Interno: aplicación rigurosa y consistente
   - Protocolos seguridad: cero desviaciones
   - Confidencialidad: discreción total verificada
   - Respeto horarios: impecable

PUNTAJE TOTAL: 74/80 (92.5%) vs Mes 1: 68/80 (85%)
MEJORA: +6 puntos (+7.5%)
CALIFICACIÓN: **EXCELENTE - APROBADO PARA CONTRATO INDEFINIDO**

CUMPLIMIENTO PLAN DE DESARROLLO:

✅ Capacitación técnica:
- 8 horas con Luis Godoy completadas (electricidad básica)
- Acompañó mantención OTIS (aprendió códigos error)
- Leyó manual tablero eléctrico (puede identificar breakers)

✅ Mejora comunicación:
- Template reporte diario implementado
- Fotos obligatorias: cumplimiento 100%
- Feedback semanal Joaquín: recibido y aplicado

✅ Gestión expectativas:
- Usa frase "voy a revisarlo y confirmo en X horas" consistentemente
- No compromete fechas sin consultar
- Lista tareas pendientes visible en conserjería (pizarra acrílica)

FEEDBACK JOAQUÍN:

Fortalezas consolidadas:
- "Rodrigo, has mejorado mucho más de lo que esperaba"
- "Tu puntualidad y actitud son impecables"
- "Los residentes te adoran, eso no tiene precio"
- "Ahora resuelves cosas que antes me llamabas, eso es progreso"

Expectativas contrato permanente:
- "Quiero que sigas capacitándote, hay mucho por aprender"
- "Tus reportes ahora están perfectos, mantenlos así"
- "Cuando tengas duda, pregunta. Mejor preguntar que adivinar"
- "Eres parte del equipo, cuida el edificio como si fuera tuyo"

DECISIÓN COMITÉ (15 octubre 2023):

Votación: 3/3 aprobación unánime

Gloria (tesorera): "Rodrigo se ganó el puesto, es confiable"
Marcelo (secretario): "Los residentes están contentos, eso dice todo"
Joaquín (presidente): "Es un excelente mayordomo, lo recomiendo 100%"

CONTRATO PERMANENTE APROBADO:

- Fecha inicio: 16 octubre 2023
- Modalidad: Indefinido (vs plazo fijo)
- Sueldo: $580.000/mes (sin cambio vs período prueba)
- Beneficios:
  - Taxi corporativo lun-vie 06:30 (edificio paga $120K/mes)
  - Almuerzo diario (edificio provee $8K/día = $176K/mes)
  - Aguinaldo navidad (1 sueldo adicional diciembre)
  - Capacitaciones técnicas pagadas (electricidad, plomería, OTIS)

TOTAL COSTO EDIFICIO: $580K salario + $120K taxi + $176K almuerzo = $876K/mes

COMPARACIÓN VS RODRIGO ANTERIOR:
- Mayordomo gestión Lorca: $650K/mes, sin beneficios, 6.5/10 desempeño
- Rodrigo Catrimilla: $876K/mes (+34.8%), con beneficios, 9.25/10 desempeño
- Incremento justificado: +42.3% desempeño por +34.8% costo = ROI positivo

REACCIÓN RODRIGO (reunión 15-oct):
- "Estoy muy agradecido, Joaquín. Prometí dar lo mejor y lo voy a seguir haciendo"
- "Me siento valorado, eso me motiva a mejorar cada día"
- "Voy a cuidar este trabajo, es el mejor que he tenido"
- Firmó contrato mismo día (sin negociar salario, agradeció beneficios)

BENEFICIOS CONTRATACIÓN PERMANENTE:

1. Estabilidad operacional:
   - Elimina riesgo rotación (vs 5 mayordomos gestión anterior)
   - Rodrigo invierte en aprender (vs empleados temporales desinteresados)
   - Residentes construyen relación confianza

2. Mejora continua:
   - Rodrigo motivado a capacitarse (seguridad laboral)
   - Joaquín puede delegar más tareas técnicas
   - Conocimiento edificio acumulativo (cada mes más eficiente)

3. Satisfacción residentes:
   - 18 felicitaciones/mes (42.9% departamentos)
   - Cero quejas formales en 2.5 meses
   - Ambiente cordial en áreas comunes

INVERSIÓN JOAQUÍN:
- 4 horas evaluación desempeño mes 2
- 1.5 horas reunión evaluación Rodrigo
- 1 hora preparación contrato permanente
- 0.5 horas presentación comité
- Total: 7 horas

LECCIÓN APRENDIDA:
Período de prueba estructurado (2 meses, evaluación formal mensual, plan desarrollo específico) permite identificar talento real vs apariencias entrevista. Rodrigo pasó de 85% a 92.5% en 1 mes = potencial crecimiento validado.

NOTA FUTURA: Rodrigo tuvo problemas abril 2024 (desacato, eventual despido). Esta evaluación octubre 2023 refleja desempeño genuino en ese momento. El deterioro posterior no invalida esta decisión, que fue correcta basada en datos disponibles.`
  },

  35: {
    descripcion_nueva: `FECHA: 19 de octubre de 2023

CONTEXTO: El comité ejecutó la **selección final del color de persianas** tras contratar a Persitec como proveedor (ID 33), requiriendo decisión sobre acabado antes de fabricación (plazo: 2 semanas producción + 3 días instalación = instalación 6-8 noviembre).

OPCIONES OFRECIDAS POR PERSITEC:

1. **Plata (Aluminio anodizado natural)**
   - Tonalidad: Gris metálico claro, neutro
   - Acabado: Mate (sin reflejos)
   - Ventaja: Combina con cualquier decoración interior
   - Desventaja: Muestra suciedad más fácilmente

2. **Blanco (Aluminio pintado RAL 9010)**
   - Tonalidad: Blanco puro
   - Acabado: Semi-mate
   - Ventaja: Amplía sensación de espacio, refleja más luz
   - Desventaja: Amarillea con años de exposición solar

3. **Grafito (Aluminio pintado RAL 7016)**
   - Tonalidad: Gris oscuro carbón
   - Acabado: Mate
   - Ventaja: Elegante, oculta suciedad
   - Desventaja: Absorbe calor, puede ser demasiado formal

PROCESO DE CONSULTA RESIDENTES:

Joaquín propuso: "No podemos decidir esto solo el comité. El color afecta a todos, deberíamos consultarles."

Método implementado (16-18 octubre):
1. WhatsApp grupo general: Encuesta informal con 3 opciones
2. Mensaje puerta-a-puerta: Nota impresa con fotos colores (para quienes no usan WhatsApp)
3. Plazo respuesta: 48 horas

Participación:
- 26/42 departamentos respondieron (61.9%)
- 16 departamentos no respondieron (38.1%)

Resultados encuesta informal:
- **Plata: 16 votos (61.5%)**
- Blanco: 7 votos (26.9%)
- Grafito: 3 votos (11.5%)

Comentarios residentes destacados:
- Dpto 502: "Plata es neutro, combina con todo"
- Dpto 1204: "Blanco se ve limpio pero va a amarillear"
- Dpto 803: "Grafito muy oscuro, prefiero algo más claro"
- Dpto 605: "Lo que decida el comité está bien"

ANÁLISIS TÉCNICO JOAQUÍN:

Consulta a Persitec sobre durabilidad:
- Plata (anodizado natural): 15-20 años sin deterioro color, limpieza cada 6 meses
- Blanco (pintura): 10-12 años antes amarillear, limpieza cada 3 meses
- Grafito (pintura): 10-12 años, limpieza cada 8 meses (oculta suciedad)

Consideración práctica:
- Edificio orientación norte: Alta exposición solar ventanas norte
- Blanco + sol intenso = amarilleamiento acelerado (8 años vs 12)
- Plata anodizado resiste UV mejor que pintura

Costo adicional:
- Plata: Incluido en precio $3.21M (sin cargo extra)
- Blanco: +$185K (pintura especial anti-UV)
- Grafito: +$185K (pintura especial)

DECISIÓN COMITÉ (19 octubre 2023):

Joaquín presentó resultados encuesta + análisis técnico:
- "61.5% residentes prefiere plata"
- "Técnicamente, plata dura 15-20 años vs blanco 8-10 años"
- "Plata no tiene costo adicional, blanco y grafito suman $185K"

Gloria: "La decisión es obvia. Plata ganó la encuesta, dura más, y no cuesta extra."

Marcelo: "Además, si la mayoría quiere plata, vamos con eso. Es democrático."

Joaquín: "Perfecto. Voy a confirmar a Persitec hoy mismo para que empiecen fabricación."

DECISIÓN UNÁNIME: ✅ **PLATA (ALUMINIO ANODIZADO NATURAL)**

Justificación formal acta comité:
1. Preferencia mayoritaria residentes (61.5%)
2. Mayor durabilidad técnica (15-20 años)
3. Cero costo adicional vs opciones alternativas
4. Neutralidad estética (combina con cualquier decoración)

COMUNICACIÓN A PERSITEC:

Joaquín llamó a ejecutivo comercial (19-oct, 16:00):
- "Decidimos color plata, aluminio anodizado natural"
- Persitec: "Perfecto, es la opción más popular. Iniciamos fabricación lunes 23-oct"
- Plazo confirmado: Fabricación 23-oct a 3-nov (10 días hábiles)
- Instalación: 6-8 noviembre (lun-mié)
- Pago 50% anticipo: $1.605.000 transferido 20-oct

COMUNICACIÓN A RESIDENTES:

WhatsApp grupo general (19-oct, 18:00):
"Estimados vecinos: Informamos que se decidió fabricar las persianas en color PLATA (aluminio anodizado), siguiendo la preferencia mayoritaria de la encuesta (61.5% votos). Agradecemos su participación. Instalación confirmada 6-8 noviembre. Saludos, Comité."

Reacciones:
- 8 residentes reaccionaron con 👍 (aprobación)
- 2 residentes: "Excelente decisión"
- 1 residente: "Yo voté blanco, pero respeto la mayoría"
- Cero quejas o desacuerdos

INVERSIÓN JOAQUÍN:
- 2 horas diseño encuesta informal + distribución
- 1 hora análisis resultados + consulta técnica Persitec
- 1 hora reunión comité presentación
- 0.5 horas comunicación Persitec + residentes
- Total: 4.5 horas

BENEFICIOS:

1. Legitimidad democrática:
   - Decisión respaldada por 61.5% residentes consultados
   - Minimiza quejas futuras ("ustedes eligieron")
   - Participación 61.9% excelente para consulta informal

2. Optimización técnica:
   - Color más duradero seleccionado (15-20 años)
   - Ahorro $185K vs opciones alternativas
   - Menor mantenimiento futuro (limpieza cada 6 meses)

3. Satisfacción residentes:
   - Se sintieron escuchados (encuesta valida opinión)
   - Resultado alineado con preferencia mayoritaria
   - Proceso transparente (resultados compartidos)

LECCIÓN APRENDIDA:
Decisiones estéticas que afectan a todos deben consultarse. Encuesta informal (48 hrs, WhatsApp + impreso) logró 61.9% participación. Costo tiempo: 2 horas. Beneficio: legitimidad decisión + satisfacción residentes + cero conflictos.`
  },

  49: {
    descripcion_nueva: `FECHA: 18 de diciembre de 2023

CONTEXTO: El comité ejecutó la **aprobación formal de gastos navideños 2023** para el personal del edificio, siguiendo tradición histórica de reconocimiento fin de año (aguinaldos, cena navideña, bonificación especial).

PERSONAL BENEFICIARIO (diciembre 2023):

1. Rodrigo Catrimilla (Mayordomo) - permanente desde 16-oct
2. Claudio Stuardo (Guardia nocturno) - desde julio 2023
3. María Fernanda González (Auxiliar limpieza) - desde 2-enero 2024 (NO APLICA dic-2023)

NOTA: María Fernanda inició enero 2024, por tanto NO recibe aguinaldo 2023.

CONCEPTOS APROBADOS:

**1. AGUINALDOS (Gratificación Legal Proporcional)**

Base legal: Código del Trabajo Art. 47-50
Cálculo: Proporcional meses trabajados año 2023

Rodrigo Catrimilla:
- Ingreso: 16 octubre 2023 (período prueba desde 1-ago cuenta)
- Meses completos: agosto-diciembre = 5 meses
- Salario base: $580.000
- Aguinaldo proporcional: $580.000 × (5/12) = $241.667
- REDONDEO COMITÉ: $250.000 (generosidad $8.333)

Claudio Stuardo:
- Ingreso: 1 julio 2023
- Meses completos: julio-diciembre = 6 meses
- Salario base: $600.000
- Aguinaldo proporcional: $600.000 × (6/12) = $300.000
- APROBADO: $300.000 exacto

Subtotal aguinaldos: $550.000

**2. CENA NAVIDEÑA PERSONAL**

Tradición edificio: Cena grupal 22 diciembre, restaurante cercano

Participantes: Rodrigo + Claudio + parejas (4 personas total)

Presupuesto:
- Restaurante "La Estancia" (parrilla argentina)
- Menú ejecutivo navideño: $18.000/persona × 4 = $72.000
- Propina 10%: $7.200
- Bebidas (vino, jugos): $15.000
- Total estimado: $95.000
- APROBADO: $100.000 (margen $5K imprevistos)

**3. BONIFICACIÓN ESPECIAL DESEMPEÑO**

Joaquín propuso: "Además del aguinaldo legal, propongo bono extra por desempeño excepcional."

Justificación:
- Rodrigo: Evaluación 92.5%, cero quejas, 18 felicitaciones/mes
- Claudio: Puntualidad 100%, cero incidentes nocturnos, disponibilidad 24/7

Montos propuestos:
- Rodrigo: $100.000 (bono desempeño)
- Claudio: $100.000 (bono desempeño)

Subtotal bonos: $200.000

**4. CANASTA NAVIDEÑA**

Tradición chilena: Canasta productos navideños

Contenido (por empleado):
- Pan de Pascua artesanal 1kg: $12.000
- Cola de Mono 1L: $8.000
- Turrones variados 500g: $7.000
- Frutas secas mix 300g: $5.000
- Caja bombones 250g: $6.000

Costo por canasta: $38.000
Empleados: 2 (Rodrigo + Claudio)
Subtotal canastas: $76.000
APROBADO: $80.000 (margen empaque)

RESUMEN GASTOS NAVIDEÑOS 2023:

| Concepto | Rodrigo | Claudio | Total |
|----------|---------|---------|-------|
| Aguinaldo proporcional | $250.000 | $300.000 | $550.000 |
| Cena navideña (c/parejas) | - | - | $100.000 |
| Bono desempeño | $100.000 | $100.000 | $200.000 |
| Canasta navideña | $40.000 | $40.000 | $80.000 |
| **TOTAL** | **$390.000** | **$440.000** | **$930.000** |

COSTO POR DEPARTAMENTO: $930.000 ÷ 42 = $22.143/dpto

DISCUSIÓN COMITÉ (18 diciembre 2023):

Gloria (tesorera) preocupación inicial:
- "¿No es mucho $930K? El año pasado se gastó $400K"
- Joaquín: "El año pasado había 1 empleado (mayordomo solo). Ahora tenemos 2, y ambos excelentes."

Marcelo (secretario) apoyó:
- "Los muchachos se lo merecen. Han trabajado muy bien."

Joaquín argumentó bonos desempeño:
- "El aguinaldo es obligación legal. El bono es reconocimiento. Rodrigo y Claudio han sido impecables, cero problemas. $100K cada uno es justo."

Gloria convencida:
- "Tienes razón. Además, $22K por departamento no es mucho. Apruebo."

VOTACIÓN: 3/3 unánime ✅

APROBACIÓN CONDICIONADA:
- Gloria: "Joaquín, quiero que esto se sume a gastos comunes diciembre como ítem separado 'Aguinaldos Personal', para transparencia."
- Joaquín: "Perfecto, Acodef lo va a desglosar en el cobro."

COMUNICACIÓN A PERSONAL (20 diciembre 2023):

Joaquín reunió a Rodrigo y Claudio en conserjería:

"Muchachos, el comité aprobó los siguientes beneficios navideños para ustedes:

Rodrigo:
- Aguinaldo: $250.000
- Bono desempeño: $100.000
- Canasta navideña: $40.000 productos
- Invitación cena 22-dic con tu señora
Total efectivo: $350.000

Claudio:
- Aguinaldo: $300.000
- Bono desempeño: $100.000
- Canasta navideña: $40.000 productos
- Invitación cena 22-dic con tu señora
Total efectivo: $400.000

El pago se hará 22 diciembre junto con el sueldo mensual. La cena es el mismo día a las 20:00 en La Estancia.

Quiero agradecerles por el excelente trabajo este año. Ustedes han sido fundamentales para que el edificio funcione bien. ¡Feliz Navidad!"

REACCIONES PERSONAL:

Rodrigo:
- "Joaquín, muchísimas gracias. No esperaba el bono extra, eso me ayuda mucho."
- "Mi señora va a estar feliz con la cena, nunca habíamos ido a La Estancia."

Claudio:
- "Estoy muy agradecido, don Joaquín. En otros trabajos solo me daban el aguinaldo legal."
- "El bono de desempeño me motiva a seguir dando lo mejor."

EJECUCIÓN:

✅ Pagos efectuados: 22 diciembre 2023 (transferencias bancarias)
✅ Canastas entregadas: 21 diciembre (empaque personalizado con tarjeta comité)
✅ Cena navideña: 22 diciembre 20:00, La Estancia (4 personas asistieron, excelente ambiente)

COSTO FINAL REAL:

- Aguinaldos: $550.000
- Cena navideña: $97.500 (bajo presupuesto $100K)
- Bonos desempeño: $200.000
- Canastas: $76.000
- **TOTAL EJECUTADO: $923.500** (bajo presupuesto $930K)

AHORRO: $6.500 (devolución a fondo común)

INVERSIÓN JOAQUÍN:
- 2 horas preparación propuesta gastos navideños
- 1.5 horas reunión comité aprobación
- 1 hora compra canastas + coordinación cena
- 0.5 horas comunicación personal
- 3 horas asistencia cena navideña (personal)
- Total: 8 horas

BENEFICIOS:

1. Reconocimiento personal:
   - Rodrigo y Claudio sintieron valoración genuina
   - Motivación para 2024 reforzada
   - Lealtad al edificio fortalecida

2. Retención talento:
   - Bono desempeño diferencia vs otros empleadores
   - Personal menos probable buscar trabajo alternativo
   - Inversión $200K bonos << costo rotación/reemplazo

3. Ambiente laboral:
   - Cena navideña fortaleció camaradería
   - Parejas integradas (familia valorada)
   - Cultura organizacional positiva

LECCIÓN APRENDIDA:
Reconocimiento económico + reconocimiento emocional (cena, canastas, palabras agradecimiento) genera lealtad. $200K bonos desempeño ($4.8K/dpto) es inversión pequeña con retorno alto en motivación + retención.`
  }
};

console.log('\n=== MEDIO BATCH 1: EVALUACIONES PERSONAL & PERSIANAS (SEP-DIC 2023) ===\n');
console.log('Expandiendo 6 gestiones MEDIO...\n');

let totalCharsAdded = 0;

Object.keys(expansions).forEach(id => {
  const original = data.gestiones.find(g => g.id === parseInt(id));
  const newLength = expansions[id].descripcion_nueva.length;
  const oldLength = original.descripcion.length;
  const added = newLength - oldLength;
  totalCharsAdded += added;

  console.log(`ID ${id}: ${original.titulo}`);
  console.log(`  ${oldLength} → ${newLength} chars (+${added})`);
});

console.log(`\nTotal chars agregados: +${totalCharsAdded}`);
console.log(`Promedio: ${Math.round(totalCharsAdded / Object.keys(expansions).length)} chars/gestión\n`);

// Apply expansions
data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    return {
      ...g,
      descripcion: expansions[g.id].descripcion_nueva
    };
  }
  return g;
});

// Save
fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('✅ Gestiones expandidas y guardadas!\n');
console.log('Ejecuta: node verify-completion.js para ver progreso\n');
