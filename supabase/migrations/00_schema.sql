-- ============================================
-- SCHEMA: Sistema de Comentarios para Reglamento Interno
-- Fecha límite: 2025-12-25
-- ============================================

-- ============================================
-- TABLA: usuarios
-- Almacena propietarios y residentes del edificio
-- ============================================
CREATE TABLE IF NOT EXISTS usuarios (
  -- Primary Key: RUT sin puntos ni guión (ej: "12345678K")
  rut TEXT PRIMARY KEY,

  -- Apellido para personas naturales o razón social para empresas
  apellido_razon_social TEXT NOT NULL,

  -- Número de departamento (ej: "101", "202", "PH1")
  departamento TEXT NOT NULL,

  -- Tipo de usuario: 'propietario' o 'residente'
  tipo TEXT NOT NULL CHECK (tipo IN ('propietario', 'residente')),

  -- Estado del usuario (para deshabilitar sin eliminar)
  activo BOOLEAN NOT NULL DEFAULT true,

  -- Timestamp de creación
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Constraint: Solo puede haber UN propietario y UN residente por departamento
  CONSTRAINT unique_departamento_tipo UNIQUE (departamento, tipo)
);

-- Índices para mejorar performance
CREATE INDEX IF NOT EXISTS idx_usuarios_departamento ON usuarios(departamento);
CREATE INDEX IF NOT EXISTS idx_usuarios_tipo ON usuarios(tipo);
CREATE INDEX IF NOT EXISTS idx_usuarios_activo ON usuarios(activo) WHERE activo = true;

-- ============================================
-- TABLA: comentarios
-- Almacena los comentarios de cada usuario
-- ============================================
CREATE TABLE IF NOT EXISTS comentarios (
  -- Primary Key autogenerada
  id BIGSERIAL PRIMARY KEY,

  -- Foreign Key: RUT del usuario que comenta
  rut_usuario TEXT NOT NULL REFERENCES usuarios(rut),

  -- Departamento (desnormalizado para facilitar queries)
  departamento TEXT NOT NULL,

  -- Tipo de usuario (desnormalizado para facilitar queries)
  tipo_usuario TEXT NOT NULL CHECK (tipo_usuario IN ('propietario', 'residente')),

  -- Contenido del comentario (sin límite de caracteres)
  contenido TEXT NOT NULL CHECK (LENGTH(TRIM(contenido)) > 0),

  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Constraint: Solo UN comentario por departamento y tipo de usuario
  -- Esto asegura que cada departamento tiene máximo 2 comentarios (1 propietario + 1 residente)
  CONSTRAINT unique_comentario_depto_tipo UNIQUE (departamento, tipo_usuario)
);

-- Índices para mejorar performance
CREATE INDEX IF NOT EXISTS idx_comentarios_rut ON comentarios(rut_usuario);
CREATE INDEX IF NOT EXISTS idx_comentarios_departamento ON comentarios(departamento);
CREATE INDEX IF NOT EXISTS idx_comentarios_created_at ON comentarios(created_at DESC);

