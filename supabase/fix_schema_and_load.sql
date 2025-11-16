-- ============================================
-- CORRECCIÓN DE SCHEMA + CARGA DE USUARIOS
-- Sistema de Comentarios - Reglamento Interno
-- ============================================

-- PASO 1: Modificar el schema de la tabla usuarios
-- Cambiar PRIMARY KEY de (rut) a (departamento, tipo)
-- Esto permite que una persona pueda ser propietario Y residente de diferentes deptos

-- Primero eliminar el constraint PRIMARY KEY actual
ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS usuarios_pkey;

-- Crear nueva PRIMARY KEY compuesta
ALTER TABLE usuarios ADD PRIMARY KEY (departamento, tipo);

-- Asegurar que existe el constraint UNIQUE para evitar duplicados
ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS unique_usuario_depto_tipo;

-- PASO 2: Ahora cargar todos los usuarios reales
-- Con el nuevo schema, los RUTs pueden repetirse siempre que la combinación (departamento, tipo) sea única

-- ============================================
-- PISO 2
-- ============================================

-- Departamento 21
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('19134605K', 'MARTINEZ', '21', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174071241', 'PICASSO', '21', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 22
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('71180018', 'CASTILLO', '22', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('71180018', 'CASTILLO', '22', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 23
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174074593', 'SEARTE', '23', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('69739423', 'CRUZ', '23', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 24
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('62217065', 'PERSI', '24', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50272354', 'AGUILAR', '24', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 3
-- ============================================

-- Departamento 31
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('86887029', 'HERRERA', '31', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('99721995', 'MARTORELL', '31', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 32
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('167186572', 'ERAZO', '32', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186385004', 'TARUD', '32', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 33
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77735797', 'ORCHARD', '33', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176676043', 'SALAS', '33', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 34
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77023968', 'VILLABLANCA', '34', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77023968', 'VILLABLANCA', '34', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 4
-- ============================================

-- Departamento 41
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('196382461', 'POBLETE', '41', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('145306396', 'GODOY', '41', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 42
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166636159', 'FELL', '42', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('6051867K', 'COSTA', '42', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 43
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189340311', 'ALVARINO', '43', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189340311', 'ALVARINO', '43', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 44
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153784450', 'LOPEZ', '44', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153784450', 'LOPEZ', '44', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 5
-- ============================================

-- Departamento 51
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70170841', 'VOU', '51', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70170841', 'VOU', '51', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 52
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('138321800', 'VISCARRA', '52', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50773132', 'MENDIZABAL', '52', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 53
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('177023906', 'LOBOS', '53', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('50773132', 'MENDIZABAL', '53', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 54
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('178606840', 'GONZALES', '54', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176676043', 'SALAS', '54', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 6
-- ============================================

-- Departamento 61
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('75603940', 'HAMILTON', '61', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('76359601', 'ZAGAL', '61', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 62
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('182293509', 'GONZALEZ', '62', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163704388', 'MATUS', '62', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 63
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174025126', 'PERSICO', '63', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174025126', 'PERSICO', '63', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 64
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70446405', 'BAULUT', '64', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70446405', 'BAULUT', '64', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 7
-- ============================================

-- Departamento 71
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163688891', 'ZAMORANO', '71', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('163688891', 'ZAMORANO', '71', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 72
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173110537', 'URRA', '72', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173110537', 'URRA', '72', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 73
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189322135', 'GONZALEZ', '73', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67694368', 'MARDONES', '73', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 74
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '74', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('10047347K', 'BARRIGA', '74', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 8
-- ============================================

-- Departamento 81
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('109914932', 'TENSY', '81', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('13479352K', 'ROJAS', '81', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 82
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('8948412K', 'MONTALVA', '82', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('126984340', 'ARRIAGADA', '82', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 83
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('18634619K', 'RUZ', '83', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('170839641', 'ZAMORANO', '83', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 84
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('16431068K', 'ALCAINDE', '84', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('16431068K', 'ALCAINDE', '84', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 9
-- ============================================

-- Departamento 91
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('280708364', 'RICCHIONE', '91', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('92122670', 'CALDERON', '91', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 92
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153845174', 'KNOOP', '92', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('105171773', 'SALINAS', '92', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 93
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166634717', 'CORDERO', '93', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166634717', 'CORDERO', '93', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 94
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('73599164', 'GALDAMES', '94', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('108344628', 'PRADO', '94', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 10
-- ============================================

-- Departamento 101
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '101', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('173662874', 'PUIG', '101', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 102
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166607017', 'LOZANO', '102', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('63859965', 'ALVAREZ', '102', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 103
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121140942', 'GONZALEZ', '103', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121140942', 'GONZALEZ', '103', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 104
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('65794926', 'AVILA', '104', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67694368', 'MARDONES', '104', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 11
-- ============================================

-- Departamento 111
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67284860', 'BENSI', '111', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('67284860', 'BENSI', '111', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 112
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('136570579', 'ALCERRECA', '112', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('150993814', 'MARTIN', '112', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 113
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('183911805', 'GREZ', '113', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('133329730', 'TARUD', '113', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 114
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('8983743K', 'MADARIAGA', '114', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('79748765', 'RIKLI', '114', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 12
-- ============================================

-- Departamento 121
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186409469', 'GONZALEZ', '121', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('186409469', 'GONZALEZ', '121', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 122 - Solo propietario (sin residente)
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('138513750', 'MARTIN', '122', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 123
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('15551910K', 'AXTELL', '123', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166121876', 'MARTIN', '123', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 124
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70046164', 'LORCA', '124', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('70046164', 'LORCA', '124', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 13
-- ============================================

-- Departamento 131
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('97042772', 'DIAZ', '131', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('94761484', 'FREIG', '131', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 132
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('162118064', 'CASTILLO', '132', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77905715', 'BEYTIA', '132', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 133
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('102650824', 'MUNITO', '133', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('77716599', 'DUCE', '133', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 134
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('140080144', 'MATELUNA', '134', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('121072858', 'PEREZ', '134', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 14
-- ============================================

-- Departamento 141
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('9497691K', 'MARIN', '141', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('61863516', 'KIND', '141', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 142
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153715149', 'GAMBI', '142', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('113756160', 'AGUILERA', '142', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 143
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('193362818', 'MORA', '143', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('116303949', 'YAUFF', '143', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 144
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('158306360', 'WEGNER', '144', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('66336999', 'ZACCONI', '144', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 15
-- ============================================

-- Departamento 151
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('260422596', 'DUQUE', '151', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('260422596', 'DUQUE', '151', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 152
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('170828933', 'MASSOUD', '152', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('109772321', 'GOMEZ', '152', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 153
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('176143355', 'ZANOR', '153', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('55360006', 'LEMPERT', '153', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 154
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('180206620', 'CAVALIERI', '154', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('180206620', 'CAVALIERI', '154', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 16
-- ============================================

-- Departamento 161
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('143021092', 'PINEDA', '161', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '161', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 162
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('135108928', 'GALEZ', '162', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('166585015', 'DIAZ', '162', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 163
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('192012546', 'VAZQUEZ', '163', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('192012546', 'VAZQUEZ', '163', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 164
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('281163205', 'PELTZER', '164', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('76359601', 'ETCHART', '164', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 17
-- ============================================

-- Departamento 171
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174023956', 'DECCAFIOLI', '171', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('174023956', 'DECCAFIOLI', '171', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 172
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189334648', 'LATHROP', '172', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('189334648', 'LATHROP', '172', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 173
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('158304082', 'BERRIOS', '173', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('767736509', 'RENTAS SANTA MARIA', '173', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 174 - Solo propietario (sin residente)
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '174', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- PISO 18
-- ============================================

-- Departamento 181
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('153137854', 'ORYAN', '181', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '181', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 182
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('194385218', 'ALCERRECA', '182', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276087', 'EL GOBERNADOR SPA', '182', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 183
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('190808203', 'HEPP', '183', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276133', 'PUERTO FJORA SPA', '183', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- Departamento 184
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('190808203', 'HEPP', '184', 'residente', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;
INSERT INTO usuarios (rut, apellido_razon_social, departamento, tipo, activo)
VALUES ('772276133', 'PUERTO FJORD SPA', '184', 'propietario', true) ON CONFLICT (departamento, tipo) DO UPDATE SET rut = EXCLUDED.rut, apellido_razon_social = EXCLUDED.apellido_razon_social;

-- ============================================
-- VERIFICACIÓN FINAL
-- ============================================

-- Verificar total de usuarios cargados
SELECT COUNT(*) as total_usuarios FROM usuarios WHERE activo = true;

-- Verificar usuarios por tipo
SELECT tipo, COUNT(*) as total
FROM usuarios
WHERE activo = true
GROUP BY tipo;

-- Verificar departamentos únicos
SELECT COUNT(DISTINCT departamento) as total_departamentos
FROM usuarios
WHERE activo = true;
