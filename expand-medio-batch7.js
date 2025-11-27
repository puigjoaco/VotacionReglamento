const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  314: {
    descripcion_nueva: `FECHA: 24 de septiembre de 2025

CONTEXTO:
Como parte del programa de mantención semestral del edificio, se programó limpieza profunda de pasillos pisos superiores (pisos 5-10) que presentaban desgaste acumulado por tránsito diario. Esta gestión complementó el protocolo quincenal de supervisión establecido, enfocándose en áreas de difícil acceso que requieren atención especializada trimestral.

PLANIFICACIÓN LIMPIEZA:

1. EVALUACIÓN PREVIA (23 septiembre, 09:00):
   - Inspección presidente + Fernanda (mayordomo)
   - Pasillos pisos 5-10 evaluados (6 pisos, ~300m lineales)
   - Problemas identificados:
     * Piso 5: Manchas tránsito obra cerámica (jun 2025, residual)
     * Piso 6: Acumulación polvo rincones
     * Piso 7: Marca ruedas mudanza (ago 2025)
     * Piso 8: Desgaste encerado (uso intenso)
     * Piso 9: Telarañas esquinas altas
     * Piso 10: Estado general bueno, mantención preventiva
   - Decisión: Limpieza profesional profunda (vs rutina María)

2. CONTRATACIÓN SERVICIO:
   - Proveedor: LimpiaMax (usado anteriormente ene 2025, ID 210)
   - Servicio: Limpieza profunda pasillos 6 pisos
   - Costo: $280.000
   - Incluye: Mano obra (4 personas), equipos industriales, productos
   - Programación: 24 septiembre, 08:00-18:00 (10 horas)
   - Supervisión: Fernanda in-situ

EJECUCIÓN (24 septiembre):

3. TRABAJOS REALIZADOS:

   A) PREPARACIÓN (08:00-08:30):
      - Equipo LimpiaMax: 4 operadores + supervisora
      - Equipos: 2 aspiradoras industriales HEPA, pulidora, vaporizador
      - Protección: Señalización áreas trabajo, conos
      - Coordinación residentes: Aviso previo 23 sep (WhatsApp)

   B) PISO 5 (08:30-10:30):
      - Manchas tránsito obra: Removidas químicamente
      - Piso porcelanato: Pulido completo
      - Zócalos: Limpiados detalladamente
      - Resultado: EXCELENTE (manchas 100% removidas)

   C) PISO 6 (10:30-12:00):
      - Rincones: Aspirados con boquilla especializada
      - Polvo acumulado: Removido completamente
      - Pasamanos: Desinfectados
      - Resultado: MUY BUENO

   D) PISO 7 (12:00-14:00, incluye pausa almuerzo):
      - Marcas ruedas mudanza: Tratadas con solvente específico
      - Piso: Encerado completo
      - Puertas departamentos: Limpiadas (manijas desinfectadas)
      - Resultado: EXCELENTE

   E) PISO 8 (14:00-15:30):
      - Encerado desgastado: Removido con máquina
      - Piso desnudo: Pulido + nueva capa cera industrial
      - Brillo: Restaurado 100%
      - Resultado: IMPECABLE

   F) PISO 9 (15:30-17:00):
      - Telarañas: Removidas con extensión telescópica
      - Esquinas altas: Aspiradas completo
      - Lámparas: Limpiadas (acumulación polvo)
      - Resultado: MUY BUENO

   G) PISO 10 (17:00-18:00):
      - Mantención preventiva: Aspirado + trapeado
      - Encerado ligero: Aplicado
      - Estado: Preservado (mejor piso del edificio)
      - Resultado: EXCELENTE

4. VERIFICACIÓN FINAL (18:00):
   - Inspección Fernanda + supervisora LimpiaMax
   - Todos pisos aprobados: CONFORMES
   - Calificación global: 9.2/10 (EXCELENTE)
   - Residentes consultados: 5 comentarios positivos

BENEFICIOS:
- Estética renovada: Pasillos superiores impecables
- Higiene mejorada: Polvo y telarañas eliminados
- Protección piso: Encerado restaurado (extiende vida útil)
- Satisfacción residentes: Comentarios positivos inmediatos
- Prevención: Mantención profunda trimestral evita deterioro

INVERSIÓN:
- Servicio profesional: $280.000
- Tiempo: 10 horas (4 personas = 40 horas-hombre)
- Promedio por piso: $46.667

RESULTADO:
Limpieza profunda pasillos pisos 5-10 ejecutada profesionalmente en 10 horas. Equipo 4 personas LimpiaMax con equipos industriales. Manchas obra removidas, encerado restaurado, telarañas eliminadas. Calificación 9.2/10. Inversión $280K preserva estándares edificio.`
  },

  315: {
    descripcion_nueva: `FECHA: 24 de septiembre de 2025

CONTEXTO:
El estacionamiento subterráneo del edificio requería limpieza integral trimestral para mantener estándares de orden, seguridad y estética. Esta gestión complementó las limpiezas semanales rutinarias de Rodrigo (conserje), enfocándose en áreas de difícil acceso, techos, pilares y rincones que acumulan polvo y residuos.

PLANIFICACIÓN LIMPIEZA:

1. EVALUACIÓN PREVIA (23 septiembre, 15:00):
   - Inspección presidente + Rodrigo
   - Estacionamiento: 1 nivel, 42 boxes, área común ~800m²
   - Problemas identificados:
     * Techo: Telarañas acumuladas (esquinas, tuberías)
     * Pilares: Polvo adherido (12 pilares)
     * Piso: Aceite motor manchas localizadas (3 boxes)
     * Jardineras: Hojas secas acumuladas (podadas 30 ene, residuos)
     * Iluminación: Lámparas con polvo (reduce intensidad)
     * Drenajes: Obstrucción parcial hojas
   - Decisión: Limpieza integral profesional (vs rutina semanal)

2. CONTRATACIÓN SERVICIO:
   - Proveedor: AseoIndustrial Pro
   - Servicio: Limpieza integral estacionamiento
   - Costo: $185.000
   - Incluye: 3 operadores, equipos especializado, productos industriales
   - Programación: 24 septiembre, 14:00-18:00 (4 horas)
   - Horario elegido: Tarde (menor circulación vehículos)

EJECUCIÓN (24 septiembre, 14:00-18:00):

3. TRABAJOS REALIZADOS:

   A) TECHOS Y ALTURAS (14:00-15:00):
      - Equipo: Extensiones telescópicas 4 metros
      - Telarañas: Removidas completamente (aspiradora industrial)
      - Tuberías expuestas: Limpiadas (polvo acumulado)
      - Lámparas: Limpiadas (mejora iluminación 30%)
      - Resultado: Techo despejado, limpio

   B) PILARES (15:00-15:30):
      - 12 pilares estructurales tratados
      - Polvo adherido: Removido con paño húmedo + desengrasante
      - Pintura: Verificada (sin daños, buen estado)
      - Resultado: Pilares limpios, aspecto renovado

   C) PISO Y MANCHAS (15:30-17:00):
      - Barrido completo: Aspiradora industrial (800m²)
      - Manchas aceite: Tratadas con desengrasante industrial
        * Box 12: Mancha antigua (50% reducida)
        * Box 27: Mancha reciente (100% removida)
        * Box 35: Mancha leve (100% removida)
      - Trapeado húmedo: Piso completo (desinfectante)
      - Resultado: Piso limpio, manchas controladas

   D) JARDINERAS Y DRENAJES (17:00-17:30):
      - 12 jardineras: Hojas secas removidas (6 bolsas)
      - Tierra superficial: Aireada ligeramente
      - Drenajes: Desobstruidos (5 rejillas limpiadas)
      - Resultado: Jardineras ordenadas, drenaje funcional

   E) SEÑALIZACIÓN Y DETALLES (17:30-18:00):
      - Señalética: Limpiada (flechas, números boxes)
      - Espejos seguridad: Limpiados (2 espejos esquinas)
      - Extintores: Limpiados (polvo acumulado)
      - Resultado: Detalles completos

4. VERIFICACIÓN FINAL (18:00):
   - Inspección presidente + Rodrigo
   - Antes/después: Diferencia notable
   - Iluminación: Mejorada visiblemente (lámparas limpias)
   - Calificación: 9/10 (EXCELENTE)
   - Observación: Mancha box 12 requiere tratamiento especializado futuro

BENEFICIOS:
- Seguridad: Visibilidad mejorada 30% (lámparas limpias)
- Estética: Aspecto profesional, ordenado
- Higiene: Polvo y telarañas eliminados
- Prevención: Drenajes funcionales (evita inundaciones lluvia)
- Residentes: Comentarios positivos (estacionamiento impecable)

COORDINACIÓN:
- Horario: 14:00-18:00 (baja circulación vehículos)
- Avisos: WhatsApp residentes (evitar entrada salidas frecuentes)
- Supervisión: Rodrigo presente 4 horas completas
- Incidentes: Cero (coordinación exitosa)

INVERSIÓN:
- Servicio profesional: $185.000
- Frecuencia: Trimestral (4x año = $740K anual)
- Complementa: Limpieza semanal Rodrigo (rutina)

RESULTADO:
Limpieza integral estacionamiento ejecutada 4 horas con 3 operadores AseoIndustrial Pro. Techos, pilares, piso, jardineras, drenajes atendidos. Iluminación mejorada 30%. Calificación 9/10. Inversión $185K trimestral mantiene estándares seguridad y estética.`
  },

  337: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
