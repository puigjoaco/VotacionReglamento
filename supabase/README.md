# Instrucciones para ejecutar el esquema en Supabase

## Paso 1: Acceder al SQL Editor

1. Ve a https://supabase.com/dashboard
2. Selecciona el proyecto **comentarios-reglamento** (njprxylfkhwdehswelka)
3. En el menú lateral, ve a **SQL Editor**

## Paso 2: Ejecutar el schema

1. Copia todo el contenido del archivo `migrations/00_schema.sql`
2. Pégalo en el SQL Editor
3. Haz clic en **Run** (o presiona Ctrl+Enter)

## Paso 3: Verificar que se creó correctamente

Ejecuta este query para verificar las tablas:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';
```

Deberías ver:
- `usuarios`
- `comentarios`

## Paso 4: Verificar las funciones

```sql
SELECT routine_name
FROM information_schema.routines
WHERE routine_schema = 'public'
AND routine_type = 'FUNCTION';
```

Deberías ver:
- `validar_rut`
- `puede_comentar`
- `prevent_delete_comentarios`
- `update_updated_at`

## Paso 5: Verificar RLS está habilitado

```sql
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';
```

Ambas tablas (`usuarios` y `comentarios`) deberían tener `rowsecurity = true`

## Archivo ejecutado

✅ `migrations/00_schema.sql` - Schema completo con tablas, funciones, triggers, vista y RLS
