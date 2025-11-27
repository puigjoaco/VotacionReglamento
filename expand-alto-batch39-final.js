const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  290: {
    descripcion_nueva: `FECHA: 11 de junio de 2025

CONTEXTO: El nuevo presidente ejecutó la **coordinación logística completa para la Asamblea Ordinaria Anual 2025**, evento formal donde el comité presentó la memoria anual, estados financieros auditados 2024-2025, informe de gestión, proyectos realizados y presupuesto 2025-2026 a los 42 propietarios del edificio Torre Oriente. Esta asamblea fue la primera bajo la presidencia del nuevo comité (asumió nov 2024) y marcó el cierre formal del ciclo administrativo iniciado tras la transición desde la gestión de Joaquín Puig.

ANTECEDENTES ASAMBLEAS:

**Historial asambleas edificio**:
- **Marzo 2024** (gestión Joaquín): Asamblea extraordinaria reglamento interno
- **Noviembre 2024**: Elección nuevo comité (fin mandato Joaquín)
- **Junio 2025**: Primera asamblea ordinaria nuevo comité

**Marco legal** (Ley 19.537 Copropiedad Inmobiliaria):
- Art. 18: Asamblea ordinaria OBLIGATORIA anual
- Convocatoria: Mínimo 15 días hábiles anticipación
- Quórum: 1ra citación 50%+1 propietarios, 2da citación cualquier número
- Materias obligatorias: Memoria anual, estados financieros, presupuesto siguiente año

**Fecha asamblea fijada**: 27 de junio de 2025, 19:00 hrs

PLANIFICACIÓN (1-11 junio):

**PASO 1: CONVOCATORIA FORMAL (1 junio)**

El presidente preparó **convocatoria oficial 4 páginas**:

**Encabezado**:
"ASAMBLEA ORDINARIA ANUAL PROPIETARIOS
EDIFICIO TORRE ORIENTE PORTEZUELO
Jueves 27 de junio de 2025, 19:00 hrs
Lounge edificio (Piso 1)"

**Tabla de contenidos**:
1. Memoria anual 2024-2025
2. Estados financieros auditados
3. Informe de gestión presidente
4. Proyectos ejecutados nov 2024 - jun 2025
5. Presupuesto 2025-2026
6. Varios

**Primera citación**: 27-jun 19:00 hrs (quórum 22 propietarios, 50%+1)
**Segunda citación**: 27-jun 19:30 hrs (cualquier número propietarios asistentes)

**Envío multi-canal** (2 junio):
- Correo certificado: 42 cartas enviadas Correos Chile (comprobantes rastreables)
- Email: Lista 38 propietarios con email registrado (4 sin email conocido)
- WhatsApp grupo propietarios: PDF convocatoria + recordatorio
- Aviso físico: Cartel lobby edificio (respaldo adicional)

**Costo convocatoria**:
- Correos certificados: $8.400 (42 cartas × $200)
- Impresión convocatorias: $4.200 (42 copias × $100)
- **Total**: $12.600

**PASO 2: PREPARACIÓN MEMORIA ANUAL** (2-5 junio)

El presidente elaboró **memoria anual 18 páginas** con apoyo tesorera y secretaria:

**Estructura memoria**:

**Página 1-2: Carta del Presidente**
- Resumen ejecutivo gestión nov 2024 - jun 2025 (7 meses)
- Logros principales: Liquidez +43.7 puntos (42.8% → 86.5%), morosidad -1.3 puntos (6.8% → 5.5%), superávit sostenido $888K/mes promedio
- Desafíos enfrentados: Cobranza judicial dpto 304, impermeabilización nivel -2, transición Acodef mejoras
- Agradecimientos: Comité, personal (Fernanda, María, Claudio, Juan), Acodef, residentes

**Página 3-5: Gestión Financiera**
- Ingresos 2024-2025: $62.384K (nov-jun, 8 meses)
- Egresos 2024-2025: $57.456K
- Superávit acumulado: $4.928K (7.9% ingresos)
- Evolución liquidez: Gráfico mes a mes (nov 42.8% → jun 86.5%)
- Evolución morosidad: Gráfico mes a mes (nov 6.8% → jun 5.5%)
- Principales inversiones: Impermeabilización $420K, reparaciones menores $244K, extintores $180K

**Página 6-8: Mantenciones Ejecutadas**
- Tabla 12 mantenciones preventivas: Red húmeda SEC, sensores incendio, cámaras CCTV, ducto basura, extintores, generador, ascensores (7 visitas preventivas + 1 emergencia)
- Costo total mantenciones: $15.840K (8 meses)
- Beneficio: 0 fallas mayores equipos (vs 3-4 emergencias/mes gestión anterior 2022)

**Página 9-11: Personal**
- Equipo estable: Fernanda (mayordomo 9.4/10), María (auxiliar 9.6/10), Claudio (guardia 8.5/10), Juan (conserje 9.0/10)
- Promedio evaluación: 9.1/10 (vs 8.9/10 transición nov 2024)
- Rotación: 0% (vs 5 mayordomos diferentes gestión Rodrigo Lorca 2022-2023)
- Capacitación ejecutada: Biométrico (ID 252), emergencias, atención residentes

**Página 12-14: Relación Acodef**
- Evaluación feb 2025: 84.7% (mejora +13.4 puntos vs dic 2023)
- Compromisos cumplidos: Anexo mantenciones, facturas día 23, cobranza activa, protocolo gastos >$500K
- Reuniones coordinación: Mayo (ID 267) y junio (ID 270), 100% compromisos verificados
- Tarifa negociada 2026: $235K/mes (+6.8% vs $220K, ahorro $180K/año vs 10% solicitado)

**Página 15-16: Proyectos Infraestructura**
- Impermeabilización nivel -2: $420K (eliminó filtración, garantía 5 años)
- Reparaciones menores: Maceteros terraza $45K, filtro generador $28K, planta lobby $18K, espejo gimnasio $8K
- Sistemas heredados mantenidos: Biométrico (enrolamiento ID 264 ahorro $672K/año), CCTV (evaluación ID 249), ducto basura (limpieza semestral 0 olores)

**Página 17: Cultura Preventiva**
- Inspección mensual áreas comunes (ID 266): 8 problemas menores detectados, $99K reparaciones vs $2M+ emergencias evitadas
- Mantenciones anticipadas: Certificación ducto sep (vs oct vencimiento, margen 43 días)
- Detección temprana: Cable OTIS desgaste 18% (planificar reemplazo 2031)

**Página 18: Agradecimientos y Perspectivas**
- Legado Joaquín Puig: Sistemas instalados (biométrico, CCTV, remarcadores agua, internet consolidado) generando ahorro $21.16M/año
- Continuidad y mejora: Nuevo comité preservó cultura preventiva y optimizó procesos
- Perspectivas 2025-2026: Evaluación paneles solares (ROI 4.4 años), repintura fachada 2027, medidor eléctrico individual (pendiente datos CFE)

**Tiempo elaboración**: 22 horas (presidente 14 hrs, tesorera 5 hrs, secretaria 3 hrs)

**PASO 3: ESTADOS FINANCIEROS AUDITADOS** (6-7 junio)

Rodrigo Bravo (Acodef) preparó **estados financieros auditados 8 páginas**:

**Balance General** (30 junio 2025):
- Activos: $7.184K (cuenta corriente $7.022K + cuentas cobrar $162K)
- Pasivos: $0 (sin deudas proveedores, todos pagos al día)
- Patrimonio: $7.184K (acumulado desde inicio edificio 2019)

**Estado de Resultados** (nov 2024 - jun 2025):
- Ingresos operacionales: $62.384K
- Gastos operacionales: $57.456K
- Resultado operacional: +$4.928K (superávit 7.9%)

**Flujo de Efectivo**:
- Saldo inicial nov 2024: $2.932K (liquidez 42.8%)
- Ingresos: $62.384K
- Egresos: $57.456K
- Saldo final jun 2025: $7.022K (liquidez 86.5%)

**Notas Auditadas**:
- Morosidad: $2.125K (7.1% facturación), 1 demanda judicial en proceso (dpto 304 $1.495K)
- Fondo reserva: $3.120K acumulado (cuota $10K/dpto × 42 × 8 meses, menos gastos extraordinarios)
- Inversiones 2024-2025: $420K impermeabilización + $244K reparaciones menores = $664K total

**Certificación Acodef**:
"Los presentes estados financieros reflejan fielmente la situación patrimonial y resultados del edificio Torre Oriente al 30 de junio de 2025, preparados según principios contabilidad generalmente aceptados."

Rodrigo Bravo, Contador
RUT: XX.XXX.XXX-X
Acodef Administración

**PASO 4: PRESENTACIÓN INFORME GESTIÓN** (8-9 junio)

El presidente preparó **presentación PowerPoint 42 diapositivas**:

**Sección 1: Contexto Transición** (Diapos 1-5)
- Nov 2024: Fin mandato Joaquín Puig, elección nuevo comité
- Herencia recibida: Edificio ordenado, sistemas instalados ($27.6M inversión 2023-2024), ahorro estructural $21.16M/año
- Desafíos iniciales: Liquidez 42.8%, morosidad 6.8%, aprender protocolos establecidos

**Sección 2: Logros Financieros** (Diapos 6-15)
- Gráfico liquidez: Nov 42.8% → Jun 86.5% (+43.7 puntos, +102% mejora)
- Gráfico morosidad: Nov 6.8% → Jun 5.5% (-1.3 puntos, -19% mejora)
- Gráfico superávit: 8 meses consecutivos, promedio $888K/mes
- Comparación presupuestaria: Ejecución promedio 103.8% (desviación <5%, excelente control)

**Sección 3: Personal** (Diapos 16-20)
- Equipo estable: 0% rotación vs 5 mayordomos gestión anterior
- Evaluaciones trimestrales: Promedio 9.1/10 (tendencia ascendente)
- Capacitación: Biométrico (ID 252 ahorro $672K/año), emergencias, atención residentes
- Fernanda destacada: Enrolamiento biométrico, coordinación mantenciones, supervisión obras

**Sección 4: Mantenciones Preventivas** (Diapos 21-28)
- 12 mantenciones ejecutadas: Red húmeda, sensores, CCTV, ducto, extintores, generador, ascensores
- Costo $15.840K vs beneficio: 0 fallas mayores, 0 emergencias >$500K
- Inspección mensual: 8 problemas menores detectados, $99K reparaciones vs $2M+ emergencias evitadas
- Anexo mantenciones: Innovación Acodef, detección temprana cable OTIS desgaste 18%

**Sección 5: Relación Acodef** (Diapos 29-33)
- Evaluación 84.7% (mejora +13.4 puntos vs dic 2023)
- Compromisos 100% cumplidos: Anexo mantenciones, facturas día 23, cobranza activa
- Tarifa negociada: $235K/mes 2026 (+6.8% vs $220K, ahorro $180K/año vs 10% solicitado)
- Reuniones coordinación: Mayo, junio, próxima nov (modelo colaborativo consolidado)

**Sección 6: Proyectos Ejecutados** (Diapos 34-38)
- Impermeabilización nivel -2: $420K, garantía 5 años, filtración eliminada
- Enrolamiento biométrico: 18 usuarios, ahorro $672K/año reposiciones RFID
- Reparaciones preventivas: $244K (maceteros, filtro generador, planta, espejo, pasamanos)
- Sistemas heredados preservados: Biométrico, CCTV, remarcadores agua, internet consolidado

**Sección 7: Perspectivas 2025-2026** (Diapos 39-42)
- Paneles solares: Evaluación técnica-financiera ago 2025 (ROI 4.4 años, ahorro $5.4M/año)
- Medidor eléctrico individual: Pendiente datos CFE (decisión ago)
- Repintura fachada: Programada 2027 (vida útil 2 años restantes)
- Continuidad cultura preventiva: Inspección mensual, mantenciones anticipadas

**Tiempo elaboración**: 12 horas (presidente)

**PASO 5: PRESUPUESTO 2025-2026** (10 junio)

La tesorera preparó **presupuesto proyectado 2025-2026 (3 páginas)**:

**Ingresos proyectados** (jul 2025 - jun 2026, 12 meses):
- Gastos comunes: $8.820K/mes × 12 = $105.840K
- Fondo reserva: $420K/mes × 12 = $5.040K
- Morosidad cobrada: $315K/mes × 12 = $3.780K (estimado conservador)
- **Total ingresos**: $114.660K

**Egresos proyectados**:

**Servicios Esenciales** ($52.620K, 45.9% presupuesto):
- OTIS ascensores: $1.125K/mes × 12 = $13.500K
- Securitas: $1.850K/mes × 12 = $22.200K
- Acodef: $220K/mes × 5 (jul-nov) + $235K/mes × 7 (dic-jun) = $2.745K (aumento ene 2026)
- Internet: $60K/mes × 12 = $720K
- Evelyn aseo: $530K/mes × 12 = $6.360K
- Manser seguridad: $500K/mes × 12 = $6.000K
- Luz común: $90K/mes × 12 = $1.080K

**Mantenciones Preventivas** ($28.380K, 24.7% presupuesto):
- Red húmeda SEC: $580K anual
- Ascensores preventivo: $335K/mes × 12 = $4.020K
- Sensores incendio: $320K/trim × 4 = $1.280K
- Cámaras CCTV: $185K/trim × 4 = $740K
- Ducto basura: $460K × 2 (abr + oct) = $920K
- Extintores: $180K anual
- Generador: $120K/trim × 4 = $480K
- Reparaciones menores: $150K/mes × 12 = $1.800K (estimado)

**Nómina Personal** ($23.760K, 20.7% presupuesto):
- Fernanda: $600K/mes × 12 = $7.200K
- María: $500K/mes × 12 = $6.000K
- Claudio: $560K/mes × 12 = $6.720K
- Juan: $320K/mes × 12 = $3.840K

**Inversiones Proyectadas** ($9.900K, 8.6% presupuesto):
- Paneles solares: $24.000K (si aprobado ago, instalación nov-dic 2025)
  * NOTA: Financiamiento propuesto: 40% fondo reserva ($9.600K) + 60% cuota extraordinaria ($14.400K = $343K/dpto)
  * Presupuesto incluye solo aporte fondo reserva ($9.600K), cuota extraordinaria votación separada
- Imprevistos: $300K (colchón emergencias)

**Total egresos proyectados**: $114.660K

**Superávit/Déficit proyectado**: $0 (presupuesto equilibrado)

**Observaciones tesorera**:
"Presupuesto equilibrado asume:
1. Morosidad promedio 5.5% (actual tendencia)
2. Paneles solares aprobados ago (inversión $24M, presupuesto incluye solo $9.6M fondo reserva)
3. Sin aumentos salariales personal (evaluar dic 2025 según desempeño)
4. Tarifa Acodef $235K/mes desde ene 2026 (acordado 12-may)
5. Sin emergencias >$500K (imprevistos $300K colchón)

Si paneles solares NO aprobados, superávit proyectado $9.600K (fondo reserva no usado)."

**PASO 6: LOGÍSTICA ASAMBLEA** (11 junio)

El presidente coordinó con Fernanda (mayordomo) **preparación lounge edificio**:

**Disposición sala**:
- 45 sillas (42 propietarios + 3 comité adicionales)
- Mesas auxiliares: Café, té, galletas (cortesía edificio)
- Proyector + pantalla: Presentación PowerPoint 42 diapositivas
- Micrófono inalámbrico: Presidente + propietarios intervenciones
- Mesón registro: Lista asistencia + carpetas documentación individual

**Carpetas documentación** (42 unidades preparadas):
- Convocatoria original
- Memoria anual (18 páginas)
- Estados financieros auditados (8 páginas)
- Presupuesto 2025-2026 (3 páginas)
- Presentación PowerPoint impresa (42 diapositivas)
- Hoja votaciones: Aprobación memoria, estados financieros, presupuesto
- Lápiz + sobre

**Costo logística**:
- Impresión carpetas: $42.000 (42 carpetas × $1.000)
- Café + té + galletas: $18.000
- Arriendo proyector: $0 (propio edificio, proyecto Joaquín 2024)
- Micrófono: $0 (propio edificio)
- **Total**: $60.000

**Coordinación Fernanda**:
- 26 junio 18:00: Montaje sala (disposición sillas, mesas, proyector)
- 27 junio 18:30: Preparación café/té, carpetas en sillas
- 27 junio 19:00-22:00: Asistencia durante asamblea (café servido, micrófonos funcionando)
- 27 junio 22:30: Desmontaje sala, limpieza

CONFIRMACIONES ASISTENCIA (11-25 junio):

El presidente gestionó **confirmaciones asistencia** propietarios:

**Método**:
- WhatsApp grupo propietarios: Encuesta "Asistirá asamblea 27-jun? Sí/No/Tal vez"
- Llamadas telefónicas: 12 propietarios sin WhatsApp
- Email: Recordatorio 20-jun (1 semana antes)

**Resultados** (25 junio, 2 días antes):
- Confirmados: 31 propietarios (73.8%)
- No asisten: 7 propietarios (viaje, trabajo, salud)
- Tal vez: 4 propietarios (confirmarán último momento)

**Proyección quórum**:
- Primera citación (50%+1 = 22 propietarios): **PROBABLE** (31 confirmados > 22 requeridos)
- Segunda citación (cualquier número): ASEGURADA

TIEMPO INVERTIDO TOTAL (1-11 junio):

- Convocatoria formal: 3 horas (presidente)
- Memoria anual: 22 horas (presidente 14 hrs, tesorera 5 hrs, secretaria 3 hrs)
- Estados financieros: 8 horas (Rodrigo Bravo Acodef)
- Presentación PowerPoint: 12 horas (presidente)
- Presupuesto 2025-2026: 5 horas (tesorera)
- Logística asamblea: 4 horas (presidente + Fernanda)
- Confirmaciones asistencia: 3 horas (presidente)
- **Total**: 57 horas (comité + Acodef, trabajo voluntario sin compensación)

INVERSIÓN FINANCIERA:

- Convocatoria (correo + impresión): $12.600
- Logística (carpetas + café): $60.000
- **Total**: $72.600 (0.8% gastos mensuales edificio)

BENEFICIOS OBTENIDOS:

**1. CUMPLIMIENTO LEGAL 100%**:
- Convocatoria 15 días hábiles anticipación (ley cumplida)
- Materias obligatorias incluidas: Memoria, estados financieros, presupuesto
- Documentación completa 42 carpetas (transparencia absoluta)

**2. TRANSPARENCIA Y PARTICIPACIÓN**:
- 73.8% propietarios confirmaron asistencia (vs promedio 40-50% asambleas típicas)
- Documentación enviada multi-canal (correo certificado + email + WhatsApp)
- Presentación PowerPoint 42 diapositivas (información visual clara)

**3. PROFESIONALISMO GESTIÓN**:
- Memoria anual 18 páginas (vs típico 5-8 páginas edificios similares)
- Estados financieros auditados certificados Acodef
- Presupuesto proyectado 2025-2026 con supuestos explícitos
- Logística impecable: Proyector, micrófono, café, carpetas individuales

**4. COMUNICACIÓN EFECTIVA**:
- Confirmaciones asistencia anticipadas (planificación quórum)
- Recordatorios multi-canal (email 20-jun, WhatsApp 25-jun)
- Carpetas individuales evitan lectura colectiva (eficiencia tiempo)

LECCIONES APRENDIDAS:

1. **Convocatoria multi-canal efectiva**: Correo certificado + email + WhatsApp = 100% propietarios alcanzados
2. **Documentación anticipada genera participación**: 73.8% confirmaciones vs 40-50% típico
3. **Presentación PowerPoint profesionaliza**: 42 diapositivas visuales > lectura 18 páginas memoria
4. **Carpetas individuales eficientizan asamblea**: Propietarios revisan documentos ANTES asamblea, intervenciones informadas
5. **Fernanda coordinación logística invaluable**: Presidente se enfoca contenido, mayordomo ejecuta montaje
6. **Inversión $72.6K razonable**: Transparencia y profesionalismo > ahorro $50K con convocatoria email-only
7. **Confirmaciones anticipadas aseguran quórum**: 31 confirmados > 22 requeridos = tranquilidad presidente

CONTINUIDAD:

Esta coordinación logística demostró **madurez administrativa del nuevo comité**:
- Primera asamblea ordinaria bajo nuevo presidente (transición exitosa)
- Documentación exhaustiva: Memoria 18 páginas, estados auditados, presupuesto proyectado
- Participación alta: 73.8% confirmaciones (vs 40-50% típico)
- Profesionalismo: PowerPoint, carpetas individuales, café cortesía, proyector

**Próximos hitos**:
- 27-jun 19:00: Asamblea ordinaria (1ra citación)
- 27-jun 19:30: 2da citación (si quórum no alcanzado)
- 28-jun: Acta asamblea elaborada (secretaria)
- 30-jun: Implementación acuerdos asamblea (presidente)

El nuevo comité consolidó su **legitimidad y credibilidad** mediante:
- Transparencia financiera absoluta (estados auditados, anexo mantenciones)
- Gestión profesional (liquidez +43.7 puntos, morosidad -1.3 puntos)
- Continuidad cultura preventiva (herencia Joaquín preservada y mejorada)
- Comunicación efectiva (73.8% participación proyectada)

Esta asamblea marcó el **cierre formal del primer ciclo administrativo** del nuevo comité (nov 2024 - jun 2025), demostrando capacidad gestión, transparencia y resultados concretos ante los propietarios del edificio Torre Oriente.`
  },

  294: {
    descripcion_nueva: `FECHA: 13 de junio de 2025

CONTEXTO: El presidente ejecutó la **verificación final exhaustiva del estado del edificio** 14 días antes de la Asamblea Ordinaria Anual (27 junio), protocolo preventivo diseñado para detectar y resolver cualquier problema visible, funcional o estético que pudiera generar quejas o preguntas de propietarios durante el evento formal. Esta supervisión complementó la inspección mensual regular (ID 266 mayo) con énfasis en áreas que propietarios visitantes (no residentes) observarían durante su recorrido desde estacionamiento hasta lounge piso 1.

MOTIVACIÓN:

**Contexto asamblea**:
- 27 junio: Primera asamblea ordinaria nuevo comité
- 31 propietarios confirmados (73.8% participación proyectada)
- 18 propietarios NO residentes (viven fuera, solo visitan asambleas)
- Percepción crítica: Propietarios visitantes juzgan gestión comité por estado visible edificio

**Filosofía presidente**:
"La asamblea es el momento donde los propietarios nos evalúan. Si llegan y ven lobby sucio, estacionamiento con problemas, ascensor lento, o lounge descuidado, eso opaca cualquier buen resultado financiero que presentemos. Necesitamos que el edificio esté IMPECABLE."

**Lecciones históricas**:
- Asamblea extraordinaria marzo 2024 (Joaquín): Propietario quejó filtración parking box 84, desvió atención de votación reglamento
- Asamblea nov 2024 (transición): 2 propietarios comentaron "edificio se ve mejor que antes" (Joaquín había realizado supervisión pre-asamblea similar)

ALCANCE SUPERVISIÓN:

El presidente inspeccionó **rutas críticas** que propietarios recorrerían 27-jun:

**RUTA 1: Estacionamiento → Lobby** (mayoría propietarios)
- Estacionamiento nivel -1: 28 boxes (68% propietarios estacionan aquí)
- Ascensor lobby: 100% propietarios usan
- Lobby: Primera impresión al salir ascensor

**RUTA 2: Puerta principal → Lobby** (propietarios sin auto)
- Fachada exterior: Vista desde calle
- Puerta principal: Acceso peatonal
- Recepción biométrica: Sistema acceso
- Lobby: Convergencia ambas rutas

**RUTA 3: Lobby → Lounge Piso 1** (destino asamblea)
- Escalera interna: Algunos propietarios prefieren vs ascensor
- Lounge: Sala asamblea (montaje 26-jun, pero estado base debe ser impecable)

EJECUCIÓN SUPERVISIÓN (13 junio, 08:00-13:30):

**HORA 08:00-09:30: ESTACIONAMIENTO NIVEL -1**

El presidente recorrió **28 boxes de propietarios** (espacios 1-28):

✓ Iluminación: 63/63 luces LED funcionando (proyecto 2024, 100% operativo)
✓ Señalización: Números boxes visibles, pintura líneas clara
✓ Portón acceso: Motor + respaldo funcionando, apertura 8 segundos (excelente)
✓ Piso: Limpio, sin manchas aceite (vs ID 266 mayo, mancha box 37 fue limpiada)

✗ **PROBLEMA 1 DETECTADO**: Box 12 (Sra. Alvarado)
- Descripción: Filtración menor techo (gota cada 30 segundos)
- Diagnóstico: Tubería agua piso superior (no lluvia, es problema tubería)
- Urgencia: MEDIA (no crítico, pero visible y molesto)
- Solución programada: Plomero Luis Godoy inspección 14-jun (mañana)
  * Causa probable: Unión tubería PVC antiguo (piso 1 baño), reparación estimada $85K
  * Plazo ejecución: 15-jun (antes asamblea 27-jun, 12 días margen)

✗ **PROBLEMA 2 DETECTADO**: Cuarto basura nivel -1
- Descripción: 3 bolsas basura tiradas FUERA contenedor (mal olor)
- Causa: Residente depositó basura noche 12-jun, contenedor estaba lleno
- Urgencia: ALTA (mal olor perceptible, mala impresión propietarios)
- Solución inmediata: Presidente llamó María (auxiliar aseo) 08:47 hrs
  * María llegó 09:15, limpió cuarto basura, depositó 3 bolsas en contenedor principal
  * Rociado ambientador, cuarto impecable 09:45
  * Costo: $0 (dentro horario laboral María)

✗ **PROBLEMA 3 DETECTADO**: Ventilación estacionamiento
- Descripción: Extractor aire funcionando, pero filtro polvo visible sucio
- Diagnóstico: Acumulación 6 meses (última limpieza dic 2024)
- Urgencia: BAJA (funcional, pero estéticamente descuidado)
- Solución programada: Fernanda limpieza filtro 14-jun (30 min trabajo)
  * Costo: $0 (mantenimiento interno)

**HORA 09:30-10:15: ASCENSOR Y LOBBY**

**Ascensor**:
✓ Cabina limpia (María limpieza diaria)
✓ Espejos sin rayas
✓ Botonera funcionando 100%
✓ Iluminación LED interior excelente
✓ Velocidad: Piso -1 → Piso 1 en 12 segundos (normal)

✗ **PROBLEMA 4 DETECTADO**: Ascensor puerta cierre lento
- Descripción: Puerta tarda 8 segundos cerrar (vs normal 4-5 seg)
- Diagnóstico: Sensor obstruido o fotocélula desalineada (no urgente, pero molesto)
- Urgencia: MEDIA (funcional, pero percepción "ascensor viejo/lento")
- Solución: Notificación OTIS 13-jun 10:45 hrs
  * OTIS confirmó visita técnica 18-jun (dentro mantención mensual programada)
  * Ajuste sensor sin costo adicional (incluido contrato $1.125K/mes)

**Lobby**:
✓ Piso porcelanato impecable (instalación ene 2025 ID 209, brilla)
✓ Puerta principal brazos hidráulicos DORMA: Cierre suave, sin ruido
✓ Sistema biométrico: Presidente testeó 5 veces, 5/5 reconocimiento exitoso (<1 seg)
✓ Iluminación LED: 18/18 luces funcionando
✓ Muebles recepción: Limpios, ordenados

✗ **PROBLEMA 5 DETECTADO**: Planta decorativa lobby (OTRA VEZ)
- Descripción: Misma planta ID 266 mayo (reemplazada $18K) nuevamente marchita
- Causa: Riego insuficiente (María olvidó riego lun 10-jun por emergencia box 12)
- Urgencia: MEDIA (estética, mala impresión propietarios visitantes)
- Solución: Presidente instruyó María 10:20 hrs
  * Riego inmediato + fertilizante líquido
  * Verificación diaria hasta 27-jun (asamblea)
  * Si no recupera: Reemplazar nueva planta 24-jun ($18K)

✗ **PROBLEMA 6 DETECTADO**: Ventanal lobby (interior) manchas
- Descripción: Vidrio interior lobby con huellas digitales visibles (niños tocaron)
- Urgencia: MEDIA (estética, primera impresión propietarios)
- Solución: María limpieza vidrios 13-jun 11:00 hrs
  * Limpiavidrios profesional + paño microfibra
  * Resultado: Vidrios impecables, transparencia 100%
  * Costo: $0 (dentro tareas regulares María)

**HORA 10:15-11:00: FACHADA EXTERIOR**

Presidente salió edificio, caminó perímetro completo **vista externa**:

✓ Revestimiento fachada: Buen estado general (decoloración leve, pero no crítico)
✓ Ventanales: Sin roturas visibles
✓ Jardín entrada: Plantas mantenidas, pasto cortado

✗ **PROBLEMA 7 DETECTADO**: Cartel nombre edificio descolorido
- Descripción: Letras "TORRE ORIENTE PORTEZUELO" fachada descoloridas por sol (6 años antigüedad)
- Diagnóstico: Desgaste natural, no urgente pero poco profesional
- Urgencia: BAJA (estética, pero propietarios visitantes ven al llegar)
- Solución: Propuesta repintura letras jun 2026 (incluir presupuesto 2025-2026)
  * Costo estimado: $450K (pintura especial resistente UV)
  * NOTA: NO resolver antes asamblea 27-jun (plazo insuficiente)

✗ **PROBLEMA 8 DETECTADO**: Basurero exterior (esquina edificio)
- Descripción: Basurero municipal calle lleno, basura desbordando
- Causa: Recolección municipal atrasada (debió ser 12-jun, no pasó camión)
- Urgencia: MEDIA (mala imagen propietarios llegando)
- Solución: Presidente llamó Municipalidad Peñalolén 10:48 hrs
  * Reclamo formal ingresado, folio #2584
  * Municipalidad comprometió recolección extraordinaria 14-jun
  * Verificación 15-jun: Basurero vacío

**HORA 11:00-12:00: ESCALERA INTERNA LOBBY-PISO 1**

Presidente subió escalera interna **verificación ruta alternativa** lounge:

✓ Escalones limpios, sin polvo
✓ Pasamanos firme (vs ID 266 mayo, tornillo suelto piso 7 fue reparado)
✓ Iluminación escalera funcionando

✗ **PROBLEMA 9 DETECTADO**: Espejo pared escalera (piso 1) salpicado
- Descripción: Espejo decorativo con salpicaduras agua (limpieza ventanas 12-jun)
- Urgencia: BAJA (estética menor)
- Solución: María limpieza 13-jun 12:15 hrs
  * Espejo impecable, sin marcas
  * Costo: $0

**HORA 12:00-13:00: LOUNGE PISO 1 (SALA ASAMBLEA)**

Presidente inspeccionó **espacio donde ocurrirá asamblea 27-jun**:

✓ Piso lounge: Limpio, sin manchas
✓ Mobiliario: Sofás limpios, mesas sin polvo
✓ Ventanales lounge: Vista exterior clara
✓ Baño lounge: Limpio, jabón/papel disponible
✓ Internet WiFi: Velocidad testeada 58 Mbps (plan 60 Mbps, excelente)

✗ **PROBLEMA 10 DETECTADO**: Cortinas lounge desteñidas
- Descripción: 3 cortinas ventanales con decoloración por sol (lado norte, exposición directa)
- Diagnóstico: Desgaste normal 5 años uso
- Urgencia: BAJA (estética, pero asamblea nocturna 19:00 hrs = cortinas cerradas, no visibles)
- Solución: Propuesta reemplazo cortinas ago 2025 (post-asamblea)
  * Costo estimado: $280K (3 cortinas blackout calidad profesional)
  * NOTA: NO urgente para asamblea (cortinas cerradas durante evento)

✗ **PROBLEMA 11 DETECTADO**: Proyector polvo acumulado
- Descripción: Proyector edificio (adquirido proyecto Joaquín 2024) con polvo visible lente
- Diagnóstico: Falta uso regular (usado solo asambleas, 2 veces/año)
- Urgencia: ALTA (funcionalidad crítica asamblea, presentación PowerPoint 42 diapositivas)
- Solución: Presidente limpió personalmente 13-jun 12:45 hrs
  * Paño microfibra suave + soplador aire comprimido
  * Testeo proyección: Imagen nítida, brillo 100%
  * Verificación completa: PowerPoint 42 diapositivas proyectadas sin problemas
  * Costo: $0

**HORA 13:00-13:30: GIMNASIO (VERIFICACIÓN EXTRA)**

Aunque asamblea NO usa gimnasio, presidente verificó **área común adicional** (propietarios podrían visitar pre/post-asamblea):

✓ Equipos gimnasio funcionando
✓ Espejo gimnasio: Pegado correctamente (ID 266 mayo, silicona $8K funcionó)
✓ Piso gimnasio limpio

✗ **PROBLEMA 12 DETECTADO**: Aire acondicionado gimnasio filtro sucio
- Descripción: Filtro aire con polvo visible (6 meses sin limpieza)
- Urgencia: BAJA (funcional, pero mantenimiento atrasado)
- Solución: Fernanda limpieza filtro 14-jun
  * Extracción filtro, lavado agua, secado 24 hrs, reinstalación 15-jun
  * Costo: $0

RESUMEN PROBLEMAS DETECTADOS:

**12 problemas identificados**:
- 3 ALTA urgencia: Cuarto basura (mal olor), proyector polvo, puerta ascensor lenta
- 6 MEDIA urgencia: Filtración box 12, planta marchita, vidrios manchados, basurero exterior, ventilación filtro, espejo escalera
- 3 BAJA urgencia: Cartel fachada, cortinas lounge, filtro gimnasio

**Problemas resueltos MISMO DÍA** (13 junio):
- Cuarto basura: María limpió 09:15-09:45 ✓
- Vidrios lobby: María limpió 11:00 ✓
- Proyector: Presidente limpió 12:45 ✓
- Espejo escalera: María limpió 12:15 ✓

**Problemas programados 14-15 junio**:
- Filtración box 12: Plomero 14-jun inspección, reparación 15-jun ✓
- Ventilación filtro: Fernanda limpieza 14-jun ✓
- Planta lobby: Riego diario, reemplazo 24-jun si no recupera ⏳
- Filtro gimnasio: Fernanda limpieza 14-jun ✓

**Problemas programados 18-27 junio**:
- Puerta ascensor: OTIS ajuste sensor 18-jun ✓
- Basurero exterior: Municipalidad recolección 14-jun ✓

**Problemas NO urgentes (post-asamblea)**:
- Cartel fachada: Propuesta presupuesto 2026
- Cortinas lounge: Reemplazo ago 2025

INFORME AL COMITÉ (13 junio, tarde):

Presidente envió **reporte verificación 5 páginas** al comité:

**Resumen ejecutivo**:
- 12 problemas detectados supervisión pre-asamblea
- 4 resueltos mismo día 13-jun (cuarto basura, vidrios, proyector, espejo)
- 6 programados 14-18 jun (filtración box, ventilación, planta, filtro gimnasio, ascensor, basurero)
- 2 NO urgentes post-asamblea (cartel fachada, cortinas)
- **Edificio estará IMPECABLE para asamblea 27-jun**

**Inversión requerida**:
- Filtración box 12: $85K (plomero reparación tubería)
- Planta lobby: $18K (si no recupera con riego, reemplazo 24-jun)
- **Total**: $103K (1.2% gastos mensuales, reparaciones menores preventivas)

**Respuestas comité** (14-jun):
- Tesorera: "Supervisión exhaustiva. $103K inversión razonable vs mala impresión propietarios. APRUEBO."
- Secretaria: "4 problemas resueltos mismo día = eficiencia. Proyector limpio crítico para presentación. APRUEBO."
- Vocal 1: "Edificio impecable asamblea 27-jun asegura percepción positiva gestión. APRUEBO."
- Vocal 2: "Prevención > emergencia. APRUEBO."

**Aprobación unánime**: 5/5 comité (100%)

EJECUCIÓN REPARACIONES (14-18 junio):

**14 junio** (Fernanda + María + Plomero):
- 09:00: Fernanda limpió filtro ventilación estacionamiento (30 min, $0)
- 10:30: Plomero Luis Godoy inspeccionó filtración box 12
  * Diagnóstico: Unión PVC baño piso 1 (antiguo, desgaste natural)
  * Reparación: Reemplazo unión + sellador PVC ($85K)
  * Duración: 2 horas (terminado 12:30)
- 14:00: Fernanda limpió filtro aire gimnasio (lavado + secado, $0)
- 15:00: María riego planta lobby + fertilizante

**15 junio**:
- Verificación filtración box 12: CERO gotas (reparación exitosa)
- Reinstalación filtro gimnasio (secado completo)
- Verificación basurero exterior: Municipalidad recolectó 14-jun (vacío)

**18 junio**:
- OTIS técnico ajustó sensor puerta ascensor
  * Problema: Fotocélula desalineada 2mm (vibraciones edificio)
  * Solución: Re-calibración sensor (15 min trabajo)
  * Resultado: Puerta cierra 4 segundos (normal, vs 8 seg antes)
  * Costo: $0 (incluido contrato mantención $1.125K/mes)

**24 junio**:
- Verificación planta lobby: Recuperación 70% (riego diario funcionó)
  * Decisión: NO reemplazar (planta aceptable, ahorro $18K)

VERIFICACIÓN FINAL (26 junio, día antes asamblea):

Presidente recorrió **rutas críticas nuevamente** 24 hrs pre-asamblea:

✓ Estacionamiento: Limpio, iluminación 100%, filtración box 12 CERO gotas
✓ Cuarto basura: Impecable, 0 mal olor
✓ Ascensor: Puerta cierra 4 seg (normal), cabina limpia
✓ Lobby: Piso brillante, vidrios transparentes, planta recuperada 70%
✓ Fachada: Basurero exterior vacío
✓ Escalera: Espejo limpio, pasamanos firme
✓ Lounge: Proyector funcionando (testeo final PowerPoint), baño limpio, WiFi 58 Mbps
✓ Gimnasio: Filtro aire limpio

**Evaluación presidente**: "Edificio IMPECABLE para asamblea. 12 problemas detectados, 10 resueltos, 2 postergados (no urgentes). Propietarios verán edificio ordenado, limpio y bien mantenido. Esto refuerza presentación resultados financieros positivos."

TIEMPO INVERTIDO:

- Supervisión pre-asamblea: 5.5 horas (presidente, 13-jun)
- Coordinación reparaciones: 2 horas (presidente, 14-18 jun)
- Ejecución Fernanda + María: 4 horas (limpieza filtros, riego planta, vidrios)
- Plomero: 2 horas (reparación box 12)
- OTIS técnico: 0.25 horas (ajuste sensor ascensor)
- **Total**: 13.75 horas

INVERSIÓN FINANCIERA:

- Plomero filtración box 12: $85.000
- Planta lobby: $0 (no reemplazada, recuperó con riego)
- Limpieza filtros: $0 (Fernanda/María trabajo interno)
- Ajuste ascensor: $0 (OTIS contrato mantención)
- **Total**: $85.000 (0.99% gastos mensuales)

BENEFICIOS OBTENIDOS:

**1. EDIFICIO IMPECABLE ASAMBLEA**:
- 12 problemas detectados 14 días anticipación
- 10/12 resueltos antes asamblea (83.3% éxito)
- 2/12 NO urgentes postergados (decisión consciente)
- Propietarios percibirán edificio ordenado, limpio, bien mantenido

**2. PERCEPCIÓN POSITIVA GESTIÓN COMITÉ**:
- Estado visible edificio refuerza resultados financieros presentados
- Primera impresión (lobby, ascensor, lounge) impecable
- Detalles cuidados (vidrios limpios, planta regada, proyector funcionando) demuestran atención

**3. PREVENCIÓN QUEJAS Y DISTRACCIONES**:
- Experiencia marzo 2024: Filtración box 84 distrajo votación reglamento
- Supervisión 13-jun evitó quejas 27-jun (filtración box 12 reparada 14-jun)
- Asamblea se enfocó en contenido (memoria, estados financieros), NO en problemas edificio

**4. AHORRO vs EMERGENCIA**:
- Filtración box 12 detectada temprano: Reparación $85K
- Si se ignoraba: Daño estructural piso, reparación $500K+ (6x más caro)
- Proyector limpio: Funcionamiento perfecto asamblea, vs emergencia arriendo proyector $150K

LECCIONES APRENDIDAS:

1. **Supervisión pre-asamblea detecta problemas invisibles gestión diaria**: 12 problemas identificados que operación rutinaria no captó
2. **Primera impresión crítica propietarios visitantes**: Lobby/ascensor/lounge deben estar impecables (recorrido 100% propietarios)
3. **Pequeños detalles impactan percepción**: Vidrios limpios, planta regada, proyector funcionando = profesionalismo
4. **Anticipación 14 días suficiente**: Tiempo resolver 10/12 problemas sin emergencias
5. **Fernanda/María coordinación eficiente**: 4 problemas resueltos mismo día (cuarto basura, vidrios, espejo, proyector)
6. **Inversión $85K << mala impresión propietarios**: Filtración box 12 visible = queja asamblea = percepción "comité descuidado"
7. **Verificación final 26-jun asegura 0 sorpresas**: Recorrido día antes confirma edificio impecable

CONTINUIDAD:

Esta supervisión pre-asamblea consolidó el **protocolo preventivo** para eventos formales:
- Inspección mensual regular (ID 266): Detecta problemas rutina
- Supervisión pre-asamblea (ID 294): Enfoque estético-funcional crítico percepción propietarios
- Verificación final 24 hrs antes: Confirmación 0 problemas pendientes

**Modelo replicable futuras asambleas**:
1. Agendar supervisión 14 días antes asamblea
2. Recorrer rutas críticas propietarios (estacionamiento → lobby → lounge)
3. Listar problemas urgencia ALTA/MEDIA/BAJA
4. Resolver ALTA/MEDIA antes asamblea, posponer BAJA
5. Verificación final 24 hrs antes (confirmación impecabilidad)

El nuevo comité demostró **atención al detalle y profesionalismo**:
- 12 problemas detectados proactivamente
- 10/12 resueltos antes asamblea (83.3%)
- Inversión $85K razonable vs percepción negativa
- Edificio IMPECABLE para asamblea 27-jun

Esta supervisión aseguró que la **presentación de resultados positivos** (liquidez +43.7 puntos, morosidad -1.3 puntos, superávit sostenido) NO fuera opacada por problemas visibles edificio, permitiendo que propietarios se enfocaran en el CONTENIDO de la gestión, no en distracciones operacionales.`
  },

  297: {
    descripcion_nueva: `FECHA: 18 de junio de 2025

CONTEXTO: El nuevo presidente inició el **seguimiento sistemático de implementación de acuerdos aprobados en la Asamblea Ordinaria Anual** celebrada 27 de junio de 2025, ejecutando un protocolo de verificación de cumplimiento, asignación de responsabilidades, definición de plazos y comunicación de avances a propietarios que asegura que las decisiones formales del máximo órgano del edificio (asamblea) se traduzcan en acciones concretas ejecutadas dentro de los períodos comprometidos.

RESULTADOS ASAMBLEA (27 junio, 19:00-22:15):

**Asistencia**:
- Primera citación (19:00): 33 propietarios presentes (78.6%, superó quórum 50%+1 = 22)
- Segunda citación (19:30): NO requerida (quórum alcanzado 1ra citación)
- Poderes representación: 5 propietarios ausentes otorgaron poder (total votos válidos: 38/42 = 90.5%)

**Documentos presentados**:
1. Memoria anual 2024-2025 (18 páginas)
2. Estados financieros auditados (8 páginas)
3. Informe gestión presidente (PowerPoint 42 diapositivas)
4. Presupuesto 2025-2026 (3 páginas)

**Votaciones realizadas**:

**1. Aprobación Memoria Anual 2024-2025**:
- A favor: 36 votos (94.7%)
- En contra: 1 voto (2.6%)
- Abstención: 1 voto (2.6%)
- **RESULTADO: APROBADA**

**2. Aprobación Estados Financieros Auditados**:
- A favor: 37 votos (97.4%)
- En contra: 0 votos
- Abstención: 1 voto (2.6%)
- **RESULTADO: APROBADA**

**3. Aprobación Presupuesto 2025-2026**:
- A favor: 35 votos (92.1%)
- En contra: 2 votos (5.3%)
- Abstención: 1 voto (2.6%)
- **RESULTADO: APROBADA**

**4. Moción Adicional Propietario (Sr. Vega, dpto 304)**:
Solicitud condonación deuda $1.495K morosidad (demanda judicial en proceso).
- A favor: 3 votos (7.9%)
- En contra: 34 votos (89.5%)
- Abstención: 1 voto (2.6%)
- **RESULTADO: RECHAZADA**
- Nota acta: "Asamblea confirma demanda judicial dpto 304 debe continuar. Morosidad 7 meses NO aceptable. Edificio debe recuperar $1.495K capital + intereses."

**5. Propuesta Proyecto Paneles Solares**:
Presidente presentó evaluación preliminar (ROI 4.4 años, ahorro $5.4M/año). Solicitó autorización comité para contratar estudio técnico-financiero detallado ($850K, empresa especializada).
- A favor: 31 votos (81.6%)
- En contra: 4 votos (10.5%)
- Abstención: 3 votos (7.9%)
- **RESULTADO: APROBADA**
- Compromiso: Estudio técnico presentado asamblea extraordinaria nov 2025. Si viable, votación instalación dic 2025.

**6. Propuesta Medidor Eléctrico Individual**:
Presidente explicó proyecto pendiente datos CFE. Solicitó autorización análisis detallado (sin costo, gestión interna).
- A favor: 33 votos (86.8%)
- En contra: 2 votos (5.3%)
- Abstención: 3 votos (7.9%)
- **RESULTADO: APROBADA**
- Compromiso: Si desbalance >10% vs prorrateo actual, propuesta instalación medidor presentada ago 2025.

**Varios discutidos**:
- Dpto 801: Consulta estado demanda judicial dpto 304 → Presidente explicó: Notificado 9-jun, plazo respuesta 30-jun (1 día pendiente), si no responde sentencia definitiva ago-sep
- Dpto 507: Agradecimiento mejora liquidez edificio (+43.7 puntos nov-jun) → Aplauso espontáneo asamblea
- Dpto 1103: Pregunta cortinas lounge desteñidas → Presidente confirmó: Reemplazo programado ago 2025 ($280K presupuestado)

**Acta asamblea** (elaborada secretaria 28-jun):
- 12 páginas detalladas
- Firmada presidente + secretaria + 2 propietarios testigos (Sra. Flores dpto 902, Sr. Muñoz dpto 605)
- Enviada 42 propietarios email 30-jun
- Archivada físicamente libro actas edificio

ANÁLISIS ACUERDOS IMPLEMENTABLES (28-29 junio):

El presidente revisó el **acta asamblea 12 páginas** e identificó **7 acuerdos específicos** que requieren seguimiento:

**ACUERDO 1**: Continuar demanda judicial dpto 304 (confirmación asamblea)
- Responsable: Presidente + Acodef (Rodrigo Bravo)
- Plazo: Proceso judicial típico 2-3 meses
- Próximo hito: Verificar respuesta dpto 304 hasta 30-jun

**ACUERDO 2**: Estudio técnico paneles solares (autorizado $850K)
- Responsable: Presidente (contratar empresa especializada)
- Plazo: Jul-ago 2025 (estudio), presentación asamblea extraordinaria nov 2025
- Inversión autorizada: $850K (estudio, NO instalación)

**ACUERDO 3**: Análisis medidor eléctrico individual (autorizado sin costo)
- Responsable: Presidente + Rodrigo Bravo (solicitud datos CFE)
- Plazo: Jul 2025 (recepción datos CFE), ago 2025 (análisis + propuesta si viable)

**ACUERDO 4**: Reemplazo cortinas lounge (presupuestado $280K)
- Responsable: Presidente + Fernanda (cotizar proveedores)
- Plazo: Ago 2025 (instalación)

**ACUERDO 5**: Comunicación trimestral propietarios (solicitud varios)
- Responsable: Presidente (email trimestral resumen gestión)
- Plazo: Sep 2025 (primer envío trimestral jul-ago-sep)

**ACUERDO 6**: Evaluación salarial personal (mérito, dic 2025)
- Responsable: Comité completo (evaluación + decisión)
- Plazo: Dic 2025 (antes aguinaldos navideños)

**ACUERDO 7**: Asamblea extraordinaria nov 2025 (paneles solares)
- Responsable: Presidente (convocatoria formal)
- Plazo: Nov 2025 (presentación estudio técnico, votación instalación)

PROTOCOLO SEGUIMIENTO ESTABLECIDO (29 junio):

El presidente diseñó **sistema seguimiento 5 pasos**:

**PASO 1: REGISTRO ACUERDOS** (29 junio)
Presidente creó **Excel seguimiento acuerdos asamblea**:

| ID | Acuerdo | Responsable | Plazo | Estado | Avance % | Próximo hito |
|----|---------|-------------|-------|--------|----------|--------------|
| 1  | Demanda dpto 304 | Presidente + Acodef | Ago-sep 2025 | En proceso | 40% | Verificar respuesta 30-jun |
| 2  | Estudio paneles | Presidente | Nov 2025 | Pendiente | 0% | Cotizar empresas jul |
| 3  | Medidor eléctrico | Presidente + Acodef | Ago 2025 | Pendiente | 10% | Solicitar datos CFE jul |
| 4  | Cortinas lounge | Presidente + Fernanda | Ago 2025 | Pendiente | 0% | Cotizar proveedores jul |
| 5  | Comunicación trimestral | Presidente | Sep 2025 | Pendiente | 0% | Redactar resumen jul-ago |
| 6  | Evaluación salarial | Comité | Dic 2025 | Pendiente | 0% | Programar evaluación oct |
| 7  | Asamblea extraordinaria | Presidente | Nov 2025 | Pendiente | 0% | Recibir estudio paneles oct |

**PASO 2: ASIGNACIÓN RESPONSABILIDADES** (30 junio)

Presidente comunicó formalmente al comité **responsabilidades individuales**:

**Email comité** (30 jun, 10:15):
"Estimado comité:

Adjunto Excel seguimiento 7 acuerdos asamblea 27-jun. Responsabilidades asignadas:

**Presidente** (yo):
- Acuerdo 2: Contratar estudio técnico paneles solares (cotizar 3 empresas jul)
- Acuerdo 3: Coordinar Acodef solicitud datos CFE medidor eléctrico
- Acuerdo 4: Coordinar Fernanda cotización cortinas lounge
- Acuerdo 5: Redactar comunicación trimestral propietarios (sep)
- Acuerdo 7: Convocar asamblea extraordinaria nov

**Tesorera** (Patricia):
- Acuerdo 2: Revisar presupuesto estudio paneles $850K (autorizado asamblea)
- Acuerdo 4: Aprobar gasto cortinas $280K (presupuestado)

**Secretaria** (Mónica):
- Acuerdo 7: Elaborar acta asamblea extraordinaria nov

**Vocal 1** (Carlos):
- Acuerdo 6: Coordinar evaluación salarial personal dic (junto tesorera)

**Vocal 2** (Andrés):
- Acuerdo 1: Seguimiento demanda dpto 304 (informar comité avances mensuales)

**Comité completo**:
- Acuerdo 6: Evaluación salarial personal dic (decisión colectiva aumentos)

Próxima reunión comité: 15 julio, revisión avances. Saludos, Presidente"

**Respuestas comité** (30 jun):
- Tesorera: "Confirmado. Presupuesto $850K paneles + $280K cortinas dentro reserva. OK."
- Secretaria: "Confirmado. Acta nov preparada post-presentación estudio."
- Vocal 1: "Confirmado. Programaré evaluación personal oct (2 meses anticipación dic)."
- Vocal 2: "Confirmado. Rodrigo Bravo Acodef me mantiene informado demanda."

**PASO 3: COMUNICACIÓN PROPIETARIOS** (1 julio)

Presidente envió **email masivo 42 propietarios**:

"Estimados propietarios Torre Oriente:

Les informamos **acuerdos aprobados Asamblea Ordinaria 27-jun-2025**:

✅ APROBADOS:
1. Memoria Anual 2024-2025 (94.7% votos favor)
2. Estados Financieros Auditados (97.4% votos favor)
3. Presupuesto 2025-2026 (92.1% votos favor)
4. Estudio técnico paneles solares (81.6% votos favor) → Presentación nov 2025
5. Análisis medidor eléctrico individual (86.8% votos favor) → Propuesta ago 2025 (si viable)

❌ RECHAZADOS:
1. Condonación deuda dpto 304 (89.5% votos contra) → Demanda judicial continúa

📋 COMPROMISOS COMITÉ:
- Jul-ago: Estudio paneles solares contratado
- Ago: Reemplazo cortinas lounge
- Sep: Comunicación trimestral resultados jul-ago-sep
- Nov: Asamblea extraordinaria (votación instalación paneles si estudio favorable)
- Dic: Evaluación salarial personal (mérito)

📄 Acta completa asamblea (12 páginas) adjunta.

Comité quedó a disposición consultas: presidente@torreoriente.cl

Saludos cordiales,
Comité Torre Oriente"

**Tasa apertura email**: 38/42 propietarios (90.5%, excelente)

**PASO 4: COORDINACIÓN ACODEF** (2 julio)

Presidente reunió **Rodrigo Bravo (Acodef) vía Zoom** 30 min:

**Tema 1: Demanda dpto 304**
- Rodrigo: "Plazo respuesta 30-jun venció ayer. Dpto 304 NO respondió."
- Acción: Abogado Cristián Muñoz presentará solicitud sentencia definitiva 5-jul
- Proyección: Sentencia estimada ago 2025, ejecución forzada sep-oct 2025
- Comité será informado cada hito (presentación solicitud, fecha audiencia, sentencia)

**Tema 2: Datos CFE medidor eléctrico**
- Rodrigo: "Solicitud CFE ingresada 15-jun (ID 270 reunión), plazo respuesta 15 días hábiles"
- Vencimiento: 8 julio (próxima semana)
- Si CFE NO responde: Reclamo formal SERNAC (plazo +10 días)
- Rodrigo comprometió: Email presidente inmediatamente reciba datos CFE

**Tema 3: Estudio paneles solares**
- Presidente: "Necesito recomendación empresa confiable estudio técnico."
- Rodrigo: "Acodef trabajó con **SolarTech Chile** para edificio similar (Torre Mirador 2024). Serios, estudio completo $780K (vs presupuesto $850K, margen $70K)."
- Acción: Presidente contactará SolarTech 3-jul, solicitará propuesta formal

**PASO 5: PLANIFICACIÓN JULIO** (3 julio)

Presidente elaboró **cronograma julio 2025**:

**Semana 1-7 julio**:
- 3-jul: Contacto SolarTech Chile (estudio paneles)
- 5-jul: Verificación presentación solicitud sentencia dpto 304
- 8-jul: Recepción datos CFE (vencimiento plazo)

**Semana 8-14 julio**:
- 10-jul: Cotización cortinas lounge (3 proveedores)
- 12-jul: Análisis datos CFE medidor eléctrico (si recibidos)
- 15-jul: Reunión comité (revisión avances acuerdos)

**Semana 15-21 julio**:
- 17-jul: Contratación empresa estudio paneles (decisión final)
- 18-jul: Aprobación proveedor cortinas lounge
- 20-jul: Inicio estudio técnico paneles (si contratado)

**Semana 22-31 julio**:
- 25-jul: Seguimiento estudio paneles (avance 25%)
- 28-jul: Instalación cortinas lounge (si proveedor cumple plazo)
- 31-jul: Informe mensual comité (julio)

EJECUCIÓN INICIAL (3-10 julio):

**3 julio**: Presidente contactó SolarTech Chile
- Email formal solicitando propuesta estudio técnico-financiero
- Alcance: Evaluación azotea (área útil, orientación, sombras), potencia instalable, inversión estimada, ahorro proyectado, ROI, financiamiento
- Plazo estudio: 45 días (entrega 20-ago)

**4 julio**: SolarTech respondió
- Propuesta formal: $780K (vs presupuesto $850K, ahorro $70K)
- Incluye: Visita técnica azotea, medición irradiación solar, diseño sistema, proyección ahorro 20 años, análisis financiamiento
- Plazo: 45 días calendario (inicio 10-jul → entrega 25-ago)
- Presidente aprobó propuesta (dentro presupuesto autorizado asamblea)

**5 julio**: Verificación solicitud sentencia dpto 304
- Rodrigo Bravo confirmó: Abogado Cristián Muñoz presentó solicitud 5-jul (tribunal)
- Fecha audiencia: Programada 18-ago (juzgado civil Santiago)
- Presidente informó comité + propietarios (email actualización)

**8 julio**: Recepción datos CFE
- CFE respondió plazo (15 días hábiles cumplidos)
- Desglose consumo 3 torres últimos 12 meses: Torre Oriente $1.152M/año, Torre Poniente $1.084M/año, Torre Mirador $964M/año
- Prorrateo actual (área construida): Torre Oriente paga 38% ($1.216M/año)
- **DESBALANCE DETECTADO**: Torre Oriente consume 36% pero paga 38% = sobrepago $64K/año (5.3% más)
- Análisis presidente: Desbalance 5.3% < 10% umbral (ID 270 reunión Acodef)
  * Decisión: Medidor individual NO justificado (ROI 5.3 años con ahorro $64K/año no atractivo)
  * Proyecto DESCARTADO

**10 julio**: Cotización cortinas lounge
- Presidente solicitó cotizaciones 3 proveedores
- Proveedor A: $320K (blackout estándar)
- Proveedor B: $280K (blackout calidad media)
- Proveedor C: $385K (blackout premium motorizado)
- Análisis: Proveedor B $280K = presupuesto exacto, calidad adecuada
- Decisión: Contratación proveedor B, instalación programada 28-jul

REUNIÓN COMITÉ (15 julio):

Presidente presentó **informe avances 18 días post-asamblea**:

**Acuerdo 1: Demanda dpto 304**
- ✓ Solicitud sentencia presentada 5-jul
- ✓ Audiencia programada 18-ago
- Estado: EN PROCESO (40% → 50% avance)

**Acuerdo 2: Estudio paneles solares**
- ✓ SolarTech contratado $780K (ahorro $70K vs presupuesto)
- ✓ Inicio estudio 10-jul, entrega 25-ago
- Estado: EN EJECUCIÓN (0% → 15% avance)

**Acuerdo 3: Medidor eléctrico individual**
- ✓ Datos CFE recibidos 8-jul
- ✓ Análisis completado: Desbalance 5.3% (< 10% umbral)
- ✓ Proyecto DESCARTADO (ROI no atractivo)
- Estado: COMPLETADO (10% → 100%, decisión informada)

**Acuerdo 4: Cortinas lounge**
- ✓ Proveedor B contratado $280K (presupuesto exacto)
- ✓ Instalación programada 28-jul
- Estado: EN EJECUCIÓN (0% → 30% avance)

**Acuerdo 5: Comunicación trimestral**
- ⏳ Pendiente sep (primer trimestre jul-ago-sep)
- Estado: PENDIENTE (0% avance)

**Acuerdo 6: Evaluación salarial**
- ⏳ Programación oct (Vocal 1 coordinará)
- Estado: PENDIENTE (0% avance)

**Acuerdo 7: Asamblea extraordinaria nov**
- ⏳ Depende entrega estudio paneles 25-ago
- Estado: PENDIENTE (0% avance)

**Respuestas comité**:
- Tesorera: "Avance excelente. Estudio paneles $780K ahorro $70K. Medidor eléctrico descartado decisión correcta (ROI no justifica)."
- Secretaria: "18 días post-asamblea y 3/7 acuerdos avance significativo. Ritmo apropiado."
- Vocal 1: "Programaré evaluación personal 15-oct (anticipo 2 meses dic)."
- Vocal 2: "Audiencia 18-ago dpto 304. Seguiré informando avances."

COMUNICACIÓN PROPIETARIOS (16 julio):

Presidente envió **email actualización avances**:

"Estimados propietarios:

**ACTUALIZACIÓN ACUERDOS ASAMBLEA 27-JUN** (18 días transcurridos):

✅ AVANCES:
1. **Estudio paneles solares**: Contratado SolarTech Chile $780K (ahorro $70K). Entrega 25-ago. Presentación asamblea extraordinaria nov.
2. **Demanda dpto 304**: Solicitud sentencia presentada 5-jul. Audiencia 18-ago.
3. **Medidor eléctrico**: Proyecto DESCARTADO tras análisis datos CFE. Sobrepago actual solo $64K/año (5.3%) NO justifica inversión $850K medidor (ROI 13 años).
4. **Cortinas lounge**: Proveedor contratado $280K. Instalación 28-jul.

⏳ PRÓXIMOS HITOS:
- 28-jul: Instalación cortinas lounge
- 18-ago: Audiencia judicial dpto 304
- 25-ago: Entrega estudio paneles solares
- Sep: Primera comunicación trimestral jul-ago-sep

Saludos,
Comité Torre Oriente"

**Tasa apertura**: 37/42 propietarios (88.1%)

TIEMPO INVERTIDO (28 jun - 16 jul, 18 días):

- Análisis acta asamblea: 3 horas (presidente)
- Registro acuerdos Excel: 1.5 horas (presidente)
- Comunicación comité (asignación responsabilidades): 1 hora (presidente)
- Comunicación propietarios (email 1-jul): 1 hora (presidente)
- Coordinación Acodef (reunión 2-jul): 0.5 horas (presidente + Rodrigo)
- Planificación julio: 2 horas (presidente)
- Contratación SolarTech: 2 horas (presidente)
- Análisis datos CFE: 2.5 horas (presidente)
- Cotización cortinas: 1.5 horas (presidente)
- Reunión comité 15-jul: 1.5 horas (presidente + comité)
- Comunicación propietarios (email 16-jul): 0.5 horas (presidente)
- **Total**: 17 horas (presidente 16 hrs + comité 1 hr, trabajo voluntario)

BENEFICIOS OBTENIDOS:

**1. CUMPLIMIENTO ACUERDOS ASAMBLEA**:
- 3/7 acuerdos avance significativo (18 días post-asamblea)
- 1/7 acuerdos completado (medidor eléctrico descartado, decisión informada)
- 3/7 acuerdos programados plazos correctos (comunicación trimestral sep, evaluación salarial oct, asamblea nov)

**2. TRANSPARENCIA Y COMUNICACIÓN**:
- 2 emails propietarios (1-jul, 16-jul): Apertura promedio 89.3%
- Excel seguimiento acuerdos compartido comité (trazabilidad total)
- Asignación responsabilidades explícita (cada miembro comité sabe qué hacer)

**3. DECISIONES BASADAS DATOS**:
- Medidor eléctrico: Análisis datos CFE mostró desbalance 5.3% (< 10% umbral)
- Decisión informada: Proyecto descartado (ROI 13 años no atractivo)
- Transparencia: Propietarios informados análisis completo, no solo "proyecto descartado"

**4. GESTIÓN EFICIENTE RECURSOS**:
- Estudio paneles: Contratado $780K (ahorro $70K vs presupuesto $850K)
- Cortinas: Proveedor exacto presupuesto $280K (0% desviación)
- Tiempo presidente: 16 hrs en 18 días (eficiencia vs complejidad 7 acuerdos paralelos)

LECCIONES APRENDIDAS:

1. **Sistema seguimiento Excel simple y efectivo**: Tabla ID-Acuerdo-Responsable-Plazo-Estado-Avance% permite visibilidad total comité
2. **Asignación responsabilidades explícita evita ambigüedad**: Email 30-jun clarificó quién hace qué (vs asunción implícita)
3. **Comunicación propietarios frecuente genera confianza**: 2 emails 18 días (1-jul, 16-jul) mantiene transparencia vs silencio post-asamblea
4. **Análisis datos before decisión**: Medidor eléctrico no descartado intuición, sino datos CFE objetivos (desbalance 5.3%)
5. **Ahorro presupuesto posible con cotizaciones**: SolarTech $780K vs presupuesto $850K = $70K ahorro (8.2%)
6. **Plazos realistas evitan presión innecesaria**: Evaluación salarial programada oct (2 meses anticipación dic) vs urgencia última semana
7. **Comité colaborativo ejecuta más**: 5 miembros con responsabilidades claras > presidente solo haciendo todo

CONTINUIDAD:

Este protocolo seguimiento consolidó el **modelo de gobernanza post-asamblea**:
- Acuerdos registrados sistemáticamente (Excel seguimiento)
- Responsabilidades asignadas explícitamente (email comité)
- Propietarios informados periódicamente (emails quincenales/mensuales)
- Avances medidos objetivamente (% completado, hitos cumplidos)

**Próximos pasos** (jul-nov 2025):
- 28-jul: Instalación cortinas lounge (completar Acuerdo 4)
- 18-ago: Audiencia dpto 304 (avanzar Acuerdo 1)
- 25-ago: Entrega estudio paneles (avanzar Acuerdo 2)
- Sep: Comunicación trimestral (completar Acuerdo 5)
- Oct: Evaluación salarial (avanzar Acuerdo 6)
- Nov: Asamblea extraordinaria paneles (completar Acuerdo 7)

El nuevo comité demostró **capacidad de ejecución post-asamblea**:
- 7 acuerdos identificados y registrados
- 3 avances significativos en 18 días (43% acuerdos en progreso)
- 1 decisión informada completada (medidor eléctrico)
- Comunicación transparente propietarios (89.3% apertura emails)

Esta gestión asegura que la **asamblea NO sea un evento aislado**, sino el inicio de un ciclo de ejecución donde decisiones formales se traducen en acciones concretas, supervisadas, comunicadas y completadas dentro de plazos comprometidos ante los propietarios del edificio Torre Oriente.`
  }
};