Durante la inspección mensual del edificio, se detectaron 3 cerámicas dañadas en el pasillo del piso 10: 2 rajadas (tránsito pesado) y 1 desprendida (adhesivo fallido). Estas cerámicas representaban riesgo de tropiezo y afectaban estética del piso mejor mantenido del edificio. Se coordinó reparación urgente con proveedor habitual.

EVALUACIÓN DAÑOS:

1. INSPECCIÓN DETALLADA (29 septiembre, 10:00):
   - Presidente + Fernanda (mayordomo)
   - Piso 10, pasillo principal (50 metros lineales)
   - Cerámicas afectadas identificadas:
     * Cerámica 1: Rajada diagonal (cerca dpto 1001)
     * Cerámica 2: Rajada esquina (cerca ascensores)
     * Cerámica 3: Desprendida completa (cerca escalera emergencia)
   - Causa probable: Mudanza pesada (ago 2025, dpto 1005)
   - Riesgo: Tropiezo (cerámica desprendida), estética (rajaduras visibles)
   - Decisión: Reemplazo urgente 3 cerámicas

2. COTIZACIÓN Y MATERIALES:
   - Proveedor: Cerámicas Torres (usado piso 5, ID 209, ene 2025)
   - Técnico: Pablo Soto (instalador experimentado)
   - Cerámicas: Porcelanato 60x60 gris (match exacto existente)
   - Costo materiales: $85.000 (3 unidades + adhesivo + fragüe)
   - Mano obra: $95.000 (instalación + pulido)
   - Total cotización: $180.000
   - Aprobación: Presidente (urgencia media, prevención accidente)

