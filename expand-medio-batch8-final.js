const fs = require('fs');
const data = require('./app/auditoria/gestiones.json');

const expansions = {
  342: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
El sector de basura y reciclado externo del edificio (ubicado en área de servicio junto rampa estacionamiento) presentaba desorganización acumulada: contenedores mal distribuidos, señalización confusa, y dificultad para residentes al depositar residuos correctamente. El comité coordinó reorganización completa para mejorar funcionalidad, estética y cumplimiento normativa ambiental.

EVALUACIÓN SITUACIÓN ACTUAL:

1. INSPECCIÓN ÁREA (29 septiembre, 17:00):
   - Presidente + Rodrigo (conserje) + Fernanda
   - Área servicio: 15m² techados + 20m² descubiertos
   - Contenedores actuales:
     * 3 basura doméstica (240 litros c/u) - DESBORDADOS
     * 2 reciclaje papel/cartón (120 litros c/u) - MAL SEÑALIZADOS
     * 1 reciclaje plástico (120 litros) - UBICACIÓN INCORRECTA
     * 1 reciclaje vidrio (120 litros) - SIN USAR (desconocido)
   - Problemas identificados:
     * Contenedores basura insuficientes (desborde frecuente)
     * Señalización reciclaje confusa (residentes mezclan)
     * Ubicación ilógica (reciclaje lejos acceso)
     * Piso: Manchas líquidos, olor desagradable
     * Estética: Área desordenada, mala imagen edificio

2. ANÁLISIS NECESIDADES:
   - Generación basura edificio: ~600 kg/semana (42 dptos)
   - Capacidad actual: 720 litros basura (insuficiente!)
   - Capacidad necesaria: 1.200 litros (40% incremento)
   - Reciclaje: Bajo uso (15% residentes participan)
   - Causa: Señalización confusa, ubicación inconveniente

PLANIFICACIÓN REORGANIZACIÓN:

3. PROPUESTA NUEVA DISTRIBUCIÓN:
   - Zona A (Techada, cerca rampa): BASURA DOMÉSTICA
     * 5 contenedores 240L (vs 3 anteriores)
     * Total: 1.200L capacidad (+67% vs actual)
   - Zona B (Descubierta, señalizada): RECICLAJE
     * 3 contenedores 120L: Papel/Cartón, Plástico, Vidrio
     * Señalización vertical clara: Colores + pictogramas
     * Piso pintado: Delimita áreas claramente
   - Separación: 3 metros entre zonas (evita confusión)

4. MATERIALES Y PROVEEDORES:
   - Contenedores nuevos (2 adicionales basura): $180.000
   - Señalización vertical (3 letreros reciclaje): $45.000
   - Pintura piso (demarcación áreas): $35.000
   - Limpieza profunda área: Incluido servicio
   - Proveedor contenedores: Contenedores Industriales
   - Ejecución: Rodrigo + ayudante temporal

EJECUCIÓN REORGANIZACIÓN (30 septiembre):

5. TRABAJOS REALIZADOS:

   A) LIMPIEZA PROFUNDA PREVIA (08:00-10:00):
      - Todos contenedores vaciados completamente
      - Piso: Desengrasado con producto industrial
      - Manchas: Removidas con cepillo + agua presión
      - Drenaje: Limpiado (obstrucción removida)
      - Olor: Eliminado (desinfectante aplicado)
      - Resultado: Área limpia, lista reorganización

   B) NUEVA DISTRIBUCIÓN (10:00-13:00):
      - Zona A (Basura doméstica):
        * 5 contenedores 240L ubicados linealmente
        * Tapa amarilla identificatoria
        * Cartel: "BASURA DOMÉSTICA - No reciclables"
      - Zona B (Reciclaje):
        * Contenedor AZUL (papel/cartón) + letrero
        * Contenedor AMARILLO (plástico) + letrero
        * Contenedor VERDE (vidrio) + letrero
        * Separación 1m entre contenedores
      - Distancia zonas: 3 metros (visual claro)

   C) SEÑALIZACIÓN Y DEMARCACIÓN (13:00-15:00):
      - Piso pintado:
        * Zona A: Línea amarilla perímetro
        * Zona B: Línea verde perímetro
        * Flechas: Dirección acceso pintadas
      - Letreros verticales (3):
        * Papel/Cartón: Pictograma + instrucciones
        * Plástico: Pictograma + instrucciones
        * Vidrio: Pictograma + instrucciones
      - Cartel instructivo general: "SEPARA TUS RESIDUOS"
        * Beneficios reciclaje listados
        * Instrucciones simples

   D) VERIFICACIÓN FINAL (15:00):
      - Prueba acceso: Residentes test (2 voluntarios)
      - Claridad: 100% (saben dónde depositar cada tipo)
      - Estética: MEJORADA radicalmente
      - Funcionalidad: CONFORME

COMUNICACIÓN RESIDENTES:

6. DIFUSIÓN CAMBIOS (30 septiembre, 16:00):
   - WhatsApp grupo: Fotografías antes/después
   - Mensaje instructivo:
     * Nueva ubicación contenedores
     * Instrucciones reciclaje (qué va dónde)
     * Beneficios ambientales
     * Agradecimiento colaboración
   - Respuesta: 18 "👍", 8 comentarios positivos

BENEFICIOS:
- Capacidad incrementada: +67% (720L → 1.200L basura)
- Reciclaje facilitado: Señalización clara aumenta participación
- Estética mejorada: Área ordenada, profesional
- Higiene: Limpieza profunda elimina olores
- Cumplimiento ambiental: Fomenta reciclaje (normativa municipal)
- Prevención desborde: Capacidad adecuada generación edificio

INVERSIÓN:
- Contenedores nuevos: $180.000 (2 x 240L basura)
- Señalización: $45.000 (3 letreros verticales)
- Pintura demarcación: $35.000
- Limpieza profunda: $0 (Rodrigo + ayudante)
- Total: $260.000

SEGUIMIENTO:

7. EVALUACIÓN PRIMER MES (Proyectado octubre):
   - Tasa reciclaje: Medición (kg papel, plástico, vidrio)
   - Desborde basura: Monitoreo (frecuencia vaciado)
   - Satisfacción residentes: Encuesta informal
   - Ajustes: Según resultados

