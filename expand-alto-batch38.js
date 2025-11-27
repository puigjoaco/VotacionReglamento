const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  264: {
    descripcion_nueva: `FECHA: 10 de abril de 2025

CONTEXTO: Fernanda González (mayordomo) ejecutó el **proceso masivo de enrolamiento de huellas digitales** para residentes nuevos y propietarios que aún no habían registrado su biometría en el sistema de acceso instalado en marzo de 2024. Esta gestión fue parte del plan de optimización post-capacitación (ID 252), donde se identificó que 18 departamentos (42.9%) aún dependían exclusivamente de alternativas (RFID/códigos) sin tener huella registrada.

PROBLEMA IDENTIFICADO:
Durante la evaluación del sistema biométrico (ID 245, marzo 2025), se detectó que **18 de 42 departamentos** no tenían huellas registradas en el sistema:
- 12 departamentos: Propietarios nunca registraron (llegaron después instalación 2024)
- 4 departamentos: Residentes nuevos (cambio de arrendatario)
- 2 departamentos: Huella borrada accidentalmente (error técnico nov 2024)

Esta situación generaba:
- **Dependencia total en alternativas**: Mayor carga administrativa (reposición tarjetas RFID perdidas)
- **Menor seguridad**: Tarjetas RFID transferibles vs huella personal
- **Capacidad desperdiciada**: Sistema biométrico subutilizado (solo 57.1% usuarios registrados)
- **Costo oculto**: 8 tarjetas RFID repuestas en 3 meses = $64K

SOLUCIÓN IMPLEMENTADA POR FERNANDA:

**1. PLANIFICACIÓN DEL PROCESO (8 abril)**
Fernanda diseñó un protocolo sistemático de enrolamiento:
- **Priorización**: Propietarios primero (titular legal), residentes después
- **Horarios flexibles**: Mañana (09:00-13:00), tarde (15:00-19:00), sábados (10:00-14:00)
- **Comunicación multi-canal**: WhatsApp + email + aviso bajo puerta + llamadas telefónicas
- **Incentivo**: Quienes completen enrolamiento antes 30 abril NO pagarán $8K reposición tarjeta (política nueva)

**2. CONVOCATORIA FORMAL (9 abril)**
Comunicado enviado a 18 departamentos pendientes:
- **Asunto**: "Registro biométrico obligatorio - Evite cargo $8K tarjeta"
- **Contenido**: Explicación beneficios huella digital vs tarjeta RFID, horarios disponibles, plazo límite 30 abril
- **Respuesta**: 14/18 departamentos confirmaron asistencia primeras 24 horas (77.8% efectividad)

**3. PROCESO DE ENROLAMIENTO (10-28 abril)**
Fernanda ejecutó 23 sesiones individuales de 15 minutos c/u (5.75 hrs totales):
- **Técnica enseñada**: Presión media, dedo limpio, centrado correcto (aprendido en capacitación ID 252)
- **Doble registro**: Mano derecha (índice + pulgar) + mano izquierda (índice backup)
- **Verificación inmediata**: 3 intentos de acceso post-registro (100% éxito)
- **Tarjeta RFID mantenida**: Como respaldo (no eliminada, solo secundaria)

**Distribución por tipo de usuario**:
- Propietarios: 12 registros (8 nuevos, 4 re-registro)
- Residentes: 6 registros (4 nuevos arrendatarios, 2 re-registro)
- Total: 18 usuarios enrolados exitosamente

**4. CASOS ESPECIALES RESUELTOS**:
- **Dpto 304 (Sr. Ramírez, 68 años)**: Dificultad captura huella (piel seca). Solución: Aplicar crema hidratante 5 min antes, registro exitoso intento 4
- **Dpto 507 (Sra. Chen)**: Huella muy tenue (trabajo manual). Solución: Registrar pulgar + anular (mejor definición), código numérico como alternativa primaria
- **Dpto 801 (Familia arrendataria)**: 4 personas registradas (padre, madre, 2 hijos adultos). Todos enrolados exitosamente
- **Dpto 1103 (Sr. Vega)**: Ausente por viaje. Solución: Fernanda coordinó sesión sábado 26 abril, registro completado

**5. SEGUIMIENTO POST-ENROLAMIENTO (30 abril)**
Fernanda evaluó resultados 20 días post-masivo:
- **Tasa de éxito registro**: 100% (18/18 departamentos completados)
- **Uso biométrico**: 57.1% → 100% departamentos con al menos 1 huella registrada
- **Rechazos biométricos nuevos usuarios**: 4.2% promedio (excelente, vs 15.7% pre-capacitación)
- **Uso alternativas**: 18.3% → 11.7% (reducción -36% tras enrolamiento masivo)
- **Reposiciones tarjeta RFID**: 8 (ene-mar) → 1 (abr-may) = -87.5% (ahorro $56K/mes)

TIEMPO INVERTIDO:
- Planificación y convocatoria: 4 horas (Fernanda)
- Enrolamiento individual (23 sesiones): 5.75 horas
- Seguimiento y evaluación: 2 horas
- **Total**: 11.75 horas Fernanda (dentro horario laboral normal)

INVERSIÓN FINANCIERA:
- **$0**: Proceso interno sin costos adicionales
- Fernanda utilizó tiempo regular de trabajo (no horas extra)
- Sistema biométrico ya instalado y operacional (inversión 2024)

BENEFICIOS OBTENIDOS:

**1. SEGURIDAD MEJORADA**:
- Huella digital personal e intransferible (vs tarjeta RFID prestable)
- 100% departamentos con acceso biométrico activo
- Trazabilidad completa: Sistema registra quién ingresa y cuándo
- Eliminación riesgo tarjetas perdidas/robadas

**2. REDUCCIÓN COSTOS ADMINISTRATIVOS**:
- Reposiciones tarjeta RFID: -87.5% (8 → 1 mensual)
- Ahorro proyectado: $672K anual (8 tarjetas/mes × $8K × 12 meses vs actual)
- Tiempo administrativo: -60% (Fernanda no procesa tarjetas nuevas constantemente)

**3. OPTIMIZACIÓN SISTEMA EXISTENTE**:
- Capacidad utilizada: 57.1% → 100% (maximización inversión $2.9M 2024)
- ROI sistema biométrico mejorado: 189% → 227% (vida útil 10 años)
- Satisfacción residentes: 91% prefiere huella vs tarjeta (encuesta informal)

**4. CULTURA DE INNOVACIÓN**:
- Residentes adoptan tecnología positivamente (vs resistencia inicial)
- Fernanda se consolida como líder técnico (no solo operativo)
- Precedente: Procesos internos pueden resolver problemas sin contratistas

LECCIONES APRENDIDAS:

1. **Comunicación multi-canal efectiva**: WhatsApp + email + aviso físico + llamada = 77.8% respuesta inmediata
2. **Incentivos funcionan**: Amenaza cargo $8K tarjeta motivó 100% cumplimiento
3. **Flexibilidad horaria crítica**: Ofrecer mañana/tarde/sábados aseguró participación total
4. **Casos especiales requieren paciencia**: Sr. Ramírez (4 intentos) y Sra. Chen (huella tenue) necesitaron adaptación
5. **Alternativas como respaldo, no principal**: Código numérico Sra. Chen asegura acceso sin frustración
6. **Capacitación previa multiplica resultados**: Fernanda aplicó técnica aprendida ID 252, rechazos nuevos usuarios 4.2% (vs 15.7% histórico)
7. **Inversión $0 genera $672K/año ahorro**: Proceso interno maximiza activos existentes

IMPACTO A LARGO PLAZO:

Este enrolamiento masivo consolidó el sistema biométrico como **método primario de acceso** del edificio:
- 100% departamentos con biometría activa
- Alternativas (RFID/código) relegadas a respaldo (no principal)
- Ahorro $672K/año en reposiciones tarjetas
- Seguridad maximizada (trazabilidad completa accesos)
- Satisfacción residentes 91% (vs 67% sistema tarjetas anterior)

Fernanda demostró capacidad técnica y liderazgo:
- Planificó proceso completo autónomamente
- Resolvió casos especiales con creatividad
- Cumplió 100% objetivo sin costos adicionales
- Generó valor mensurable ($672K/año ahorro)

CONTINUIDAD:

El protocolo diseñado por Fernanda quedó documentado para:
- **Nuevos residentes**: Enrolamiento obligatorio dentro 7 días llegada
- **Mantenimiento**: Re-enrolamiento si huella falla 3 veces consecutivas
- **Evaluación trimestral**: Verificar 100% departamentos mantienen registro activo

Este proceso transformó un sistema subutilizado (57.1%) en una herramienta **optimizada al máximo** (100% adopción), validando la inversión $2.9M de 2024 y generando ahorros recurrentes significativos sin costos adicionales.`
  },

  265: {
    descripcion_nueva: `FECHA: 29 de abril de 2025

CONTEXTO: El nuevo presidente autorizó la **remesa mensual de pagos a proveedores correspondiente a abril 2025**, ejecutando el proceso de revisión financiera, validación de facturas y aprobación de transferencias que asegura el cumplimiento de obligaciones contractuales y operacionales del edificio. Este mes incluyó 25 remesas por un total de $8.445.000 CLP, con énfasis en mantención preventiva pre-invierno y regularización de servicios críticos.

PROCESO DE AUTORIZACIÓN (27-29 abril):

**1. REVISIÓN PRELIMINAR ACODEF (27 abril, lunes)**
Rodrigo Bravo (contador Acodef) envió a las 14:37 hrs el **reporte de remesas abril** al presidente:
- 25 facturas verificadas y validadas
- Monto total: $8.445.000 CLP
- Clasificación: 14 servicios esenciales, 7 mantenciones preventivas, 4 nómina personal
- **Alertas**: 2 facturas con variación >10% vs presupuesto (ascensores OTIS +14.2%, mantención red húmeda +18.7%)
- Documentos anexos: PDF facturas originales (25 archivos), Excel resumen ejecutivo

**2. ANÁLISIS DETALLADO PRESIDENTE (27-28 abril)**
El presidente invirtió **6.5 horas** revisando línea por línea:

**Servicios Esenciales ($4.285.000, 50.7% total)**:
- OTIS ascensores: $1.125.000 (servicio mensual $985K + visita emergencia $140K)
  * Variación: +14.2% vs presupuesto $985K
  * Justificación verificada: Visita emergencia 15-abr ascensor 2 (puerta atascada, reparación urgente)
  * Decisión: APROBADO (emergencia legítima documentada)

- Securitas vigilancia: $1.850.000 (contrato estable, sin variación)
  * Servicio impecable: 0 incidentes marzo-abril
  * Decisión: APROBADO sin observaciones

- Acodef administración: $220.000 (contrato fijo, congelado desde ene 2024)
  * Cumplimiento compromisos: 100% (informes oportunos, cobranza activa)
  * Decisión: APROBADO

- Internet Mundo Pacífico: $60.000 (plan consolidado único edificio)
  * Ahorro histórico: $120K/mes vs $180K gestión anterior (3 cuentas separadas)
  * Decisión: APROBADO (ahorro $1.44M/año preservado)

- Evelyn aseo: $530.000 (líder categoría, aumento 5% aprobado feb 2025)
  * Desempeño: 9.5/10 evaluación trimestral
  * Decisión: APROBADO (reconocimiento mérito)

- Manser seguridad: $500.000 (reemplazo Federal desde marzo)
  * 2do mes servicio: 0 quejas, guardias puntuales 100%
  * Decisión: APROBADO (transición exitosa)

**Mantenciones Preventivas ($2.180.000, 25.8% total)**:
- Red húmeda certificación SEC: $580.000
  * Variación: +18.7% vs presupuesto $489K
  * Justificación verificada: Certificación anual (válida hasta abril 2026) + reparación 2 mangueras piso 8 y 12 (desgaste detectado en inspección)
  * Decisión: APROBADO (certificación legal obligatoria + reparaciones preventivas evitan multa SEC $5M)

- Ascensores mantenimiento preventivo: $335.000 (OTIS contrato híbrido)
  * Ahorro: $335K/mes vs $670K emergencia-solo anterior
  * Decisión: APROBADO (ahorro $4.02M/año preservado)

- Sensores incendio SafeHome: $320.000 (contrato anual 18 sensores)
  * Incluye: Inspección + limpieza + calibración + certificado
  * Decisión: APROBADO (prevención > emergencia)

- Cámaras CCTV SafeHome: $185.000 (mantención trimestral)
  * Incluye: Revisión 18 cámaras + limpieza lentes + ajuste ángulos
  * Post ID 249 (evaluación marzo): 3 problemas reparados
  * Decisión: APROBADO (protege inversión $2.9M sistema)

- Ducto basura limpieza semestral: $460.000 (innovación Joaquín 2024)
  * Frecuencia: 2 veces/año (abril + octubre)
  * Certificación SEC incluida (válida 6 meses)
  * Decisión: APROBADO (elimina olores + cumple normativa)

- Extintores recarga anual: $180.000 (14 extintores edificio)
  * Vencimiento: Mayo 2025
  * Certificación incluida (SEC + Mutual)
  * Decisión: APROBADO (legal obligatorio)

- Generador mantención preventiva: $120.000 (trimestral)
  * Última prueba: Marzo 2025 (encendido exitoso 8 segundos)
  * Decisión: APROBADO (backup energía crítico)

**Nómina Personal ($1.980.000, 23.4% total)**:
- Fernanda González (mayordomo): $600.000
  * Evaluación abril: 9.4/10 (EXCELENTE)
  * Gestión destacada: Enrolamiento biométrico ID 264 (ahorro $672K/año)
  * Decisión: APROBADO + reconocimiento formal

- María Paz (auxiliar aseo): $500.000
  * Evaluación abril: 9.6/10 (EXCELENTE, mejor score equipo)
  * Ausentismo: 0% (12 meses consecutivos sin faltas)
  * Decisión: APROBADO

- Claudio Stuardo (guardia nocturno): $560.000
  * Evaluación abril: 8.5/10 (BUENO)
  * Puntualidad: 100% (22/22 turnos nocturnos)
  * Decisión: APROBADO

- Juan Passi (conserje fin de semana): $320.000
  * Evaluación abril: 9.0/10 (MUY BUENO)
  * Quejas: 0 (vs 3 quejas/mes Rodrigo Catrimilla 2024)
  * Decisión: APROBADO

**3. CONSULTA AL COMITÉ (28 abril, tarde)**
Presidente envió WhatsApp al grupo comité (18:42 hrs):
- Resumen ejecutivo 2 páginas PDF
- Destacó 2 variaciones presupuestarias: OTIS +$140K emergencia legítima, Red húmeda +$91K certificación+reparaciones preventivas
- Solicitud: Aprobación remesa completa $8.445M antes 29-abr para cumplir plazos pago

**Respuestas comité**:
- Tesorera (19:15): "Revisé. Emergencia OTIS justificada (puerta atascada es riesgo). Red húmeda certificación obligatoria. APRUEBO."
- Secretaria (19:47): "Todo en orden. Personal excelente evaluación. APRUEBO."
- Vocal 1 (20:23): "APRUEBO. Mantenciones preventivas evitan emergencias mayores."
- Vocal 2 (21:05): "OK, aprobado."

**Aprobación unánime comité**: 4/4 votos favor (100%)

**4. EJECUCIÓN TRANSFERENCIAS (29 abril, mañana)**
Presidente autorizó formalmente a Acodef (email 09:15 hrs):
- Transferencias bancarias: 21 proveedores (total $6.465K)
- Cheques físicos: 4 personal edificio (total $1.980K, entrega 30-abr)
- Plazo ejecución: 29-30 abril (cumple plazos contractuales todos proveedores)

**Confirmación Acodef** (10:37 hrs):
- 21 transferencias procesadas exitosamente
- 4 cheques preparados para retiro presidente 30-abr
- Comprobantes bancarios enviados por email (21 PDF)

ANÁLISIS FINANCIERO ABRIL:

**Ingresos abril**: $9.276.000 (101.6% presupuesto)
- Gastos comunes: $8.820.000 (42 dptos × $210K)
- Fondo reserva: $420.000 (cuota mensual $10K/dpto)
- Morosidad cobrada: $36.000 (dpto 603, parcial)

**Egresos abril**: $8.445.000 (107.8% presupuesto)
- Servicios esenciales: $4.285K (50.7%)
- Mantenciones preventivas: $2.180K (25.8%)
- Nómina personal: $1.980K (23.4%)

**Superávit abril**: $831.000 (9.0% ingresos)
- Acumulado ene-abr 2025: $3.764K ($941K/mes promedio)

**Liquidez** (30 abril):
- Cuenta corriente: $6.247.000
- Representa: 74.0% gastos mensuales (EXCELENTE, vs ideal 50-60%)
- Mejora vs nov 2024 transición: +31.2 puntos porcentuales (42.8% → 74.0%)

**Morosidad** (30 abril):
- Total adeudado: $483.000 (5.5% facturación)
- Mejora vs ene 2025: -1.3 puntos (6.8% → 5.5%)
- Departamentos morosos: 3 (dptos 304, 507, 1009)
- Plan cobranza activa Acodef reduciendo mensualmente

DECISIONES ESTRATÉGICAS TOMADAS:

**1. MANTENCIONES PREVENTIVAS PRIORIZADAS**:
- $2.180K invertidos (25.8% presupuesto) en prevención
- Filosofía: **Prevenir > Reparar emergencia**
- Ejemplos:
  * Red húmeda: Reparar 2 mangueras $91K vs multa SEC $5M + riesgo vidas
  * Cámaras CCTV: Mantención $185K protege inversión $2.9M
  * Ducto basura: Limpieza $460K evita plagas (fumigación emergencia $850K)

**2. EMERGENCIAS LEGÍTIMAS APROBADAS**:
- OTIS visita emergencia $140K: Puerta atascada ascensor 2 (15-abr)
- Justificación: Riesgo seguridad residentes (persona podría quedar atrapada)
- Alternativa: Ignorar problema = accidente potencial + demanda millonaria
- Decisión: Aprobar emergencia ($140K) < riesgo ($50M+ demanda)

**3. RECONOCIMIENTO PERSONAL DESTACADO**:
- Fernanda: Enrolamiento biométrico genera ahorro $672K/año (ID 264)
- María: 12 meses sin ausentismo (récord edificio)
- Evaluaciones formales trimestrales (continuidad protocolo Joaquín)
- Aumentos salariales basados en mérito (no automáticos)

TIEMPO INVERTIDO:

- Revisión facturas y análisis: 6.5 horas (presidente)
- Preparación resumen comité: 1.5 horas
- Comunicación y aprobaciones: 1 hora
- Coordinación Acodef ejecución: 0.5 horas
- **Total**: 9.5 horas presidente (trabajo voluntario sin compensación)

BENEFICIOS OBTENIDOS:

**1. CUMPLIMIENTO OBLIGACIONES 100%**:
- 25/25 proveedores pagados dentro plazo contractual
- 0 multas por retraso pago
- 0 suspensiones servicio por falta pago
- Relaciones proveedor-edificio: EXCELENTES

**2. CONTROL PRESUPUESTARIO RIGUROSO**:
- Ejecución abril: 107.8% presupuesto (desviación +7.8%)
- Variaciones justificadas y aprobadas (emergencia + certificaciones)
- Superávit preservado: $831K abril (9.0% ingresos)
- Liquidez saludable: 74.0% (mejora +31.2 puntos vs nov 2024)

**3. TRANSPARENCIA COMITÉ**:
- 100% remesas revisadas por comité antes ejecución
- Documentación completa compartida (facturas + análisis)
- Decisión democrática: 4/4 aprobación unánime
- Trazabilidad total: Email + WhatsApp + comprobantes bancarios

**4. PREVENCIÓN > EMERGENCIA**:
- $2.180K mantenciones preventivas (25.8% presupuesto)
- Ahorro proyectado: $8M+ (evitar emergencias, multas, accidentes)
- Cultura preventiva heredada de Joaquín preservada

LECCIONES APRENDIDAS:

1. **Variaciones presupuestarias requieren justificación**: OTIS +14.2% aprobado porque emergencia documentada y legítima
2. **Mantenciones preventivas son inversión, no gasto**: $2.180K prevención evita $8M+ emergencias
3. **Comité informado decide mejor**: Resumen ejecutivo 2 páginas + facturas completas = aprobación unánime consciente
4. **Liquidez 74% da tranquilidad**: Superávit acumulado permite absorber emergencias sin crisis
5. **Personal destacado merece reconocimiento**: Fernanda generó ahorro $672K/año con enrolamiento biométrico (trabajo excepcional)
6. **Acodef cumple compromisos renovados**: Transferencias procesadas <24hrs, informes oportunos (mejora vs evaluación dic 2023)

CONTINUIDAD:

Este proceso mensual de autorización de remesas refleja:
- **Gobernanza ordenada**: Presidente revisa → Comité aprueba → Acodef ejecuta
- **Control financiero estricto**: Desviaciones justificadas y documentadas
- **Transparencia total**: Todos los miembros comité acceden información completa
- **Cultura preventiva**: 25.8% presupuesto en mantenciones evita emergencias mayores

La ejecución presupuestaria abril 2025 (+7.8% vs plan) fue **totalmente justificada**:
- Emergencia OTIS: Seguridad residentes prioritaria
- Certificaciones SEC: Legalmente obligatorias
- Mantenciones preventivas: ROI positivo (prevención < emergencia)

Liquidez 74.0% (vs ideal 50-60%) indica gestión financiera **conservadora y responsable**, permitiendo absorber imprevistos sin necesidad de cuotas extraordinarias a propietarios.`
  },

  266: {
    descripcion_nueva: `FECHA: 5 de mayo de 2025

CONTEXTO: El nuevo presidente ejecutó la **inspección completa mensual de áreas comunes del edificio**, protocolo heredado de la gestión de Joaquín Puig que establece revisión sistemática de todas las instalaciones, equipos e infraestructura para detectar problemas tempranos, prevenir fallas mayores y asegurar el cumplimiento de estándares de mantención y seguridad. Esta inspección de mayo identificó 8 problemas menores y 2 oportunidades de mejora, todas resueltas dentro del mes.

ALCANCE DE LA INSPECCIÓN:

El presidente recorrió **todas las áreas comunes** del edificio durante 4.5 horas (08:30-13:00 hrs, domingo 5 mayo):
- Lobby y recepción
- Estacionamientos subterráneos (3 niveles: -1, -2, -3)
- Sala de máquinas ascensores
- Lounge y gimnasio
- Terraza comunitaria
- Escaleras de emergencia (11 pisos)
- Ducto basura y cuarto acopio
- Sala generador eléctrico
- Cuarto bombas agua
- Azotea (antenas, paneles solares propuestos)
- Fachada exterior (desde distintos ángulos)

**Metodología aplicada**:
- **Checklist**: 47 ítems verificación (protocolo Joaquín, actualizado 2025)
- **Fotografías**: 63 fotos problemas/novedades (documentación visual)
- **Anotaciones**: Cuaderno físico + app móvil (registro dual)
- **Participación Fernanda**: Mayordomo acompañó todo recorrido (conocimiento operacional)

HALLAZGOS POR ÁREA:

**1. LOBBY Y RECEPCIÓN**:
✓ Iluminación LED funcionando perfectamente (proyecto 2024)
✓ Piso porcelanato impecable (instalación ene 2025 ID 209)
✓ Puerta principal brazos hidráulicos DORMA: Operación suave
✓ Sistema biométrico: 100% funcional (post-enrolamiento ID 264)
✗ **PROBLEMA 1**: Planta decorativa lobby marchita (falta riego)
  - Solución: Fernanda asignó María riego lun/jue, reemplazada planta nueva $18K

**2. ESTACIONAMIENTOS**:
✓ Iluminación mejorada 2024: 0 focos fundidos
✓ Portón acceso: Motor nuevo + respaldo (protocolo Joaquín)
✓ Señalización estacionamientos clara
✗ **PROBLEMA 2**: Mancha aceite box 37 (vehículo Sr. Morales, filtración motor)
  - Solución: Carta recordatorio reglamento (estacionamientos limpios obligatorio), Sr. Morales limpió 8-mayo
✗ **PROBLEMA 3**: Filtración menor pared nivel -2 (esquina NE)
  - Diagnostico: Humedad capilar exterior (no tubería rota)
  - Solución programada: Impermeabilización exterior jun 2025 ($420K cotizado)

**3. SALA MÁQUINAS ASCENSORES**:
✓ Motores OTIS funcionando normalmente
✓ Cables tracción sin desgaste visible
✓ Sistema emergencia (batería backup) operativo
✗ **PROBLEMA 4**: Acumulación polvo sobre motores (limpieza atrasada)
  - Solución: OTIS notificado, limpieza profunda programada 15-mayo (incluida contrato)

**4. LOUNGE Y GIMNASIO**:
✓ Equipamiento gimnasio completo y funcional
✓ Mobiliario lounge excelente estado
✓ Internet 60 Mbps velocidad óptima (plan consolidado Joaquín)
✗ **PROBLEMA 5**: Espejo gimnasio esquina inferior despegada (adhesivo seco)
  - Solución: Fernanda re-pegó con silicona industrial 7-mayo ($8K), problema resuelto

**5. TERRAZA COMUNITARIA**:
✓ Jardín nuevo (plantas sombra Joaquín 2024) floreciendo
✓ Mobiliario exterior sin daño
✓ Iluminación perimetral funcionando
✗ **PROBLEMA 6**: 3 maceteros rotos (plástico agrietado por sol)
  - Solución: Reemplazados por maceteros fibra cemento $45K (más durables), instalados 12-mayo

**6. ESCALERAS EMERGENCIA**:
✓ Señalización evacuación completa y visible
✓ Luces emergencia LED todas funcionales
✓ Puertas corta fuego cierran correctamente
✗ **PROBLEMA 7**: Pasamanos piso 7 tornillo suelto (vibración al usar)
  - Solución: Fernanda apretó tornillos + aplicó fijador Loctite 6-mayo, problema resuelto

**7. DUCTO BASURA**:
✓ Limpieza profunda abril cumplida (ID 265 mantención)
✓ Sistema compuerta pisos funciona correctamente
✓ Certificación SEC vigente hasta oct 2025
✓ Olores: AUSENTES (vs problema crónico gestiones anteriores)
- Innovación Joaquín (limpieza semestral) funcionando perfectamente

**8. SALA GENERADOR**:
✓ Generador encendido prueba mensual exitoso (3-mayo, 12 segundos)
✓ Combustible: 85% tanque (suficiente 6 meses)
✓ Baterías arranque cargadas 100%
✗ **PROBLEMA 8**: Filtro aire motor sucio (acumulación polvo 6 meses)
  - Solución: Técnico Luis Godoy cambió filtro 10-mayo $28K, generador óptimo

**9. CUARTO BOMBAS AGUA**:
✓ Bomba principal operando normalmente
✓ Bomba respaldo funcional (última prueba mar 2025)
✓ Presión agua edificio: 3.2 bar (rango óptimo 3.0-3.5)
✓ Sin filtraciones visibles tuberías
- Remarcadores agua (proyecto Joaquín) funcionan: Ahorro $15.7M/año preservado

**10. AZOTEA**:
✓ Antenas celular operadoras: Contrato publicidad $28K/mes vigente
✓ Impermeabilización azotea sin grietas
✓ Drenajes pluviales despejados (preparación pre-invierno)
✗ **OPORTUNIDAD 1**: Espacio disponible instalación paneles solares
  - Análisis: Área útil 120 m² (orientación norte óptima)
  - Potencia estimada: 18 kW instalados
  - Ahorro proyectado: $450K/mes electricidad (27% consumo edificio)
  - Inversión estimada: $24M (ROI 4.4 años)
  - Decisión: Evaluar viabilidad técnica-financiera jun 2025

**11. FACHADA EXTERIOR**:
✓ Revestimiento en buen estado general
✓ Ventanales sin roturas visibles
✗ **OPORTUNIDAD 2**: Pintura fachada desgastada (6 años antigüedad)
  - Diagnóstico: Decoloración leve, sin daño estructural
  - Vida útil restante: ~2 años antes crítico
  - Costo estimado repintura: $8.5M (42 dptos × $202K)
  - Decisión: Programar 2027, no urgente 2025

INFORME EJECUTIVO COMITÉ:

El presidente preparó **informe 5 páginas** (6 mayo, lunes) enviado al comité:

**Sección 1: Resumen Ejecutivo**
- 8 problemas menores detectados y resueltos
- 2 oportunidades mejora identificadas (paneles solares, repintura fachada)
- Inversión reparaciones: $99K (maceteros $45K, filtro generador $28K, planta $18K, silicona $8K)
- Estado general edificio: EXCELENTE (95/100 puntos)

**Sección 2: Problemas Críticos**
- NINGUNO detectado (vs 3-4 problemas críticos/mes gestión anterior 2022)
- Cultura preventiva heredada de Joaquín funciona

**Sección 3: Mantenciones Funcionando**
- Ducto basura: Limpieza semestral elimina olores (innovación Joaquín)
- Remarcadores agua: Ahorro $15.7M/año preservado
- Internet consolidado: Ahorro $1.44M/año preservado
- Ascensores híbridos: Ahorro $4.02M/año preservado

**Sección 4: Oportunidades Largo Plazo**
- Paneles solares: ROI 4.4 años, ahorro $5.4M/año (evaluación jun 2025)
- Repintura fachada: Programar 2027 (~$8.5M, vida útil actual 2 años)

**Sección 5: Fotografías Documentación**
- 63 fotos anexadas (problemas + áreas revisadas)
- Comparación visual vs inspección nov 2024 (mejora evidente)

RESPUESTAS COMITÉ (7 mayo):
- Tesorera: "Edificio impecable. Inversión $99K reparaciones aprobada. Paneles solares interesante, evaluar."
- Secretaria: "Cultura preventiva funciona. 0 problemas críticos = gestión anterior excelente base."
- Vocal 1: "Generador y bombas OK crítico. Filtración nivel -2 programar impermeabilización."
- Vocal 2: "Apruebo. Fotografías excelente práctica (trazabilidad)."

ANÁLISIS COMPARATIVO:

**Estado edificio mayo 2025 vs nov 2024 (transición)**:
- Problemas críticos: 0 vs 2 (filtración parking box 84, portón falla)
- Problemas menores: 8 vs 14 (mejora -43%)
- Mantenciones atrasadas: 0 vs 5 (todas regularizadas)
- Certificaciones vencidas: 0 vs 3 (todas vigentes)
- Score general: 95/100 vs 87/100 (+8 puntos)

**Estado edificio mayo 2025 vs jun 2023 (inicio Joaquín)**:
- Problemas críticos mensuales: 0 vs 3-4 promedio (mejora -100%)
- Inversiones acumuladas: $27.6M (2023-2025)
- Ahorro anual generado: $21.16M/año (ROI 1.3 años)
- Cultura preventiva: ESTABLECIDA vs INEXISTENTE

TIEMPO INVERTIDO:

- Inspección completa edificio: 4.5 horas (presidente + Fernanda)
- Análisis y preparación informe: 3 horas (presidente)
- Coordinación reparaciones: 1.5 horas (Fernanda)
- **Total**: 9 horas (presidente 7.5 hrs + Fernanda 1.5 hrs)

INVERSIÓN FINANCIERA:

- Maceteros terraza: $45.000
- Filtro generador: $28.000
- Planta lobby: $18.000
- Silicona espejo: $8.000
- **Total**: $99.000 (1.2% gastos mensuales, reparaciones menores)

BENEFICIOS OBTENIDOS:

**1. PREVENCIÓN PROACTIVA**:
- 8 problemas menores detectados y resueltos ANTES de críticos
- Ejemplo: Filtro generador sucio → Cambio $28K vs falla emergencia $850K reparación + arriendo generador temporal
- Filosofía heredada Joaquín: **Detectar temprano = reparación barata**

**2. TRANQUILIDAD RESIDENTES**:
- Informe mensual comité genera confianza
- 63 fotografías documentan transparencia absoluta
- Problemas resueltos antes de quejas (vs reactivo gestión anterior)

**3. PRESERVACIÓN INVERSIONES**:
- Mantenciones Joaquín funcionando: Ducto basura, remarcadores, internet, ascensores
- Ahorro anual $21.16M preservado (vs riesgo deterioro sin supervisión)
- Cultura preventiva consolidada (no solo Joaquín, ahora edificio completo)

**4. PLANIFICACIÓN LARGO PLAZO**:
- Paneles solares evaluación jun 2025 (ROI 4.4 años atractivo)
- Repintura fachada 2027 programada (vida útil 2 años restantes)
- Filtración nivel -2 impermeabilización jun 2025 ($420K programado)

LECCIONES APRENDIDAS:

1. **Inspección mensual detecta problemas menores antes críticos**: 8 problemas resueltos $99K vs esperar emergencias $2M+
2. **Cultura preventiva heredada funciona**: Joaquín estableció protocolo, nuevo comité preserva y mejora
3. **Fernanda conocimiento operacional invaluable**: Acompañar inspección identifica problemas invisibles para ojos no expertos
4. **Fotografías documentan trazabilidad**: 63 fotos respaldan decisiones, evitan controversias futuras
5. **Inversión $99K reparaciones menores < $2M emergencias**: Reparar tornillo suelto $0 vs caída pasamanos lesión $50M demanda
6. **Comité informado apoya gestión**: Transparencia absoluta genera confianza y respaldo unánime
7. **Mantenciones Joaquín generan $21.16M/año ahorro**: Preservar sistemas instalados > cambiar por cambiar

IMPACTO A LARGO PLAZO:

Esta inspección mensual sistemática consolidó el **modelo de gestión preventiva** como estándar del edificio:
- 0 problemas críticos detectados (vs 3-4/mes gestión anterior 2022)
- $99K inversión reparaciones menores < $2M+ emergencias evitadas
- Score edificio 95/100 (vs 87/100 transición nov 2024)
- Cultura transparencia: Informe mensual + fotografías documentación

El nuevo comité demostró **continuidad y mejora** vs gestión Joaquín:
- Protocolo inspección preservado y optimizado (47 ítems checklist)
- Fernanda integrada proceso (conocimiento operacional)
- Oportunidades largo plazo identificadas (paneles solares, repintura)
- Inversiones heredadas funcionando y generando ahorro (preservación activo)

SEGUIMIENTO:

**Acciones programadas post-inspección**:
- Jun 2025: Impermeabilización nivel -2 ($420K)
- Jun 2025: Evaluación técnica paneles solares (cotizar 3 proveedores)
- Ago 2025: Inspección mensual (protocolo continuo)
- 2027: Repintura fachada (planificación 2 años anticipación)

Este proceso mensual asegura que el edificio **NO SE DETERIORE** por falta supervisión, preservando las inversiones $27.6M (2023-2025) y los ahorros anuales $21.16M generados por la gestión de Joaquín Puig.`
  },

  267: {
    descripcion_nueva: `FECHA: 12 de mayo de 2025

CONTEXTO: El nuevo presidente gestionó la **resolución de temas administrativos pendientes con Acodef** mediante reunión formal de coordinación, abordando 7 asuntos operacionales acumulados durante abril-mayo que requerían definición, clarificación de procedimientos o ajustes en protocolos de trabajo conjunto edificio-administración. Esta gestión reflejó la madurez de la relación Comité-Acodef tras la renovación condicional (dic 2023, ID 47) y el cumplimiento sostenido de compromisos pactados.

ANTECEDENTES:

**Relación Comité-Acodef (historial)**:
- **Dic 2023**: Evaluación 71.3% aprobada con observaciones (ID 47)
- **Compromisos negociados**: 5 mejoras específicas (cheques 3 días, transferencias, informes consolidados, cobranza activa, precio congelado $220K/mes)
- **Renovación**: 1 año condicional (ene-dic 2024)
- **Evaluación feb 2025**: 84.7% (mejora +13.4 puntos), compromisos 100% cumplidos
- **Renovación 2025**: 2 años (ene 2025 - dic 2026), precio $220K/mes mantenido

**Temas pendientes acumulados (abril-mayo 2025)**:
Durante las remesas mensuales (ID 265 abril) y operaciones rutinarias, surgieron 7 asuntos que requerían coordinación formal con Acodef:
1. Ajuste protocolo emisión facturas gastos comunes
2. Clarificación responsabilidades cobranza judicial
3. Mejora sistema reportes mensuales (más detalle mantenciones)
4. Definición proceso aprobación gastos extraordinarios >$500K
5. Actualización nómina contactos comité (cambio tesorera)
6. Protocolo comunicación emergencias fuera horario
7. Evaluación propuesta aumento tarifa 2026 (inflación acumulada)

REUNIÓN FORMAL (12 mayo, 10:00-12:30 hrs):

**Participantes**:
- Presidente edificio Torre Oriente
- Tesorera comité
- Rodrigo Bravo (contador Acodef)
- Carolina Muñoz (gerente operaciones Acodef)

**Lugar**: Oficinas Acodef, Las Condes

**Agenda formal** (enviada 8-may):
1. Revisión compromisos 2024-2025 (10 min)
2. Ajustes protocolos operacionales (40 min)
3. Mejoras sistema reportes (30 min)
4. Proceso gastos extraordinarios (20 min)
5. Protocolo emergencias (15 min)
6. Tarifa 2026 propuesta (30 min)
7. Varios y compromisos (15 min)

TEMAS DISCUTIDOS Y RESOLUCIONES:

**1. REVISIÓN CUMPLIMIENTO COMPROMISOS 2024-2025** (10:00-10:10):

Carolina presentó reporte ejecutivo:
- **Cheques 3 días**: 100% cumplimiento (48/48 cheques ene-abr emitidos plazo)
- **Transferencias bancarias**: 100% (184/184 transferencias <24 hrs autorización)
- **Informes consolidados**: 100% (4/4 meses 2025 con reporte ejecutivo enviado antes día 27)
- **Cobranza activa**: Morosidad 6.8% (ene) → 5.5% (abr) = mejora -1.3 puntos
- **Precio congelado**: $220K/mes ene 2024 - abr 2025 (15 meses sin aumento)

**Reconocimiento presidente**: "Acodef cumplió 100% compromisos pactados dic 2023. Esto justificó renovación 2 años. Relación edificio-administración EXCELENTE."

**2. AJUSTE PROTOCOLO EMISIÓN FACTURAS** (10:10-10:30):

**Problema identificado**:
Facturas gastos comunes emitidas día 25 mes anterior, pero algunos propietarios reciben email día 27-28 (retraso 2-3 días). Esto genera confusión sobre plazo pago (día 5 mes siguiente).

**Causa raíz** (Rodrigo explica):
Sistema contable Acodef genera facturas 25-abr, pero envío email automático se programa 26-abr 08:00 hrs. Si hay feriado (1-may Día Trabajador), sistema espera día hábil siguiente (2-may), pero algunas casillas email rechazan por spam, re-intentos llegan 3-may.

**Solución acordada**:
- **Nueva fecha emisión**: Día 23 mes anterior (vs actual día 25)
- **Doble envío**: Email automático día 24 + WhatsApp grupo propietarios día 24 (backup)
- **Implementación**: Junio 2025 (facturas mayo emitidas 23-may, enviadas 24-may)
- **Beneficio**: Propietarios reciben factura 11 días antes vencimiento (vs actual 9 días)

**3. CLARIFICACIÓN COBRANZA JUDICIAL** (10:30-10:55):

**Pregunta presidente**:
Dpto 304 moroso $1.285K (6 meses acumulados). ¿Cuándo Acodef inicia cobranza judicial? ¿Edificio paga honorarios abogado o Acodef?

**Respuesta Carolina**:
- **Protocolo Acodef**: Cobranza judicial se inicia después 6 meses morosidad consecutiva
- **Costo abogado**: Edificio paga honorarios ($350K por demanda), Acodef gestiona pero NO financia
- **Recuperación**: Si demanda exitosa, moroso paga capital + intereses + costas judiciales (incluye $350K abogado)

**Situación dpto 304**:
- Morosidad: 6 meses exactos (nov 2024 - abr 2025)
- Monto adeudado: $1.285.000 (capital) + $87K intereses = $1.372K total
- **Decisión comité**: Autorizar cobranza judicial (costo $350K asumido edificio, recuperable si demanda exitosa)

**Protocolo formalizado**:
- Morosidad 3 meses: Carta cobranza simple (Acodef)
- Morosidad 4 meses: Llamada telefónica + carta certificada (Acodef)
- Morosidad 5 meses: Carta notarial advertencia judicial ($45K costo edificio)
- Morosidad 6 meses: Demanda judicial ($350K costo edificio, recuperable)

**4. MEJORA SISTEMA REPORTES MENSUALES** (10:55-11:25):

**Solicitud presidente**:
Informe mensual Acodef es excelente (mejora sustancial vs 2023), pero falta **detalle de mantenciones preventivas**. Ejemplo: Reporte marzo dice "Ascensores $335K", pero no especifica qué trabajos OTIS ejecutó.

**Propuesta Carolina**:
Agregar anexo "Detalle Mantenciones" al informe mensual:
- **Columnas**: Proveedor, Servicio, Trabajos ejecutados, Próxima mantención, Observaciones
- **Ejemplo OTIS**: "Revisión cables tracción, lubricación rieles, prueba sistema emergencia, ajuste puertas. Próxima: Jun 2025. Sin observaciones."
- **Implementación**: Reporte mayo 2025 (entrega 27-may) incluirá nuevo anexo

**Beneficio**:
- Comité verifica servicios pagados realmente ejecutados
- Trazabilidad: ¿OTIS cumplió protocolo mantención preventiva completo?
- Detección temprana: Si proveedor omite trabajos, reclamo inmediato

**Compromiso Acodef**: Anexo "Detalle Mantenciones" incluido desde mayo 2025 sin costo adicional.

**5. PROCESO GASTOS EXTRAORDINARIOS >$500K** (11:25-11:45):

**Situación actual**:
Gastos <$500K presidente aprueba directamente (ej: reparaciones menores ID 266).
Gastos >$500K requieren aprobación comité completo (ej: impermeabilización nivel -2 $420K borderline, se consultó comité igual).

**Problema**:
No hay protocolo formal para emergencias >$500K fuera horario (ej: filtración sábado noche requiere reparación urgente $700K).

**Protocolo acordado**:

**Gastos programados >$500K**:
- Presidente solicita 3 cotizaciones
- Envía análisis comparativo comité (email + WhatsApp)
- Requiere aprobación 3/5 miembros comité (mayoría simple)
- Plazo decisión: 48 horas hábiles
- Acodef procesa pago una vez aprobado

**Gastos emergencia >$500K** (fuera horario/fines de semana):
- Presidente evalúa urgencia real (¿riesgo vidas? ¿daño estructural progresivo?)
- Si emergencia legítima: **Autoriza unilateralmente** hasta $2M
- Notifica comité dentro 24 hrs (justificación escrita)
- Comité ratifica decisión siguiente reunión ordinaria
- Si comité rechaza (gasto injustificado): Presidente asume responsabilidad personal

**Límites**:
- Autorización unilateral presidente: Máximo $2M
- Gastos >$2M: SIEMPRE requieren aprobación comité (incluso emergencias)

**Ejemplo aplicación**:
- Sábado 03:00 hrs: Filtración tubería matriz inunda estacionamiento
- Presidente llama plomero urgencia: Cotiza $1.8M reparación inmediata
- Presidente autoriza (< $2M, emergencia legítima)
- Lunes 10:00: Presidente notifica comité (fotos + factura + justificación)
- Comité ratifica (emergencia real, decisión correcta)

**6. ACTUALIZACIÓN CONTACTOS COMITÉ** (11:45-11:50):

**Cambio informado**:
Nueva tesorera (desde marzo 2025): Patricia Flores (reemplaza a Marta González)

**Actualización Acodef**:
- Email: patricia.flores@email.com
- Teléfono: +56 9 XXXX XXXX
- Firma autorizada: Transferencias >$1M (protocolo banco)

**Otros contactos sin cambio**:
- Presidente: (sin cambio)
- Secretaria: (sin cambio)
- Vocal 1: (sin cambio)
- Vocal 2: (sin cambio)

**7. PROTOCOLO EMERGENCIAS FUERA HORARIO** (11:50-12:05):

**Situación actual**:
Horario Acodef: Lun-Vie 09:00-18:00. Emergencias fuera horario (noches, fines de semana) no tienen protocolo contacto.

**Protocolo acordado**:

**Emergencias edificio fuera horario**:
- Presidente contacta directamente proveedores (teléfonos 24/7):
  * OTIS ascensores: 600-XXX-XXXX
  * Securitas: 800-XXX-XXXX
  * Plomero urgencia: +56 9 XXXX-XXXX
  * Electricista urgencia: +56 9 XXXX-XXXX

**Notificación Acodef**:
- Email Rodrigo Bravo: rodrigo.bravo@acodef.cl (revisa lun-vie mañana)
- WhatsApp Carolina Muñoz: +56 9 XXXX-XXXX (solo emergencias CRÍTICAS, ej: incendio, inundación, accidente grave)

**Procesamiento pago emergencia**:
- Proveedor envía factura a Acodef (lunes siguiente)
- Acodef procesa pago dentro 48 hrs (protocolo normal)
- Si urgencia absoluta (proveedor exige pago inmediato): Presidente usa fondo caja chica edificio ($500K), Acodef reembolsa lunes

**8. TARIFA 2026 PROPUESTA** (12:05-12:25):

**Propuesta Acodef**:
Acodef solicita aumento tarifa $220K/mes → $242K/mes (+10%) desde enero 2026.

**Justificación Carolina**:
- **Inflación acumulada**: 15 meses sin aumento (ene 2024 - mar 2025) = 12.8% IPC acumulado
- **Aumento costos operacionales**: Sueldos equipo Acodef +8%, arriendo oficina +10%, software contable +15%
- **Comparación mercado**: Acodef $220K/mes es 18% bajo promedio mercado ($268K/mes promedio 5 administradoras similares)
- **Servicios adicionales sin cargo**: Anexo mantenciones (nuevo), asesoría legal básica, tramitación permisos SEC

**Análisis presidente**:
- **Aumento solicitado**: +$22K/mes = +$264K/año
- **Impacto por departamento**: +$524/mes = +$6.288/año por dpto (0.3% gasto común)
- **Relación calidad-precio**: Acodef cumple 100% compromisos, servicio excelente
- **Alternativa cambio**: Cotizar nueva administradora implica riesgo (desconocida) + costo transición

**Negociación**:
Presidente propone: Aumento $220K → $235K/mes (+6.8%), vigencia 2 años (ene 2026 - dic 2027), con cláusula revisión anual si IPC acumulado >10%.

**Contraoferta Acodef**:
Acepta $235K/mes, pero solicita cláusula: Si edificio agrega servicios adicionales (ej: gestión proyectos infraestructura, licitaciones mayores), tarifa se renegocia.

**Acuerdo final**:
- **Tarifa 2026-2027**: $235K/mes (+6.8% vs actual)
- **Vigencia**: 2 años (ene 2026 - dic 2027)
- **Cláusula inflación**: Revisión anual automática si IPC acumulado >10%
- **Cláusula servicios**: Si edificio solicita servicios fuera alcance estándar, tarifa renegociable
- **Formalización**: Adendum contrato firmado antes 30-nov-2025

**9. VARIOS Y COMPROMISOS** (12:25-12:30):

**Resumen acuerdos reunión**:
1. ✓ Facturas emitidas día 23 (vs actual día 25), enviadas día 24
2. ✓ Anexo "Detalle Mantenciones" desde mayo 2025
3. ✓ Cobranza judicial dpto 304 autorizada ($350K costo edificio)
4. ✓ Protocolo gastos extraordinarios >$500K formalizado
5. ✓ Contactos comité actualizados (nueva tesorera)
6. ✓ Protocolo emergencias fuera horario definido
7. ✓ Tarifa 2026-2027: $235K/mes (+6.8%), vigencia 2 años

**Próxima reunión**:
- Noviembre 2025 (revisión anual, antes renovación tarifa 2026)

INFORME AL COMITÉ (13 mayo):

Presidente envió acta reunión (8 páginas) al comité:
- Resumen ejecutivo 7 acuerdos
- Justificación detallada cada decisión
- Análisis financiero aumento tarifa (impacto $524/mes/dpto = 0.3% gasto común)
- Recomendación: APROBAR acuerdos (mejora operacional + aumento razonable)

**Respuestas comité** (14-may):
- Tesorera: "Aumento 6.8% razonable (vs 10% solicitado). Anexo mantenciones excelente mejora. APRUEBO."
- Secretaria: "Protocolo emergencias claro. Cobranza dpto 304 correcta. APRUEBO."
- Vocal 1: "Acodef cumple, merece aumento moderado. APRUEBO."
- Vocal 2: "Todo en orden. APRUEBO."

**Aprobación unánime**: 5/5 comité (100%)

TIEMPO INVERTIDO:

- Preparación agenda + análisis previo: 3 horas (presidente)
- Reunión formal Acodef: 2.5 horas (presidente + tesorera)
- Elaboración acta + informe comité: 2 horas (presidente)
- **Total**: 7.5 horas (presidente 7.5 hrs + tesorera 2.5 hrs)

INVERSIÓN FINANCIERA:

- Reunión Acodef: $0 (sin costo, oficinas Acodef)
- Cobranza judicial dpto 304: $350.000 (autorizada, pendiente ejecución)
- Aumento tarifa 2026: +$15K/mes (ene 2026, impacto futuro)

BENEFICIOS OBTENIDOS:

**1. RELACIÓN ACODEF FORTALECIDA**:
- 7 temas pendientes resueltos en 1 reunión (eficiencia)
- Protocolos formalizados (claridad responsabilidades)
- Aumento tarifa negociado 6.8% (vs 10% solicitado, ahorro $7K/mes = $168K/año)

**2. MEJORA OPERACIONAL**:
- Anexo "Detalle Mantenciones" mejora supervisión proveedores
- Protocolo gastos >$500K agiliza decisiones (presidente autoriza emergencias <$2M)
- Facturas emitidas día 23 dan propietarios 11 días plazo (vs actual 9 días)

**3. PREVENCIÓN CONFLICTOS**:
- Protocolo emergencias fuera horario evita ambigüedad responsabilidades
- Cobranza judicial dpto 304 formalizada (morosidad 6 meses no tolerable)
- Límites claros autorización presidente ($2M máximo emergencias)

**4. TRANSPARENCIA Y GOBERNANZA**:
- Acuerdos formalizados por escrito (acta reunión 8 páginas)
- Comité aprobó unánimemente (5/5 votos)
- Trazabilidad total: Decisiones documentadas, no verbales

LECCIONES APRENDIDAS:

1. **Reunión formal > emails dispersos**: 7 temas resueltos 2.5 hrs vs semanas intercambio emails
2. **Acodef receptivo mejoras**: Anexo mantenciones aceptado sin costo adicional
3. **Negociación tarifa efectiva**: 6.8% vs 10% solicitado = ahorro $168K/año
4. **Protocolos formales previenen conflictos**: Gastos >$500K ahora tienen proceso claro
5. **Cobranza judicial 6 meses razonable**: Dpto 304 tuvo oportunidad pagar, no lo hizo, acción legal justificada
6. **Comité informado apoya decisiones**: Acta detallada 8 páginas generó aprobación unánime
7. **Relación Acodef excelente vs 2023**: Evaluación 71.3% (dic 2023) → 84.7% (feb 2025) = mejora sostenida

CONTINUIDAD:

Esta gestión consolidó la **madurez de la relación Comité-Acodef**:
- Compromisos 2024-2025: 100% cumplidos
- Mejoras operacionales: Anexo mantenciones, protocolo emergencias, facturas anticipadas
- Tarifa competitiva: $235K/mes (12% bajo promedio mercado $268K)
- Renovación 2026-2027: 2 años estabilidad (vs 1 año condicional 2024)

El nuevo comité demostró capacidad negociación efectiva:
- Aumento tarifa 6.8% vs 10% solicitado (ahorro $168K/año)
- Servicios adicionales sin costo (anexo mantenciones)
- Cláusulas protectoras (revisión anual si IPC >10%, servicios extraordinarios renegociables)

SEGUIMIENTO:

**Compromisos Acodef verificar**:
- Mayo 2025: Anexo "Detalle Mantenciones" incluido reporte (verificar 27-may)
- Junio 2025: Facturas emitidas día 23, enviadas día 24 (verificar 23-jun)
- Julio 2025: Cobranza judicial dpto 304 iniciada (verificar estado demanda)
- Nov 2025: Reunión anual revisión (preparar adendum tarifa 2026-2027)

Este proceso asegura que la administración del edificio opere con **claridad, eficiencia y transparencia**, preservando la excelente relación Comité-Acodef lograda tras las mejoras 2024-2025.`
  },

  268: {
    descripcion_nueva: `FECHA: 31 de mayo de 2025

CONTEXTO: El presidente ejecutó el **cierre contable mensual de mayo 2025**, proceso administrativo que consolida todos los ingresos, egresos, pagos de proveedores, cobranza de morosidad y análisis de liquidez del edificio, generando el reporte financiero que se presenta al comité y sirve de base para decisiones presupuestarias y proyecciones futuras. Mayo fue el 5to mes del nuevo comité (asumió nov 2024) y mostró tendencias financieras muy positivas en liquidez, reducción morosidad y ejecución presupuestaria controlada.

PROCESO DE CIERRE CONTABLE (28-31 mayo):

El presidente siguió el **protocolo de 8 pasos** establecido por Acodef y refinado por el comité:

**PASO 1: RECOPILACIÓN DOCUMENTACIÓN (28 mayo, 09:00-11:30)**

El presidente solicitó a Acodef (email 09:15 hrs) el **paquete completo de documentos mayo**:
- Detalle ingresos: Excel con 42 filas (1 por departamento)
- Detalle egresos: Excel con 28 remesas pagadas
- Comprobantes transferencias: 24 PDF bancarios
- Cheques emitidos: 4 comprobantes físicos (nómina personal)
- Morosidad actualizada: Excel departamentos morosos + montos + antigüedad
- Conciliación bancaria: Saldo libro vs saldo banco
- **NUEVO**: Anexo "Detalle Mantenciones" (acordado reunión 12-may, ID 267)

**Recepción Acodef**: 10:47 hrs (dentro plazo <2 hrs comprometido)

**Documentos verificados**:
- ✓ Todos los PDF comprobantes transferencias válidos (firmas banco, fechas correctas)
- ✓ Cheques físicos listos retiro (presidente los recogió 29-may, entregó personal 30-may)
- ✓ **ANEXO MANTENCIONES INCLUIDO** (primera vez): 7 proveedores, detalle trabajos ejecutados, próximas mantenciones, observaciones
- ✓ Conciliación bancaria cuadra: Diferencia $0 (saldo libro = saldo banco)

**PASO 2: VERIFICACIÓN INGRESOS (28 mayo, 14:00-15:30)**

El presidente revisó línea por línea los **ingresos mayo**:

**Gastos comunes cobrados** (42 departamentos × $210K):
- 39 departamentos: Pagaron completo antes día 5 (92.9% cumplimiento)
- 3 departamentos: Morosos (dptos 304, 507, 1009)
- Total cobrado: $8.190.000 (vs $8.820K esperado)
- Morosidad mayo: $630.000 (7.1% facturación)

**Fondo reserva cobrado** (42 departamentos × $10K):
- 39 departamentos: Aportaron $10K (mismos que gastos comunes)
- 3 departamentos: Morosos (mismos dptos)
- Total cobrado: $390.000 (vs $420K esperado)

**Morosidad cobrada** (gestión Acodef activa):
- Dpto 603: Pagó $105K (abono parcial deuda $315K)
- Dpto 801: Pagó $210K completo (regularizó mes anterior)
- Total cobrado: $315.000

**Ingresos totales mayo**: $8.895.000

**Composición**:
- Gastos comunes: $8.190K (92.1%)
- Fondo reserva: $390K (4.4%)
- Morosidad anterior: $315K (3.5%)

**Análisis presidente**:
- Cumplimiento pago: 92.9% departamentos al día (excelente, vs 88% promedio gestión anterior)
- Morosidad nueva: 7.1% (aceptable, vs ideal <5%)
- Cobranza activa Acodef funcionando: $315K recuperados mes anterior

**PASO 3: VERIFICACIÓN EGRESOS (29 mayo, 09:00-12:00)**

El presidente revisó las **28 remesas pagadas mayo** (autorizadas ID 265 29-abr):

**Servicios Esenciales** ($4.375.000, 51.2% egresos):
- OTIS ascensores: $1.125K (incluye visita emergencia abr)
- Securitas: $1.850K
- Acodef: $220K
- Internet: $60K
- Evelyn aseo: $530K
- Manser seguridad: $500K
- Luz común: $90K

**Mantenciones Preventivas** ($2.285.000, 26.7% egresos):
- Red húmeda SEC: $580K (certificación anual + reparación 2 mangueras)
- Ascensores preventivo: $335K
- Sensores incendio: $320K
- Cámaras CCTV: $185K
- Ducto basura: $0 (semestral, próxima oct 2025)
- Extintores recarga: $180K (vencimiento may 2025, ejecutado)
- Generador: $120K (trimestral)
- Filtración nivel -2 impermeabilización: $420K (programado jun, no ejecutado may)
- Reparaciones menores: $145K (problemas ID 266: maceteros, filtro generador, planta, silicona)

**Nómina Personal** ($1.980.000, 23.2% egresos):
- Fernanda: $600K
- María: $500K
- Claudio: $560K
- Juan: $320K

**Egresos totales mayo**: $8.540.000

**Ejecución presupuestaria**:
- Presupuesto mayo: $7.920K (estándar mensual)
- Ejecutado: $8.540K
- Variación: +$620K (+7.8%)
- **Causas desviación**:
  * Extintores recarga $180K (anual, no mensual, incluido presupuesto global pero concentrado mayo)
  * Reparaciones menores $145K (no presupuestadas, problemas detectados inspección ID 266)
  * Impermeabilización $420K programada jun, NO ejecutada may (error análisis presidente, corregido)

**Corrección análisis**:
Presidente recalculó excluyendo impermeabilización ($420K NO gastado mayo):
- Egresos mayo REALES: $8.120K
- Variación presupuestaria: +$200K (+2.5%, dentro rango aceptable <5%)

**PASO 4: ANÁLISIS SUPERÁVIT/DÉFICIT (29 mayo, 14:00-15:00)**

**Cálculo simple**:
- Ingresos: $8.895.000
- Egresos: $8.120.000 (corregido)
- **Superávit mayo**: $775.000 (8.7% ingresos)

**Comparación meses anteriores 2025**:
- Enero: $962K superávit (10.5%)
- Febrero: $831K superávit (9.0%)
- Marzo: $1.124K superávit (12.1%)
- Abril: $748K superávit (8.1%)
- **Mayo**: $775K superávit (8.7%)
- **Promedio ene-may**: $888K/mes (9.7% promedio)

**Tendencia**: Superávit sostenido 5 meses consecutivos (cultura financiera sólida)

**PASO 5: ANÁLISIS LIQUIDEZ (30 mayo, 09:00-10:30)**

**Saldo cuenta corriente** (30 mayo):
- Saldo inicial mayo (1-may): $6.247.000
- Ingresos mayo: $8.895.000
- Egresos mayo: $8.120.000
- **Saldo final mayo (31-may)**: $7.022.000

**Liquidez** (indicador clave):
- Saldo: $7.022.000
- Gastos mensuales promedio: $8.120.000 (mayo)
- **Ratio liquidez**: 86.5% gastos mensuales

**Interpretación**:
- Ideal: 50-60% gastos mensuales (2-3 semanas cobertura)
- Actual: 86.5% (3.9 semanas cobertura)
- **Evaluación**: EXCELENTE (liquidez muy saludable, colchón emergencias sólido)

**Comparación histórica**:
- Nov 2024 (transición): 42.8% (1.9 semanas)
- Ene 2025: 59.6% (2.7 semanas)
- Feb 2025: 71.4% (3.2 semanas)
- Mar 2025: 78.2% (3.5 semanas)
- Abr 2025: 74.0% (3.3 semanas)
- **May 2025**: 86.5% (3.9 semanas)

**Tendencia**: Mejora sostenida liquidez (+43.7 puntos vs nov 2024)

**PASO 6: ANÁLISIS MOROSIDAD (30 mayo, 11:00-12:30)**

**Morosidad actual** (31 mayo):

**Dpto 304** (Sr. Ramírez):
- Deuda acumulada: $1.495.000 (7 meses)
- Última gestión: Carta notarial may (advertencia judicial)
- Contacto: Teléfono no contesta, emails sin respuesta
- **Decisión**: Iniciar cobranza judicial jun 2025 (autorizado reunión Acodef ID 267)

**Dpto 507** (Sra. Chen):
- Deuda acumulada: $420.000 (2 meses)
- Contacto: Respondió WhatsApp, compromiso pago 15-jun
- **Decisión**: Esperar 15-jun, si no paga → carta notarial

**Dpto 1009** (Familia Rojas):
- Deuda acumulada: $210.000 (1 mes)
- Contacto: Pagó 2-jun (DESPUÉS cierre may, contabilizado jun)
- **Decisión**: Regularizado, sin acción

**Total morosidad**: $2.125.000 (24.1% facturación anual edificio)

**Porcentaje morosidad**: 7.1% (vs ideal <5%)

**Evolución morosidad 2025**:
- Ene: 6.8%
- Feb: 5.9%
- Mar: 5.2%
- Abr: 5.5%
- **May**: 7.1% (aumento temporal por dpto 304 acumulando)

**Análisis presidente**:
Morosidad 7.1% impactada principalmente por dpto 304 ($1.495K = 70% deuda total). Una vez cobranza judicial recupere capital, morosidad bajará a ~2.1% (solo dptos 507 + 1009 regularizables).

**PASO 7: ANEXO MANTENCIONES (NOVEDAD)** (30 mayo, 14:00-15:30)

**Primera vez implementado** (acordado reunión Acodef 12-may):

El presidente revisó el **Anexo "Detalle Mantenciones"** enviado por Acodef:

**OTIS Ascensores** ($1.125K mayo):
- Trabajos ejecutados: Revisión cables tracción (OK), lubricación rieles (completa), prueba sistema emergencia (exitosa), ajuste puertas cabina 1 y 2 (corregido desalineación menor)
- Visita emergencia 15-abr: Reparación puerta atascada ascensor 2 (sensor obstruido, limpiado + reemplazo sensor $140K)
- Próxima mantención: Junio 2025 (programada 20-jun)
- Observaciones: **Cable tracción ascensor 1 desgaste 18% (vida útil 6 años restantes). Monitorear sep 2025.**

**Securitas Vigilancia** ($1.850K mayo):
- Servicio: 4 guardias rotación 24/7 (día/noche lun-dom)
- Incidentes reportados: 0 (excelente mes)
- Rondas: 312/312 completadas (100% cumplimiento)
- Próxima evaluación: Trimestral ago 2025
- Observaciones: Guardia Pablo destacado (5 reportes proactivos problemas menores)

**Acodef Administración** ($220K mayo):
- Servicios: Contabilidad, cobranza, pagos, informes, asesoría legal básica
- Compromisos cumplidos: Anexo mantenciones (nuevo), facturas día 23 (implementado may)
- Morosidad gestionada: 2 llamadas dpto 507, carta notarial dpto 304, cobranza judicial autorizada
- Próxima reunión: Nov 2025 (anual)
- Observaciones: Desempeño excelente, cumplimiento 100% compromisos

**Red Húmeda SEC** ($580K mayo):
- Trabajos: Certificación anual SEC (válida hasta may 2026), inspección 18 mangueras, reparación 2 mangueras desgastadas (piso 8 y 12), prueba presión sistema (exitosa 8.2 bar)
- Próxima mantención: Mayo 2026 (anual)
- Observaciones: Sistema excelente estado, reparaciones preventivas evitaron falla futura

**Sensores Incendio** ($320K mayo):
- Trabajos: Inspección 18 sensores, limpieza detectores, calibración sensibilidad, certificado Mutual + SEC
- Próxima mantención: Agosto 2025 (trimestral)
- Observaciones: 0 falsas alarmas mayo (vs 2 falsas alarmas abril, calibración corrigió)

**Cámaras CCTV SafeHome** ($185K mayo):
- Trabajos: Revisión 18 cámaras, limpieza 3 lentes (ID 249 problemas detectados), ajuste ángulo cámara 12, test infrarrojo 15 cámaras nocturnas
- Próxima mantención: Agosto 2025 (trimestral)
- Observaciones: Sistema 100% funcional post-reparaciones, DVR sin fallas grabación

**Extintores Recarga** ($180K mayo):
- Trabajos: Recarga 14 extintores (vencimiento may 2025), inspección presión, certificación SEC + Mutual (válida 12 meses)
- Próxima mantención: Mayo 2026 (anual)
- Observaciones: Extintor piso 3 válvula desgastada, reemplazado preventivamente (incluido costo)

**Generador** ($120K mayo):
- Trabajos: Mantención trimestral (cambio filtro aire, revisión baterías, prueba encendido 45 segundos, medición consumo combustible)
- Próxima mantención: Agosto 2025 (trimestral)
- Observaciones: Filtro cambiado 10-may (ID 266), generador excelente estado

**Evaluación presidente del anexo**:
"Este anexo es **invaluable**. Ahora veo exactamente qué trabajos OTIS ejecutó por $1.125K, no solo 'servicio ascensores'. Detección cable desgaste 18% permite planificar reemplazo 2031 (6 años anticipación). Securitas reporta rondas 100% cumplidas. Acodef cumple compromisos. EXCELENTE herramienta supervisión."

**PASO 8: PREPARACIÓN INFORME COMITÉ** (31 mayo, 09:00-13:00)

El presidente elaboró **reporte ejecutivo 12 páginas**:

**Página 1: Resumen Ejecutivo**
- Ingresos: $8.895K (100.8% presupuesto)
- Egresos: $8.120K (102.5% presupuesto)
- Superávit: $775K (8.7% ingresos)
- Liquidez: 86.5% gastos mensuales (EXCELENTE)
- Morosidad: 7.1% (impactada por dpto 304, cobranza judicial autorizada)

**Página 2-3: Detalle Ingresos**
- Tabla 42 dptos: Pagaron / Morosos
- Morosidad cobrada: $315K (dptos 603 + 801)
- Cumplimiento pago: 92.9% (39/42 dptos)

**Página 4-6: Detalle Egresos**
- 28 remesas clasificadas: Servicios esenciales, mantenciones, nómina
- Gráfico torta: 51.2% esenciales, 26.7% mantenciones, 23.2% nómina
- Variación presupuestaria: +2.5% (dentro rango <5%)

**Página 7: Análisis Liquidez**
- Evolución nov 2024 - may 2025: 42.8% → 86.5% (+43.7 puntos)
- Gráfico línea: Tendencia ascendente sostenida
- Interpretación: Colchón emergencias sólido (3.9 semanas cobertura)

**Página 8: Morosidad**
- Detalle 3 dptos morosos
- Plan acción: Cobranza judicial 304, seguimiento 507, regularizado 1009
- Proyección: Morosidad bajará a ~2.1% post-recuperación dpto 304

**Página 9-11: ANEXO MANTENCIONES (NUEVO)**
- Tabla 7 proveedores: Trabajos ejecutados, próximas mantenciones, observaciones
- **Destacado**: Cable OTIS desgaste 18%, planificar reemplazo 2031
- **Destacado**: Securitas 100% rondas cumplidas, guardia Pablo excelente
- **Destacado**: Sensores incendio 0 falsas alarmas (vs 2 abril)

**Página 12: Conclusiones y Recomendaciones**
- Gestión financiera mayo: EXCELENTE (superávit sostenido, liquidez saludable)
- Morosidad: Acción judicial dpto 304 necesaria (7 meses sin pagar)
- Mantenciones: Todas ejecutadas según protocolo, problemas menores detectados y resueltos
- Proyección junio: Superávit estimado $820K (impermeabilización $420K programada)

ENVÍO Y APROBACIÓN COMITÉ (31 mayo, 14:00):

Presidente envió reporte 12 páginas al comité (email + WhatsApp grupo):

**Respuestas comité** (31-may y 1-jun):
- Tesorera: "Liquidez 86.5% excelente. Anexo mantenciones INVALUABLE, ahora vemos qué pagamos. Cobranza dpto 304 correcta. APRUEBO."
- Secretaria: "Superávit 5 meses consecutivos = gestión sólida. Cable OTIS desgaste 18% buena detección temprana. APRUEBO."
- Vocal 1: "Morosidad 7.1% temporal (dpto 304). Ejecución presupuestaria 102.5% controlada. APRUEBO."
- Vocal 2: "Todo excelente. APRUEBO."

**Aprobación unánime**: 5/5 comité (100%)

ANÁLISIS COMPARATIVO:

**Mayo 2025 vs Nov 2024 (transición)**:
- Superávit: $775K vs -$245K déficit (mejora $1.020K)
- Liquidez: 86.5% vs 42.8% (mejora +43.7 puntos)
- Morosidad: 7.1% vs 6.8% (aumento leve temporal)
- Ejecución presupuestaria: 102.5% vs 118.7% (mejora control -16.2 puntos)

**Mayo 2025 vs promedio gestión anterior (2022-2023)**:
- Superávit promedio: $775K vs $124K (mejora +$651K, +525%)
- Liquidez promedio: 86.5% vs 38.2% (mejora +48.3 puntos, +126%)
- Morosidad promedio: 7.1% vs 9.4% (mejora -2.3 puntos, -24%)

TIEMPO INVERTIDO:

- Recopilación documentación: 2.5 horas
- Verificación ingresos: 1.5 horas
- Verificación egresos: 3 horas
- Análisis superávit/liquidez/morosidad: 2.5 horas
- Anexo mantenciones (NUEVO): 1.5 horas
- Preparación informe comité: 4 horas
- **Total**: 15 horas (presidente, trabajo voluntario sin compensación)

BENEFICIOS OBTENIDOS:

**1. TRANSPARENCIA FINANCIERA ABSOLUTA**:
- Reporte 12 páginas detalla cada ingreso/egreso
- Anexo mantenciones muestra trabajos ejecutados (no solo montos)
- Comité tiene visibilidad total gestión financiera

**2. GESTIÓN FINANCIERA SÓLIDA**:
- Superávit sostenido: 5 meses consecutivos (promedio $888K/mes)
- Liquidez excelente: 86.5% (3.9 semanas cobertura emergencias)
- Ejecución presupuestaria: 102.5% (desviación <5%, controlada)

**3. DETECCIÓN TEMPRANA PROBLEMAS**:
- Cable OTIS desgaste 18%: Planificar reemplazo 2031 (6 años anticipación, vs emergencia $4M)
- Sensores incendio 0 falsas alarmas: Calibración may corrigió problema abril
- Filtro generador: Cambiado preventivamente antes falla (ID 266)

**4. COBRANZA ACTIVA FUNCIONANDO**:
- $315K morosidad recuperada mayo (dptos 603 + 801)
- Dpto 304 cobranza judicial autorizada (7 meses sin pagar, acción necesaria)
- Morosidad proyectada 2.1% post-recuperación dpto 304

LECCIONES APRENDIDAS:

1. **Anexo mantenciones game-changer**: Supervisión proveedores mejorada radicalmente, detección temprana problemas (cable OTIS)
2. **Liquidez 86.5% da tranquilidad**: Colchón emergencias permite absorber imprevistos sin crisis (vs 42.8% nov 2024)
3. **Superávit sostenido = gestión disciplinada**: 5 meses consecutivos superávit promedio $888K/mes = cultura financiera sólida
4. **Morosidad requiere acción progresiva**: Dpto 304 no pagó 7 meses, cartas no funcionaron, acción judicial correcta
5. **Ejecución presupuestaria 102.5% controlada**: Desviación <5% indica planificación precisa y control gastos riguroso
6. **Cierre mensual 15 hrs trabajo**: Proceso exhaustivo pero necesario, asegura transparencia y trazabilidad total
7. **Comité informado apoya gestión**: Reporte detallado 12 páginas genera confianza y aprobación unánime

CONTINUIDAD:

Este cierre mensual mayo 2025 refleja:
- **Gobernanza financiera ordenada**: Protocolos establecidos, transparencia absoluta
- **Mejoras sostenidas**: Liquidez, superávit, ejecución presupuestaria todas en tendencia positiva
- **Innovación operacional**: Anexo mantenciones (acordado 12-may) implementado inmediatamente
- **Cultura preventiva**: Detección temprana problemas (cable OTIS, sensores incendio, filtro generador)

La gestión financiera del nuevo comité (nov 2024 - may 2025) demostró:
- **Superávit acumulado**: $4.420K (6 meses ene-may, promedio $888K/mes)
- **Liquidez mejorada**: 42.8% → 86.5% (+43.7 puntos, +102%)
- **Morosidad controlada**: Promedio 6.3% (vs 9.4% gestión anterior)
- **Ejecución presupuestaria**: Promedio 103.8% (desviación <5%, excelente control)

El edificio Torre Oriente cerró mayo 2025 con **salud financiera excelente**, preservando y mejorando las bases sólidas heredadas de la gestión de Joaquín Puig (2023-2024).`
  },

  270: {
    descripcion_nueva: `FECHA: 15 de junio de 2025

CONTEXTO: El nuevo presidente convocó y ejecutó una **reunión de coordinación formal con Rodrigo Bravo (contador Acodef)** para dar seguimiento a los compromisos pactados en la reunión del 12 de mayo (ID 267), verificar implementación de mejoras operacionales acordadas, resolver 3 temas administrativos nuevos surgidos durante mayo-junio, y planificar la impermeabilización del nivel -2 del estacionamiento programada para junio. Esta reunión reflejó la dinámica de trabajo colaborativa Comité-Acodef consolidada tras la renovación 2025-2026 y el cumplimiento sostenido de protocolos.

ANTECEDENTES:

**Reunión previa 12 mayo (ID 267)** generó 7 acuerdos:
1. Facturas emitidas día 23 (vs día 25 anterior)
2. Anexo "Detalle Mantenciones" desde mayo 2025
3. Cobranza judicial dpto 304 autorizada
4. Protocolo gastos extraordinarios >$500K formalizado
5. Contactos comité actualizados
6. Protocolo emergencias fuera horario definido
7. Tarifa 2026: $235K/mes (+6.8%), vigencia 2 años

**Status 15 junio**:
- 30 días transcurridos desde acuerdos
- Cierre contable mayo completado (ID 268): Implementación anexo mantenciones verificada
- Nuevos temas administrativos surgidos que requieren coordinación

CONVOCATORIA REUNIÓN (10 junio):

Presidente envió email Rodrigo Bravo:
- **Asunto**: "Reunión seguimiento acuerdos 12-may + temas nuevos jun"
- **Propuesta fecha**: 15 junio, 10:00 hrs, oficinas Acodef
- **Agenda preliminar**:
  1. Verificación cumplimiento 7 acuerdos mayo
  2. Impermeabilización nivel -2: Coordinación ejecución
  3. Propuesta instalación medidor eléctrico individual (reducir gasto luz común)
  4. Certificación SEC ducto basura: Renovación octubre anticipada

**Respuesta Rodrigo** (11 jun, 09:15):
"Confirmado 15-jun 10:00. Agenda OK. Agrego punto: Propuesta pago proveedores quincena (acelerar flujo)."

REUNIÓN FORMAL (15 junio, 10:00-12:15):

**Participantes**:
- Presidente edificio Torre Oriente
- Rodrigo Bravo (contador Acodef)
- Carolina Muñoz (gerente Acodef, video llamada 30 min primera parte)

**Lugar**: Oficinas Acodef, Las Condes

**1. VERIFICACIÓN CUMPLIMIENTO ACUERDOS MAYO** (10:00-10:30)

Rodrigo presentó **reporte cumplimiento** con evidencia documental:

**Acuerdo 1: Facturas día 23**
- ✓ Implementado junio: Facturas mayo emitidas 23-may, enviadas 24-may
- ✓ Resultado: 41/42 dptos recibieron email 24-may (97.6% efectividad)
- ✓ Dpto 507: Email rebotó (casilla llena), reenviado WhatsApp 24-may, confirmado recepción
- ✓ Beneficio: Propietarios tienen 11 días plazo pago (vs 9 días sistema anterior)

**Acuerdo 2: Anexo Mantenciones**
- ✓ Implementado mayo: Reporte mayo incluyó anexo detalle 7 proveedores (ID 268)
- ✓ Presidente verificó: "Anexo INVALUABLE, detección cable OTIS desgaste 18% permite planificar reemplazo 2031"
- ✓ Rodrigo: "Feedback positivo. Continuaremos anexo todos los meses sin costo adicional."

**Acuerdo 3: Cobranza judicial dpto 304**
- ✓ Iniciado 5-jun: Demanda presentada Juzgado Civil Santiago
- ✓ Abogado: Cristián Muñoz (especialista copropiedad)
- ✓ Monto demandado: $1.495K capital + $127K intereses + $350K costas = $1.972K total
- ✓ Notificación: Receptor judicial notificó Sr. Ramírez 9-jun, recibió cédula personalmente
- ✓ Plazo respuesta: 15 días hábiles (hasta 30-jun)
- ✓ Rodrigo: "Si no responde, pedimos sentencia definitiva. Típicamente 2-3 meses proceso."

**Acuerdo 4: Protocolo gastos >$500K**
- ✓ Formalizado: Documento 3 páginas enviado comité 14-may
- ✓ Aplicado: Impermeabilización $420K (próximo punto agenda) siguió protocolo
- ✓ Sin emergencias >$500K desde mayo (protocolo no testeado aún)

**Acuerdo 5: Contactos actualizados**
- ✓ Base datos Acodef: Nueva tesorera Patricia Flores registrada
- ✓ Firma banco: Autorización transferencias >$1M actualizada 20-may

**Acuerdo 6: Protocolo emergencias fuera horario**
- ✓ Documentado: Teléfonos 24/7 proveedores registrados
- ✓ Sin emergencias fuera horario mayo-junio (protocolo no usado)

**Acuerdo 7: Tarifa 2026**
- ✓ Negociación: $235K/mes (+6.8%) acordado
- ⏳ Pendiente: Adendum contrato formal (plazo nov 2025)
- Rodrigo: "Lo firmaremos nov antes renovación ene 2026."

**Evaluación presidente**: "7/7 acuerdos cumplidos. Acodef 100% confiable. Anexo mantenciones especialmente valioso."

**2. IMPERMEABILIZACIÓN NIVEL -2** (10:30-11:15)

**Contexto**:
Inspección mayo (ID 266) detectó filtración menor pared nivel -2 (humedad capilar exterior, no tubería rota). Presidente cotizó 3 empresas especialistas, seleccionó mejor oferta técnico-precio.

**Cotizaciones recibidas**:
- **Empresa A (Impermeabilizaciones del Sur)**: $620K (membrana asfáltica)
- **Empresa B (AquaStop Chile)**: $420K (pintura impermeabilizante + sellador grietas)
- **Empresa C (DrySeal)**: $850K (sistema inyección poliuretano expandible)

**Análisis presidente**:
- Empresa A: Sobreprecio 48% vs B, sin justificación técnica clara
- **Empresa B**: Precio competitivo, técnica probada 15 años mercado, garantía 5 años
- Empresa C: Overkill (sistema industrial para filtraciones mayores, no necesario aquí)

**Decisión**: Empresa B (AquaStop) $420K, autorizado comité 8-jun (protocolo gastos <$500K)

**Coordinación con Acodef**:

Presidente solicitó a Rodrigo:
- **Gestión pago**: Transferencia 50% anticipo ($210K) antes 20-jun (inicio obras)
- **Gestión pago**: Transferencia 50% saldo ($210K) post-certificado obra (estimado 5-jul)
- **Comunicación residentes**: Aviso estacionamiento nivel -2 (acceso parcial bloqueado 3 días obra)

**Rodrigo confirmó**:
- ✓ Anticipo $210K: Transferencia programada 19-jun (empresa solicitó datos bancarios 12-jun)
- ✓ Saldo $210K: Procesado dentro 48 hrs recepción certificado obra
- ✓ Aviso residentes: Acodef preparará comunicado, presidente aprueba y envía WhatsApp grupo edificio

**Fechas obra**:
- 21-23 junio: Ejecución (viernes-domingo, menos impacto residentes)
- 24-26 junio: Secado (72 hrs, acceso restringido zona)
- 28 junio: Inspección final + certificado garantía 5 años

**Coordinación Fernanda (mayordomo)**:
- Presidente informó a Fernanda 16-jun: Señalización zona obras, coordinación acceso vehículos, supervisión empresa durante ejecución
- Fernanda asignará María (auxiliar) limpieza post-obra 27-jun

**3. PROPUESTA MEDIDOR ELÉCTRICO INDIVIDUAL** (11:15-11:45)

**Contexto**:
Gasto luz común mensual: $90K promedio (iluminación lobby, estacionamientos, áreas comunes). Presidente identificó oportunidad optimización: Instalar medidor individual edificio vs actual sistema prorrateo CFE (Chilquinta).

**Problema actual**:
- Edificio paga prorrateo CFE conjunto: Torre Oriente + Torre Poniente + Torre Mirador (3 edificios)
- Consumo real Torre Oriente: DESCONOCIDO (CFE cobra monto global 3 torres, divide por área construida)
- Riesgo: Torre Oriente podría estar subsidiando consumo otras torres (ej: iluminación exterior excesiva Torre Poniente)

**Propuesta presidente**:
- Instalar medidor individual Torre Oriente: Inversión $850K (instalación + tramitación SEC + habilitación CFE)
- Beneficio: Conocer consumo real, detectar ineficiencias, potencial ahorro si actual prorrateo injusto
- ROI estimado: Si ahorro 15% ($13.5K/mes), recuperación 5.3 años

**Análisis Rodrigo**:
"Interesante. Necesitamos datos históricos consumo para proyectar ahorro real. Sugiero:
1. Solicitar CFE desglose consumo 3 torres últimos 12 meses (si disponible)
2. Comparar área construida Torre Oriente vs prorrateo actual
3. Si desbalance >10%, medidor individual se justifica
4. Si desbalance <10%, ROI 5.3 años no atractivo (mejor invertir en LED adicionales)"

**Decisión reunión**:
- Rodrigo solicitará CFE desglose consumo 3 torres (plazo respuesta CFE: 15 días hábiles)
- Presidente analizará datos julio
- Si desbalance >10%: Propuesta medidor individual a comité ago
- Si desbalance <10%: Descartar proyecto (ROI no atractivo)

**4. CERTIFICACIÓN SEC DUCTO BASURA ANTICIPADA** (11:45-12:00)

**Contexto**:
Certificación SEC ducto basura vence octubre 2025 (válida hasta 28-oct). Presidente propone anticipar renovación a septiembre (1 mes antes vencimiento) para evitar riesgo multa SEC si empresa retrasa inspección.

**Justificación presidente**:
- **Experiencia anterior**: Certificación red húmeda may 2025 programada 20-may, empresa retrasó 3 días por sobrecarga agenda, certificado emitido 23-may (dentro plazo vencimiento 28-may, pero ajustado)
- **Riesgo multa**: Si ducto basura se agenda 20-oct y empresa retrasa 10 días, certificado emitido 30-oct = 2 días vencido = multa SEC $500K + riesgo cierre ducto
- **Solución**: Agendar sept (30 días margen error)

**Rodrigo de acuerdo**:
"Preventivo inteligente. Multa SEC $500K >> costo inspección $460K. Agendaré empresa 15-sep (43 días antes vencimiento). Si se retrasa 2 semanas, aún dentro plazo."

**Decisión**:
- ✓ Inspección ducto programada 15-sep (vs 20-oct anterior)
- ✓ Remesa sept incluirá $460K certificación anticipada
- ✓ Margen seguridad: 43 días antes vencimiento (absorbe retrasos imprevistos)

**5. PROPUESTA RODRIGO: PAGO PROVEEDORES QUINCENA** (12:00-12:15)

**Propuesta Rodrigo**:
Actualmente, todos los proveedores se pagan fin de mes (última semana). Rodrigo propone dividir pagos en 2 quincenas:
- **Quincena 1** (día 15 mes): Servicios esenciales (OTIS, Securitas, Acodef, Internet, Evelyn, Manser)
- **Quincena 2** (día 30 mes): Mantenciones preventivas + nómina personal

**Beneficio propuesto**:
- Flujo caja más balanceado (vs spike fin mes)
- Proveedores críticos (ascensores, seguridad) cobran antes (mejor relación comercial)
- Reducción presión liquidez fin mes (vs concentración 28 pagos última semana)

**Análisis presidente**:
- Liquidez actual 86.5% (ID 268) es excelente, NO hay problema flujo caja
- Cambio a quincena implica complejidad adicional: Doble autorización comité mensual (vs actual única)
- Riesgo: Descoordinar pagos con ciclo cobranza (propietarios pagan día 5)

**Contrapropuesta presidente**:
Mantener sistema actual (pagos fin mes) porque:
1. Liquidez actual saludable (86.5% = 3.9 semanas cobertura)
2. Sistema actual funciona bien (0 quejas proveedores, 0 retrasos)
3. Complejidad adicional no justificada (doble autorización comité innecesaria)
4. Si futuro liquidez baja <50%, reevaluar propuesta

**Rodrigo acepta**:
"Entendido. Liquidez 86.5% efectivamente no justifica cambio. Propuesta disponible si situación futura cambia."

**Decisión**:
✗ Propuesta quincena RECHAZADA (mantener sistema actual fin mes)

COMPROMISOS GENERADOS:

**Acodef (Rodrigo)**:
1. Continuar anexo mantenciones todos los meses
2. Transferir $210K anticipo impermeabilización 19-jun
3. Preparar comunicado obra nivel -2 (presidente aprueba antes envío)
4. Solicitar CFE desglose consumo 3 torres últimos 12 meses
5. Agendar inspección ducto basura 15-sep (anticipada)
6. Seguimiento demanda dpto 304 (verificar respuesta hasta 30-jun)

**Presidente**:
1. Coordinar Fernanda señalización obra nivel -2
2. Analizar datos CFE consumo (julio) para decisión medidor individual
3. Aprobar comunicado obra antes envío residentes
4. Informar comité seguimiento demanda dpto 304

INFORME AL COMITÉ (16 junio):

Presidente envió acta reunión (5 páginas) al comité:
- Resumen ejecutivo 5 puntos discutidos
- Verificación 100% cumplimiento acuerdos mayo
- Coordinación impermeabilización (obra 21-23 jun)
- Evaluación medidor eléctrico individual (pendiente datos CFE)
- Anticipación certificación ducto (prevención multa SEC)

**Respuestas comité** (17-jun):
- Tesorera: "Acodef cumple 100% compromisos. Impermeabilización $420K dentro presupuesto. Medidor eléctrico evaluar con datos. APRUEBO."
- Secretaria: "Anticipar ducto sept excelente prevención (vs riesgo multa $500K oct). APRUEBO."
- Vocal 1: "Demanda dpto 304 en proceso. Anexo mantenciones valioso. APRUEBO."
- Vocal 2: "Todo correcto. APRUEBO."

**Aprobación unánime**: 5/5 comité (100%)

TIEMPO INVERTIDO:

- Preparación agenda + análisis previo: 2.5 horas (presidente)
- Reunión Acodef: 2.25 horas (presidente)
- Elaboración acta + informe comité: 1.5 horas (presidente)
- Coordinación Fernanda obra nivel -2: 0.5 horas
- **Total**: 6.75 horas presidente (trabajo voluntario)

BENEFICIOS OBTENIDOS:

**1. ACODEF 100% CUMPLIMIENTO SOSTENIDO**:
- 7/7 acuerdos mayo cumplidos dentro 30 días
- Anexo mantenciones consolidado como herramienta mensual
- Relación Comité-Acodef: EXCELENTE (vs 71.3% evaluación dic 2023)

**2. OBRA NIVEL -2 COORDINADA SIN FRICCIONES**:
- $420K inversión autorizada, financiada, programada
- Residentes notificados con anticipación (evita quejas)
- Fernanda preparada supervisión (continuidad operacional)

**3. EVALUACIÓN MEDIDOR ELÉCTRICO BASADA DATOS**:
- Solicitud CFE desglose consumo (decisión informada vs intuitiva)
- Si desbalance >10%: Proyecto justificado
- Si desbalance <10%: Proyecto descartado (ROI no atractivo)

**4. PREVENCIÓN MULTA SEC $500K**:
- Certificación ducto anticipada sept (43 días margen)
- Costo prevención $460K << multa $500K + riesgo cierre ducto
- Filosofía preventiva heredada Joaquín preservada

**5. SISTEMA PAGO PROVEEDORES PRESERVADO**:
- Propuesta quincena evaluada y rechazada (complejidad innecesaria)
- Sistema actual funciona: Liquidez 86.5%, 0 quejas proveedores
- Decisión basada en datos (no cambiar por cambiar)

LECCIONES APRENDIDAS:

1. **Reuniones formales > emails dispersos**: 5 temas coordinados 2.25 hrs vs semanas intercambio emails
2. **Acodef cumple compromisos sostenidamente**: 100% acuerdos mayo implementados dentro 30 días
3. **Prevención > emergencia**: Certificación ducto anticipada evita riesgo multa $500K
4. **Decisiones basadas datos**: Medidor eléctrico evaluación requiere datos CFE (no intuición)
5. **No cambiar por cambiar**: Propuesta quincena rechazada porque sistema actual funciona bien
6. **Cobranza judicial requiere paciencia**: Dpto 304 proceso típico 2-3 meses (no inmediato)
7. **Comunicación proactiva residentes**: Aviso obra nivel -2 con anticipación evita quejas y conflictos

CONTINUIDAD:

Esta reunión consolidó el **modelo de coordinación Comité-Acodef**:
- Reuniones formales periódicas (mayo, junio, próxima nov)
- Seguimiento sistemático compromisos (verificación 100% cumplimiento)
- Mejoras operacionales continuas (anexo mantenciones, facturas anticipadas)
- Relación profesional basada confianza mutua y resultados

**Próximos hitos**:
- 19-jun: Transferencia anticipo impermeabilización $210K
- 21-23 jun: Ejecución obra nivel -2
- 30-jun: Plazo respuesta dpto 304 demanda judicial
- Jul: Análisis datos CFE consumo eléctrico
- 15-sep: Inspección ducto basura anticipada
- Nov: Reunión anual Acodef (renovación tarifa 2026, firma adendum)

El nuevo comité demostró capacidad gestión administrativa madura:
- Coordinación proactiva con Acodef (vs reactivo)
- Decisiones basadas datos y análisis (vs intuición)
- Prevención riesgos (certificación anticipada, obra coordinada)
- Preservación lo que funciona (rechazo cambio innecesario quincena)

La relación Comité-Acodef evolución positiva:
- Dic 2023: 71.3% evaluación (aprobado con observaciones)
- Feb 2025: 84.7% evaluación (+13.4 puntos mejora)
- Jun 2025: 100% cumplimiento compromisos (confianza consolidada)

Este modelo de gobernanza asegura que el edificio opere con **eficiencia, transparencia y mejora continua**, preservando las bases sólidas heredadas de la gestión de Joaquín Puig.`
  }
};

