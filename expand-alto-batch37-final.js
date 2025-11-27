const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  249: {
    descripcion_nueva: `FECHA: 28 de marzo de 2025

CONTEXTO: El nuevo presidente ejecutó la **evaluación trimestral del sistema de cámaras CCTV**, verificando cobertura, calidad de grabación y funcionalidad operacional tras 12 meses de uso continuo desde instalación marzo 2024 por Joaquín Puig. Esta revisión representa el mantenimiento preventivo de una inversión mayor ($2.9M) en seguridad del edificio, asegurando que el sistema continúe cumpliendo su propósito de disuasión y documentación de incidentes.

SISTEMA CCTV INSTALADO (MARZO 2024):

Inversión original Joaquín Puig:
- 18 cámaras PTZ (Pan-Tilt-Zoom) marca SafeHome
- 1 DVR 24 canales grabación continua 30 días
- Monitor 32" conserjería visualización en vivo
- Software gestión remoto (app smartphone comité)
- Cercos eléctricos perimetrales integrados
- Inversión total: $2.9M (proyecto ID 74, mar 2024)

Distribución cámaras (18 unidades):
- 4 cámaras perímetro exterior (fachada, lateral, posterior, acceso servicio)
- 3 cámaras estacionamiento (entrada, sector A, sector B)
- 2 cámaras hall entrada (puerta principal, recepción)
- 2 cámaras áreas comunes interiores (gym, lounge)
- 6 cámaras pasillos pisos (piso 1, 3, 5, 7, 9, escalera emergencia)
- 1 cámara sala máquinas (bombas, tableros eléctricos)

PROCESO EVALUACIÓN TRIMESTRAL:

**1. REVISIÓN CALIDAD GRABACIÓN (28-mar 10:00-12:30, 2.5 hrs):**

Presidente y Fernanda revisaron grabaciones últimas 4 semanas (feb-mar 2025):

Calidad video por zona:
- Exterior día: 1080p HD, nítido, identificación placas 95% ✓
- Exterior noche: 720p infrarrojo, identificación personas 85% ✓
- Estacionamiento día: 1080p, identificación rostros 90% ✓
- Estacionamiento noche: 1080p infrarrojo, identificación rostros 75% (aceptable)
- Hall entrada: 1080p, excelente iluminación, identificación 100% ✓
- Pasillos pisos: 720p, identificación residentes 80% ✓
- Áreas comunes (gym/lounge): 1080p, excelente cobertura ✓

**Problemas detectados:**

**Cámara 7 (pasillo piso 5):**
- Imagen borrosa intermitente (50% tiempo)
- Causa probable: Lente sucio polvo obra porcelanato (ID 248, 24-27 mar)
- Solución: Limpieza programada 29-mar

**Cámara 12 (estacionamiento sector B):**
- Ángulo desalineado 15° (apunta parcialmente al suelo)
- Causa: Vibración vehículos grandes últimas semanas
- Cobertura: Reducida 30% vs ángulo óptimo
- Solución: Reajuste ángulo programado 29-mar

**Cámara 15 (exterior lateral):**
- Infrarrojo nocturno débil (alcance 8m vs 15m especificación)
- Causa: 2 LEDs infrarrojo quemados (de 8 totales)
- Impacto: Identificación nocturna reducida 40%
- Solución: Reemplazo módulo infrarrojo programado 1-abr

**2. VERIFICACIÓN COBERTURA (28-mar 13:00-14:30, 1.5 hrs):**

Presidente recorrió edificio con tablet app remota, verificando puntos ciegos:

Áreas con cobertura completa:
✓ Hall entrada: 100% cobertura 2 cámaras (ángulos cruzados)
✓ Estacionamiento: 95% cobertura 3 cámaras (excepto rincón NE)
✓ Perímetro exterior: 90% cobertura 4 cámaras
✓ Gym: 100% cobertura 1 cámara panorámica
✓ Lounge: 100% cobertura 1 cámara
✓ Sala máquinas: 100% cobertura 1 cámara

**Puntos ciegos identificados:**

**Escalera servicio (piso 1-10):**
- Solo 1 cámara escalera emergencia piso 5 (insuficiente 10 pisos)
- Riesgo: Actividad no autorizada escalera servicio sin registro
- Criticidad: MEDIA (escalera uso ocasional personal mantención)
- Propuesta mejora: 2 cámaras adicionales pisos 3 y 8 ($580K inversión)

**Rincón NE estacionamiento:**
- Ángulo muerto 4m² entre cámara sector B y muro
- Riesgo: Vehículo estacionado allí sin cobertura completa
- Criticidad: BAJA (solo 1 estacionamiento afectado: N°38)
- Propuesta: Reorientar cámara 12 post-reajuste (priorizar este rincón)

**Jardín lateral:**
- Sin cobertura directa (solo cobertura parcial cámara lateral)
- Riesgo: Acceso no autorizado desde calle lateral
- Criticidad: BAJA (cerco eléctrico disuasión principal, cámara respaldo)
- Decisión: Mantener sin cámara adicional (costo vs beneficio)

**3. PRUEBA FUNCIONALIDAD DVR (28-mar 14:30-15:30, 1 hr):**

Presidente y Fernanda probaron funciones DVR:

**Grabación continua:**
- Estado: Operativa 18/18 cámaras ✓
- Almacenamiento: 24 TB disco duro (uso 65% para 30 días)
- Proyección: Capacidad suficiente hasta mar 2026 (12 meses restantes)

**Búsqueda eventos:**
- Test: Buscar evento específico "persona hall entrada 15-mar 08:35"
- Resultado: Encontrado en 18 segundos (interfaz ágil) ✓
- Calidad: Video reproducción 1080p fluido, sin saltos

**Exportación video:**
- Test: Exportar clip 5 min USB (evidencia potencial incidente)
- Resultado: Exportado formato MP4 en 42 segundos ✓
- Reproducción externa: VLC player Windows, compatible 100%

**Visualización remota app smartphone:**
- Presidente probó app SafeHome en iPhone
- Login: Exitoso (usuario/contraseña almacenados) ✓
- Streaming en vivo: 18 cámaras visualizables tiempo real
- Latencia: 2-3 segundos (aceptable para monitoreo no crítico)
- Calidad: 720p adaptativa (según ancho banda 4G)

**4. ENTREVISTA FERNANDA (USUARIA PRINCIPAL, 15:30-16:00, 30 min):**

Presidente consultó a Fernanda sobre uso diario sistema:

**Frecuencia uso:**
- Monitoreo en vivo: 8-12 veces/día (verificación rutinaria)
- Revisión grabaciones: 2-3 veces/semana (incidentes menores)
- Exportación clips: 1 vez/mes promedio (evidencia situaciones)

**Incidentes documentados (mar 2024 - mar 2025):**
- Intento intrusión fallido: 1 evento (ago 2024, cerco eléctrico funcionó)
- Vehículos estacionamiento no autorizado: 4 eventos (identificados, notificados)
- Daños propiedad común menores: 3 eventos (basura dejada, identificados responsables)
- Conflictos residentes: 2 eventos (discusiones hall, video mostrado comité)

**Utilidad percibida Fernanda:**
- "Sistema excelente. Residentes saben que hay cámaras, comportamiento mejor."
- "Cuando hay problema, reviso video. 90% veces encuentro respuesta."
- "App celular útil cuando estoy fuera edificio, puedo ver en vivo."
- "Cámara pasillo piso 5 borrosa últimos días (obra porcelanato, polvo)."

**Sugerencias mejora:**
- Limpieza preventiva lentes trimestral (actualmente ad-hoc cuando se ve sucio)
- Cámara adicional escalera servicio (punto ciego actual)
- Alertas automáticas movimiento zonas críticas (actualmente solo grabación pasiva)

**5. ANÁLISIS ROI Y BENEFICIOS (16:00-16:30, 30 min):**

Presidente calculó retorno inversión 12 meses operación:

**Inversión:**
- Instalación inicial: $2.9M (mar 2024)
- Mantención año 1: $185K (contrato anual SafeHome, ID 227)
- **Total año 1: $3.085M**

**Beneficios tangibles:**
- Intento intrusión ago 2024 evitado: Pérdida potencial $2M-$5M (equipos, daños)
- Identificación responsables daños: 3 eventos, cobro multas $350K
- Disuasión comportamientos inadecuados: Incuantificable pero real (Fernanda confirma)
- Evidencia conflictos: 2 casos resueltos con video (evita escalamiento legal)

**Beneficios intangibles:**
- Percepción seguridad residentes: +40% (encuesta informal ago 2024)
- Reducción robos menores: Cero eventos vs 3 pre-sistema (2022-2023)
- Tranquilidad comité: Capacidad verificación hechos ante reclamos

**ROI conservador:**
- Beneficio tangible año 1: $2.35M (intrusión evitada mínimo $2M + multas $350K)
- Costo año 1: $3.085M
- **Déficit año 1: -$735K**

**ROI optimista (incluyendo intangibles):**
- Beneficio total: $5M+ (intrusión evitada + reducción robos + percepción seguridad)
- Costo año 1: $3.085M
- **Superávit: +$1.915M**

**Proyección 5 años:**
- Inversión inicial: $2.9M (año 1)
- Mantención: $185K/año × 5 = $925K
- Reemplazo eventual: $0 (sistema garantía 5 años)
- **Costo total 5 años: $3.825M**
- Beneficio conservador: $2.35M/año × 5 = $11.75M
- **ROI 5 años: +$7.925M** (beneficio neto 207%)

DECISIONES COMITÉ:

**Decisión 1: Reparaciones identificadas (inmediato)**
- 29-mar: Limpieza cámara 7 piso 5 (Fernanda, $0)
- 29-mar: Reajuste ángulo cámara 12 estacionamiento (Fernanda, $0)
- 1-abr: Reemplazo módulo infrarrojo cámara 15 (técnico SafeHome, $120K)

**Decisión 2: Protocolo limpieza preventiva (trimestral)**
- Fernanda ejecutará limpieza 18 lentes cada 3 meses
- Próximas fechas: Jun, Sep, Dic 2025
- Método: Paño microfibra + alcohol isopropílico
- Costo: $12K/trimestre (materiales)

**Decisión 3: Evaluación cámaras adicionales (jun 2025)**
- Comité evaluará presupuesto 2 cámaras escalera servicio ($580K)
- Análisis costo-beneficio vs criticidad MEDIA punto ciego
- Decisión final: Asamblea jun 2025 (inversión adicional)

**Decisión 4: Mantener contrato SafeHome (anual)**
- Renovación automática contrato mantención $185K/año
- Incluye: 4 visitas técnicas/año + soporte telefónico + actualizaciones firmware
- Próxima visita: Jun 2025 (trimestral)

**Decisión 5: Capacitación personal nuevo (cuando aplique)**
- Si rota Fernanda o ingresa personal nuevo
- SafeHome incluye capacitación gratuita contrato
- Duración: 2 hrs (uso DVR, app, exportación clips)

TIEMPO INVERTIDO POR NUEVO PRESIDENTE:
- Revisión grabaciones calidad: 2.5 horas
- Verificación cobertura física: 1.5 horas
- Prueba funcionalidad DVR: 1 hora
- Entrevista Fernanda: 0.5 horas
- Análisis ROI: 0.5 horas
- **Total: 6 horas**

BENEFICIOS:
✓ Sistema 100% operativo (18/18 cámaras funcionando)
✓ 3 problemas menores identificados (limpieza, reajuste, módulo IR)
✓ Cobertura 90-100% áreas críticas (solo 2 puntos ciegos MEDIA/BAJA criticidad)
✓ ROI positivo proyectado (207% beneficio neto 5 años)
✓ Fernanda satisfecha uso diario (facilita trabajo seguridad)
✓ 10 incidentes documentados año 1 (intrusión, estacionamiento, daños, conflictos)
✓ Percepción seguridad residentes +40% (vs pre-sistema)
✓ Mantención preventiva establecida (limpieza trimestral)

LECCIONES APRENDIDAS:
- Sistema CCTV requiere evaluación trimestral (detecta problemas temprano)
- Limpieza preventiva lentes crítica (polvo reduce calidad 50% en semanas)
- Puntos ciegos MEDIA/BAJA criticidad aceptables (costo adicional no justificado)
- ROI cámaras difícil cuantificar (beneficios intangibles mayores que tangibles)
- Usuario principal (Fernanda) fuente información valiosa (uso diario revela problemas)
- App remota útil comité (verificación fuera edificio)
- Inversión $2.9M justificada: Intrusión evitada ago 2024 sola habría costado $2M-$5M`
  },

  252: {
    descripcion_nueva: `FECHA: 2 de abril de 2025

CONTEXTO: Fernanda (mayordomo) ejecutó la **sesión de capacitación grupal sobre uso correcto del sistema biométrico**, siguiendo decisión comité reunión 12-mar tras supervisión sistema (ID 245). Esta capacitación representa la acción correctiva para reducir tasa de rechazo 3.4% a meta <2%, educando a 15 residentes con mayor dificultad técnica en presión correcta, ángulo óptimo y alternativas disponibles (tarjeta RFID, código numérico).

ANTECEDENTES (SUPERVISIÓN 12-MAR):

Problemas identificados sistema biométrico:
- Tasa rechazo global: 3.4% (vs meta <2%)
- 4 usuarios alta tasa rechazo >19% (dptos 703, 501, 1008, 304)
- Causas principales: Huella sucia/húmeda (53.9%), presión insuficiente (14.5%), dedo incorrecto (19.4%)
- Alternativas infrautilizadas: RFID + código numérico solo 8.1% uso (meta >20%)

Decisiones comité 12-mar:
1. ✓ Actualización huellas 4 usuarios problema (ejecutada 15-mar, ver ID 245)
2. ✓ Circular educativa alternativas (enviada 14-mar, 50 tarjetas RFID solicitadas)
3. ✓ Limpieza mensual sensores (establecida 20-mar)
4. **→ Capacitación presión correcta (18-mar programada, pospuesta 2-abr por agenda Fernanda)**

PREPARACIÓN CAPACITACIÓN:

**1. IDENTIFICACIÓN PARTICIPANTES (25-mar, 1 hr):**

Fernanda analizó logs sistema feb-mar, identificó 15 residentes tasa rechazo >5%:

Lista participantes invitados:
1. Dpto 703 (Sr. Ramírez): 38.3% rechazo (trabajador construcción, huellas callosas)
2. Dpto 501 (Sra. Torres): 30.8% rechazo (adulta mayor 78 años, artritis)
3. Dpto 1008 (Sr. Vásquez): 25.7% rechazo (ejecutivo, lava manos frecuente)
4. Dpto 304 (residente joven): 19.5% rechazo (usa dedo incorrecto)
5. Dpto 902 (Sr. Martínez): 12.3% rechazo (presión insuficiente)
6. Dpto 605 (Sra. González): 11.8% rechazo (manos secas, hidratación baja)
7. Dpto 203 (adulta mayor): 10.2% rechazo (temblor leve manos)
8. Dpto 808 (adolescente 16 años): 9.7% rechazo (impaciencia, retira rápido)
9. Dpto 401 (residente): 8.9% rechazo (ángulo incorrecto dedo)
10. Dpto 1103 (Sr. López): 8.2% rechazo (presiona excesivo, deforma huella)
11. Dpto 706 (residente): 7.5% rechazo (huella húmeda post-gym)
12. Dpto 504 (ejecutiva): 6.8% rechazo (uñas largas interfieren sensor)
13. Dpto 209 (adulta mayor): 6.3% rechazo (piel fina, huella débil)
14. Dpto 1007 (residente): 5.9% rechazo (dedo tembloroso)
15. Dpto 402 (residente): 5.4% rechazo (ángulo lateral incorrecto)

**2. INVITACIÓN FORMAL (28-mar):**

Fernanda envió invitación personalizada email + WhatsApp + bajo puerta:

Texto invitación:
"Estimado residente: El comité identificó que su huella digital presenta mayor tasa de rechazo que el promedio del edificio. Lo invitamos cordialmente a una **sesión de capacitación gratuita** sobre uso correcto del sistema biométrico:

**Fecha:** Miércoles 2 de abril, 19:00 hrs
**Lugar:** Hall entrada (junto a huellero portón principal)
**Duración:** 30 minutos
**Facilitadora:** Fernanda Gaete (Mayordomo)

Aprenderá:
- Presión correcta dedo sobre sensor
- Ángulo óptimo para lectura rápida
- Limpieza previa mano (seco vs húmedo)
- Alternativas disponibles (tarjeta RFID, código numérico)

Confirmar asistencia a conserjería o WhatsApp edificio.

Comité Administración"

**Confirmaciones recibidas:**
- 12/15 residentes confirmaron asistencia (80% aceptación)
- 3 residentes declinaron (horario incompatible)

**3. PREPARACIÓN MATERIALES (1-abr, 1 hr):**

Fernanda preparó:
- Presentación visual: 8 slides PowerPoint proyectados TV hall (trajo laptop personal)
- Demostración práctica: Huellero portón (in-situ)
- Tarjetas RFID disponibles: 15 unidades (entrega gratuita participantes)
- Formulario registro código numérico: Planilla Excel (personalización post-capacitación)
- Folleto impreso: 1 página resumen técnicas (entregado cada participante)

EJECUCIÓN CAPACITACIÓN (2-ABR 19:00-19:45, 45 MIN):

**Asistencia:**
- 11/12 confirmados asistieron (91.7% asistencia)
- 1 ausente (Sra. González dpto 605, avisó imprevisto)

**MÓDULO 1: INTRODUCCIÓN (5 min):**

Fernanda inició sesión hall entrada 19:00 sharp:
- Bienvenida y agradecimiento asistencia
- Contexto: Sistema biométrico 11 meses uso, tasa rechazo global 3.4% aceptable pero mejorable
- Objetivo capacitación: Reducir rechazos individuales >5% a <2%
- Metodología: Teoría (15 min) + práctica (20 min) + Q&A (10 min)

**MÓDULO 2: TÉCNICA CORRECTA PRESIÓN (15 min):**

**Slide 1: Anatomía sensor biométrico**
- Fernanda mostró diagrama sensor óptico:
  * Superficie vidrio templado (área lectura 2×2 cm)
  * LED infrarrojo inferior (ilumina huella desde abajo)
  * Cámara CCD captura imagen (resolución 500 DPI)
  * Software analiza crestas/valles huella (min 40 puntos coincidencia)

**Slide 2: Presión correcta (MEDIA)**
- Demostración Fernanda en vivo:
  * Presión insuficiente (roce suave): "Sensor no captura crestas completas, rechazo"
  * Presión correcta (media): "Dedo contacto firme sin aplastar, lectura <1 seg" ✓
  * Presión excesiva (aplasta): "Huella deforma, patrón altera, rechazo"
- Analogía: "Como apretón manos cordial, ni débil ni fuerte"

**Slide 3: Duración contacto (2-3 segundos)**
- Error común: Retirar dedo demasiado rápido (<1 seg)
- Técnica correcta: Mantener contacto estable 2-3 seg
- Señal visual: LED verde huellero = lectura exitosa, retirar
- Señal sonora: Beep confirmación = acceso aprobado

**Slide 4: Ángulo dedo (PERPENDICULAR)**
- Demostración ángulo incorrecto:
  * Dedo lateral 45°: Sensor captura huella parcial, rechazo
  * Dedo inclinado: Área contacto reducida, puntos coincidencia insuficientes
- Técnica correcta: Dedo perpendicular sensor, yema completa contacto
- Tip visual: "Mirar directamente uña mientras coloca dedo"

**MÓDULO 3: PREPARACIÓN MANO (10 min):**

**Slide 5: Limpieza y humedad**
- Problema húmedo: Manos mojadas/sudorosas reflejan luz, rechazo
  * Solución: Secar mano completamente papel toalla (dispenser instalado junto huellero)
- Problema seco extremo: Manos muy secas (invierno, alcohol gel excesivo) reducen contraste crestas
  * Solución: Frotar palmas 5 seg (genera humedad natural leve)
- Problema sucio: Polvo, grasa, pintura sobre huella
  * Solución: Lavar mano agua + jabón, secar completamente

**Slide 6: Casos especiales**
- **Trabajadores manuales (Sr. Ramírez):** Callosidades alteran huella
  * Solución: Registrar 3 dedos (índice, pulgar, medio), usar menos calloso
  * Alternativa: Tarjeta RFID (100% confiable, no depende huella)
- **Adultos mayores (Sra. Torres):** Artritis, piel fina, temblor
  * Solución: Código numérico 6 dígitos (más fácil que huella)
- **Ejecutivos (Sr. Vásquez):** Lava manos frecuente (húmedo constante)
  * Solución: Secar vigorosamente + esperar 30 seg antes intentar
- **Adolescentes (dpto 808):** Impaciencia, retira rápido
  * Técnica: Contar mental "1-Mississippi, 2-Mississippi" antes retirar

**MÓDULO 4: ALTERNATIVAS SISTEMA (5 min):**

**Slide 7: Tarjeta RFID**
- Tecnología: Radiofrecuencia 13.56 MHz, lectura sin contacto 5 cm
- Ventajas: 100% confiable, no depende condición mano, rápida <1 seg
- Desventajas: Puede perderse (reposición $15K), debe portarse siempre
- Procedimiento solicitud: Conserjería, entrega inmediata gratis
- **Fernanda entregó tarjeta cada participante presente (11 tarjetas)**

**Slide 8: Código numérico 6 dígitos**
- Tecnología: Teclado numérico, código personalizado
- Ventajas: Nunca se pierde (memoria), no depende tecnología
- Desventajas: Más lento (5-8 seg), puede olvidarse si no usa frecuente
- Seguridad: Código solo conocido usuario (no compartir)
- Procedimiento solicitud: Conserjería, Fernanda programa en sistema
- **7 participantes solicitaron código (adultos mayores + Sr. Ramírez)**

**MÓDULO 5: PRÁCTICA GUIADA (20 min):**

Fernanda supervisó cada participante practicar técnica correcta in-situ:

**Práctica individual (11 residentes × 3 intentos c/u = 33 intentos):**

Resultados práctica:
- **Sr. Ramírez (dpto 703):** Intento 1 rechazo (presión insuficiente), Intento 2 ✓, Intento 3 ✓
- **Sra. Torres (dpto 501):** Intento 1 rechazo (temblor), solicitó código numérico (aprobado)
- **Sr. Vásquez (dpto 1008):** Secó mano, 3/3 intentos ✓ (aprendió técnica)
- **Residente dpto 304:** Cambió a índice (antes usaba pulgar), 3/3 ✓
- **Sr. Martínez (dpto 902):** Aumentó presión, 3/3 ✓
- **Adulta mayor dpto 203:** Solicitó código numérico
- **Adolescente dpto 808:** Aprendió esperar 2 seg, 3/3 ✓
- **Residente dpto 401:** Corrigió ángulo perpendicular, 3/3 ✓
- **Sr. López (dpto 1103):** Redujo presión (no aplastar), 2/3 ✓
- **Residente dpto 706:** Secó manos, 3/3 ✓
- **Residente dpto 1007:** Practicó estabilizar dedo, 2/3 ✓

**Tasa éxito práctica:**
- Total intentos: 33
- Exitosos: 28 (84.8%)
- Rechazados: 5 (15.2%)
- **Mejora vs tasa individual previa:** Promedio participantes 15.7% → 15.2% (práctica primera vez, mejora esperada con uso continuo)

**Observaciones Fernanda durante práctica:**
- "Mayoría error común: Presión insuficiente (roce suave)"
- "Cuando enseño presión correcta, casi todos aprenden inmediatamente"
- "Adultos mayores prefieren código numérico (más fácil que huella)"
- "Sr. Ramírez feliz con tarjeta RFID (no más frustración callosi dades)"

**MÓDULO 6: PREGUNTAS Y RESPUESTAS (10 min):**

**Q1 (Sr. Vásquez):** "¿Puedo usar tarjeta RFID y huella indistintamente?"
**A (Fernanda):** "Sí, sistema acepta ambos. Si huella rechaza, use tarjeta inmediatamente."

**Q2 (Sra. Torres):** "¿Código numérico seguro? ¿Alguien más puede saber?"
**A:** "Solo usted y sistema. Yo programo pero no veo código final (encriptado). Puede cambiarlo cuando quiera."

**Q3 (Residente 808):** "¿Por qué mi huella a veces funciona y a veces no?"
**A:** "Probablemente inconsistencia presión o humedad mano. Con práctica, desarrollará 'memoria muscular' presión correcta."

**Q4 (Sr. Ramírez):** "¿Tarjeta puede copiarse como llaves?"
**A:** "No fácilmente. RFID encriptado. Requiere lector especial + código edificio. Mucho más seguro que llave tradicional."

**Q5 (Sr. Martínez):** "¿Sistema actualiza solo o debo re-registrar huella?"
**A:** "Huella registrada permanente salvo usted solicite actualización. No requiere re-registro automático."

**CIERRE (5 min):**

Fernanda finalizó capacitación 19:45:
- Agradecimiento participación
- Entrega folleto resumen 1 página (11 copias)
- Recordatorio: Tarjetas RFID y códigos numéricos disponibles 24/7 conserjería
- Seguimiento: Fernanda monitoreará tasa rechazo próximas 4 semanas, contactará si persiste problema
- Invitación consultas: WhatsApp edificio o presencial conserjería

**Evaluación satisfacción (informal):**
- 11/11 participantes agradecieron capacitación
- 8/11 comentarios positivos explícitos: "Muy útil", "Ahora entiendo", "Debió hacerse antes"
- 3/11 neutral (participaron pero no comentaron)
- **Satisfacción: 100% asistentes (sin quejas, varios elogios)**

RESULTADOS POST-CAPACITACIÓN (SEGUIMIENTO 3-30 ABRIL):

Fernanda monitoreó logs sistema abril, comparó tasa rechazo participantes:

**Tasa rechazo individual PRE vs POST capacitación:**

| Usuario | Pre-capacitación | Post-capacitación | Mejora |
|---------|-----------------|------------------|--------|
| Sr. Ramírez (703) | 38.3% | 5.2% | -33.1% ✓ (usa RFID) |
| Sra. Torres (501) | 30.8% | 0.8% | -30.0% ✓ (usa código) |
| Sr. Vásquez (1008) | 25.7% | 4.1% | -21.6% ✓ (seca manos) |
| Residente 304 | 19.5% | 3.2% | -16.3% ✓ (dedo correcto) |
| Sr. Martínez (902) | 12.3% | 2.8% | -9.5% ✓ |
| Adulta mayor 203 | 10.2% | 1.1% | -9.1% ✓ (usa código) |
| Adolescente 808 | 9.7% | 3.9% | -5.8% ✓ |
| Residente 401 | 8.9% | 2.5% | -6.4% ✓ |
| Sr. López (1103) | 8.2% | 3.7% | -4.5% ✓ |
| Residente 706 | 7.5% | 2.1% | -5.4% ✓ |
| Residente 1007 | 5.9% | 2.9% | -3.0% ✓ |

**Promedio participantes:**
- Pre: 15.7% rechazo
- Post: 2.9% rechazo
- **Mejora: -12.8 puntos (reducción 81.5%!) 🎉**

**Tasa rechazo global edificio abril:**
- Pre-capacitación (mar): 3.4%
- Post-capacitación (abr): **2.7%** (-0.7 puntos, mejora 20.6%)
- **META <2% NO ALCANZADA TODAVÍA, PERO PROGRESO SIGNIFICATIVO**

**Uso alternativas (RFID + código) abril:**
- Pre: 8.1%
- Post: **18.3%** (+10.2 puntos, incremento 126%)
- **META >20% CASI ALCANZADA (92% cumplimiento)**

TIEMPO INVERTIDO POR FERNANDA:
- Identificación participantes: 1 hora
- Invitación formal: 0.5 horas
- Preparación materiales: 1 hora
- Ejecución capacitación: 1 hora (45 min sesión + 15 min setup)
- Seguimiento abril: 1 hora
- **Total: 4.5 horas**

BENEFICIOS:
✓ 11 residentes capacitados (73% invitados asistieron)
✓ Tasa rechazo participantes reducida 81.5% (15.7% → 2.9%)
✓ Tasa rechazo global edificio mejorada 20.6% (3.4% → 2.7%)
✓ Uso alternativas incrementado 126% (8.1% → 18.3%)
✓ 7 códigos numéricos programados (adultos mayores + Sr. Ramírez)
✓ 11 tarjetas RFID entregadas (opción backup todos participantes)
✓ Satisfacción 100% participantes (elogios, sin quejas)
✓ Inversión $0 (capacitación interna Fernanda, tarjetas ya compradas)

LECCIONES APRENDIDAS:
- Capacitación presencial más efectiva que circular escrita (mejora 81.5% vs circular 14-mar ~30%)
- Práctica guiada crítica (residentes aprenden haciendo, no solo escuchando)
- Alternativas RFID + código solución inmediata casos difíciles (Sr. Ramírez -33.1%, Sra. Torres -30%)
- Adultos mayores prefieren código numérico (tecnología familiar vs biometría compleja)
- Trabajadores manuales prefieren tarjeta RFID (huellas deterioradas problema permanente)
- Error común: Presión insuficiente (mayoría usuarios aprende rápido con demostración)
- Meta <2% requiere capacitación continua nuevos residentes + recordatorios periódicos
- Inversión tiempo Fernanda 4.5 hrs genera beneficio edificio completo (mejora experiencia 187 usuarios)`
  }
};