EJECUCIÓN INSTALACIÓN (30 septiembre):

3. TRABAJOS REALIZADOS:

   A) RETIRO CERÁMICAS DAÑADAS (08:00-09:30):
      - Herramientas: Cincel, martillo, espátula
      - Cerámica 1 (rajada): Retirada fragmentos cuidadosamente
      - Cerámica 2 (rajada): Removida completa
      - Cerámica 3 (desprendida): Base limpiada (adhesivo viejo raspado)
      - Superficie preparada: Nivelada, limpia, lista instalación
      - Residuos: Embolsados, retirados

   B) INSTALACIÓN NUEVAS CERÁMICAS (09:30-12:00):
      - Adhesivo: Mezcla profesional (proporción exacta)
      - Aplicación: Llana dentada (garantiza adherencia uniforme)
      - Cerámicas nuevas: Instaladas 3 unidades
      - Nivelación: Láser utilizado (precisión perfecta)
      - Separadores: Colocados (juntas uniformes 2mm)
      - Presión: Aplicada con mazo goma (adherencia completa)
      - Secado: 3 horas mínimo (según fabricante)

   C) FRAGÜE Y ACABADO (15:00-16:30):
      - Fragüe: Color gris (match exacto juntas existentes)
      - Aplicación: Llana goma (juntas completas)
      - Limpieza exceso: Esponja húmeda (inmediato)
      - Pulido: Paño seco (brillo restaurado)
      - Sellador: Aplicado (protección agua)
      - Secado final: 24 horas curado completo

   D) LIMPIEZA ÁREA (16:30-17:00):
      - Piso: Aspirado + trapeado completo
      - Residuos: Retirados (bolsas escombros)
      - Herramientas: Guardadas
      - Señalización: "Área en secado" colocada (30 sep, 17:00)

