-- ============================================
-- CORRECCIÓN COMPLETA DE SCHEMA + CARGA DE USUARIOS
-- Sistema de Comentarios - Reglamento Interno
-- ============================================

-- PASO 1: Eliminar foreign key de comentarios que depende del PK actual
ALTER TABLE comentarios DROP CONSTRAINT IF EXISTS comentarios_rut_usuario_fkey;

-- PASO 2: Eliminar el constraint PRIMARY KEY actual de usuarios
ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS usuarios_pkey;

-- PASO 3: Crear nueva PRIMARY KEY compuesta (departamento, tipo)
ALTER TABLE usuarios ADD PRIMARY KEY (departamento, tipo);

-- PASO 4: Crear índice en rut para mantener búsquedas rápidas (no único porque puede repetirse)
CREATE INDEX IF NOT EXISTS idx_usuarios_rut ON usuarios(rut);

-- PASO 5: Eliminar constraint único antiguo si existe
ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS unique_usuario_depto_tipo;

-- NOTA: No recreamos la foreign key porque ahora el PK es (departamento, tipo)
-- Los comentarios se relacionan por departamento+tipo, no por rut

-- ============================================
-- AHORA CARGAR TODOS LOS USUARIOS REALES
-- ============================================

-- PISO 2
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('19134605K', 'MARTINEZ', '21', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174071241', 'PICASSO', '21', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('71180018', 'CASTILLO', '22', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('71180018', 'CASTILLO', '22', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174074593', 'SEARTE', '23', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('69739423', 'CRUZ', '23', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('62217065', 'PERSI', '24', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50272354', 'AGUILAR', '24', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 3
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('86887029', 'HERRERA', '31', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('99721995', 'MARTORELL', '31', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('167186572', 'ERAZO', '32', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186385004', 'TARUD', '32', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77735797', 'ORCHARD', '33', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176676043', 'SALAS', '33', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77023968', 'VILLABLANCA', '34', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77023968', 'VILLABLANCA', '34', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 4
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('196382461', 'POBLETE', '41', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('145306396', 'GODOY', '41', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166636159', 'FELL', '42', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('6051867K', 'COSTA', '42', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189340311', 'ALVARINO', '43', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189340311', 'ALVARINO', '43', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153784450', 'LOPEZ', '44', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153784450', 'LOPEZ', '44', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 5
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70170841', 'VOU', '51', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70170841', 'VOU', '51', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('138321800', 'VISCARRA', '52', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50773132', 'MENDIZABAL', '52', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('177023906', 'LOBOS', '53', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50773132', 'MENDIZABAL', '53', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('178606840', 'GONZALES', '54', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176676043', 'SALAS', '54', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 6
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('75603940', 'HAMILTON', '61', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('76359601', 'ZAGAL', '61', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('182293509', 'GONZALEZ', '62', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163704388', 'MATUS', '62', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174025126', 'PERSICO', '63', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174025126', 'PERSICO', '63', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70446405', 'BAULUT', '64', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70446405', 'BAULUT', '64', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 7
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163688891', 'ZAMORANO', '71', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163688891', 'ZAMORANO', '71', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173110537', 'URRA', '72', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173110537', 'URRA', '72', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189322135', 'GONZALEZ', '73', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67694368', 'MARDONES', '73', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '74', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('10047347K', 'BARRIGA', '74', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 8
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('109914932', 'TENSY', '81', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('13479352K', 'ROJAS', '81', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('8948412K', 'MONTALVA', '82', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('126984340', 'ARRIAGADA', '82', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('18634619K', 'RUZ', '83', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('170839641', 'ZAMORANO', '83', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('16431068K', 'ALCAINDE', '84', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('16431068K', 'ALCAINDE', '84', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 9
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('280708364', 'RICCHIONE', '91', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('92122670', 'CALDERON', '91', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153845174', 'KNOOP', '92', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('105171773', 'SALINAS', '92', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166634717', 'CORDERO', '93', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166634717', 'CORDERO', '93', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('73599164', 'GALDAMES', '94', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('108344628', 'PRADO', '94', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 10
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '101', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '101', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166607017', 'LOZANO', '102', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('63859965', 'ALVAREZ', '102', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121140942', 'GONZALEZ', '103', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121140942', 'GONZALEZ', '103', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('65794926', 'AVILA', '104', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67694368', 'MARDONES', '104', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 11
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67284860', 'BENSI', '111', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67284860', 'BENSI', '111', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('136570579', 'ALCERRECA', '112', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('150993814', 'MARTIN', '112', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('183911805', 'GREZ', '113', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('133329730', 'TARUD', '113', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('8983743K', 'MADARIAGA', '114', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('79748765', 'RIKLI', '114', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 12
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186409469', 'GONZALEZ', '121', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186409469', 'GONZALEZ', '121', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('138513750', 'MARTIN', '122', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('15551910K', 'AXTELL', '123', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166121876', 'MARTIN', '123', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70046164', 'LORCA', '124', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70046164', 'LORCA', '124', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 13
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('97042772', 'DIAZ', '131', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('94761484', 'FREIG', '131', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('162118064', 'CASTILLO', '132', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77905715', 'BEYTIA', '132', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('102650824', 'MUNITO', '133', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77716599', 'DUCE', '133', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('140080144', 'MATELUNA', '134', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121072858', 'PEREZ', '134', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 14
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('9497691K', 'MARIN', '141', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('61863516', 'KIND', '141', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153715149', 'GAMBI', '142', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('113756160', 'AGUILERA', '142', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('193362818', 'MORA', '143', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('116303949', 'YAUFF', '143', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('158306360', 'WEGNER', '144', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('66336999', 'ZACCONI', '144', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 15
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('260422596', 'DUQUE', '151', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('260422596', 'DUQUE', '151', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('170828933', 'MASSOUD', '152', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('109772321', 'GOMEZ', '152', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176143355', 'ZANOR', '153', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('55360006', 'LEMPERT', '153', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('180206620', 'CAVALIERI', '154', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('180206620', 'CAVALIERI', '154', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 16
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('143021092', 'PINEDA', '161', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '161', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('135108928', 'GALEZ', '162', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166585015', 'DIAZ', '162', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('192012546', 'VAZQUEZ', '163', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('192012546', 'VAZQUEZ', '163', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('281163205', 'PELTZER', '164', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('76359601', 'ETCHART', '164', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 17
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174023956', 'DECCAFIOLI', '171', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174023956', 'DECCAFIOLI', '171', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189334648', 'LATHROP', '172', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189334648', 'LATHROP', '172', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('158304082', 'BERRIOS', '173', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('767736509', 'RENTAS SANTA MARIA', '173', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '174', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- PISO 18
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153137854', 'ORYAN', '181', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '181', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('194385218', 'ALCERRECA', '182', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '182', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('190808203', 'HEPP', '183', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276133', 'PUERTO FJORA SPA', '183', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('190808203', 'HEPP', '184', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276133', 'PUERTO FJORD SPA', '184', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- VERIFICACIÓN FINAL
-- ============================================
SELECT 'Total usuarios cargados:' as info, COUNT(*) as total FROM usuarios WHERE activo = true;
SELECT tipo, COUNT(*) as total FROM usuarios WHERE activo = true GROUP BY tipo;
SELECT 'Total departamentos:' as info, COUNT(DISTINCT departamento) as total FROM usuarios WHERE activo = true;