console.log('\n=== BATCH 37 FINAL: SISTEMAS CCTV & CAPACITACIÓN (ALTO) ===\n');
console.log('Completing Batch 37 with final 2 gestiones (249, 252)\n');

let totalCharsAdded = 0;
let expandedCount = 0;

// Apply expansions
data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    const oldLength = g.descripcion.length;
    const newLength = expansions[g.id].descripcion_nueva.length;
    const improvement = newLength - oldLength;

    console.log(`✓ ID ${g.id}: ${g.titulo}`);
    console.log(`  Anterior: ~${oldLength} chars`);
    console.log(`  Nueva: ${newLength} chars`);
    console.log(`  Mejora: +${improvement} chars\n`);

    totalCharsAdded += improvement;
    expandedCount++;

    return {
      ...g,
      descripcion: expansions[g.id].descripcion_nueva
    };
  }
  return g;
});

// Write updated data
fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log(`\n✅ BATCH 37 COMPLETADO 100%`);
console.log(`   Gestiones expandidas: ${expandedCount}/2`);
console.log(`   IDs completados: ${Object.keys(expansions).join(', ')}`);
console.log(`\n📊 ESTADÍSTICAS BATCH 37 FINAL:`);
console.log(`   Total chars agregados: +${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / expandedCount).toLocaleString()} chars/gestión`);

console.log(`\n📈 PROGRESO FASE ALTO:`);
console.log(`   Total expandidas: ~171/180 (estimado)`);
console.log(`   ALTO restantes: ~9`);
console.log(`\n🎉 BATCH 37 COMPLETE - All 6 gestiones from original batch finished!`);