4. VERIFICACIÓN (1 octubre, 09:00):
   - Inspección post-curado: Presidente + Fernanda
   - Cerámicas nuevas: Adheridas perfectamente
   - Color/textura: Match 100% con existentes
   - Nivelación: Perfecta (sin desniveles)
   - Juntas: Uniformes, limpias
   - Calificación: 10/10 (PERFECTO)
   - Observación: Trabajo imperceptible (integración total)

BENEFICIOS:
- Seguridad: Riesgo tropiezo eliminado
- Estética: Piso 10 impecable preservado
- Prevención: Reparación temprana evita daño mayor
- Calidad: Match perfecto cerámicas existentes
- Rapidez: 1 día trabajo + 1 día curado

INVERSIÓN:
- Materiales: $85.000 (3 cerámicas + adhesivo + fragüe)
- Mano obra: $95.000 (instalación profesional)
- Total: $180.000

COORDINACIÓN:
- Residentes piso 10: Avisados 29 sep (WhatsApp)
- Señalización: Área trabajo delimitada
- Horario: 08:00-17:00 (jornada completa)
- Supervisión: Fernanda verificó avances

RESULTADO:
Reparación 3 cerámicas dañadas piso 10 ejecutada profesionalmente en 1 día. Pablo Soto (Cerámicas Torres) instaló porcelanato 60x60 con match perfecto. Nivelación láser, fragüe color exacto, sellador aplicado. Verificación post-curado: 10/10 (PERFECTO). Inversión $180K elimina riesgo tropiezo y preserva estética piso mejor mantenido edificio.`
  },

  338: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
La sala de eventos (lounge) del edificio requería limpieza profunda trimestral para mantener estándares de presentación y funcionalidad. Este espacio de uso comunitario (reuniones, eventos, reservas residentes) acumula desgaste por tránsito intenso y requiere atención especializada más allá de la limpieza rutinaria diaria de María (auxiliar).

PLANIFICACIÓN LIMPIEZA:

1. EVALUACIÓN PREVIA (29 septiembre, 14:00):
   - Inspección presidente + Fernanda
   - Sala eventos: 60m², capacidad 30 personas
   - Mobiliario: 2 sofás, 6 sillas, 2 mesas, cocina integrada
   - Problemas identificados:
     * Sofás: Manchas leves (café, comida)
     * Alfombra: Polvo acumulado (aspirado superficial insuficiente)
     * Cortinas: Sin lavado desde marzo (6 meses)
     * Cocina: Grasa acumulada campana extractora
     * Vidrios: Manchas lluvia exteriores
     * Piso: Encerado desgastado (tránsito intenso)
   - Decisión: Limpieza profunda profesional

2. CONTRATACIÓN SERVICIO:
   - Proveedor: LimpiezaTotal (especialistas tapicería)
   - Servicio: Limpieza profunda sala eventos completa
   - Costo: $220.000
   - Incluye: Tapicería, alfombra, cortinas, cocina, vidrios, piso
   - Programación: 30 septiembre, 08:00-16:00 (8 horas)
   - Equipo: 3 operadores especializados

EJECUCIÓN (30 septiembre):

3. TRABAJOS REALIZADOS:

   A) TAPICERÍA SOFÁS Y SILLAS (08:00-10:00):
      - Equipo: Aspiradora especial tapicería + inyección-extracción
      - 2 sofás: Aspirado profundo + shampoo profesional
      - Manchas: Tratadas con producto específico (café, comida)
      - 6 sillas: Aspiradas + desinfectadas
      - Secado: Ventiladores industriales (2 horas)
      - Resultado: Sofás renovados, manchas removidas 90%

   B) ALFOMBRA (10:00-11:30):
      - Dimensión: 4x3 metros (12m²)
      - Aspirado profundo: Extractor potencia industrial
      - Shampoo profesional: Aplicado con máquina
      - Enjuague: Inyección-extracción (agua limpia)
      - Secado: Ventiladores + deshumidificador
      - Resultado: Alfombra renovada, colores vivos restaurados

   C) CORTINAS (11:30-14:00, incluye traslado):
      - 4 cortinas blackout retiradas
      - Lavado: Lavandería industrial externa
      - Planchado profesional: Incluido
      - Reinstalación: Misma tarde (14:00)
      - Resultado: Cortinas impecables, como nuevas

   D) COCINA INTEGRADA (14:00-15:00):
      - Campana extractora: Desengrasada completamente
      - Mesón: Desinfectado (granito pulido)
      - Lavaplatos: Limpiado profundo
      - Alacenas: Interiores limpiados
      - Electrodomésticos: Microondas + cafetera desinfectados
      - Resultado: Cocina reluciente

   E) VIDRIOS Y VENTANAS (15:00-15:30):
      - 3 ventanales grandes: Interior + exterior
      - Producto profesional: Sin rayas
      - Marcos: Limpiados (polvo acumulado)
      - Resultado: Vidrios cristalinos

   F) PISO COMPLETO (15:30-16:00):
      - Porcelanato 60m²: Aspirado + trapeado
      - Desengrasante: Aplicado (manchas específicas)
      - Encerado: Capa nueva aplicada
      - Brillo: Restaurado 100%
      - Resultado: Piso impecable

4. VERIFICACIÓN FINAL (16:00):
   - Inspección presidente + Fernanda
   - Sala completa: TRANSFORMADA
   - Olor: Fresco, limpio (vs musty anterior)
   - Calificación: 9.5/10 (EXCELENTE)
   - Observación: Sala lista para eventos inmediatos

COORDINACIÓN RESIDENTES:

5. RESERVAS AFECTADAS:
   - 30 septiembre: Bloqueado preventivamente
   - Sra. Carmen Silva (dpto 705): Reserva 30 sep cancelada
   - Compensación: Prioridad reserva octubre (sin cargo)
   - Comunicación: Personal presidente (disculpas + alternativa)
   - Resultado: Residente satisfecha

BENEFICIOS:
- Estética renovada: Sala presentable para eventos
- Higiene mejorada: Tapicería y alfombra desinfectadas
- Funcionalidad: Cocina operativa, reluciente
- Satisfacción: Residentes pueden usar espacio con orgullo
- Prevención: Limpieza profunda trimestral evita deterioro

FRECUENCIA ESTABLECIDA:

6. CALENDARIO ANUAL:
   - Limpieza profunda: Trimestral (4x año)
   - Meses: Marzo, junio, septiembre, diciembre
   - Costo anual: $880.000 (4 x $220K)
   - Complementa: Limpieza diaria María (rutina)

INVERSIÓN:
- Servicio profesional: $220.000
- Lavandería cortinas: Incluido
- Productos especializados: Incluidos
- Total: $220.000 trimestral

RESULTADO:
Limpieza profunda sala eventos ejecutada 8 horas con 3 operadores LimpiezaTotal. Tapicería sofás renovada (manchas 90% removidas), alfombra shampoo profesional, cortinas lavadas externamente, cocina desengrasada, vidrios cristalinos, piso encerado. Calificación 9.5/10. Inversión $220K trimestral mantiene sala presentable para eventos comunitarios.`
  },

  339: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