-- ============================================
-- FUNCIÓN: validar_rut
-- Valida RUT chileno usando algoritmo módulo 11
-- ============================================
CREATE OR REPLACE FUNCTION validar_rut(rut_input TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  rut_limpio TEXT;
  rut_numeros TEXT;
  digito_verificador TEXT;
  suma INTEGER := 0;
  multiplicador INTEGER := 2;
  i INTEGER;
  digito_calculado TEXT;
  resto INTEGER;
BEGIN
  -- Limpiar el RUT: remover puntos, guiones y espacios
  rut_limpio := UPPER(REGEXP_REPLACE(rut_input, '[.\-\s]', '', 'g'));

  -- Validar que no esté vacío
  IF rut_limpio = '' OR LENGTH(rut_limpio) < 2 THEN
    RETURN FALSE;
  END IF;

  -- Separar números del dígito verificador
  rut_numeros := SUBSTRING(rut_limpio FROM 1 FOR LENGTH(rut_limpio) - 1);
  digito_verificador := SUBSTRING(rut_limpio FROM LENGTH(rut_limpio) FOR 1);

  -- Validar que la parte numérica contenga solo dígitos
  IF rut_numeros !~ '^\d+$' THEN
    RETURN FALSE;
  END IF;

  -- Validar que el dígito verificador sea válido (0-9 o K)
  IF digito_verificador !~ '^[0-9K]$' THEN
    RETURN FALSE;
  END IF;

  -- Calcular dígito verificador usando módulo 11
  FOR i IN REVERSE LENGTH(rut_numeros)..1 LOOP
    suma := suma + (SUBSTRING(rut_numeros FROM i FOR 1)::INTEGER * multiplicador);
    multiplicador := multiplicador + 1;
    IF multiplicador > 7 THEN
      multiplicador := 2;
    END IF;
  END LOOP;

  resto := 11 - (suma % 11);

  -- Determinar dígito verificador esperado
  IF resto = 11 THEN
    digito_calculado := '0';
  ELSIF resto = 10 THEN
    digito_calculado := 'K';
  ELSE
    digito_calculado := resto::TEXT;
  END IF;

  -- Comparar dígito calculado con dígito ingresado
  RETURN digito_calculado = digito_verificador;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- ============================================
-- FUNCIÓN: puede_comentar
-- Verifica si un usuario puede crear un comentario
-- ============================================
CREATE OR REPLACE FUNCTION puede_comentar(
  p_rut TEXT,
  p_departamento TEXT,
  p_tipo TEXT
)
RETURNS JSONB AS $$
DECLARE
  usuario_existe BOOLEAN;
  comentario_existe BOOLEAN;
  deadline_pasado BOOLEAN;
  resultado JSONB;
BEGIN
  -- Verificar que el usuario existe y está activo
  SELECT EXISTS (
    SELECT 1 FROM usuarios
    WHERE rut = p_rut
      AND departamento = p_departamento
      AND tipo = p_tipo
      AND activo = true
  ) INTO usuario_existe;

  IF NOT usuario_existe THEN
    RETURN jsonb_build_object(
      'puede_comentar', false,
      'mensaje', 'Usuario no existe o no está activo'
    );
  END IF;

  -- Verificar que no existe un comentario previo
  SELECT EXISTS (
    SELECT 1 FROM comentarios
    WHERE departamento = p_departamento
      AND tipo_usuario = p_tipo
  ) INTO comentario_existe;

  IF comentario_existe THEN
    RETURN jsonb_build_object(
      'puede_comentar', false,
      'mensaje', 'Ya existe un comentario para este departamento y tipo de usuario'
    );
  END IF;

  -- Verificar que no ha pasado el deadline (25 dic 2025 23:59:59 Chile Time)
  SELECT NOW() > '2025-12-25 23:59:59-03:00'::TIMESTAMPTZ INTO deadline_pasado;

  IF deadline_pasado THEN
    RETURN jsonb_build_object(
      'puede_comentar', false,
      'mensaje', 'El plazo para comentar ha finalizado (25 de diciembre 2025)'
    );
  END IF;

  -- Todo OK - puede comentar
  RETURN jsonb_build_object(
    'puede_comentar', true,
    'mensaje', 'Puede crear comentario'
  );
END;
$$ LANGUAGE plpgsql STABLE;

-- ============================================
-- TRIGGER: Prevenir eliminación de comentarios
-- Asegura que los comentarios NUNCA se eliminen (transparencia total)
-- ============================================
CREATE OR REPLACE FUNCTION prevent_delete_comentarios()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'No se permite eliminar comentarios. Principio de transparencia absoluta.';
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_prevent_delete_comentarios
  BEFORE DELETE ON comentarios
  FOR EACH ROW
  EXECUTE FUNCTION prevent_delete_comentarios();

-- ============================================
-- TRIGGER: Actualizar updated_at automáticamente
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_comentarios_updated_at
  BEFORE UPDATE ON comentarios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ============================================
-- VISTA: comentarios_con_usuarios
-- Facilita queries del frontend con datos combinados
-- ============================================
CREATE OR REPLACE VIEW comentarios_con_usuarios AS
SELECT
  c.id,
  c.rut_usuario,
  c.departamento,
  c.tipo_usuario,
  c.contenido,
  c.created_at,
  c.updated_at,
  u.apellido_razon_social,
  u.activo AS usuario_activo
FROM comentarios c
INNER JOIN usuarios u ON c.rut_usuario = u.rut
ORDER BY c.created_at DESC;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS en las tablas
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE comentarios ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS PARA TABLA usuarios
-- Todos pueden leer usuarios activos
CREATE POLICY "Usuarios: lectura pública de usuarios activos"
  ON usuarios
  FOR SELECT
  USING (activo = true);

-- POLÍTICAS PARA TABLA comentarios
-- 1. SELECT: Todos pueden leer todos los comentarios (transparencia total)
CREATE POLICY "Comentarios: lectura pública"
  ON comentarios
  FOR SELECT
  USING (true);

-- 2. INSERT: Solo si puede_comentar() retorna true
CREATE POLICY "Comentarios: inserción controlada"
  ON comentarios
  FOR INSERT
  WITH CHECK (
    (puede_comentar(rut_usuario, departamento, tipo_usuario)->>'puede_comentar')::BOOLEAN = true
  );

-- 3. UPDATE: Solo el dueño del comentario y antes del deadline
CREATE POLICY "Comentarios: actualización controlada"
  ON comentarios
  FOR UPDATE
  USING (
    rut_usuario = current_setting('app.current_user_rut', true)
    AND NOW() < '2025-12-25 23:59:59-03:00'::TIMESTAMPTZ
  )
  WITH CHECK (
    rut_usuario = current_setting('app.current_user_rut', true)
    AND NOW() < '2025-12-25 23:59:59-03:00'::TIMESTAMPTZ
  );

-- 4. DELETE: Bloqueado para todos (manejado por trigger, pero agregamos política)
CREATE POLICY "Comentarios: eliminación denegada"
  ON comentarios
  FOR DELETE
  USING (false);

-- ============================================
-- COMENTARIOS FINALES
-- ============================================
COMMENT ON TABLE usuarios IS 'Propietarios y residentes del edificio con credenciales de acceso';
COMMENT ON TABLE comentarios IS 'Comentarios y propuestas para modificación del Reglamento Interno';
COMMENT ON FUNCTION validar_rut IS 'Valida RUT chileno usando algoritmo módulo 11';
COMMENT ON FUNCTION puede_comentar IS 'Verifica si un usuario puede crear un comentario según reglas de negocio';
COMMENT ON VIEW comentarios_con_usuarios IS 'Vista que combina comentarios con datos de usuarios para facilitar queries';
