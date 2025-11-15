# Guía de Testing - Sistema de Comentarios

## 🧪 Entorno de Pruebas

### Datos de Prueba Cargados

Se han cargado usuarios y comentarios de prueba para facilitar el testing. Ver detalles en `supabase/seed_data.sql`.

### Credenciales de Prueba

| RUT | Apellido/Razón Social | Depto | Tipo | ¿Ya comentó? |
|-----|----------------------|-------|------|--------------|
| 12345678K | García | 101 | Propietario | ✅ Sí |
| 87654321K | Pérez | 101 | Residente | ✅ Sí |
| 11111111K | González | 102 | Propietario | ✅ Sí |
| 22222222K | Rodríguez | 103 | Propietario | ✅ Sí |
| 33333333K | Martínez | 103 | Residente | ❌ No |
| 44444444K | López | 104 | Residente | ❌ No |
| 76543210K | Inversiones Ejemplo SpA | 201 | Propietario | ❌ No |
| 55555555K | Fernández | 202 | Propietario | ❌ No |
| 66666666K | Silva | 202 | Residente | ❌ No |

**Nota**: El apellido es case-insensitive. Puedes escribir "garcia", "García" o "GARCÍA" - todos funcionan.

## 📝 Casos de Prueba

### 1. Autenticación

#### ✅ Login Exitoso
1. Ir a `/login`
2. Ingresar RUT: `12345678K`
3. Ingresar Apellido: `garcia` (en minúsculas)
4. Click en "Ingresar"
5. **Resultado esperado**: Redirección a `/dashboard`

#### ❌ Login Fallido - RUT Inválido
1. Ir a `/login`
2. Ingresar RUT: `12345678X` (dígito verificador incorrecto)
3. Ingresar Apellido: `garcia`
4. **Resultado esperado**: Error "RUT inválido"

#### ❌ Login Fallido - Apellido Incorrecto
1. Ir a `/login`
2. Ingresar RUT: `12345678K`
3. Ingresar Apellido: `incorrectoapellido`
4. **Resultado esperado**: Error de credenciales

#### ❌ Login Fallido - Usuario Inactivo
1. Ir a `/login`
2. Ingresar RUT: `77777777K`
3. Ingresar Apellido: `morales`
4. **Resultado esperado**: Error "Usuario no encontrado o inactivo"

### 2. Dashboard

#### Visualización de Comentarios
1. Login con cualquier usuario
2. **Resultado esperado**:
   - Ver lista de comentarios existentes
   - Ver información del usuario logueado (apellido, depto, tipo)
   - Ver contador de tiempo hasta deadline
   - Ver barra de búsqueda

#### Búsqueda de Comentarios
1. En el dashboard, escribir "mascotas" en la búsqueda
2. **Resultado esperado**: Solo ver comentario(s) que mencionen mascotas

#### Filtros
1. Seleccionar filtro "Solo propietarios"
2. **Resultado esperado**: Solo ver comentarios de propietarios
3. Seleccionar filtro "Solo residentes"
4. **Resultado esperado**: Solo ver comentarios de residentes

### 3. Crear Comentario

#### ✅ Crear Comentario Exitoso
1. Login con: `33333333K` / `martínez` (NO ha comentado)
2. Click en "Crear mi comentario"
3. Escribir comentario de prueba
4. Click en "Enviar comentario"
5. **Resultado esperado**:
   - Redirección a dashboard
   - Ver el nuevo comentario en la lista

#### ❌ Crear Comentario - Ya Existe
1. Login con: `12345678K` / `garcía` (YA comentó)
2. **Resultado esperado**: No ver botón "Crear mi comentario"
3. Intentar acceder a `/comentario/nuevo` directamente
4. **Resultado esperado**: Error al intentar crear

#### ❌ Crear Comentario Vacío
1. Login con: `44444444K` / `lópez`
2. Click en "Crear mi comentario"
3. Dejar el textarea vacío
4. Click en "Enviar comentario"
5. **Resultado esperado**: Botón deshabilitado o error "El comentario no puede estar vacío"

### 4. Editar Comentario

#### ✅ Editar Comentario Propio
1. Login con: `12345678K` / `garcía`
2. En su comentario, click en "Editar"
3. Modificar el texto
4. Click en "Guardar cambios"
5. **Resultado esperado**:
   - Redirección a dashboard
   - Ver comentario actualizado
   - Ver fecha de "última actualización"

#### ❌ Editar Sin Cambios
1. Login con: `12345678K` / `garcía`
2. Click en "Editar" en su comentario
3. NO modificar el texto
4. Click en "Guardar cambios"
5. **Resultado esperado**: Error "No has realizado cambios"

#### ❌ Editar Comentario de Otro Usuario
1. Login con: `11111111K` / `gonzález`
2. Intentar acceder a `/comentario/1/editar` (comentario de García)
3. **Resultado esperado**: Error "No tienes permiso para editar este comentario"

### 5. Restricciones de Base de Datos

#### ❌ Dos Comentarios del Mismo Tipo en el Mismo Depto
**Esto se prueba a nivel de base de datos directamente en Supabase**