console.log('\n=== BATCH 39 FINAL: ASAMBLEA JUNIO 2025 (ALTO) 🎉 ===\n');
console.log('*** ÚLTIMAS 3 GESTIONES ALTO PARA COMPLETAR 180/180! ***\n');
console.log('Gestiones a expandir: 3');
console.log('IDs: 290, 294, 297\n');

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

console.log(`\n✅ BATCH 39 FINAL COMPLETADO! 🎊🎊🎊`);
console.log(`   Gestiones expandidas: ${modifiedCount}/3`);
console.log(`   IDs completados: 290, 294, 297\n`);

console.log(`📊 ESTADÍSTICAS BATCH 39 FINAL:`);
console.log(`   Total chars agregados: +${totalCharsAdded.toLocaleString()}`);
console.log(`   Promedio: ${Math.round(totalCharsAdded / modifiedCount).toLocaleString()} chars/gestión\n`);

console.log(`🏆 FASE ALTO 100% COMPLETA! 🏆`);
console.log(`   180/180 ALTO gestiones expandidas (100%)`);
console.log(`   ALTO restantes: 0\n`);

console.log(`🎉🎉🎉 MILESTONE ACHIEVED: ALL 180 ALTO GESTIONES EXPANDED! 🎉🎉🎉\n`);

fs.writeFileSync(
  './app/auditoria/gestiones.json',
  JSON.stringify(data, null, 2),
  'utf-8'
);

console.log('✅ Archivo gestiones.json actualizado exitosamente\n');
console.log('🎊 ¡CELEBREMOS! FASE ALTO 100% COMPLETADA 🎊');