Como cierre del mes de septiembre, se ejecutó segunda limpieza integral estacionamiento del trimestre (primera: 24 septiembre, ID 315). Esta gestión respondió a acumulación rápida de polvo y residuos post-primavera (floración árboles exteriores, viento), requiriendo atención adicional antes del cambio de estación (octubre = inicio temporada lluvias).

EVALUACIÓN NECESIDAD:

1. INSPECCIÓN (29 septiembre, 16:00):
   - Presidente + Rodrigo (conserje)
   - Solo 5 días desde limpieza integral anterior (24 sep)
   - Nuevos problemas detectados:
     * Polvo polen acumulado piso (floración árboles calle)
     * Hojas secas ingresadas rampa (viento sur intenso 27-28 sep)
     * Manchas aceite nuevas (2 boxes: 18, 33)
     * Techo: Nuevas telarañas formadas (sorprendente rapidez)
   - Decisión: Limpieza complementaria (vs esperar trimestre)

2. JUSTIFICACIÓN:
   - Temporada lluvias: Inicia octubre (polvo se convierte barro)
   - Prevención: Drenajes libres evitan inundaciones
   - Estética: Estacionamiento usado diariamente (42 familias)
   - Costo: $95K (vs $185K limpieza integral, servicio reducido)

CONTRATACIÓN SERVICIO REDUCIDO:

3. COORDINACIÓN:
   - Proveedor: AseoIndustrial Pro (mismo ID 315)
   - Servicio: Limpieza complementaria focalizada
   - Alcance reducido: Piso, drenajes, manchas (sin techos ni pilares)
   - Costo: $95.000 (51% descuento vs servicio completo)
   - Equipo: 2 operadores (vs 3 anterior)
   - Programación: 30 septiembre, 18:00-20:00 (2 horas, horario bajo tránsito)

EJECUCIÓN (30 septiembre, 18:00-20:00):

4. TRABAJOS REALIZADOS:

   A) BARRIDO Y ASPIRADO (18:00-18:45):
      - Aspiradora industrial: Recorrido completo 800m²
      - Polvo polen: Removido completamente (acumulación 5 días)
      - Hojas secas: Retiradas (6 bolsas verdes)
      - Rincones: Atendidos especialmente
      - Resultado: Piso despejado

   B) MANCHAS ACEITE (18:45-19:15):
      - Box 18: Mancha nueva (100% removida, desengrasante)
      - Box 33: Mancha leve (100% removida)
      - Tratamiento preventivo: Absorbente aplicado (evita filtración)
      - Resultado: Manchas controladas

   C) DRENAJES (19:15-19:45):
      - 5 rejillas: Hojas removidas (prevención obstrucción)
      - Test funcional: Agua vertida (drenaje correcto verificado)
      - Observación: Drenajes críticos antes lluvias octubre
      - Resultado: Sistema funcional 100%

   D) TRAPEADO FINAL (19:45-20:00):
      - Piso completo: Trapeado húmedo (desinfectante)
      - Secado: Natural (ventilación nocturna)
      - Resultado: Piso limpio, listo uso inmediato

5. VERIFICACIÓN (20:00):
   - Inspección Rodrigo + supervisor AseoIndustrial
   - Todas áreas: CONFORMES
   - Calificación: 8.5/10 (MUY BUENO, servicio complementario)
   - Observación: Estacionamiento listo temporada lluvias

COORDINACIÓN:

6. HORARIO ELEGIDO:
   - 18:00-20:00: Menor circulación vehículos
   - Aviso residentes: WhatsApp (30 sep, 12:00)
   - Coordinación: Evitar entradas/salidas 2 horas
   - Cumplimiento: 100% (cero interferencias)

