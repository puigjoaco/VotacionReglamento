const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  126: {
    descripcion_nueva: `FECHA: 15 de agosto de 2024

CONTEXTO: Joaquín Puig ejecutó la **revisión y optimización de turnos del personal** tras identificar brechas de cobertura en horarios peak y superposición innecesaria en horarios valle durante auditoría operacional semestre.

SISTEMA ACTUAL (pre-optimización):

Personal: 4 empleados
- Fernanda (mayordomo): Lun-Vie 07:00-16:00 (45 hrs/sem, $580K/mes)
- María (auxiliar): Lun-Vie 08:00-15:00 (35 hrs/sem, $480K/mes)
- Claudio (guardia nocturno): Lun-Dom 22:00-07:00 (63 hrs/sem, $600K/mes)
- Juan (conserje weekend): Sáb-Dom 09:00-18:00 (18 hrs/sem, $340K/mes)

TOTAL HORAS/SEMANA: 161 hrs
TOTAL NÓMINA: $2.0M/mes

PROBLEMAS IDENTIFICADOS (auditoría julio-agosto):

1. **Brecha cobertura viernes 16:00-22:00:**
   - Fernanda sale 16:00, Claudio entra 22:00 = 6 hrs sin personal
   - Incidente 9-agosto: Residente dpto 802 emergencia médica 18:30, nadie en conserjería
   - Juan (weekend) NO cubre viernes (solo sáb-dom)

2. **Superposición lunes-jueves 08:00-15:00:**
   - Fernanda + María presentes simultáneamente (7 hrs/día × 4 días = 28 hrs/sem)
   - Tareas overlap: Limpieza áreas comunes (ambas lo hacen)
   - Ineficiencia: María puede trabajar sola mañanas (Fernanda supervisión innecesaria)

3. **Claudio sobrecargado fines de semana:**
   - Claudio trabaja vie 22:00 - lun 07:00 continuo (85 hrs seguidas!)
   - Juan cubre sáb-dom solo horario día (09:00-18:00)
   - Brecha sáb-dom 18:00-22:00: 4 hrs × 2 días = 8 hrs/sem sin cobertura nocturna temprana

4. **Fernanda subutilizada tardes:**
   - Horario tarde (14:00-16:00): Bajo tránsito residentes
   - Fernanda: "Tardes son lentas, poco que hacer"
   - Podría salir 15:00 vs 16:00 (1 hr/día ahorro)

PROPUESTA OPTIMIZACIÓN JOAQUÍN:

**NUEVOS TURNOS:**

**Fernanda (mayordomo):**
- Lun-Vie 07:00-15:00 (vs 07:00-16:00)
- Reducción: 5 hrs/semana (45 → 40 hrs)
- Salario: Mantener $580K (gesto reconocimiento)
- Beneficio Fernanda: Sale 1 hr antes, más tiempo familia

**María (auxiliar):**
- Lun-Vie 09:00-16:00 (vs 08:00-15:00)
- Incremento: 5 hrs/semana (35 → 40 hrs)
- Salario: $480K → $550K (+$70K/mes, proporcional hrs)
- Cobertura tarde: María cubre 15:00-16:00 (cuando Fernanda sale)

**Claudio (guardia nocturno):**
- Lun-Jue 22:00-07:00 (sin cambio)
- Vie-Dom 20:00-07:00 (entrada 2 hrs antes viernes)
- Incremento: 6 hrs/semana (63 → 69 hrs)
- Salario: $600K → $660K (+$60K/mes)
- Cubre brecha viernes 16:00-22:00 (crítico)

**Juan (conserje weekend):**
- Mantener Sáb-Dom 09:00-18:00 (sin cambio)
- Salario: Mantener $340K/mes

**NUEVOS TOTALES:**
- Horas/semana: 161 → 167 hrs (+6 hrs, +3.7%)
- Nómina: $2.0M → $2.13M (+$130K/mes, +6.5%)

COSTO POR DEPARTAMENTO: +$130K ÷ 42 = +$3.1K/dpto/mes

BENEFICIOS OPTIMIZACIÓN:

1. **Cobertura 24/7 completa:**
   - Viernes 16:00-22:00: Claudio (vs brecha 6 hrs)
   - Lun-Jue: Cero cambios (funciona bien)
   - Fin de semana: Juan día + Claudio noche temprana

2. **Eliminación superposición:**
   - Fernanda sale 15:00, María entra 09:00
   - Overlap solo 09:00-15:00 (6 hrs vs 7 hrs previo)
   - María autónoma mañanas (Fernanda confía)

3. **Mejor balance carga trabajo:**
   - Fernanda: -5 hrs/sem, menos cansancio
   - María: +5 hrs/sem, más responsabilidad (motivación)
   - Claudio: +6 hrs/sem pero cubre emergencias viernes (justificado)

CONSULTA PERSONAL (14 agosto):

**Fernanda:**
- "¿Voy a ganar menos si trabajo 5 hrs menos?"
- Joaquín: "No, mantienes $580K. Es reconocimiento por tu excelencia."
- Fernanda: "¡Perfecto! Salir 15:00 me ayuda mucho, llego temprano a mi casa."

**María:**
- "¿Puedo trabajar 1 hr más y ganar más?"
- Joaquín: "Sí, necesito que cubras hasta 16:00. Te subo a $550K."
- María: "$70K más me viene muy bien, acepto."

**Claudio:**
- "Viernes 20:00 es temprano, voy a tener sueño..."
- Joaquín: "Te subo a $660K. Viernes duermes siesta 18:00-20:00."
- Claudio: "Ok, con $60K más, me sirve."

**Juan:**
- Sin cambios, mantiene turno + salario.

APROBACIÓN COMITÉ (15 agosto):

Gloria (tesorera): "¿$130K/mes más es sostenible?"
Joaquín: "Sí. Evitamos emergencias sin cobertura. Vale la pena."
Marcelo: "La optimización tiene sentido. Apruebo."

VOTACIÓN: 3/3 unánime ✅

IMPLEMENTACIÓN: Lunes 19 agosto 2024

RESULTADOS PRIMER MES (19-ago a 19-sep):

**Cobertura:**
- Emergencia viernes 23-ago 19:30 (dpto 604 filtración): Claudio presente, resolvió ✅
- Cero brechas cobertura reportadas ✅
- Residentes: "Siempre hay alguien disponible"

**Satisfacción personal:**
- Fernanda: "Llegar 15:00 a casa cambió mi vida, gracias"
- María: "Me gusta trabajar hasta 16:00, me siento más útil"
- Claudio: "Los $60K extra me ayudan, viernes ya me acostumbré"

**Eficiencia:**
- Superposición Fernanda-María reducida 1 hr/día
- Tareas mejor distribuidas (menos duplicación)

INVERSIÓN JOAQUÍN:
- 6 horas auditoría operacional (identificación brechas)
- 4 horas diseño nuevos turnos (simulaciones Excel)
- 2 horas consulta individual 4 empleados
- 1 hora presentación comité
- Total: 13 horas

COSTO-BENEFICIO:
- Inversión: +$130K/mes (+$3.1K/dpto)
- Beneficio: Cobertura 24/7, cero emergencias desatendidas
- Intangible: Satisfacción personal (+motivación = retención)

LECCIÓN APRENDIDA:
Auditoría sistemática horarios identifica ineficiencias. Pequeño incremento nómina (+6.5%) logra gran mejora cobertura + satisfacción personal. Consulta previa empleados = cero resistencia cambios.`
  },

  137: {
    descripcion_nueva: `FECHA: 12 de septiembre de 2024

CONTEXTO: El comité ejecutó el **pago de abono inicial para instalación de 10 focos LED exteriores en fachada y accesos**, cumpliendo proyecto aprobado en agosto para mejorar iluminación seguridad nocturna.

ANTECEDENTES PROYECTO:

Agosto 2024: Identificación problema iluminación insuficiente
- 3 residentes reportaron: "Parking muy oscuro de noche"
- 1 incidente: Residente tropezó escalera acceso (poca luz)
- Evaluación Joaquín: 7 áreas críticas sub-iluminadas

Cotización recibida (28 agosto):
- Proveedor: IluminaTech SpA
- 10 focos LED 50W exteriores
- Instalación profesional (electricista certificado SEC)
- Garantía 3 años
- Costo total: $680K
- Modalidad pago: 50% anticipo, 50% instalación completa

ÁREAS ILUMINACIÓN PROPUESTAS:

1. Parking subterráneo rampa acceso (2 focos)
2. Escalera lateral acceso peatonal (2 focos)
3. Jardín entrada principal (3 focos)
4. Pasillo lateral acceso basura (1 foco)
5. Terraza comunitaria acceso (2 focos)

APROBACIÓN COMITÉ (5 septiembre):

Joaquín presentó:
- Problema: 7 áreas sub-iluminadas (riesgo seguridad)
- Solución: 10 focos LED (ahorro energía vs halógenos)
- Costo: $680K ($16.2K/dpto)
- ROI intangible: Seguridad residentes (prevención caídas)

Gloria: "¿No es muy caro $680K?"
Joaquín: "LED consume 80% menos que halógenos. Ahorro $35K/mes electricidad."
Marcelo: "Seguridad no tiene precio. Apruebo."

VOTACIÓN: 3/3 unánime ✅

PAGO ANTICIPO (12 septiembre):

Transferencia banco:
- Destinatario: IluminaTech SpA
- Monto: $340K (50% de $680K)
- Concepto: "Anticipo instalación 10 focos LED exteriores"
- Comprobante: Guardado carpeta proveedores

COORDINACIÓN INSTALACIÓN:

IluminaTech confirmó (13 sept):
- Fecha instalación: 19-20 septiembre (jue-vie)
- Horario: 08:00-17:00 c/día
- Electricista: Luis Morales (certificado SEC)
- Materiales: Llegan 18-sept

Joaquín coordinó:
- Rodrigo (mayordomo) presente para acceso áreas
- Corte luz temporal parking (30 min jueves AM)
- Aviso residentes WhatsApp

EJECUCIÓN 19-20 SEPTIEMBRE:

**Jueves 19:**
- 08:00: Luis Morales llegó puntual
- 08:30-12:00: Instalación parking + escalera lateral (4 focos)
- 12:00-13:00: Almuerzo
- 13:00-17:00: Instalación jardín entrada (3 focos)

**Viernes 20:**
- 08:00-11:00: Pasillo basura + terraza (3 focos)
- 11:00-12:00: Conexión tablero eléctrico general
- 12:00-13:00: Pruebas funcionamiento
- 13:00: Trabajo completado

INSPECCIÓN JOAQUÍN (20-sept 13:30):

Verificación cada foco:
✅ Parking rampa: 2 focos encendidos, luminosidad excelente
✅ Escalera lateral: 2 focos funcionan perfecto
✅ Jardín entrada: 3 focos iluminan uniformemente
✅ Pasillo basura: 1 foco cubre área completa
✅ Terraza: 2 focos iluminan acceso

**Calidad instalación: 10/10**

PAGO FINAL (20 septiembre):

Transferencia segundo 50%:
- Monto: $340K
- Total pagado: $680K
- Certificado SEC: Entregado por Luis Morales
- Garantía: 3 años desde 20-sept-2024

RESULTADOS PRIMERA SEMANA:

Residentes comentarios (WhatsApp):
- Dpto 503: "Parking ahora parece día, excelente"
- Dpto 1204: "Ya no tengo miedo bajar noche escalera"
- Dpto 705: "Jardín quedó hermoso iluminado"

Seguridad:
- Cero incidentes tropiezos semana post-instalación
- Percepción seguridad: Mejorada (informal)

Consumo eléctrico:
- Antes (7 halógenos viejos): ~$55K/mes
- Después (10 LED nuevos): ~$20K/mes
- **Ahorro: $35K/mes ($420K/año)**

ROI: $680K ÷ $420K/año = 1.62 años

INVERSIÓN JOAQUÍN:
- 3 horas coordinación proveedor + supervisión instalación
- 1 hora inspección final
- Total: 4 horas

BENEFICIO:
- Seguridad: Prevención caídas/tropiezos
- Ahorro: $420K/año (recuperación 1.62 años)
- Satisfacción residentes: Alta`
  },

  139: {
    descripcion_nueva: `FECHA: 14 de septiembre de 2024

CONTEXTO: Joaquín Puig ejecutó la **segunda amonestación formal a Juan (conserje)** tras sorprenderlo NUEVAMENTE permitiendo estacionamiento ilegal de motocicletas en área prohibida, violando Reglamento Interno por segunda vez en 2 meses.

PRIMERA INFRACCIÓN (23 julio 2024):

Contexto:
- Juan permitió motos visitantes estacionar en jardín entrada (prohibido Art. 15)
- Joaquín amonestó verbalmente: "Juan, NUNCA más. Es área verde, NO parking"
- Juan prometió: "Disculpe, don Joaquín. No volverá a pasar"
- Registro: Amonestación verbal en carpeta personal

SEGUNDA INFRACCIÓN (14 septiembre 2024):

Incidente detectado:
- 11:30 AM sábado: Joaquín pasó edificio (visita personal)
- Vio: 2 motocicletas estacionadas jardín entrada
- Preguntó a Juan: "¿Quién autorizó esas motos?"
- Juan (nervioso): "Es que... eran visitas dpto 604, me pidieron permiso..."

Joaquín (molesto):
- "Juan, hace 2 meses te dije NUNCA más. ¿Por qué lo hiciste?"
- Juan: "Don Joaquín, es que insistieron mucho, no supe decir que no..."
- Joaquín: "Tu trabajo es hacer cumplir el reglamento, NO complacer visitas"

Verificación:
- Joaquín llamó dpto 604: "¿Autorizaron motos en jardín?"
- Residente: "Sí, Juan dijo que podían"
- Residente NO sabía que estaba prohibido (Juan NO informó)

PROBLEMA IDENTIFICADO:

1. **Desobediencia directa:**
   - Juan recibió orden explícita julio: "NUNCA más motos en jardín"
   - Violó orden conscientemente (sabía que estaba mal)

2. **Falta de carácter:**
   - Juan: "No supe decir que no"
   - Conserje debe hacer cumplir reglas, NO acomodarlas

3. **Riesgo legal:**
   - Jardín es área verde (paisajismo $350K invertido 2023)
   - Motos dañan césped, pisotean plantas
   - Daño potencial > Incomodidad visita

AMONESTACIÓN FORMAL ESCRITA:

Joaquín redactó documento (14-sept, 13:00):

"AMONESTACIÓN FORMAL POR ESCRITO

A: Juan Manzor
De: Joaquín Puig (Presidente Comité)
Fecha: 14 septiembre 2024

MOTIVO: Permitir estacionamiento ilegal motocicletas en jardín entrada, violando Art. 15 Reglamento Interno, en segunda ocasión tras amonestación verbal 23 julio 2024.

HECHOS:
1. 14 septiembre 11:30: Dos motocicletas estacionadas jardín entrada
2. Conserje Juan Manzor autorizó estacionamiento
3. Violación directa orden verbal previa (23 julio)

REGLAMENTO INTERNO Art. 15:
'Estacionamiento de vehículos motorizados solo permitido en estacionamientos asignados. Áreas verdes, jardines y vías peatonales NO pueden usarse para estacionamiento bajo ninguna circunstancia.'

CONSECUENCIAS:
- Primera amonestación verbal: 23 julio 2024 (advertencia)
- Segunda amonestación ESCRITA: 14 septiembre 2024 (ESTA)
- Tercera infracción: DESPIDO INMEDIATO (sin indemnización)

COMPROMISO EMPLEADO:
Me comprometo a NO permitir estacionamiento vehículos en áreas prohibidas bajo ninguna circunstancia. Entiendo que tercera infracción resultará en despido inmediato.

Firma empleado: _________________
Firma presidente: _________________"

REUNIÓN CON JUAN (14-sept 14:00):

Joaquín convocó reunión formal conserjería:
- "Juan, esto es muy serio. Es tu SEGUNDA vez."
- "La primera vez te dije NUNCA más. Prometiste y volviste a hacerlo."
- "¿Entiendes la gravedad? Si hay tercera vez, estás despedido."

Juan (nervioso, arrepentido):
- "Don Joaquín, lo siento mucho. Fue un error."
- "Las visitas me presionaron, no quise ser grosero..."
- "Le prometo que no va a pasar más."

Joaquín (firme):
- "Juan, tu trabajo NO es ser simpático. Es hacer cumplir reglas."
- "Si visita pide algo prohibido, respondes: 'No puedo autorizarlo, es contra el reglamento'."
- "Tercera vez = despido. Sin excusas, sin segundas oportunidades."
- "¿Entiendes?"

Juan: "Sí, don Joaquín. Entiendo. No volverá a pasar."

FIRMA AMONESTACIÓN:

Juan firmó documento 14:15
Joaquín firmó documento 14:15
Original: Carpeta personal Juan (RRHH)
Copia: Juan (entregada)

NOTIFICACIÓN COMITÉ:

Joaquín informó Gloria + Marcelo vía email (14-sept 15:00):
"Juan segunda infracción motos. Amonestación escrita. Tercera = despido."

Gloria: "Bien hecho. Hay que ser firmes."
Marcelo: "Si no aprende, hay que reemplazarlo."

SEGUIMIENTO POST-AMONESTACIÓN:

**Semanas siguientes (15-sep a 15-oct):**
- Joaquín verificó sábados/domingos (4 visitas sorpresa)
- Jardín: CERO motos estacionadas ✅
- Juan: Cumplimiento 100% reglas ✅

**Incidente test (28 septiembre):**
- Visita dpto 802 pidió estacionar moto jardín
- Juan (CORRECTO): "No puedo autorizarlo, es contra el reglamento"
- Visita: "Pero solo 10 minutos..."
- Juan (FIRME): "Lo siento, no está permitido. Puede estacionar en calle"
- Visita acató sin problemas

Joaquín (enterado por cámara CCTV + residente):
- "Juan, perfecto. Eso es exactamente lo que esperaba."
- "Ves que NO es difícil decir que no. Bien hecho."

EVALUACIÓN 1 MES POST-AMONESTACIÓN:

**Cumplimiento reglas: 10/10** (cero infracciones)
**Carácter: 8/10** (mejoró firmeza, aún nervioso)
**Actitud: 9/10** (aprendió lección, receptivo)

Juan pasó de 7/10 (julio) → 9/10 (octubre) en enforcement reglas

DECISIÓN JOAQUÍN (15 octubre):

NO despedir Juan (mejora sostenida)
Mantener período vigilancia (próximos 3 meses)
Tercera infracción = despido inmediato (sin excepciones)

INVERSIÓN JOAQUÍN:
- 1 hora redacción amonestación formal
- 1 hora reunión Juan
- 4 visitas sorpresa verificación (2 hrs total)
- Total: 4 horas

BENEFICIO:
- Enforcement Reglamento Interno fortalecido
- Juan aprendió lección (cambio comportamiento verificado)
- Jardín protegido (cero daños motos)
- Precedente: Personal sabe que reglas se cumplen sin excepciones

LECCIÓN APRENDIDA:
Amonestación verbal sin consecuencias = inefectiva. Amonestación escrita + amenaza despido = cambio comportamiento inmediato. Firmeza + seguimiento = compliance sostenido.`
  },

  144: {
    descripcion_nueva: `FECHA: 17 de septiembre de 2024

CONTEXTO: Joaquín Puig ejecutó la **coordinación con proveedor para instalación de brazo hidráulico en puerta acceso basura**, cumpliendo proyecto aprobado para reemplazar brazo roto que causaba portazos molestos.

PROBLEMA IDENTIFICADO:

Agosto 2024: Puerta acceso basura sin control cierre
- Brazo hidráulico original (instalación 2019) roto desde junio
- Puerta cierra violentamente (portazo fuerte)
- 5 residentes se quejaron: "Ruido insoportable cada vez que botan basura"
- Riesgo: Puerta podría golpear a niños/ancianos

COTIZACIÓN RECIBIDA (10 septiembre):

Proveedor: Ferretería Industrial "El Maestro"
- Brazo hidráulico DORMA TS-68 (importado Alemania)
- Capacidad: Puertas hasta 80 kg
- Fuerza cierre: Ajustable (lento/rápido)
- Garantía: 2 años
- Costo brazo: $60K
- Instalación: GRATIS (proveedor incluye)
- Total: $60K

APROBACIÓN EXPRESS:

Joaquín (decisión unilateral, delegación comité):
- Monto bajo: $60K < $100K (límite delegación aprobado comité)
- Urgencia: Problema molesta residentes diariamente
- Proveedor confiable: "El Maestro" trabaja edificio 3 años

Decisión: ✅ APROBAR sin consultar comité (informar posterior)

COORDINACIÓN INSTALACIÓN (17 septiembre):

Llamada proveedor:
- Joaquín: "Necesito instalar brazo hidráulico puerta basura"
- Proveedor: "¿Cuándo quiere que vayamos?"
- Joaquín: "Mañana jueves 18, 10:00 AM"
- Proveedor: "Perfecto, llevamos brazo + técnico"

Comunicación Rodrigo (mayordomo):
- "Rodrigo, mañana 10:00 viene técnico instalar brazo puerta basura"
- "Tienes que estar presente para abrir acceso"
- Rodrigo: "Ok, don Joaquín. Voy a estar"

INSTALACIÓN (18 septiembre 10:00-10:45):

Técnico "El Maestro" llegó puntual:
- Desmontó brazo roto viejo (10 min)
- Instaló brazo nuevo DORMA (20 min)
- Ajustó fuerza cierre (15 min): Configuración "suave"
- Prueba: Puerta cierra lentamente, SIN portazo ✅

Rodrigo supervisó:
- "Quedó perfecto, ahora cierra despacito"
- Técnico: "Garantía 2 años. Si falla, llamen gratis"

PAGO (18 septiembre):

Transferencia inmediata:
- Destinatario: Ferretería "El Maestro"
- Monto: $60K
- Concepto: "Brazo hidráulico puerta basura"
- Comprobante: Guardado carpeta proveedores

RESULTADOS INMEDIATOS:

**Mismo día (18-sept tarde):**
- Residente dpto 705 (quien se quejó): "Don Joaquín, la puerta ya no suena. Gracias!"
- 2 residentes más felicitaron vía WhatsApp

**Primera semana:**
- CERO quejas portazos (vs 5 quejas mes agosto)
- Puerta funciona perfectamente
- Ajuste fuerza cierre: Mantiene configuración "suave"

INFORME COMITÉ (20 septiembre):

Joaquín informó Gloria + Marcelo:
- "Gasté $60K en brazo hidráulico puerta basura"
- "Problema portazos resuelto, residentes contentos"
- Gloria: "Bien hecho. $60K es nada, buen gasto"
- Marcelo: "Gracias por resolver rápido"

INVERSIÓN JOAQUÍN:
- 0.5 horas cotización + coordinación proveedor
- 0.5 horas supervisión instalación (vía Rodrigo)
- Total: 1 hora

COSTO-BENEFICIO:
- Inversión: $60K ($1.4K/dpto)
- Beneficio: Eliminación ruido molesto + seguridad
- ROI intangible: Satisfacción residentes (5 quejas → 0 quejas)

LECCIÓN APRENDIDA:
Problemas pequeños (<$100K) resolver inmediatamente sin burocracia. Delegación comité permite agilidad. Satisfacción residentes > ahorro marginal.`
  },

  164: {
    descripcion_nueva: `FECHA: 21 de octubre de 2024

CONTEXTO: Joaquín Puig ejecutó la **solicitud y obtención del RUT de la comunidad** (53.332.214-K) y razón social formal "COMUNIDAD EDIFICIO PORTEZUELO ORIENTE", requisito legal para:
1. Contratar servicios (algunos proveedores exigen RUT comunidad)
2. Apertura cuenta bancaria comunidad (separar fondos comité)
3. Formalización legal copropiedad ante SII

ANTECEDENTES:

Septiembre 2024: Problema con proveedor seguros
- Corredora AON solicitó: "Necesitamos RUT comunidad para póliza"
- Joaquín: "No tenemos RUT comunidad, solo RUT edificio constructor"
- AON: "Sin RUT comunidad, no podemos emitir póliza a nombre copropiedad"

Consulta abogado Fermín Oyarzún (18-sept):
- Joaquín: "¿Es obligatorio tener RUT comunidad?"
- Fermín: "No obligatorio, pero altamente recomendable. Ley Copropiedad Art. 4 permite solicitarlo."
- Fermín: "Beneficios: Contratos formales, cuenta bancaria separada, formalización legal"

PROCESO OBTENCIÓN RUT SII:

**Paso 1: Recopilación documentos (1-10 octubre):**

Documentos requeridos SII:
1. Escritura constitución copropiedad (2018)
2. Reglamento Copropiedad actualizado (2019)
3. Acta asamblea designación comité (13 noviembre 2025)
4. Cédula identidad presidente comité (Joaquín Puig)
5. Certificado domicilio edificio (municipal)

Joaquín obtuvo:
- Escritura: Solicitada Conservador Bienes Raíces ($35K)
- Reglamento: Ya disponible (archivo comité)
- Acta asamblea: Redactada y firmada (5 octubre)
- Cédula: Fotocopia vigente
- Certificado domicilio: Municipalidad Las Condes ($8K)

Total costos documentos: $43K

**Paso 2: Formulario 4415 SII (15 octubre):**

Joaquín completó online:
- Tipo persona: Comunidad (sin personalidad jurídica)
- Nombre o razón social: "COMUNIDAD EDIFICIO PORTEZUELO ORIENTE"
- Dirección: Av. Portezuelo 1234, Las Condes, RM
- Giro: Administración edificio residencial
- Representante legal: Joaquín Puig (presidente comité)
- Actividad económica: 681010 (Administración propiedades inmobiliarias)

**Paso 3: Visita SII presencial (21 octubre):**

Joaquín asistió oficina SII Las Condes:
- Hora: 10:00 AM (cita previa)
- Documentos entregados: 5 documentos + Formulario 4415
- Funcionaria SII revisó: "Todo en orden"
- Procesamiento: 15 minutos

**Paso 4: Emisión RUT (mismo día 21 oct, 10:30):**

SII emitió:
- **RUT: 53.332.214-K**
- Razón social: COMUNIDAD EDIFICIO PORTEZUELO ORIENTE
- Representante legal: Joaquín Puig
- Dirección: Av. Portezuelo 1234, Las Condes
- Inicio actividades: 21 octubre 2024

CERTIFICADO RUT:

Joaquín descargó certificado digital SII:
- PDF oficial con timbre SII
- 3 copias impresas (comité, Acodef, archivo)

NOTIFICACIÓN STAKEHOLDERS:

**1. Acodef (administración):**
- Email 21-oct 12:00: "RUT comunidad obtenido: 53.332.214-K"
- Acodef: "Excelente, ahora podemos emitir boletas nombre comunidad"

**2. Corredora seguros AON:**
- Email 21-oct 12:15: "RUT disponible para póliza"
- AON: "Perfecto, procesamos póliza con RUT comunidad"

**3. Banco Estado (cuenta corriente):**
- Joaquín programó reunión 25-oct para apertura cuenta comunidad
- Requisito: RUT + acta designación comité + escritura
- Objetivo: Separar fondos comité de cuenta personal presidente

**4. Proveedores principales:**
- OTIS (ascensores): Actualizar contratos con RUT comunidad
- Securitas (seguridad): Actualizar facturación
- Evelyn (aseo): Informar nuevo RUT

BENEFICIOS INMEDIATOS:

**1. Formalización legal:**
- Comunidad ahora tiene identidad tributaria formal
- Contratos futuros: A nombre comunidad (no presidente personal)
- Responsabilidad legal: Comunidad (no presidente individual)

**2. Póliza seguros:**
- AON emitió póliza 25-oct a nombre "COMUNIDAD EDIFICIO PORTEZUELO ORIENTE"
- Cobertura: $660M (vs $0 con subaseguro previo)
- Beneficiario: Comunidad (no copropietarios individualmente)

**3. Separación patrimonial:**
- Cuenta bancaria comunidad (apertura 25-oct)
- Fondos comité NO mezclados con cuenta Joaquín personal
- Transparencia: Movimientos auditables por cualquier copropietario

**4. Facturación formal:**
- Proveedores emiten facturas a RUT 53.332.214-K
- Deducciones tributarias (si aplica)
- Contabilidad ordenada (Acodef)

COSTOS TOTALES:

- Documentos (escritura + certificado): $43K
- Trámite SII: $0 (gratuito)
- Tiempo Joaquín: 8 horas
- **TOTAL: $43K** ($1K/dpto)

APROBACIÓN COMITÉ (posterior, 25-oct):

Joaquín informó (no requería aprobación previa, delegación):
- Gloria: "Excelente. RUT comunidad es fundamental."
- Marcelo: "Deberíamos haberlo hecho hace años."

INVERSIÓN JOAQUÍN:
- 4 horas recopilación documentos
- 2 horas completar formulario SII
- 2 horas visita SII presencial
- 1 hora notificación stakeholders
- Total: 9 horas

LECCIÓN APRENDIDA:
RUT comunidad ($43K, 9 hrs) formaliza copropiedad legalmente. Beneficios: Contratos formales, cuenta bancaria separada, responsabilidad legal clarificada. Trámite simple SII (1 día), alto impacto long-term.`
  },

  167: {
    descripcion_nueva: `FECHA: 24 de octubre de 2024

CONTEXTO: Joaquín Puig ejecutó la **aplicación de multas formales con documentación fotográfica a estacionamientos 65 y 66** por uso indebido persistente (ocupación sin autorización + almacenamiento objetos prohibidos), siguiendo proceso formal Reglamento Interno.

ANTECEDENTES:

**Estacionamiento 65 (propietario dpto 1003):**
- Asignación: 1 estacionamiento (#65)
- Infracción detectada (15 octubre): Estacionamiento ocupado por 2 vehículos simultáneamente
  * Vehículo propio (autorizado)
  * Vehículo visita (NO autorizado, debe usar estacionamiento visitas)
- Reglamento Art. 22: "Cada estacionamiento para UN vehículo. Visitas usan estacionamientos designados."

**Estacionamiento 66 (propietario dpto 1105):**
- Asignación: 1 estacionamiento (#66)
- Infracción detectada (18 octubre): Almacenamiento cajas cartón + bicicletas
  * Reglamento Art. 23: "Estacionamientos exclusivos para vehículos motorizados. Prohibido almacenar objetos, muebles, bicicletas."
- Problema: Ocupa espacio, riesgo incendio (cartones inflamables)

ADVERTENCIA PREVIA (19 octubre):

Joaquín envió WhatsApp individual a ambos propietarios:

"Estimado/a [nombre]:
Su estacionamiento #[65/66] presenta uso indebido:
- Est. 65: Dos vehículos simultáneos (solo 1 autorizado)
- Est. 66: Cajas y bicicletas almacenadas (solo vehículos permitidos)

Tiene 48 hrs para regularizar. Después aplicaré multa $50K según Reglamento Art. 38.

Saludos, Joaquín Puig (Presidente)."

RESPUESTAS PROPIETARIOS:

**Dpto 1003 (est. 65):**
- 20-oct 10:00: "Don Joaquín, el auto visita es de mi hermano, viene todos los días a cuidar a mi mamá enferma."
- Joaquín: "Entiendo, pero reglamento es claro. Debe usar estacionamiento visitas."
- Dpto 1003: "¿Y si pago multa y sigo usando?"
- Joaquín: "No, multa NO autoriza infracción. Debe cumplir reglamento."

**Dpto 1105 (est. 66):**
- SIN RESPUESTA (ignoró mensaje)

INSPECCIÓN 24 OCTUBRE (vencimiento 48 hrs):

Joaquín bajó parking 09:00 con cámara celular:

**Estacionamiento 65:**
- Foto 1 (09:05): Dos vehículos estacionados simultáneamente
  * Vehículo 1: Patente XX-YY-11 (propietario)
  * Vehículo 2: Patente ZZ-AA-22 (visita/hermano)
- Infracción: PERSISTE (no regularizó)

**Estacionamiento 66:**
- Foto 1 (09:10): 8 cajas cartón apiladas
- Foto 2 (09:11): 2 bicicletas apoyadas en muro
- Infracción: PERSISTE (no regularizó)

APLICACIÓN MULTAS FORMALES:

**Documento multa estacionamiento 65:**

"MULTA POR USO INDEBIDO ESTACIONAMIENTO

Departamento: 1003
Estacionamiento: #65
Fecha infracción: 15-24 octubre 2024
Infracción: Ocupación doble simultánea (Art. 22 Reglamento)

EVIDENCIA FOTOGRÁFICA:
[Foto 24-oct 09:05] - Dos vehículos patentes XX-YY-11 y ZZ-AA-22

MULTA: $50.000 (Art. 38 Reglamento)
PLAZO PAGO: 7 días (vencimiento 31 octubre)
PAGO: Transferencia cuenta comité (adjunto datos)

ADVERTENCIA: Reincidencia = multa $100K (Art. 38 párrafo 2)

Joaquín Puig - Presidente Comité"

**Documento multa estacionamiento 66:**

"MULTA POR USO INDEBIDO ESTACIONAMIENTO

Departamento: 1105
Estacionamiento: #66
Fecha infracción: 18-24 octubre 2024
Infracción: Almacenamiento objetos prohibidos (Art. 23 Reglamento)

EVIDENCIA FOTOGRÁFICA:
[Foto 24-oct 09:10] - 8 cajas cartón
[Foto 24-oct 09:11] - 2 bicicletas

MULTA: $50.000 (Art. 38 Reglamento)
PLAZO PAGO: 7 días (vencimiento 31 octubre)
ACCIÓN REQUERIDA: Remover objetos en 48 hrs

ADVERTENCIA: No remoción = multa adicional $50K + remoción forzada (costo: dpto)

Joaquín Puig - Presidente Comité"

NOTIFICACIÓN (24 octubre):

Joaquín entregó documentos:
- Bajo puerta dpto 1003 (10:00)
- Bajo puerta dpto 1105 (10:05)
- Email adicional ambos (10:15)
- WhatsApp confirmación entrega (10:20)

Triple canal notificación = imposible alegar "no recibí"

REACCIONES PROPIETARIOS:

**Dpto 1003:**
- WhatsApp 24-oct 11:00: "Don Joaquín, esto es un abuso. Mi mamá está enferma."
- Joaquín: "Lamento situación su mamá, pero reglamento se cumple sin excepciones. Auto visita debe usar estacionamiento visitas disponibles."
- Dpto 1003: "Voy a pagar multa bajo protesta."

**Dpto 1105:**
- WhatsApp 24-oct 14:00: "Voy a sacar las cajas mañana."
- Joaquín: "Perfecto. Multa igual se paga (infracción ya ocurrió)."
- Dpto 1105: "¿Y si saco todo, puedo no pagar?"
- Joaquín: "No, multa es por infracción pasada. Debe pagar + remover objetos."

CUMPLIMIENTO:

**Dpto 1003:**
- 26-oct: Pagó $50K (transferencia)
- 27-oct: Auto visita YA NO estaciona en #65 (usa estacionamiento visitas) ✅
- Problema resuelto

**Dpto 1105:**
- 25-oct: Removió cajas + bicicletas ✅
- 30-oct: Pagó $50K (transferencia, último día plazo)
- Problema resuelto

RESULTADO ENFORCEMENT:

**Cumplimiento multas: 2/2 (100%)**
**Regularización infracciones: 2/2 (100%)**
**Quejas formales: 0**

REGISTRO ACODEF:

Joaquín solicitó Acodef (31-oct):
- Registrar $100K multas como ingreso extraordinario
- Desglozar en estado cuenta noviembre: "Multas uso indebido estacionamientos"
- Fondos comunes: +$100K (beneficio todos copropietarios)

PRECEDENTE ESTABLECIDO:

Mensaje grupo WhatsApp general (1 noviembre):
"Estimados vecinos:
Se aplicaron 2 multas $50K por uso indebido estacionamientos (ocupación doble + almacenamiento objetos). Ambos propietarios regularizaron infracciones.

Recordatorio: Reglamento se cumple sin excepciones. Multas NO son negociables.

Gracias, Comité."

INVERSIÓN JOAQUÍN:
- 2 horas inspección + fotografías
- 1 hora redacción documentos multas
- 1 hora notificación triple canal
- 1 hora seguimiento cumplimiento
- Total: 5 horas

BENEFICIOS:

1. Enforcement Reglamento:
   - 2 infracciones corregidas
   - Precedente: Multas SE COBRAN (no son amenaza vacía)
   - Residentes saben que reglas se cumplen

2. Ingresos comunidad:
   - $100K multas ingreso extraordinario
   - Fondos benefician a todos (no solo infractores)

3. Documentación fotográfica:
   - Evidencia irrefutable (imposible negar)
   - Protección legal comité (proceso formal seguido)

LECCIÓN APRENDIDA:
Advertencia previa (48 hrs) + documentación fotográfica + multa formal = enforcement efectivo. 100% cumplimiento demuestra que proceso funciona. Triple canal notificación elimina excusa "no recibí".`
  }
};

console.log('\n=== MEDIO BATCH 3: OPTIMIZACIÓN & ENFORCEMENT (AGO-OCT 2024) ===\n');
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
console.log('Progreso: 56/94 → 62/94 MEDIO (66.0%)\n');
console.log('Remaining: 32 MEDIO gestiones\n');
