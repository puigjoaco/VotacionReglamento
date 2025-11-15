-- ============================================
-- SEED DATA: Datos de prueba para desarrollo
-- Sistema de Comentarios - Reglamento Interno
-- ============================================

-- IMPORTANTE: Este archivo contiene datos de prueba para desarrollo
-- NO ejecutar en producción

-- ============================================
-- USUARIOS DE PRUEBA
-- ============================================

-- Departamento 101: Propietario y Residente
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('12345678K', 'García', '101', 'propietario', true)
ON CONFLICT (rut) DO NOTHING;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('87654321K', 'Pérez', '101', 'residente', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 102: Solo Propietario
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('11111111K', 'González', '102', 'propietario', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 103: Propietario y Residente
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('22222222K', 'Rodríguez', '103', 'propietario', true)
ON CONFLICT (rut) DO NOTHING;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('33333333K', 'Martínez', '103', 'residente', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 104: Solo Residente
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('44444444K', 'López', '104', 'residente', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 201: Propietario empresa
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('76543210K', 'Inversiones Ejemplo SpA', '201', 'propietario', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 202: Propietario y Residente
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('55555555K', 'Fernández', '202', 'propietario', true)
ON CONFLICT (rut) DO NOTHING;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('66666666K', 'Silva', '202', 'residente', true)
ON CONFLICT (rut) DO NOTHING;

-- Departamento 203: Propietario inactivo (para testing)
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77777777K', 'Morales', '203', 'propietario', false)
ON CONFLICT (rut) DO NOTHING;

-- ============================================
-- COMENTARIOS DE PRUEBA
-- ============================================

-- Comentario del propietario del depto 101
INSERT INTO comentarios (rut_usuario, departamento, tipo_usuario, contenido)
VALUES (
  '12345678K',
  '101',
  'propietario',
  'Propongo modificar el artículo 15 del reglamento para permitir mascotas pequeñas en las áreas comunes siempre que vayan con correa. Esto mejoraría la calidad de vida de los residentes con animales de compañía.'
)
ON CONFLICT (departamento, tipo_usuario) DO NOTHING;

-- Comentario del residente del depto 101
INSERT INTO comentarios (rut_usuario, departamento, tipo_usuario, contenido)
VALUES (
  '87654321K',
  '101',
  'residente',
  'Estoy de acuerdo con la propuesta del propietario sobre las mascotas. Además, sugiero establecer horarios específicos para el uso del salón de eventos, ya que actualmente hay conflictos en los fines de semana.'
)
ON CONFLICT (departamento, tipo_usuario) DO NOTHING;

-- Comentario del propietario del depto 102
INSERT INTO comentarios (rut_usuario, departamento, tipo_usuario, contenido)
VALUES (
  '11111111K',
  '102',
  'propietario',
  'Solicito que se revise el artículo 23 sobre estacionamientos de visitas. Propongo aumentar el tiempo máximo de 2 a 4 horas, ya que muchas visitas familiares se ven afectadas por esta restricción.'
)
ON CONFLICT (departamento, tipo_usuario) DO NOTHING;

-- Comentario del propietario del depto 103
INSERT INTO comentarios (rut_usuario, departamento, tipo_usuario, contenido)
VALUES (
  '22222222K',
  '103',
  'propietario',
  'Propongo modificar el artículo 8 para permitir trabajos de construcción y remodelación hasta las 19:00 hrs en días hábiles, en lugar de las 18:00 hrs actuales. Esto facilitaría la realización de mejoras en los departamentos.'
)
ON CONFLICT (departamento, tipo_usuario) DO NOTHING;

-- ============================================
-- CONSULTAS DE VERIFICACIÓN
-- ============================================

-- Ver todos los usuarios
-- SELECT * FROM usuarios ORDER BY departamento, tipo;

-- Ver todos los comentarios con información de usuarios
-- SELECT * FROM comentarios_con_usuarios;

-- Verificar permisos para comentar
-- SELECT puede_comentar('12345678K', '101', 'propietario'); -- false (ya comentó)
-- SELECT puede_comentar('11111111K', '102', 'propietario'); -- false (ya comentó)
-- SELECT puede_comentar('33333333K', '103', 'residente'); -- true (aún no comenta)
-- SELECT puede_comentar('77777777K', '203', 'propietario'); -- false (usuario inactivo)

-- ============================================
-- CREDENCIALES DE PRUEBA
-- ============================================
-- Para login usar:
-- RUT: 12345678K | Apellido: garcía (case insensitive)
-- RUT: 87654321K | Apellido: pérez
-- RUT: 11111111K | Apellido: gonzález
-- RUT: 22222222K | Apellido: rodríguez
-- RUT: 33333333K | Apellido: martínez
-- RUT: 44444444K | Apellido: lópez
-- RUT: 76543210K | Apellido: inversiones ejemplo spa
-- RUT: 55555555K | Apellido: fernández
-- RUT: 66666666K | Apellido: silva
