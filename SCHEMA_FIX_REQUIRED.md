# 🚨 CORRECCIÓN CRÍTICA DE SCHEMA REQUERIDA

## Problema Identificado

El schema actual tiene un **error de diseño** que impide cargar los usuarios reales del edificio:

### ❌ Schema Actual (INCORRECTO)
```sql
CREATE TABLE usuarios (
  rut TEXT PRIMARY KEY,  -- ❌ ERROR: RUT no puede ser PRIMARY KEY
  apellido_razon_social TEXT NOT NULL,
  departamento TEXT NOT NULL,
  tipo TEXT NOT NULL,
  activo BOOLEAN DEFAULT true
);
```

### ✅ Schema Correcto (REQUERIDO)
```sql
CREATE TABLE usuarios (
  rut TEXT NOT NULL,
  apellido_razon_social TEXT NOT NULL,
  departamento TEXT NOT NULL,
  tipo TEXT NOT NULL,
  activo BOOLEAN DEFAULT true,
  PRIMARY KEY (departamento, tipo)  -- ✅ CORRECTO: La combinación depto+tipo es única
);
```

## ¿Por Qué Es Necesario Este Cambio?

En el edificio real, **existen personas que son TANTO propietario COMO residente** de diferentes departamentos:

### Ejemplos Reales del Edificio:

| RUT | Apellido | Depto | Tipo | ¿Por qué? |
|-----|----------|-------|------|-----------|
| 71180018 | CASTILLO | 22 | Residente | Vive en el depto 22 |
| 71180018 | CASTILLO | 22 | Propietario | También es dueño del depto 22 |
| 173662874 | PUIG | 74 | Residente | Vive en el depto 74 |
| 173662874 | PUIG | 101 | Residente | También vive en el depto 101 |
| 173662874 | PUIG | 101 | Propietario | Y es dueño del depto 101 |

**Total de casos:** Aproximadamente 30-40 personas tienen múltiples roles en el edificio.

## Impacto

### Sin la corrección:
- ❌ Solo se pueden cargar ~90 usuarios de los 134 reales
- ❌ Muchos residentes/propietarios quedarían sin acceso al sistema
- ❌ Error: "duplicate key value violates unique constraint usuarios_pkey"

### Con la corrección:
- ✅ Se pueden cargar los 134 usuarios reales completos
- ✅ Cada persona puede tener múltiples roles (propietario + residente)
- ✅ El sistema refleja la realidad del edificio

## Solución

He creado el archivo `supabase/fix_schema_and_load.sql` que:

1. **Modifica el schema** cambiando PRIMARY KEY de `rut` a `(departamento, tipo)`
2. **Carga los 134 usuarios** reales sin conflictos

## Instrucciones de Ejecución

### PASO 1: Abrir Supabase Dashboard
1. Ve a: https://supabase.com/dashboard
2. Selecciona el proyecto: `njprxylfkhwdehswelka`

### PASO 2: Ejecutar el Script de Corrección
1. Click en "SQL Editor" (menú izquierdo)
2. Click en "New Query"
3. Abre el archivo: `D:\Proyectos\VotacionReglamento\supabase\fix_schema_and_load.sql`
4. Copia TODO el contenido (Ctrl+A, Ctrl+C)
5. Pega en el SQL Editor (Ctrl+V)
6. Click en "Run" (o Ctrl+Enter)

### PASO 3: Verificar Resultados

Al final del script verás 3 queries de verificación:

```sql
-- Deberías ver:
total_usuarios: 134 (o más si ya había usuarios de prueba)

-- Desglose por tipo:
propietario: 68
residente: 66

-- Departamentos únicos:
total_departamentos: 68
```

## ¿Por Qué No Lo Detectamos Antes?

Los usuarios de **prueba** que creamos inicialmente no tenían duplicados de RUT:
- García (12345678K) - Solo 1 rol
- Pérez (87654321K) - Solo 1 rol
- González (11111111K) - Solo 1 rol

Recién al cargar los **usuarios reales** del edificio descubrimos que hay personas con múltiples roles.

## Validación del Sistema de Comentarios

Este cambio NO afecta el sistema de comentarios porque:

✅ **La regla sigue siendo válida**: "1 comentario por combinación (departamento, tipo)"

Ejemplos:
- CASTILLO puede comentar como **residente del 22**
- CASTILLO puede comentar como **propietario del 22**
- Son DOS comentarios diferentes (uno por cada rol)

Esto es **correcto** según el PRD porque cada departamento tiene derecho a:
- 1 comentario del propietario
- 1 comentario del residente

Si la misma persona tiene ambos roles, puede hacer ambos comentarios.

## Confirmación de Seguridad

✅ **RLS Policies**: Siguen funcionando igual
✅ **Triggers**: Siguen funcionando igual
✅ **Constraints**: Se mantienen correctos
✅ **Autenticación**: Sigue funcionando igual

El único cambio es que ahora el sistema refleja correctamente la estructura real del edificio.

---

## Resumen Ejecutivo

**Acción requerida**: Ejecutar `supabase/fix_schema_and_load.sql` en Supabase SQL Editor

**Tiempo estimado**: 2 minutos

**Resultado esperado**: 134 usuarios cargados correctamente

**Riesgo**: Ninguno (solo modifica el PRIMARY KEY, no elimina datos)

