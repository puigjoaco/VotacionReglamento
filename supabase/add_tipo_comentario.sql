-- Agregar campo tipo_comentario para distinguir entre aprobaciones y modificaciones
-- Ejecutar en Supabase SQL Editor

-- 1. Agregar la columna con valor por defecto
ALTER TABLE comentarios
ADD COLUMN IF NOT EXISTS tipo_comentario TEXT NOT NULL DEFAULT 'modificacion'
CHECK (tipo_comentario IN ('aprobacion', 'modificacion'));

-- 2. Actualizar comentarios existentes como 'modificacion' (ya están así por default)
-- UPDATE comentarios SET tipo_comentario = 'modificacion' WHERE tipo_comentario IS NULL;

-- 3. Crear índice para filtrar por tipo
CREATE INDEX IF NOT EXISTS idx_comentarios_tipo ON comentarios(tipo_comentario);

-- 4. RECREAR LA VISTA para incluir tipo_comentario
DROP VIEW IF EXISTS comentarios_con_usuarios;

CREATE VIEW comentarios_con_usuarios AS
SELECT
  c.id,
  c.rut_usuario,
  c.departamento,
  c.tipo_usuario,
  c.contenido,
  c.tipo_comentario,
  c.created_at,
  c.updated_at,
  u.apellido_razon_social,
  u.activo AS usuario_activo
FROM comentarios c
JOIN usuarios u ON c.rut_usuario = u.rut
  AND c.departamento = u.departamento
  AND c.tipo_usuario = u.tipo;

-- Verificar
SELECT
  tipo_comentario,
  COUNT(*) as cantidad
FROM comentarios
GROUP BY tipo_comentario;
