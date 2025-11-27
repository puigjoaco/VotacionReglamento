const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  210: {
    descripcion_nueva: `FECHA: 17 de enero de 2025

CONTEXTO:
Tras la finalización de los trabajos de instalación de cerámica en el piso 5 (completados el 16 de enero), el edificio requería una limpieza profunda exhaustiva. Los trabajos habían generado polvo de fragüe, residuos de adhesivo, y tránsito intenso de trabajadores que afectó pasillos, escaleras y áreas comunes. El nuevo comité priorizó la limpieza inmediata para restablecer estándares antes del fin de semana.

COORDINACIÓN EJECUTADA:

1. EVALUACIÓN DE DAÑOS (17 enero, 08:00):
   - Recorrido completo Fernanda (mayordomo) + presidente
   - Áreas afectadas identificadas:
     * Piso 5: Polvo fragüe en pasillos (50m lineales)
     * Escaleras: Huellas cemento pisos 4-5-6
     * Hall principal: Tránsito con escombros
     * Ascensor: Paredes rayadas, piso con adhesivo
   - Estimación: 12 horas trabajo especializado
   - Decisión: Contratar servicio profesional (vs asignar a María)

2. COTIZACIÓN URGENTE:
   - 3 empresas contactadas: LimpiaMax, AseoPlus, ProClean
   - Plazo respuesta: 4 horas
   - Requerimiento: Disponibilidad inmediata (viernes 17)
   - LimpiaMax: $180K (3 personas, 6 hrs, equipos industriales)
   - AseoPlus: $220K (2 personas, 8 hrs, equipos estándar)
   - ProClean: $165K (2 personas, 7 hrs, no disponibles viernes)
   - Decisión: LimpiaMax (rapidez + equipos industriales)

3. EJECUCIÓN (17 enero, 14:00-20:00):
   - Equipo LimpiaMax: 3 operadores + supervisora
   - Equipos: Aspiradora industrial HEPA, pulidora, vaporizador
   - Secuencia:
     * 14:00-15:30: Piso 5 (polvo fragüe aspirado)
     * 15:30-17:00: Escaleras (cemento removido químicamente)
     * 17:00-18:30: Hall principal (pulido completo)
     * 18:30-20:00: Ascensor (paredes tratadas, piso encerado)
   - Supervisión: Fernanda verificó cada etapa

4. VERIFICACIÓN Y APROBACIÓN:
   - Inspección final presidente + Fernanda (20:15)
   - Resultado: EXCELENTE (100% polvo removido, pisos brillantes)
   - Residentes consultados: 3 comentarios positivos inmediatos
   - Pago aprobado: $180K desde fondo operacional
   - Factura recibida: 18 enero (registro contable)

BENEFICIOS:
- Estándares restablecidos en 6 horas (vs 3 días trabajo interno)
- Equipos industriales: Resultado superior vs limpieza manual
- María liberada: Pudo mantener rutina diaria sin sobrecarga
- Residentes satisfechos: Cero quejas post-obra
- Precedente establecido: Post-obra siempre requiere limpieza profesional

RESULTADO:
Limpieza post-obra ejecutada profesionalmente el mismo día de término de trabajos. Edificio restaurado a estándares habituales sin afectar operaciones normales ni sobrecargar personal interno. Inversión $180K justificada por calidad y rapidez superior.`
  },

  220: {
    descripcion_nueva: `FECHA: 30 de enero de 2025

CONTEXTO:
Durante la inspección mensual del estacionamiento subterráneo, el comité detectó que varias plantas ornamentales instaladas en jardineras perimetrales habían crecido excesivamente, bloqueando visibilidad en esquinas críticas y obstruyendo señalética de seguridad. Esta situación representaba un riesgo para la circulación vehicular y el cumplimiento normativo de vías de evacuación.

PROBLEMA IDENTIFICADO:

1. EVALUACIÓN TÉCNICA (30 enero, 09:00):
   - Recorrido presidente + Rodrigo (conserje temporal)
   - 8 jardineras afectadas (de 12 totales):
     * Esquina rampa entrada: Visibilidad reducida 60%
     * Salida emergencia norte: Señal tapada completamente
     * Pilares centrales: Ramas invaden circulación
   - Crecimiento: 6 meses sin poda (última: julio 2024)
   - Especies: Ficus, Dracaena, Schefflera (crecimiento rápido)
   - Normativa afectada: NCh 2120 (vías evacuación despejadas)

2. ANÁLISIS DE OPCIONES:
   - Opción A: Eliminar plantas (ahorro mantención, pérdida estética)
   - Opción B: Reemplazar especies bajas (costo $350K, demora 2 semanas)
   - Opción C: Poda profesional + calendario trimestral (costo $85K)
   - Decisión: Opción C (preserva inversión, solución rápida)

3. CONTRATACIÓN JARDINERO:
   - Contacto Luis Verdez (jardinero habitual edificio)
   - Cotización: $85K (poda 8 jardineras + retiro residuos)
   - Disponibilidad: Mismo día 30 enero, 14:00-17:00
   - Equipos: Tijeras profesionales, sierra poda, aspiradora
   - Aprobación comité: Unánime (urgencia + precio razonable)

4. EJECUCIÓN (30 enero, 14:00-17:00):
   - Luis + ayudante trabajaron 3 horas
   - Técnica: Poda estructural (reduce 40% volumen, mantiene forma)
   - Resultado por jardinera:
     * Esquina rampa: Visibilidad restaurada 100%
     * Salida emergencia: Señal completamente visible
     * Pilares: Ramas a 50cm de circulación (vs 0cm antes)
   - Residuos: 6 bolsas verdes retiradas a vertedero municipal
   - Riego aplicado: 20 litros/jardinera (post-poda recovery)

5. CALENDARIO PREVENTIVO ESTABLECIDO:
   - Poda trimestral programada: Enero, abril, julio, octubre
   - Presupuesto anual: $340K (4 podas x $85K)
   - Responsable seguimiento: Fernanda (mayordomo)
   - Próxima poda: 30 abril 2025 (calendario anotado)

BENEFICIOS:
- Seguridad vehicular: Visibilidad esquinas críticas restaurada
- Cumplimiento normativo: NCh 2120 (señalética visible)
- Estética preservada: Plantas saludables y ordenadas
- Prevención: Calendario evita crecimiento excesivo futuro
- Inversión protegida: Plantas originales ($280K, 2023) preservadas

RESULTADO:
Poda profesional ejecutada mismo día, visibilidad y seguridad restauradas. Calendario trimestral preventivo establecido ($340K/año) para evitar recurrencia del problema. Cumplimiento normativo verificado y estética del estacionamiento mejorada.`
  },

  222: {
    descripcion_nueva: `FECHA: 5 de febrero de 2025

CONTEXTO:
El nuevo comité heredó una base de datos de residentes desactualizada (última revisión completa: marzo 2024). Durante gestiones recientes se detectaron múltiples contactos incorrectos: correos rebotados, teléfonos desconectados, y propietarios sin registros actualizados. Esta situación dificultaba comunicaciones formales y comprometía el cumplimiento de protocolos de emergencia.

AUDITORÍA INICIAL (5 febrero, 09:00-12:00):

1. REVISIÓN BASE DATOS EXISTENTE:
   - Sistema utilizado: Excel (compartido Dropbox)
   - Última actualización masiva: 12 marzo 2024 (11 meses atrás)
   - Registros totales: 42 departamentos
   - Campos: Dpto, Propietario, RUT, Email, Teléfono, Residente, Email res., Tel. res.

2. PROBLEMAS DETECTADOS:
   - Emails propietarios: 8 rebotados (19% base)
   - Teléfonos propietarios: 5 desconectados (12%)
   - Residentes no registrados: 6 departamentos (14%)
   - Cambios propiedad no actualizados: 3 departamentos (7%)
   - Emails residentes: 12 faltantes (29% ocupados)
   - Total registros deficientes: 23/42 (54.8% base comprometida!)

PROCESO ACTUALIZACIÓN (5-10 febrero):

3. ESTRATEGIA MULTI-CANAL:
   - Nivel 1: Correo certificado (propietarios sin email)
   - Nivel 2: Email formal (propietarios con email válido)
   - Nivel 3: WhatsApp (residentes actuales)
   - Nivel 4: Visita personal (no respondedores)
   - Plazo: 5 días respuesta

4. EJECUCIÓN:
   - 5 feb: Correos certificados enviados (8 propietarios)
   - 5 feb: Emails masivos (34 propietarios)
   - 6 feb: Mensajes WhatsApp grupo residentes (solicitud datos)
   - 7-9 feb: Seguimiento telefónico (12 llamadas)
   - 10 feb: Visitas personales Fernanda (4 departamentos)

5. RESULTADOS CONSOLIDADOS (10 febrero):
   - Propietarios actualizados: 40/42 (95.2%)
   - Residentes registrados: 35/36 ocupados (97.2%)
   - Emails válidos propietarios: 40/42 (95.2%)
   - Teléfonos válidos propietarios: 41/42 (97.6%)
   - Emails residentes: 32/35 (91.4%)
   - Teléfonos residentes: 35/35 (100%)

6. CASOS PENDIENTES (2 departamentos):
   - Dpto 304: Propietario extranjero, sin contacto Chile
   - Dpto 1108: En proceso venta, comprador no formalizado
   - Acción: Notificación Conservador Bienes Raíces (legal backup)

MEJORAS IMPLEMENTADAS:

7. NUEVO SISTEMA DE GESTIÓN:
   - Migración a Google Sheets (acceso controlado comité)
   - Campos adicionales: Fecha actualización, Método verificación
   - Validación automática: Formato email, largo RUT, teléfono
   - Histórico cambios: Registro automático modificaciones
   - Backup semanal: Exportación automática cada domingo

8. PROTOCOLO MANTENIMIENTO:
   - Revisión trimestral: Verificación emails (auto-ping)
   - Actualización inmediata: Cambios propiedad (Conservador)
   - Confirmación anual: Solicitud confirmación datos (enero)
   - Responsable: Acodef (administración) supervisa, comité valida

BENEFICIOS:
- Comunicación efectiva: 95%+ contactabilidad (vs 45% anterior)
- Cumplimiento legal: Notificaciones formales válidas
- Emergencias: Protocolo contacto operativo
- Transparencia: Todos pueden verificar sus datos
- Eficiencia: Automatización reduce trabajo manual 70%

INVERSIÓN:
- Tiempo presidente: 8 horas (auditoría + coordinación)
- Tiempo Fernanda: 6 horas (visitas + llamadas)
- Correos certificados: $18.400 (8 x $2.300)
- Total: $18.400 monetario + 14 horas voluntarias

RESULTADO:
Base de datos residentes actualizada de 45% a 95%+ validez. Sistema moderno implementado con validación automática y mantenimiento trimestral. Comunicación formal y protocolos de emergencia ahora operativos con contactabilidad verificada.`
  },

  223: {
    descripcion_nueva: `FECHA: 7 de febrero de 2025

CONTEXTO:
La piscina del edificio (ubicada en azotea, 15x6 metros, capacidad 90m³) requería mantención preventiva antes del inicio de la temporada de verano (noviembre-marzo). El último servicio completo había sido realizado en octubre 2024, y el protocolo establecido indicaba mantención trimestral para garantizar calidad del agua, funcionamiento de equipos y cumplimiento sanitario.

PLANIFICACIÓN MANTENCIÓN:

1. EVALUACIÓN ESTADO ACTUAL (7 febrero, 09:00):
   - Inspección presidente + Fernanda (mayordomo)
   - Nivel agua: Óptimo (línea skimmer)
   - Claridad visual: Aceptable (fondo visible)
   - Equipos revisados:
     * Bomba filtración: Funcionando (ruido leve detectado)
     * Filtro arena: Presión 18 PSI (normal: 12-15 PSI = requiere limpieza)
     * Skimmers: 2 funcionales, 1 con tapa rota
     * Clorador automático: Vacío (requiere recarga pastillas)
   - Test químico rápido (tiras Aquacheck):
     * pH: 7.8 (alto, ideal 7.2-7.4)
     * Cloro libre: 0.5 ppm (bajo, ideal 1-3 ppm)
     * Alcalinidad: 110 ppm (normal)

2. CONTRATACIÓN SERVICIO ESPECIALIZADO:
   - Proveedor habitual: AquaTech Piscinas (contrato anual)
   - Servicio: Mantención preventiva completa
   - Costo: $95.000 (incluido en presupuesto trimestral)
   - Programación: 10 febrero, 08:00-11:00 (3 horas)
   - Técnico asignado: Manuel Rojas (certificado Seremi Salud)

EJECUCIÓN MANTENCIÓN (10 febrero):

3. TRABAJOS REALIZADOS:

   A) LIMPIEZA FILTRO ARENA (08:00-08:45):
      - Retrolavado: 5 minutos (elimina suciedad acumulada)
      - Enjuague: 2 minutos (limpia tuberías)
      - Presión post-limpieza: 13 PSI (reducción 28%, óptimo)

   B) REVISIÓN SISTEMA FILTRACIÓN (08:45-09:15):
      - Bomba inspeccionada: Rodamiento desgastado (ruido identificado)
      - Recomendación: Reemplazo preventivo en 3-4 meses ($180K)
      - Sello mecánico: OK (sin fugas)
      - Válvulas: Lubricadas (5 válvulas sistema)

   C) BALANCE QUÍMICO (09:15-10:00):
      - Análisis completo (kit profesional DPD):
        * pH: 7.8 → ajustado 7.3 (ácido muriático 500ml)
        * Cloro: 0.5 ppm → ajustado 2.0 ppm (hipoclorito cálcico 300g)
        * Alcalinidad: 110 ppm (sin ajuste)
        * Dureza cálcica: 220 ppm (normal)
      - Test post-ajuste (30 min espera): Todos parámetros OK

   D) LIMPIEZA FÍSICA (10:00-10:30):
      - Skimmers limpiados (hojas, insectos removidos)
      - Tapa skimmer rota reemplazada (repuesto stock AquaTech)
      - Línea flotación cepillada (elimina biofilm)
      - Fondo aspirado (sedimento fino removido)

   E) CLORADOR AUTOMÁTICO (10:30-11:00):
      - Carga pastillas tricloro: 8 unidades (3 kg total)
      - Ajuste dosificador: 3.5 (liberación gradual)
      - Duración estimada: 4 semanas
      - Próxima recarga: 10 marzo 2025

4. INFORME TÉCNICO ENTREGADO:
   - Estado general: BUENO (7.5/10)
   - Parámetros químicos: CONFORMES (normativa D.S. 735)
   - Equipos: FUNCIONALES (atención preventiva bomba)
   - Recomendaciones:
     * Reemplazar bomba en 3-4 meses (prevenir falla)
     * Mantener frecuencia trimestral
     * Contratar servicio limpieza semanal temporada alta
   - Certificado sanitario: Válido hasta 10 mayo 2025

COORDINACIÓN ADICIONAL:

5. PROTOCOLO VERANO ESTABLECIDO:
   - Limpieza semanal contratada: $35K/semana (feb-mar = 8 semanas)
   - Responsable supervisión: Fernanda (verifica cloro 2x/semana)
   - Tiras test disponibles: Stock 100 unidades (conserjería)
   - Horario piscina publicado: 10:00-20:00 todos los días
   - Reglamento uso recordado: WhatsApp grupo + cartel acceso

INVERSIÓN:
- Mantención preventiva: $95.000
- Limpieza semanal temporada: $280.000 (8 semanas)
- Químicos adicionales: $45.000 (stock emergencia)
- Total temporada: $420.000

BENEFICIOS:
- Agua cristalina: Parámetros sanitarios conformes
- Seguridad usuarios: Cloro y pH óptimos (previene irritaciones)
- Equipos protegidos: Limpieza filtro extiende vida útil
- Cumplimiento normativo: Certificado Seremi vigente
- Prevención: Identificación bomba desgastada evita falla verano

RESULTADO:
Mantención preventiva ejecutada profesionalmente, piscina operativa con parámetros sanitarios conformes. Temporada verano asegurada con limpieza semanal programada y supervisión continua Fernanda. Certificado sanitario vigente hasta mayo 2025.`
  },

  228: {
    descripcion_nueva: `FECHA: 19 de febrero de 2025

CONTEXTO:
Como parte del protocolo de gestión del nuevo comité, se estableció supervisión quincenal de áreas comunes para verificar cumplimiento de estándares de limpieza. Esta inspección permite detectar deficiencias tempranamente, evaluar desempeño del personal, y garantizar experiencia óptima para residentes. La supervisión del 19 de febrero fue la primera del mes.

INSPECCIÓN SISTEMÁTICA (19 febrero, 10:00-11:30):

1. METODOLOGÍA APLICADA:
   - Recorrido presidente + Fernanda (mayordomo)
   - Evaluación 8 áreas críticas (escala 1-10):
     * Hall principal
     * Pasillos pisos 1-10
     * Escaleras emergencia
     * Ascensores (2 unidades)
     * Gimnasio
     * Sala eventos (lounge)
     * Estacionamiento subterráneo
     * Azotea/terraza
   - Criterios: Polvo, manchas, olores, orden, daños
   - Registro fotográfico: Evidencia deficiencias

2. RESULTADOS POR ÁREA:

   A) HALL PRINCIPAL (Score: 9/10):
      - Estado: EXCELENTE
      - Piso porcelanato: Brillante (encerado reciente)
      - Espejos: Limpios sin marcas
      - Mobiliario: Ordenado y sin polvo
      - Observación: Vidrios exteriores con manchas lluvia
      - Responsable: María (auxiliar) - desempeño superior

   B) PASILLOS PISOS 1-10 (Score: 8/10):
      - Estado: MUY BUENO
      - Pisos: Limpios sin acumulación polvo
      - Pasamanos: Desinfectados (verificado tacto)
      - Puertas corta fuego: Sin manchas
      - Observación menor: Piso 7 esquina con telaraña
      - Responsable: María - mantiene estándar consistente

   C) ESCALERAS EMERGENCIA (Score: 7/10):
      - Estado: BUENO
      - Escalones: Limpios
      - Rincones: Polvo acumulado (difícil acceso)
      - Pasamanos: Requieren repaso
      - Acción: Solicitar limpieza profunda mensual
      - Responsable: María - área de baja prioridad habitual

   D) ASCENSORES (Score: 10/10):
      - Estado: IMPECABLE
      - Espejos: Sin marcas ni huellas
      - Piso: Aspirado y encerado
      - Paredes: Desinfectadas (sin olores)
      - Observación: Mejor área inspeccionada
      - Responsable: Fernanda - supervisión diaria activa

   E) GIMNASIO (Score: 6/10):
      - Estado: ACEPTABLE (CON OBSERVACIONES)
      - Piso: Polvo visible esquinas
      - Espejos: Manchas de sudor no removidas
      - Equipos: Sin desinfección evidente
      - Toallas papel: Dispensador vacío
      - Acción: Refuerzo protocolo limpieza post-uso
      - Responsable: María - requiere mayor frecuencia

   F) SALA EVENTOS (Score: 8/10):
      - Estado: MUY BUENO
      - Mobiliario: Ordenado sin polvo
      - Piso: Aspirado reciente
      - Cocina integrada: Limpia
      - Observación: Cortinas requieren lavado (no urgente)
      - Responsable: María - mantenimiento adecuado

   G) ESTACIONAMIENTO (Score: 9/10):
      - Estado: EXCELENTE
      - Piso: Barrido completo sin residuos
      - Pilares: Sin telarañas
      - Jardineras: Podadas (gestión 30 enero)
      - Iluminación: Todas lámparas funcionales
      - Responsable: Rodrigo (conserje temporal) - desempeño destacado

   H) AZOTEA/TERRAZA (Score: 8/10):
      - Estado: MUY BUENO
      - Piso deck: Barrido sin hojas acumuladas
      - Piscina: Limpia (mantención reciente 10 febrero)
      - Mobiliario: Ordenado
      - Observación: Riego plantas requiere ajuste frecuencia
      - Responsable: Fernanda - supervisión efectiva

3. EVALUACIÓN GLOBAL:
   - Promedio general: 8.1/10 (MUY BUENO)
   - Áreas excelentes (9-10): 3 de 8 (38%)
   - Áreas buenas (7-8): 4 de 8 (50%)
   - Áreas aceptables (6): 1 de 8 (12%)
   - Áreas deficientes (<6): 0 de 8 (0%)

ACCIONES CORRECTIVAS IMPLEMENTADAS:

4. INMEDIATAS (19 febrero, tarde):
   - Gimnasio: María realizó limpieza profunda (2 horas)
   - Espejos desinfectados, piso trapeado, equipos sanitizados
   - Dispensador toallas papel rellenado (stock verificado)
   - Piso 7 telaraña removida

5. PREVENTIVAS (programadas):
   - Escaleras emergencia: Limpieza profunda mensual (próxima: 1 marzo)
   - Gimnasio: Protocolo reforzado (limpieza diaria 17:00 post-uso peak)
   - Vidrios hall: Limpieza exterior quincenal (empresa especializada)
   - Cortinas lounge: Lavado profesional (programado 28 febrero)

6. REFUERZO PROTOCOLOS:
   - Reunión Fernanda + María (20 febrero, 09:00):
     * Gimnasio requiere atención especial (área crítica residentes)
     * Escaleras necesitan inclusión rutina semanal
     * Reconocimiento desempeño general: EXCELENTE
   - Incremento frecuencia gimnasio: 1x/día → 2x/día
   - Sin ajuste salarial (dentro de horas contratadas)

BENEFICIOS:
- Detección temprana: Problemas corregidos antes quejas residentes
- Evaluación objetiva: Personal reconoce fortalezas y mejoras
- Estándares documentados: Expectativas claras para todos
- Prevención: Mantenimiento evita deterioro acumulativo
- Transparencia: Residentes pueden solicitar informes supervisión

RESULTADO:
Supervisión quincenal ejecutada con evaluación objetiva 8 áreas. Promedio 8.1/10 (muy bueno) demuestra desempeño consistente personal. Acciones correctivas inmediatas implementadas (gimnasio) y preventivas programadas (escaleras, vidrios). Protocolo reforzado para mantener estándares altos.`
  },

  232: {
    descripcion_nueva: `FECHA: 24 de febrero de 2025

CONTEXTO:
El edificio cuenta con 6 áreas verdes (hall principal, terraza azotea, estacionamiento, acceso peatonal) que requieren mantención mensual para preservar estética, salud de las plantas y cumplimiento normativo de áreas comunes. El servicio de jardinería se contrata externamente con Luis Verdez (jardinero habitual desde 2023), quien proporciona mantención integral bajo supervisión del comité.

PLANIFICACIÓN SERVICIO MENSUAL:

1. EVALUACIÓN PREVIA (24 febrero, 08:00):
   - Recorrido Fernanda (mayordomo) + presidente
   - 6 áreas inspeccionadas:
     * Hall principal: 12 maceteros interiores
     * Terraza azotea: 8 jardineras deck
     * Estacionamiento: 12 jardineras ornamentales (podadas 30 enero)
     * Acceso peatonal: 4 jardineras entrada
     * Jardín vertical hall: 18 módulos sistema riego
     * Piscina perímetro: 6 palmeras pequeñas
   - Problemas identificados:
     * Hojas secas acumuladas (falta remoción)
     * Malezas creciendo jardineras exteriores (8 afectadas)
     * Sistema riego jardín vertical: 2 goteros obstruidos
     * Palmeras: Hojas inferiores marrones (requieren poda)

2. ALCANCE TRABAJO ACORDADO:
   - Poda plantas interiores: Remoción hojas secas, formación
   - Limpieza jardineras: Retiro malezas, hojas caídas
   - Fertilización: Abono orgánico todas las plantas
   - Sistema riego: Verificación + reparación goteros
   - Poda palmeras: Remoción hojas secas inferiores
   - Retiro residuos: Transporte a vertedero municipal

3. COTIZACIÓN Y APROBACIÓN:
   - Luis Verdez: $120.000 (servicio completo mensual)
   - Incluye: Mano obra, fertilizante, herramientas, retiro residuos
   - Tiempo estimado: 6 horas (1 persona)
   - Programación: Mismo día 24 febrero, 10:00-16:00
   - Aprobación: Comité (monto dentro presupuesto $150K mensual)

EJECUCIÓN TRABAJOS (24 febrero, 10:00-16:00):

4. SECUENCIA REALIZADA:

   A) HALL PRINCIPAL (10:00-11:30):
      - 12 maceteros atendidos (Ficus, Dracaena, Pothos)
      - Hojas secas removidas: 2.5 kg biomasa
      - Poda formación: 8 plantas (estimula crecimiento)
      - Fertilizante orgánico aplicado: 50g por macetero
      - Limpieza decorativa: Gravilla blanca lavada
      - Resultado: Aspecto renovado, plantas vigorosas

   B) TERRAZA AZOTEA (11:30-12:30):
      - 8 jardineras deck (especies ornamentales variadas)
      - Malezas removidas: 14 unidades (raíz completa)
      - Poda mantenimiento: Todas jardineras
      - Tierra superficie renovada: 40 litros sustrato nuevo
      - Riego profundo aplicado: 60 litros totales
      - Resultado: Jardineras ordenadas, tierra nutrida

   C) ESTACIONAMIENTO (12:30-13:00):
      - 12 jardineras revisadas (poda reciente 30 enero)
      - Solo fertilización aplicada (sin poda necesaria)
      - Limpieza hojas caídas suelo
      - Resultado: Mantención preventiva completada

   D) ACCESO PEATONAL (13:00-13:45):
      - 4 jardineras entrada (primera impresión visitantes)
      - Malezas removidas: 8 unidades
      - Poda intensa: Boj (arbustos ornamentales)
      - Tierra renovada + fertilización
      - Riego profundo (área expuesta sol directo)
      - Resultado: Aspecto impecable entrada edificio

   E) JARDÍN VERTICAL HALL (14:00-15:00):
      - 18 módulos sistema riego automático
      - 2 goteros obstruidos identificados y reemplazados
      - Línea riego verificada: Sin fugas
      - Programador ajustado: 3 riegos/día x 5 min (verano)
      - Plantas revisadas: Todas saludables (sistema funciona)
      - Resultado: Sistema riego operativo 100%

   F) PALMERAS PISCINA (15:00-16:00):
      - 6 palmeras pequeñas (Chamaedorea elegans)
      - Hojas inferiores marrones podadas: 24 hojas total
      - Fertilizante palmas específico aplicado
      - Tierra superficie aireada (mejora absorción)
      - Riego profundo (palmeras requieren más agua)
      - Resultado: Palmeras rejuvenecidas, crecimiento estimulado

5. RETIRO RESIDUOS:
   - 8 bolsas verdes biomasa (hojas, malezas, podas)
   - Peso estimado: 18 kg total
   - Transporte: Camioneta Luis → vertedero municipal
   - Certificado disposición: Entregado (cumplimiento ambiental)

SUPERVISIÓN Y VERIFICACIÓN:

6. INSPECCIÓN FINAL (16:15):
   - Recorrido Fernanda + Luis Verdez
   - Todas áreas verificadas: CONFORMES
   - Antes/después fotografiado: Evidencia mejora
   - Observaciones Luis:
     * Jardín vertical: Considerar especies más resistentes hall
     * Palmeras: Evaluar reemplazo por especies más grandes (estético)
   - Decisión: Analizar propuestas próxima reunión comité

7. PAGO Y FACTURACIÓN:
   - Servicio aprobado: $120.000
   - Factura recibida: 25 febrero (registro contable)
   - Pago transferencia: 28 febrero (protocolo 5 días)
   - Próximo servicio: 24 marzo 2025 (calendario anual)

CALENDARIO ANUAL ESTABLECIDO:

8. FRECUENCIA Y PRESUPUESTO:
   - Mantención mensual: Cada 24 de mes
   - Costo mensual: $120.000
   - Presupuesto anual: $1.440.000 (12 meses)
   - Servicios extraordinarios: Poda mayor (trimestral, $85K)
   - Total anual jardinería: $1.780.000

BENEFICIOS:
- Estética preservada: Áreas verdes siempre ordenadas
- Salud plantas: Fertilización y poda profesional
- Prevención plagas: Remoción malezas temprana
- Sistema riego funcional: Reparaciones oportunas
- Valor propiedad: Áreas comunes bien mantenidas
- Cumplimiento ambiental: Disposición residuos certificada

RESULTADO:
Mantención mensual jardines ejecutada profesionalmente en 6 horas. Todas áreas verdes (hall, terraza, estacionamiento, acceso, jardín vertical, piscina) atendidas con poda, fertilización, limpieza y reparación riego. Calendario anual establecido con servicio cada 24 de mes ($120K) para preservar estética y salud de las plantas.`
  }
};

data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    return { ...g, descripcion: expansions[g.id].descripcion_nueva };
  }
  return g;
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('✅ MEDIO Batch 5 completed!');
console.log('Progress: 68/94 → 74/94 (78.7%)');
console.log('Remaining: 20 gestiones');