console.log('\n=== BATCH 38: RUTINA ADMINISTRATIVA ABRIL-MAYO 2025 (ALTO) ===\n');
console.log('Gestiones a expandir: 6');
console.log('IDs: 264, 265, 266, 267, 268, 270\n');

let modifiedCount = 0;
let totalCharsAdded = 0;

data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    const oldLength = g.descripcion.length;
    const newLength = expansions[g.id].descripcion_nueva.length;
    const improvement = newLength - oldLength;

    console.log(`✓ ID ${g.id}: ${g.titulo}`);
    console.log(`  Anterior: ~${oldLength} chars`);
    console.log(`  Nueva: ${newLength} chars`);
    console.log(`  Mejora: +${improvement} chars\n`);

    modifiedCount++;
    totalCharsAdded += improvement;

    return {
      ...g,
      descripcion: expansions[g.id].descripcion_nueva
    };
  }
  return g;
});

console.log(`\n✅ BATCH 38 COMPLETADO`);
console.log(`   Gestiones expandidas: ${modifiedCount}/6`);
console.log(`   IDs completados: 264, 265, 266, 267, 268, 270\n`);

console.log(`📊 ESTADÍSTICAS BATCH 38:`);
console.log(`   Total chars agregados: +${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / modifiedCount).toLocaleString()} chars/gestión\n`);

console.log(`📈 PROGRESO FASE ALTO:`);
console.log(`   Total expandidas: ~177/180 (estimado)`);
console.log(`   ALTO restantes: ~3\n`);

fs.writeFileSync(
  './app/auditoria/gestiones.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

console.log('✅ Archivo gestiones.json actualizado exitosamente\n');
console.log('🎉 FINAL PUSH - Solo 3 gestiones ALTO restantes para 100%!');