1. Ir a Supabase SQL Editor
2. Ejecutar:
```sql
INSERT INTO comentarios (rut_usuario, departamento, tipo_usuario, contenido)
VALUES ('12345678K', '101', 'propietario', 'Segundo comentario de prueba');
```
3. **Resultado esperado**: Error de constraint `unique_comentario_depto_tipo`

#### ❌ Eliminar Comentario
**Esto se prueba a nivel de base de datos directamente en Supabase**

1. Ir a Supabase SQL Editor
2. Ejecutar:
```sql
DELETE FROM comentarios WHERE id = 1;
```
3. **Resultado esperado**: Error del trigger "No se permite eliminar comentarios"

### 6. Validación de RUT

#### ✅ RUTs Válidos
- `12345678K`
- `12.345.678-K` (con formato)
- `11111111-1`
- `22222222-2`

#### ❌ RUTs Inválidos
- `12345678X` (dígito verificador incorrecto)
- `12345678` (sin dígito verificador)
- `abcdefgh-K` (caracteres no numéricos)

### 7. Permisos y Seguridad

#### Row Level Security (RLS)
**Pruebas a nivel de base de datos**

1. Ir a Supabase SQL Editor
2. Verificar políticas RLS:
```sql
-- Todos pueden leer usuarios activos
SELECT * FROM usuarios WHERE activo = true;

-- Todos pueden leer comentarios
SELECT * FROM comentarios;

-- La vista funciona correctamente
SELECT * FROM comentarios_con_usuarios;
```

### 8. Fecha Límite (Deadline)

**Nota**: El deadline está configurado para el 25 de diciembre de 2025. Para probar esto antes de esa fecha, necesitarías modificar temporalmente la fecha en:
- `lib/utils/rut.ts` (función `puede_comentar`)
- Base de datos: función `puede_comentar()`
- Componente `DateCountdown`

#### Después del Deadline
1. Configurar fecha del sistema después del 25-12-2025 (o modificar código)
2. Intentar crear comentario
3. **Resultado esperado**: Error "El plazo para comentar ha finalizado"
4. Intentar editar comentario existente
5. **Resultado esperado**: Error o botón deshabilitado

### 9. Casos Edge

#### Espacios en Blanco
1. Intentar crear comentario con solo espacios: "    "
2. **Resultado esperado**: Error "El comentario no puede estar vacío"

#### Comentario Muy Largo
1. Crear comentario con 10,000+ caracteres
2. **Resultado esperado**: Se guarda correctamente (no hay límite)

#### Caracteres Especiales
1. Crear comentario con emojis, tildes, ñ: "¡Hola! 🏢 Ñandú"
2. **Resultado esperado**: Se guarda correctamente

#### Case Sensitivity en Apellidos
1. Login con apellido en minúsculas: `garcia`
2. Login con apellido en mayúsculas: `GARCIA`
3. Login con apellido capitalizado: `García`
4. **Resultado esperado**: Todos funcionan (case insensitive)

## 🔍 Herramientas de Testing

### Supabase Dashboard
1. Ve a https://supabase.com/dashboard
2. Selecciona el proyecto
3. **Table Editor**: Ver datos en las tablas
4. **SQL Editor**: Ejecutar queries de prueba
5. **Auth**: (no usado en este proyecto - usamos NextAuth)

### Logs de Vercel
1. Ve a https://vercel.com
2. Selecciona el proyecto
3. **Logs**: Ver errores de runtime
4. **Analytics**: Ver uso y performance

### DevTools del Navegador
1. **Network Tab**: Ver requests a API routes
2. **Console**: Ver errores de JavaScript
3. **Application > Storage**: Ver cookies de sesión

## ✅ Checklist de Testing Pre-Producción

- [ ] Todos los usuarios de prueba pueden hacer login
- [ ] Usuarios pueden ver todos los comentarios
- [ ] Búsqueda funciona correctamente
- [ ] Filtros funcionan correctamente
- [ ] Usuarios pueden crear su primer comentario
- [ ] Usuarios NO pueden crear segundo comentario
- [ ] Usuarios pueden editar solo sus propios comentarios
- [ ] No se pueden eliminar comentarios
- [ ] RUT validation funciona correctamente
- [ ] Countdown del deadline es visible y preciso
- [ ] Diseño responsive funciona en móvil
- [ ] Logout funciona correctamente
- [ ] Middleware protege rutas correctamente
- [ ] RLS policies funcionan correctamente
- [ ] Triggers previenen eliminación

## 🐛 Reportar Bugs

Si encuentras algún bug durante el testing:

1. Describe el comportamiento esperado
2. Describe el comportamiento actual
3. Pasos para reproducir
4. Screenshots si es posible
5. Información del navegador/dispositivo

## 📊 Métricas de Éxito

- **Autenticación**: 100% de usuarios válidos pueden acceder
- **Comentarios**: 0 comentarios perdidos o duplicados
- **Performance**: Carga de dashboard < 2 segundos
- **Disponibilidad**: 99.9% uptime en Vercel
- **Seguridad**: 0 vulnerabilidades críticas