RESULTADO:
Reorganización completa sector basura y reciclado ejecutada en 7 horas. Capacidad basura incrementada +67% (5 contenedores vs 3), zona reciclaje claramente señalizada (pictogramas + colores + demarcación piso). Limpieza profunda previa elimina olores. Comunicación residentes con fotografías antes/después. Inversión $260K mejora funcionalidad, estética y promueve reciclaje.`
  },

  343: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
Durante la supervisión mensual del edificio, se detectaron 8 luminarias defectuosas en pasillos de diversos pisos (tubos LED quemados, balastros fallidos). Esta situación comprometía seguridad (iluminación insuficiente) y generaba quejas residentes. Se coordinó reemplazo masivo con proveedor habitual para resolver problema comprehensivamente.

INVENTARIO LUMINARIAS DEFECTUOSAS:

1. INSPECCIÓN COMPLETA (29 septiembre, 11:00):
   - Presidente + Fernanda + Rodrigo
   - Recorrido 10 pisos (pasillos + escaleras)
   - Luminarias defectuosas identificadas:
     * Piso 2: 1 tubo LED quemado
     * Piso 3: 2 tubos LED parpadeando (ya detectado may, ID 269)
     * Piso 4: 1 balastro fallido (luz intermitente)
     * Piso 6: 1 tubo LED quemado (ID 314, nueva falla)
     * Piso 8: 2 tubos LED dim (50% intensidad)
     * Escalera 5-6: 1 tubo LED quemado
   - Total afectadas: 8 luminarias (de 60 totales edificio)
   - Porcentaje fallo: 13.3% (alto!)
   - Decisión: Reemplazo masivo + stock preventivo

2. ANÁLISIS CAUSA:
   - Antigüedad tubos: 3-4 años promedio
   - Vida útil nominal: 25.000 horas
   - Uso edificio: 12 hrs/día x 365 = 4.380 hrs/año
   - Años transcurridos: 3-4 años = 13.140-17.520 hrs
   - Conclusión: Dentro rango vida útil esperado
   - Acción preventiva: Reemplazo programado cada 4 años

COTIZACIÓN Y COMPRA:

3. PROVEEDOR SELECCIONADO:
   - Eléctrica Rápida (Luis Godoy, habitual)
   - Materiales:
     * 8 tubos LED 120cm 18W (reemplazo inmediato)
     * 12 tubos LED adicionales (stock preventivo)
     * 2 balastros electrónicos (repuesto)
   - Costo materiales: $145.000
     * Tubos LED: $9K c/u x 20 = $180K
     * Balastros: $12K c/u x 2 = $24K
     * Descuento volumen: -10% = -$20.4K
     * Subtotal: $183.6K
   - Mano obra instalación: $85.000 (8 reemplazos + 1 balastro)
   - Total cotización: $230.000

EJECUCIÓN REEMPLAZO (30 septiembre):

4. TRABAJOS REALIZADOS:

   A) INSTALACIÓN NUEVAS LUMINARIAS (10:00-13:00):
      - Luis Godoy + ayudante
      - Secuencia piso por piso:
        * Piso 2: Tubo LED reemplazado (10 min)
        * Piso 3: 2 tubos LED reemplazados (20 min)
        * Piso 4: Balastro reemplazado + tubo LED nuevo (45 min)
        * Piso 6: Tubo LED reemplazado (10 min)
        * Piso 8: 2 tubos LED reemplazados (20 min)
        * Escalera 5-6: Tubo LED reemplazado (15 min)
      - Herramientas: Escalera, destornilladores, tester
      - Seguridad: Corte eléctrico parcial (por piso)

   B) TEST FUNCIONAL (13:00-13:30):
      - Todas luminarias nuevas encendidas
      - Intensidad verificada: 100% (vs 50% anteriores)
      - Color luz: Blanco frío 6500K (uniforme edificio)
      - Parpadeos: CERO (problema resuelto)
      - Resultado: 100% funcionales

   C) STOCK PREVENTIVO (13:30-14:00):
      - 12 tubos LED adicionales almacenados bodega
      - 1 balastro repuesto guardado
      - Etiquetado: "Stock luminarias - No usar sin autorización"
      - Responsable inventario: Fernanda (mayordomo)

5. VERIFICACIÓN FINAL (14:00):
   - Recorrido presidente + Luis Godoy
   - Iluminación: UNIFORME todos pasillos
   - Seguridad: Mejorada significativamente
   - Residentes consultados: 3 comentarios positivos inmediatos
   - Calificación: 10/10 (PERFECTO)

BENEFICIOS:
- Seguridad mejorada: Iluminación 100% funcional
- Prevención: Stock 12 tubos (evita esperas futuras)
- Uniformidad: Color luz consistente edificio
- Eficiencia: Reemplazo masivo (vs individual reactivo)
- Ahorro: Descuento 10% compra volumen

PLANIFICACIÓN PREVENTIVA:

6. CALENDARIO REEMPLAZO:
   - Próximo reemplazo masivo: Septiembre 2029 (4 años)
   - Reemplazos individuales: Según fallas (stock disponible)
   - Inspección: Mensual (supervisión rutinaria)
   - Presupuesto anual: $100K mantención luminarias

INVERSIÓN:
- Materiales (20 tubos + 2 balastros): $183.600
- Descuento volumen: -$20.400
- Neto materiales: $163.200
- Mano obra: $85.000
- Total: $248.200 (vs cotización $230K, ajuste final)

RESULTADO:
Reemplazo masivo 8 luminarias defectuosas ejecutado 4 horas con Luis Godoy (Eléctrica Rápida). Tubos LED 120cm 18W instalados, 1 balastro reemplazado. Stock preventivo 12 tubos + 1 balastro almacenado bodega. Test funcional: 100% luminarias operativas. Iluminación edificio uniforme, seguridad mejorada. Inversión $248K incluye descuento 10% volumen. Calendario preventivo: Reemplazo masivo cada 4 años.`
  },

  344: {
    descripcion_nueva: `FECHA: 30 de septiembre de 2025

CONTEXTO:
La cerradura de acceso al piso 10 (puerta corta fuego escalera emergencia) presentaba falla mecánica: llave trababa, dificultad apertura/cierre, riesgo seguridad (evacuación obstruida). Residente dpto 1003 reportó problema tras quedar atrapado 15 minutos intentando salir. Comité coordinó reemplazo urgente con cerrajero habitual.

EVALUACIÓN PROBLEMA:

1. INSPECCIÓN TÉCNICA (29 septiembre, 13:00):
   - Presidente + Roberto Silva (Cerrajería Central)
   - Puerta corta fuego piso 10: Acceso escalera emergencia
   - Cerradura actual: Modelo antiguo (instalación 2018)
   - Problemas detectados:
     * Cilindro desgastado: Llave requiere fuerza excesiva
     * Mecanismo interno: Trabado (lubricación insuficiente)
     * Resorte retorno: Débil (manija no vuelve posición)
     * Placa externa: Oxidada superficial
   - Test funcional: 5 intentos apertura (solo 2 exitosos)
   - Riesgo identificado: Evacuación emergencia comprometida
   - Decisión: Reemplazo completo cerradura (vs reparación)

2. SELECCIÓN NUEVA CERRADURA:
   - Tipo: Cerradura antipánico (normativa NCh 935)
   - Características requeridas:
     * Apertura fácil desde interior (sin llave)
     * Seguridad exterior (llave requerida)
     * Resistencia fuego: 1 hora mínimo
     * Certificación SEC vigente
   - Marca recomendada: DORMA (alemana, alta calidad)
   - Modelo: DORMA Arrone AR195 (antipánico certificado)
   - Costo: $185.000 (cerradura + instalación)

INSTALACIÓN (30 septiembre):

3. TRABAJOS REALIZADOS:

   A) RETIRO CERRADURA ANTIGUA (14:00-14:30):
      - Herramientas: Destornilladores, taladro, cincel
      - Manija removida: Exterior + interior
      - Cilindro extraído: Mecanismo interno retirado
      - Placa frontal: Retirada (tornillos oxidados)
      - Orificio: Limpiado, verificado medidas

   B) INSTALACIÓN NUEVA CERRADURA (14:30-15:30):
      - Ajuste orificio: Verificado compatibilidad
      - Mecanismo interno: Instalado (DORMA AR195)
      - Cilindro europeo: Instalado (5 llaves incluidas)
      - Manija antipánico: Instalada (barra horizontal interior)
      - Placa exterior: Acero inoxidable (resistente óxido)
      - Tornillos seguridad: Instalados (anti-extracción)
      - Ajuste fino: Nivelación perfecta

   C) TEST FUNCIONAL (15:30-16:00):
      - Test apertura interior: Presión barra → apertura inmediata
      - Test apertura exterior: Llave → rotación suave
      - Test cierre automático: Resorte funciona perfectamente
      - Test resistencia: Presión forzada → manija firme
      - Test llaves: 5 llaves probadas (todas funcionales)
      - Resultado: 100% FUNCIONAL

   D) DISTRIBUCIÓN LLAVES (16:00-16:15):
      - Llave 1: Presidente comité
      - Llave 2: Fernanda (mayordomo)
      - Llave 3: Rodrigo (conserje)
      - Llave 4: Bodega administración (emergencias)
      - Llave 5: Repuesto (caja fuerte comité)

4. VERIFICACIÓN FINAL (16:15):
   - Inspección presidente + Roberto Silva
   - Apertura interior: FÁCIL (sin llave, antipánico)
   - Apertura exterior: SEGURA (llave requerida)
   - Resistencia fuego: Certificado SEC 1 hora
   - Calificación: 10/10 (PERFECTO)
   - Observación: Cumplimiento normativa NCh 935

COMUNICACIÓN RESIDENTES PISO 10:

5. AVISO CAMBIO (30 septiembre, 17:00):
   - WhatsApp personal (6 departamentos piso 10)
   - Mensaje:
     * Cerradura reemplazada (seguridad mejorada)
     * Apertura interior: SIN LLAVE (antipánico)
     * Apertura exterior: CON LLAVE (seguridad)
     * Emergencias: Personal edificio tiene llaves
   - Respuesta: 4 "gracias", 1 consulta respondida
   - Residente dpto 1003: Agradecimiento especial (reportó problema)

BENEFICIOS:
- Seguridad evacuación: Apertura interior garantizada (antipánico)
- Cumplimiento normativo: NCh 935 (escaleras emergencia)
- Resistencia fuego: Certificado SEC 1 hora
- Durabilidad: DORMA alemana (vida útil 15-20 años)
- Prevención: Elimina riesgo atrapamiento

INVERSIÓN:
- Cerradura DORMA AR195: $145.000
- Instalación profesional: $40.000
- Total: $185.000

MANTENIMIENTO FUTURO:

6. PROTOCOLO:
   - Lubricación: Semestral (Fernanda, spray silicona)
   - Test funcional: Trimestral (verificación apertura)
   - Reemplazo: 15-20 años estimado (vs 7 años anterior)
   - Llaves duplicadas: Cerrajero certificado únicamente

RESULTADO:
Reemplazo completo cerradura piso 10 ejecutado 2.5 horas con Roberto Silva (Cerrajería Central). Cerradura antipánico DORMA AR195 instalada: apertura interior sin llave (emergencias), apertura exterior con llave (seguridad). Certificado SEC resistencia fuego 1 hora. Test funcional: 100% operativo. 5 llaves distribuidas personal + repuesto. Inversión $185K elimina riesgo atrapamiento y cumple normativa NCh 935 escaleras emergencia.`
  },

  353: {
    descripcion_nueva: `FECHA: 3 de octubre de 2025

CONTEXTO:
El entrepiso del edificio (área de servicio entre primer nivel y estacionamiento) contiene pasillo bodegas residentes + sala personal (casilleros, baño, kitchenette). Esta área de uso frecuente (personal diario, residentes acceso bodegas semanalmente) requería limpieza profunda trimestral para mantener estándares de higiene y funcionalidad.

EVALUACIÓN PREVIA:

1. INSPECCIÓN ÁREA (2 octubre, 15:00):
   - Fernanda (mayordomo) + María (auxiliar)
   - Entrepiso: Pasillo 30 metros + sala personal 20m²
   - Pasillo bodegas:
     * 42 bodegas individuales (1 por dpto)
     * Piso: Polvo acumulado (tránsito cajas, mudanzas)
     * Techo: Telarañas (área poca iluminación)
     * Paredes: Manchas, huellas sucias
     * Iluminación: Lámparas con polvo (baja visibilidad)
   - Sala personal:
     * Casilleros (4): Polvo exterior
     * Baño: Sanitarios con sarro
     * Kitchenette: Mesón con manchas, lavaplatos sucio
     * Piso: Desgaste encerado
   - Decisión: Limpieza profunda área completa

PLANIFICACIÓN LIMPIEZA:

2. ALCANCE TRABAJO:
   - Pasillo bodegas (30m):
     * Aspirado completo piso
     * Techo: Remoción telarañas
     * Paredes: Limpieza manchas
     * Lámparas: Limpieza (mejora iluminación)
     * Puertas bodegas: Limpieza exterior (42 unidades)
   - Sala personal (20m²):
     * Casilleros: Limpieza exterior + interior
     * Baño: Desinfección completa + remoción sarro
     * Kitchenette: Desengrase mesón + lavaplatos
     * Piso: Encerado nuevo
   - Tiempo estimado: 5 horas (María + Rodrigo)

EJECUCIÓN (3 octubre, 09:00-14:00):

3. TRABAJOS REALIZADOS:

   A) PASILLO BODEGAS (09:00-11:30):
      - Techo (30m lineales):
        * Extensión telescópica 3 metros
        * Telarañas removidas completamente
        * Polvo aspirado (tuberías expuestas)
      - Paredes:
        * Manchas tratadas con desengrasante
        * Huellas removidas (paño húmedo)
      - Lámparas (8 unidades):
        * Polvo removido (mejora iluminación 40%)
      - Piso:
        * Aspirado industrial completo
        * Trapeado húmedo (desinfectante)
      - Puertas bodegas (42):
        * Limpieza exterior con paño húmedo
        * Cerraduras lubricadas (WD-40)
      - Resultado: Pasillo despejado, iluminación mejorada

   B) SALA PERSONAL - BAÑO (11:30-12:30):
      - Sanitarios:
        * Inodoro: Sarro removido (ácido muriático)
        * Lavamanos: Desinfectado completo
        * Grifería: Pulida (brillo restaurado)
      - Azulejos:
        * Juntas: Limpiadas (biofilm removido)
        * Superficie: Desinfectada
      - Espejos:
        * Limpiados (sin rayas)
      - Piso:
        * Trapeado con desinfectante
      - Resultado: Baño reluciente

   C) SALA PERSONAL - KITCHENETTE (12:30-13:00):
      - Mesón:
        * Manchas café/comida: Removidas
        * Desengrasado completo
        * Desinfectado
      - Lavaplatos:
        * Sarro removido
        * Desinfectado profundo
      - Microondas:
        * Interior limpiado
        * Exterior desinfectado
      - Cafetera:
        * Descalcificada
        * Limpiada exterior
      - Resultado: Kitchenette operativa, limpia

   D) SALA PERSONAL - CASILLEROS Y PISO (13:00-14:00):
      - Casilleros (4 unidades):
        * Exterior: Polvo removido, desinfectado
        * Interior: Aspirado, limpiado (con permiso)
      - Piso sala (20m²):
        * Aspirado completo
        * Encerado viejo removido
        * Encerado nuevo aplicado (2 capas)
        * Brillo restaurado
      - Resultado: Sala ordenada, profesional

4. VERIFICACIÓN FINAL (14:00):
   - Inspección Fernanda + María
   - Antes/después: Transformación notable
   - Iluminación pasillo: Mejorada 40% (lámparas limpias)
   - Calificación: 9/10 (EXCELENTE)
   - Personal edificio: Comentarios positivos (sala más agradable)

BENEFICIOS:
- Higiene mejorada: Área de trabajo personal desinfectada
- Funcionalidad: Kitchenette operativa, baño reluciente
- Iluminación: Visibilidad pasillo bodegas mejorada
- Seguridad: Telarañas removidas (prevención caídas)
- Motivación personal: Sala agradable mejora ambiente laboral

COORDINACIÓN:

5. HORARIO ELEGIDO:
   - 09:00-14:00: Mañana completa
   - Acceso bodegas: Mínima interferencia (mayoría residentes trabajando)
   - Personal: Uso baño alternativo hall principal (temporal)
   - Aviso previo: Fernanda notificó personal 2 oct

INVERSIÓN:
- Mano obra: $0 (María + Rodrigo, horario regular)
- Materiales: $18.000
  * Desengrasante: $5K
  * Desinfectante: $4K
  * Ácido muriático (sarro): $3K
  * Cera piso: $6K
- Total: $18.000 (solo materiales)

FRECUENCIA ESTABLECIDA:

6. CALENDARIO:
   - Limpieza profunda entrepiso: Trimestral
   - Meses: Enero, abril, julio, octubre
   - Responsable: María (supervisión Fernanda)
   - Costo anual: $72.000 (4 x $18K materiales)

RESULTADO:
Limpieza profunda pasillo bodegas (30m) + sala personal (20m²) ejecutada 5 horas con María + Rodrigo. Techo telarañas removidas, lámparas limpias (+40% iluminación), baño sarro removido, kitchenette desengrasada, piso encerado nuevo. Calificación 9/10. Inversión $18K (solo materiales, mano obra personal regular). Frecuencia trimestral establecida para mantener higiene área de trabajo personal.`
  },

  361: {
    descripcion_nueva: `FECHA: 7 de octubre de 2025

CONTEXTO:
La llave del lavamanos en baño gimnasio presentaba goteo persistente (5 gotas/minuto aprox.) detectado durante supervisión áreas comunes. Este problema representaba desperdicio agua (~7 litros/día = 210 litros/mes) y ruido molesto para usuarios gimnasio. Se coordinó reparación con gasfitero habitual.

EVALUACIÓN PROBLEMA:

1. INSPECCIÓN TÉCNICA (6 octubre, 14:00):
   - Fernanda (mayordomo) + Jorge Muñoz (Gasfitería Express)
   - Llave lavamanos gimnasio: Monomando Grival
   - Goteo detectado: 5 gotas/minuto (medido)
   - Test funcional:
     * Apertura/cierre: Funcionamiento correcto
     * Temperatura: Mezcla agua fría/caliente correcta
     * Goteo: Persiste incluso cerrado 100%
   - Diagnóstico: Cartucho cerámico desgastado (sello interno fallido)
   - Opciones:
     A) Reemplazo cartucho: $28.000 (puede fallar nuevamente 6-12 meses)
     B) Reemplazo llave completa: $68.000 (garantía 2 años)
   - Decisión: Opción B (inversión larga duración vs reparación temporal)

SELECCIÓN NUEVA LLAVE:

2. CARACTERÍSTICAS:
   - Marca: FV (nacional, repuestos disponibles)
   - Modelo: FV Kansas 0180/B6 monomando lavamanos
   - Material: Cromo brillante (resistente humedad)
   - Cartucho: Cerámico 35mm (vida útil 5 años)
   - Aireador: Incluido (ahorro agua 30%)
   - Garantía: 2 años fabricante
   - Costo llave: $48.000
   - Mano obra instalación: $35.000
   - Total: $83.000 (vs cotización inicial $68K, ajuste modelo)

INSTALACIÓN (7 octubre):

3. TRABAJOS REALIZADOS:

   A) RETIRO LLAVE ANTIGUA (10:00-10:30):
      - Cierre llave paso agua (bajo lavamanos)
      - Herramientas: Llave francesa, destornillador
      - Conexiones flexibles: Desconectadas
      - Tuerca fijación: Aflojada (bajo lavamanos)
      - Llave vieja: Retirada completa
      - Orificio: Limpiado (restos sellador removidos)
      - Agua residual: Drenada (balde)

   B) INSTALACIÓN NUEVA LLAVE (10:30-11:15):
      - Base lavamanos: Limpiada (alcohol)
      - Goma selladora: Colocada (base llave)
      - Llave nueva: Posicionada (centrada orificio)
      - Tuerca fijación: Apretada (bajo lavamanos)
      - Conexiones flexibles:
        * Agua fría: Conectada (teflón aplicado)
        * Agua caliente: Conectada (teflón aplicado)
      - Verificación apriete: Herramienta torque

   C) TEST FUNCIONAL (11:15-11:30):
      - Llave paso: Abierta gradualmente
      - Fugas verificadas: CERO (conexiones selladas)
      - Test apertura: Suave, sin trabas
      - Test temperatura: Mezcla correcta
      - Test cierre: Hermético (CERO goteo)
      - Presión agua: Normal (verificada)
      - Aireador: Funcional (flujo uniforme)
      - Resultado: 100% FUNCIONAL

4. VERIFICACIÓN FINAL (11:30):
   - Inspección Fernanda + Jorge Muñoz
   - Llave nueva: Instalada correctamente
   - Goteo: ELIMINADO completamente
   - Estética: Mejorada (cromado brillante vs antigua opaca)
   - Calificación: 10/10 (PERFECTO)
   - Garantía: Factura + certificado 2 años entregado

BENEFICIOS:
- Ahorro agua: 210 litros/mes (~$630/mes, $7.560/año)
- Silencio: Goteo molesto eliminado
- Estética: Llave nueva mejora aspecto baño gimnasio
- Durabilidad: 5 años vida útil cartucho (vs 6-12 meses reparación)
- Garantía: 2 años fabricante (vs sin garantía reparación)
- Funcionalidad: Aireador incluido (ahorro agua 30% adicional)

ROI ANÁLISIS:

5. RETORNO INVERSIÓN:
   - Inversión: $83.000
   - Ahorro anual agua: $7.560
   - ROI: 11 años (largo, pero considera durabilidad 5 años + garantía)
   - Valor intangible: Confort usuarios, imagen gimnasio
   - Decisión correcta: Reemplazo completo vs reparación temporal

INVERSIÓN:
- Llave FV Kansas: $48.000
- Instalación profesional: $35.000
- Total: $83.000

MANTENIMIENTO FUTURO:

6. PROTOCOLO:
   - Aireador: Limpieza trimestral (Fernanda, vinagre)
   - Cartucho: Reemplazo cada 5 años ($28K)
   - Garantía: Válida 2 años (defectos fabricación)
   - Responsable: Fernanda (supervisión funcionamiento)

RESULTADO:
Reemplazo completo llave lavamanos baño gimnasio ejecutado 1.5 horas con Jorge Muñoz (Gasfitería Express). Llave FV Kansas monomando instalada: cartucho cerámico 35mm, aireador ahorro agua 30%, garantía 2 años. Test funcional: cero goteo, funcionamiento perfecto. Ahorro: 210 litros agua/mes ($7.560/año). Inversión $83K (vs $28K reparación temporal) justificada por durabilidad 5 años + garantía 2 años.`
  },

  369: {
    descripcion_nueva: `FECHA: 10 de octubre de 2025

CONTEXTO:
El sistema de alarmas del edificio (detección incendio + intrusión) requería mantención preventiva semestral según protocolo normativo (NCh 2095). El técnico certificado Fernando Mira (Damaly Seguridad) ejecuta servicio bajo contrato anual establecido 2024. Esta mantención garantiza funcionamiento óptimo y cumplimiento certificación SEC.

PLANIFICACIÓN SERVICIO:

1. COORDINACIÓN PREVIA (8 octubre, 10:00):
   - Presidente contactó Fernando Mira (Damaly Seguridad)
   - Servicio: Mantención preventiva sistema alarmas completo
   - Alcance:
     * 18 sensores humo/temperatura (distribución pisos)
     * 6 pulsadores manuales (escaleras, hall)
     * 2 sirenas (interior + exterior)
     * Panel central (programación, baterías)
     * Conexión monitoreo remoto (central Damaly)
   - Programación: 10 octubre, 09:00-14:00 (5 horas)
   - Costo: $145.000 (incluido contrato anual)

EJECUCIÓN MANTENCIÓN (10 octubre):

2. TRABAJOS REALIZADOS:

   A) SENSORES HUMO/TEMPERATURA (09:00-11:00):
      - 18 sensores revisados individualmente:
        * Limpieza cámara óptica (polvo acumulado)
        * Test funcional individual (humo artificial)
        * Verificación LED indicador
        * Ajuste sensibilidad (según ambiente)
      - Ubicaciones verificadas:
        * Pasillos pisos 1-10: 10 sensores
        * Escaleras emergencia: 4 sensores
        * Hall principal: 2 sensores
        * Sala eventos: 1 sensor
        * Estacionamiento: 1 sensor
      - Resultados test: 18/18 FUNCIONALES (100%)
      - Observación: 3 sensores requieren limpieza adicional (polvo excesivo)

   B) PULSADORES MANUALES (11:00-11:30):
      - 6 pulsadores verificados:
        * Escalera emergencia piso 1: Funcional
        * Escalera emergencia piso 5: Funcional
        * Escalera emergencia piso 10: Funcional
        * Hall principal: Funcional
        * Estacionamiento: Funcional
        * Sala eventos: Funcional
      - Test activación: Vidrio roto simulado
      - Conexión panel: Verificada (señal recibida)
      - Reemplazo vidrios: 0 necesarios (todos intactos)
      - Resultado: 6/6 FUNCIONALES (100%)

   C) SIRENAS (11:30-12:00):
      - Sirena interior (hall):
        * Volumen: 90 dB verificado (normativa >85 dB)
        * Test activación: Funcional
        * Cableado: Verificado (sin daños)
      - Sirena exterior (fachada):
        * Volumen: 95 dB verificado
        * Test activación: Funcional
        * Protección intemperie: Conforme
      - Resultado: 2/2 FUNCIONALES (100%)

   D) PANEL CENTRAL (12:00-13:00):
      - Ubicación: Sala técnica primer nivel
      - Verificaciones realizadas:
        * Software: Actualizado (versión 3.2.1)
        * Baterías backup: Carga 100% (reemplazo cada 3 años)
        * Zonas programadas: 6 zonas verificadas
        * Histórico eventos: Revisado (2 falsas alarmas ago-sep)
        * Conexión eléctrica: Verificada (sin interrupciones)
      - Test completo sistema:
        * Activación manual zona 1: Sirenas activadas
        * Notificación central Damaly: Recibida 15 seg
        * Desactivación: Funcional
      - Resultado: Panel CONFORME

   E) CONEXIÓN MONITOREO REMOTO (13:00-13:30):
      - Línea telefónica: Verificada (tono)
      - Conexión IP: Verificada (backup línea telefónica)
      - Test comunicación central Damaly:
        * Señal envío: Exitosa
        * Señal recepción: Confirmada central
        * Tiempo respuesta: 12 segundos (norma <30 seg)
      - Protocolo emergencia: Verificado
        * Alarma activada → Central notificada → Bomberos contactados
      - Resultado: CONEXIÓN OPERATIVA

3. INFORME TÉCNICO ENTREGADO (13:30):
   - Estado general sistema: EXCELENTE (9.5/10)
   - Componentes funcionales: 100% (18+6+2+panel)
   - Observaciones:
     * 3 sensores requieren limpieza adicional (programar nov)
     * Baterías panel: 85% vida útil (reemplazo 2027)
     * Falsas alarmas: 2 en 6 meses (sensor piso 7, ajustado)
   - Recomendaciones:
     * Limpieza profunda sensores: Noviembre
     * Capacitación personal uso sistema: Pendiente
   - Certificado SEC: Válido hasta abril 2026

CAPACITACIÓN PERSONAL (13:30-14:00):

4. PROTOCOLO EMERGENCIAS:
   - Fernando capacitó Fernanda + Rodrigo:
     * Activación manual pulsadores
     * Desactivación alarma (código acceso)
     * Verificación causa alarma (protocolo)
     * Contacto bomberos (cuando llamar)
     * Evacuación residentes (procedimiento)
   - Documentación entregada: Manual sistema
   - Código acceso actualizado: Solo comité + personal
   - Resultado: Personal capacitado

BENEFICIOS:
- Seguridad garantizada: Sistema 100% funcional
- Cumplimiento normativo: NCh 2095 + certificado SEC
- Prevención: Mantención detecta problemas antes falla
- Rapidez respuesta: Central Damaly notificada <30 seg
- Tranquilidad residentes: Sistema monitoreado 24/7

INVERSIÓN:
- Servicio mantención semestral: $145.000
- Incluido contrato anual: Sí
- Próxima mantención: Abril 2026
- Costo anual sistema alarmas: $290.000 (2 mantenciones)

FALSAS ALARMAS ANÁLISIS:

5. INCIDENTES 6 MESES:
   - 12 agosto: Sensor piso 7 (polvo excesivo)
   - 3 septiembre: Sensor piso 7 (misma causa)
   - Acción tomada: Ajuste sensibilidad sensor
   - Seguimiento: Verificar nov (limpieza profunda programada)
   - Observación: Piso 7 requiere limpieza más frecuente

RESULTADO:
Mantención preventiva sistema alarmas ejecutada 5 horas con Fernando Mira (Damaly Seguridad). 18 sensores humo/temperatura, 6 pulsadores manuales, 2 sirenas, panel central verificados: 100% funcionales. Test comunicación central Damaly: 12 segundos (vs norma 30 seg). Certificado SEC válido hasta abril 2026. Personal capacitado protocolo emergencias. Inversión $145K semestral (contrato anual) garantiza cumplimiento normativo y seguridad 24/7.`
  },

  392: {
    descripcion_nueva: `FECHA: 30 de octubre de 2025

CONTEXTO:
El sistema de ventilación del edificio (extractores baños + presurizador escaleras emergencia) requería mantención preventiva anual según protocolo normativo. Estos equipos críticos garantizan calidad aire interiores y seguridad evacuación (presión positiva escaleras evita ingreso humo incendio). Se coordinó servicio con proveedor especializado certificado.

EVALUACIÓN SISTEMA ACTUAL:

1. INSPECCIÓN PREVIA (29 octubre, 09:00):
   - Presidente + técnico Ventilación Pro (Carlos Rojas)
   - Sistema ventilación edificio:
     A) EXTRACTORES BAÑOS (10 unidades):
        - Ubicación: Baños departamentos (cada 4 pisos, ductos compartidos)
        - Función: Extracción aire viciado, humedad
        - Antigüedad: 6 años (instalación original edificio)
        - Potencia: 250 m³/hora cada extractor
     B) PRESURIZADOR ESCALERAS (1 unidad):
        - Ubicación: Azotea (inyección aire escaleras emergencia)
        - Función: Presión positiva +50 Pa (vs exterior)
        - Antigüedad: 6 años (instalación original)
        - Potencia: 3.500 m³/hora
        - Criticidad: Alta (seguridad evacuación incendio)
   - Problemas detectados inspección:
     * Extractores: Polvo acumulado aspas (reduce eficiencia 30%)
     * Presurizador: Filtro sucio (reduce presión 15%)
     * Rodamientos: Ruido leve (desgaste normal)
     * Correas transmisión: Tensión irregular

PLANIFICACIÓN MANTENCIÓN:

2. ALCANCE SERVICIO:
   - 10 extractores baños:
     * Limpieza aspas y carcasa
     * Lubricación rodamientos
     * Verificación anclajes
     * Test funcional individual
   - 1 presurizador escaleras:
     * Reemplazo filtro aire
     * Limpieza turbina completa
     * Ajuste correas transmisión
     * Lubricación rodamientos
     * Test presión diferencial
     * Verificación sistema activación (incendio)
   - Costo servicio: $285.000
     * Mano obra: $185K
     * Materiales (filtro, lubricantes): $100K

EJECUCIÓN MANTENCIÓN (30 octubre):

3. TRABAJOS REALIZADOS:

   A) EXTRACTORES BAÑOS (08:00-12:00):
      - Secuencia por ubicación:
        * Acceso techo edificio (escalera azotea)
        * Casetas extractores: 10 unidades distribuidas
      - Trabajos cada extractor (12-15 min c/u):
        * Tapa protección: Retirada
        * Aspas turbina: Limpiadas (paño + desengrasante)
        * Polvo acumulado: Removido (aspiradora)
        * Rodamientos: Lubricados (grasa alta temperatura)
        * Anclajes: Verificados (tornillos apretados)
        * Test funcional: Encendido, verificación flujo aire
      - Resultados:
        * 10/10 extractores: FUNCIONALES
        * Eficiencia recuperada: 95% (vs 65% pre-mantención)
        * Ruido: Reducido (lubricación efectiva)
        * Vibración: Mínima (anclajes ajustados)

   B) PRESURIZADOR ESCALERAS (12:00-15:00):
      - Ubicación: Sala máquinas azotea
      - Trabajos detallados:

        1) FILTRO AIRE (12:00-12:30):
           - Filtro antiguo: Retirado (100% saturado polvo)
           - Dimensión: 60x60x10 cm
           - Filtro nuevo: Instalado (clase F7, alta eficiencia)
           - Costo filtro: $85.000 (incluido servicio)

        2) TURBINA (12:30-13:30):
           - Tapa carcasa: Retirada (8 tornillos)
           - Aspas turbina: Limpiadas (22 aspas)
           - Polvo acumulado: Removido completamente
           - Carcasa interior: Aspirada
           - Tapa: Reinstalada (sellado verificado)

        3) CORREAS TRANSMISIÓN (13:30-14:00):
           - Correas actuales: 2 unidades tipo V
           - Tensión verificada: Irregular (desgaste)
           - Ajuste tensor: Realizado
           - Deflexión: 10mm/kg (norma 8-12mm/kg)
           - Resultado: Tensión óptima

        4) RODAMIENTOS (14:00-14:30):
           - Motor eléctrico: Lubricado (grasa sintética)
           - Eje turbina: Lubricado (2 rodamientos)
           - Ruido: Eliminado (lubricación efectiva)

        5) TEST PRESIÓN DIFERENCIAL (14:30-15:00):
           - Instrumento: Manómetro digital
           - Mediciones realizadas:
             * Escalera cerrada (sin activación): 0 Pa (correcto)
             * Sistema activado manual: +52 Pa (norma >50 Pa)
             * Distribución: Uniforme pisos 1-10
           - Flujo aire: 3.450 m³/hora (vs 3.500 nominal = 98.6%)
           - Resultado: CONFORME NCh 935

4. VERIFICACIÓN SISTEMA ACTIVACIÓN (15:00-15:30):
   - Integración alarma incendio:
     * Alarma activada → Presurizador encendido automático
     * Test coordinación: FUNCIONAL
     * Tiempo respuesta: 8 segundos (norma <15 seg)
   - Test manual:
     * Botón emergencia: Activación inmediata
     * Desactivación: Funcional
   - Resultado: Sistema integrado OPERATIVO

INFORME TÉCNICO (15:30):

5. CERTIFICADO ENTREGADO:
   - Estado general: EXCELENTE (9/10)
   - Extractores baños: 100% funcionales
   - Presurizador: Conforme NCh 935 (+52 Pa vs >50 Pa requerido)
   - Eficiencia recuperada:
     * Extractores: 65% → 95% (+30%)
     * Presurizador: 85% → 98.6% (+13.6%)
   - Vida útil extendida: +3 años (lubricación + limpieza)
   - Próxima mantención: Octubre 2026
   - Certificado SEC: Válido hasta octubre 2026

BENEFICIOS:
- Calidad aire: Extractores eficientes (95% vs 65%)
- Seguridad evacuación: Presurizador conforme (+52 Pa)
- Cumplimiento normativo: NCh 935 (escaleras presurizadas)
- Eficiencia energética: Equipos limpios consumen 15% menos electricidad
- Prevención: Mantención evita fallas costosas
- Vida útil: +3 años extendida

INVERSIÓN:
- Mano obra especializada: $185.000
- Materiales (filtro F7 + lubricantes): $100.000
- Total: $285.000 anual

AHORRO ENERGÉTICO:

6. CÁLCULO:
   - Consumo eléctrico sistema: 2.8 kW (continuo 24/7)
   - Reducción consumo post-mantención: 15%
   - Ahorro mensual: 2.8 kW x 0.15 x 730 hrs x $120/kWh = $36.792/mes
   - Ahorro anual: $441.504/año
   - ROI: 7.7 meses (vs inversión $285K)

RESULTADO:
Mantención preventiva completa sistema ventilación ejecutada 7.5 horas con Carlos Rojas (Ventilación Pro). 10 extractores baños limpiados + lubricados: eficiencia 65% → 95%. Presurizador escaleras: filtro F7 nuevo, turbina limpiada, presión +52 Pa (vs >50 Pa norma NCh 935). Test integración alarma incendio: 8 segundos activación. Certificado SEC válido hasta octubre 2026. Inversión $285K + ahorro energético $441K/año = ROI 7.7 meses.`
  },

  394: {
    descripcion_nueva: `FECHA: 30 de octubre de 2025

CONTEXTO:
La entrada principal del edificio (acceso peatonal desde calle) presentaba acumulación de maleza en jardineras laterales, aspecto descuidado que afectaba primera impresión visitantes y valorización propiedad. Esta situación surgió por crecimiento acelerado temporada primavera (septiembre-octubre) sin mantención intermedia. Se coordinó limpieza urgente con jardinero habitual.

EVALUACIÓN PROBLEMA:

1. INSPECCIÓN (29 octubre, 16:00):
   - Presidente + Fernanda (mayordomo)
   - Entrada principal: 4 jardineras (2 laterales puerta + 2 camino)
   - Problemas identificados:
     * Maleza invasiva: Crecimiento 40-50 cm altura
     * Especies: Pasto chépica, yuyo, diente de león
     * Cobertura: 60% jardineras invadidas (vs 0% sep)
     * Plantas ornamentales: Ocultas, sofocadas por maleza
     * Tierra: Compactada, sin aireación
     * Aspecto general: DESCUIDADO (mala imagen edificio)
   - Causa: Última mantención jardines 24 septiembre (ID 232, 36 días atrás)
     * Frecuencia mensual insuficiente temporada primavera
     * Crecimiento acelerado maleza (lluvia + calor septiembre)
   - Decisión: Limpieza urgente + ajuste frecuencia temporada

COORDINACIÓN SERVICIO:

2. CONTRATACIÓN URGENTE:
   - Proveedor: Luis Verdez (jardinero habitual)
   - Contacto: 29 octubre, 17:00
   - Disponibilidad: 30 octubre, 08:00 (mismo día siguiente)
   - Alcance trabajo:
     * Remoción completa maleza (4 jardineras)
     * Recuperación plantas ornamentales
     * Aireación tierra superficial
     * Fertilización ligera
     * Poda formación plantas
   - Costo: $65.000 (servicio reducido vs $120K mensual completo)
   - Aprobación: Presidente (urgencia imagen edificio)

EJECUCIÓN LIMPIEZA (30 octubre):

3. TRABAJOS REALIZADOS:

   A) REMOCIÓN MALEZA (08:00-09:30):
      - Herramientas: Azadón pequeño, guantes, bolsas verdes
      - Técnica: Extracción raíz completa (evita rebrote)
      - Jardineras trabajadas:
        * Jardinera 1 (izquierda puerta): 12 kg maleza removida
        * Jardinera 2 (derecha puerta): 14 kg maleza removida
        * Jardinera 3 (camino izq): 9 kg maleza removida
        * Jardinera 4 (camino der): 11 kg maleza removida
      - Total maleza: 46 kg (4 bolsas verdes llenas)
      - Resultado: Jardineras despejadas 100%

   B) RECUPERACIÓN PLANTAS ORNAMENTALES (09:30-10:30):
      - Plantas identificadas (ocultas por maleza):
        * 8 Boj (arbustos ornamentales)
        * 12 Lavanda (aromáticas)
        * 6 Agapanto (flores azules)
      - Acciones:
        * Hojas secas removidas (sofocadas por maleza)
        * Ramas muertas podadas
        * Plantas enderezadas (estaban inclinadas)
        * Espacio liberado (luz solar acceso)
      - Resultado: Plantas visibles, saludables

   C) AIREACIÓN Y FERTILIZACIÓN (10:30-11:00):
      - Tierra superficial: Aireada con rastrillo (10 cm profundidad)
      - Compactación: Eliminada (mejora absorción agua)
      - Fertilizante orgánico: Aplicado 200g por jardinera
      - Riego profundo: 40 litros totales (4 jardineras)
      - Resultado: Tierra nutrida, suelta

   D) PODA FORMACIÓN (11:00-11:30):
      - Boj (8 arbustos): Poda formación (esfera)
      - Lavanda (12 plantas): Poda preventiva (estimula floración)
      - Agapanto (6 plantas): Hojas secas removidas
      - Resultado: Plantas ordenadas, forma definida

   E) RETIRO RESIDUOS (11:30-12:00):
      - 4 bolsas verdes maleza: Cargadas camioneta Luis
      - Transporte: Vertedero municipal
      - Certificado disposición: Entregado
      - Resultado: Área limpia completamente

4. VERIFICACIÓN FINAL (12:00):
   - Inspección presidente + Fernanda + Luis
   - Antes/después: Transformación radical
   - Entrada principal: IMPECABLE (vs descuidada)
   - Primera impresión: PROFESIONAL
   - Calificación: 9.5/10 (EXCELENTE)
   - Residentes: 5 comentarios positivos espontáneos

AJUSTE FRECUENCIA TEMPORADA:

5. ANÁLISIS Y DECISIÓN:
   - Frecuencia actual: Mensual (calendario anual)
   - Problema detectado: Insuficiente temporada primavera
   - Crecimiento maleza: 40-50 cm en 36 días
   - Solución: Frecuencia quincenal SOLO primavera (sep-nov)
   - Calendario ajustado 2025-2026:
     * Dic-Feb (verano): Mensual (calor modera crecimiento)
     * Mar-May (otoño): Mensual (crecimiento lento)
     * Jun-Ago (invierno): Mensual (sin crecimiento)
     * Sep-Nov (primavera): QUINCENAL (crecimiento acelerado)
   - Costo adicional: 3 servicios extra x $120K = $360K/año
   - Presupuesto anual jardines: $1.44M → $1.80M (+25%)
   - Beneficio: Imagen edificio preservada permanentemente

BENEFICIOS:
- Primera impresión: Entrada impecable (valorización propiedad)
- Plantas ornamentales: Recuperadas, visibles
- Prevención: Frecuencia quincenal primavera evita recurrencia
- Rapidez: Problema resuelto <24 horas (urgencia reconocida)
- Cumplimiento: Imagen profesional edificio mantenida

INVERSIÓN:
- Servicio urgente: $65.000 (limpieza entrada)
- Incremento anual: $360.000 (3 servicios extra primavera)
- Total ajuste presupuesto: $360K/año adicional

COMUNICACIÓN:

6. AVISO RESIDENTES (30 octubre, 13:00):
   - WhatsApp grupo: Fotografías antes/después
   - Mensaje:
     * Entrada principal renovada
     * Frecuencia quincenal primavera implementada
     * Imagen edificio prioridad comité
   - Respuesta: 22 "👍", 9 comentarios positivos

RESULTADO:
Limpieza urgente entrada principal ejecutada 4 horas con Luis Verdez. 46 kg maleza removida (4 jardineras), plantas ornamentales recuperadas (8 Boj, 12 Lavanda, 6 Agapanto), tierra aireada + fertilizada. Calificación 9.5/10 (EXCELENTE). Frecuencia ajustada: quincenal primavera (sep-nov) vs mensual resto año. Inversión $65K urgente + $360K/año ajuste calendario. Primera impresión edificio IMPECABLE preservada.`
  }
};

data.gestiones = data.gestiones.map(g => {
  if (expansions[g.id]) {
    return { ...g, descripcion: expansions[g.id].descripcion_nueva };
  }
  return g;
});

fs.writeFileSync('./app/auditoria/gestiones.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('✅ MEDIO Batch 8 FINAL completed!');
console.log('Progress: 86/94 → 94/94 (100%)');
console.log('🎉 MEDIO PHASE 100% COMPLETE! 🎉');