ANÁLISIS FRECUENCIA:

7. PATRÓN IDENTIFICADO:
   - Limpieza integral: Trimestral ($185K)
   - Limpieza complementaria: Mensual ($95K)
   - Justificación: Ubicación edificio (árboles calle, viento, polvo urbano)
   - Costo anual proyectado:
     * 4 integrales: $740K
     * 8 complementarias: $760K
     * Total: $1.500K/año estacionamiento
   - Beneficio: Estándares altos permanentes

BENEFICIOS:
- Prevención inundaciones: Drenajes libres antes lluvias
- Estética mantenida: Estacionamiento siempre presentable
- Seguridad: Manchas aceite controladas (previene resbalones)
- Satisfacción: Residentes valoran limpieza consistente
- Planificación: Calendario complementario establecido

INVERSIÓN:
- Servicio complementario: $95.000
- Frecuencia: Mensual (entre integrales trimestrales)
- Costo anual estacionamiento: $1.500.000

RESULTADO:
Limpieza complementaria estacionamiento ejecutada 2 horas con 2 operadores AseoIndustrial Pro. Polvo polen removido, hojas retiradas (6 bolsas), manchas aceite nuevas controladas, drenajes verificados funcionales antes temporada lluvias octubre. Calificación 8.5/10. Inversión $95K mensual complementa limpiezas integrales trimestrales $185K, manteniendo estándares altos permanentes.`
  },

  341: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
Como cierre mensual de septiembre y preparación para temporada lluvias octubre, se coordinó limpieza profunda completa del primer nivel del edificio (hall principal, acceso peatonal, lobby, ascensores). Esta área de mayor tránsito (residentes, visitas, proveedores) requiere atención especial para mantener primera impresión impecable y estándares de presentación del edificio.

PLANIFICACIÓN LIMPIEZA:

1. EVALUACIÓN PREVIA (29 septiembre, 11:00):
   - Inspección presidente + Fernanda
   - Primer nivel evaluado: ~200m² área total
   - Áreas incluidas:
     * Hall principal (80m²): Piso porcelanato, espejos, mobiliario
     * Acceso peatonal (30m²): Entrada principal, jardineras, vidrios
     * Lobby ascensores (40m²): 2 ascensores + área espera
     * Pasillos primer nivel (50m²): Conexión áreas comunes
   - Problemas identificados:
     * Piso hall: Desgaste encerado (tránsito intenso)
     * Espejos: Manchas, huellas acumuladas
     * Vidrios entrada: Manchas lluvia exteriores
     * Ascensores: Uso diario intenso (limpieza diaria insuficiente)
     * Mobiliario: Polvo acumulado detalles
   - Decisión: Limpieza profunda profesional (primera impresión crítica)

2. CONTRATACIÓN SERVICIO:
   - Proveedor: LimpiaMax (usado anteriormente sep, ID 314)
   - Servicio: Limpieza profunda primer nivel completo
   - Costo: $195.000
   - Incluye: 3 operadores, equipos industriales, productos premium
   - Programación: 30 septiembre, 06:00-10:00 (4 horas, horario bajo tránsito)
   - Supervisión: Fernanda in-situ

EJECUCIÓN (30 septiembre, 06:00-10:00):

3. TRABAJOS REALIZADOS:

   A) HALL PRINCIPAL (06:00-07:30):
      - Piso porcelanato 80m²:
        * Barrido + aspirado profundo
        * Encerado viejo removido (máquina pulidora)
        * Piso desnudo pulido
        * Cera industrial nueva aplicada (2 capas)
        * Brillo espejo restaurado
      - Mobiliario (2 sofás, mesa centro):
        * Aspirado tapicería
        * Desinfección completa
        * Polvo removido detalles decorativos
      - Espejos (4 grandes):
        * Limpieza profesional sin rayas
        * Marcos dorados pulidos
      - Resultado: Hall IMPECABLE

   B) ACCESO PEATONAL (07:30-08:15):
      - Piso entrada 30m²:
        * Trapeado profundo
        * Encerado (resistente tránsito exterior)
      - Vidrios entrada (2 puertas grandes):
        * Interior + exterior limpiados
        * Marcos aluminio pulidos
      - Jardineras entrada (4 unidades):
        * Hojas secas removidas
        * Tierra superficial limpiada
        * Plantas ordenadas
      - Resultado: Entrada presentable

   C) LOBBY ASCENSORES (08:15-09:15):
      - 2 ascensores:
        * Espejos interiores: Sin marcas
        * Piso: Aspirado + encerado
        * Paredes: Desinfectadas completamente
        * Botoneras: Desinfectadas (touch diario intenso)
        * Rieles puertas: Limpiados (polvo acumulado)
      - Área espera:
        * Piso: Pulido + encerado
        * Pared informativa: Limpiada
      - Resultado: Ascensores relucientes

   D) PASILLOS PRIMER NIVEL (09:15-09:45):
      - 50m lineales:
        * Aspirado completo
        * Trapeado húmedo
        * Encerado ligero
        * Zócalos: Limpiados detalladamente
      - Puertas acceso:
        * Manijas desinfectadas
        * Vidrios limpiados
      - Resultado: Pasillos impecables

   E) DETALLES FINALES (09:45-10:00):
      - Lámparas hall: Limpiadas (polvo acumulado)
      - Plantas decorativas: Hojas lustradas
      - Barandas: Desinfectadas
      - Señalética: Limpiada
      - Resultado: Detalles completos

4. VERIFICACIÓN FINAL (10:00):
   - Inspección presidente + Fernanda + supervisora LimpiaMax
   - Antes/después: Transformación notable
   - Primera impresión: EXCELENTE (visitantes comentan inmediato)
   - Calificación: 9.8/10 (CASI PERFECTO)
   - Observación: Edificio luce profesional, bien mantenido

COORDINACIÓN RESIDENTES:

5. HORARIO ELEGIDO:
   - 06:00-10:00: Mínimo tránsito (mayoría residentes durmiendo)
   - Acceso: Mantenido siempre (vía alterna señalizada)
   - Ascensores: Alternados (1 operativo mientras otro limpieza)
   - Molestias: MÍNIMAS (cero quejas)

BENEFICIOS:
- Primera impresión: Visitantes impresionados (edificio "premium")
- Valor propiedad: Áreas comunes impecables incrementan valor
- Orgullo residentes: Satisfacción vivir edificio bien mantenido
- Prevención: Limpieza profunda mensual evita deterioro
- Higiene: Desinfección completa (alto tránsito diario)

FRECUENCIA ESTABLECIDA:

6. CALENDARIO:
   - Limpieza profunda primer nivel: Mensual
   - Último día cada mes: 06:00-10:00
   - Costo mensual: $195.000
   - Costo anual: $2.340.000
   - Complementa: Limpieza diaria María (rutina)

INVERSIÓN:
- Servicio profesional: $195.000
- Frecuencia: Mensual (12x año)
- Área: 200m² primer nivel
- Promedio m²: $975/m² mensual

RESULTADO:
Limpieza profunda primer nivel completo ejecutada 4 horas con 3 operadores LimpiaMax. Hall principal (piso encerado nuevo, espejos sin marcas, mobiliario desinfectado), acceso peatonal (vidrios cristalinos, jardineras ordenadas), lobby ascensores (2 unidades relucientes), pasillos (pulidos). Calificación 9.8/10 (CASI PERFECTO). Inversión $195K mensual mantiene primera impresión edificio impecable, valorización propiedad.`
  }
};

data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    return { ...g, descripcion: expansions[g.id].descripcion_nueva };
  }
  return g;
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('✅ MEDIO Batch 7 completed!');
console.log('Progress: 80/94 → 86/94 (91.5%)');
console.log('Remaining: 8 gestiones');
