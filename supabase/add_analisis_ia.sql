-- Agregar columna para guardar análisis de IA
-- Esto evita re-analizar el mismo comentario múltiples veces

ALTER TABLE comentarios
ADD COLUMN IF NOT EXISTS analisis_ia JSONB,
ADD COLUMN IF NOT EXISTS fecha_analisis TIMESTAMPTZ;

-- Comentarios sobre las columnas
COMMENT ON COLUMN comentarios.analisis_ia IS 'Análisis generado por IA comparando el comentario con el Reglamento Interno';
COMMENT ON COLUMN comentarios.fecha_analisis IS 'Fecha y hora cuando se realizó el análisis por IA';

-- Índice para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_comentarios_analisis
ON comentarios(id)
WHERE analisis_ia IS NOT NULL;
