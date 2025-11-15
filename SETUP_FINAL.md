# Setup Final - Sistema de Comentarios

## ✅ Estado Actual del Proyecto

### Completado:
- ✅ Next.js 16 configurado con TypeScript
- ✅ Tailwind CSS v4 configurado
- ✅ shadcn/ui instalado y configurado
- ✅ Sistema de autenticación con NextAuth
- ✅ Base de datos en Supabase (schema creado)
- ✅ API Routes implementadas
- ✅ Frontend completo (dashboard, crear/editar comentarios)
- ✅ Deploy automático en Vercel
- ✅ Documentación completa

### Pendiente:
- ⏳ Cargar usuarios reales en Supabase (solo toma 2 minutos)
- ⏳ Testing con credenciales reales

---

## 📋 Pasos Finales (5 minutos)

### PASO 1: Cargar Usuarios Reales en Supabase

1. **Ir a Supabase Dashboard**
   - URL: https://supabase.com/dashboard
   - Selecciona el proyecto: `comentarios-reglamento`

2. **Abrir SQL Editor**
   - En el menú lateral: **SQL Editor**
   - Click en **New Query**

3. **Ejecutar Script de Usuarios**
   - Abre el archivo: `supabase/production_users.sql`
   - Copia **TODO** el contenido (Ctrl+A, Ctrl+C)
   - Pega en el SQL Editor de Supabase
   - Click en **Run** (o Ctrl+Enter)

4. **Verificar Carga**
   - Deberías ver el mensaje: "Success. X rows affected"
   - Ve a **Table Editor** > `usuarios`
   - Deberías ver ~130 usuarios cargados

**Nota importante**: El script incluye:
- 68 departamentos (pisos 2-18, 4 deptos por piso)
- Propietarios y residentes
- 2 departamentos sin residente (122 y 174)

---

### PASO 2: Verificar Deploy en Vercel

1. **Ir a Vercel Dashboard**
   - URL: https://vercel.com/dashboard
   - Busca el proyecto `VotacionReglamento`

2. **Verificar último deploy**
   - Debería mostrar: "Ready" o "Building"
   - Click en el deployment para ver detalles
   - Copia la URL de producción (ej: `votacion-reglamento.vercel.app`)

3. **Configurar Variables de Entorno** (si aún no está hecho)
   - En Vercel: Settings > Environment Variables
   - Agregar las siguientes variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://njprxylfkhwdehswelka.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-de-supabase
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=tu-secret-generado
NEXT_PUBLIC_DEADLINE_DATE=2025-12-25T23:59:59-03:00
```

   - Después de agregar variables: **Redeploy**

---

### PASO 3: Testing del Sistema

#### Test 1: Login
1. Abre la URL de producción
2. Intenta login con:
   - **Departamento**: 21
   - **Tipo**: Propietario
   - **RUT**: 17407124-1 (PICASSO)
3. Deberías entrar al dashboard

#### Test 2: Crear Comentario
1. Logueado como PICASSO (21, Propietario)
2. Click en "Crear mi comentario"
3. Escribe un comentario de prueba
4. Click en "Enviar comentario"
5. Deberías ver el comentario en el dashboard

#### Test 3: Verificar Restricciones
1. Intenta crear un segundo comentario
2. **NO** deberías ver el botón "Crear mi comentario"
3. Esto confirma que funciona la restricción de 1 comentario por depto/tipo

#### Test 4: Login con Residente
1. Logout (botón en el dashboard)
2. Login con:
   - **Departamento**: 21
   - **Tipo**: Residente
   - **RUT**: 19134605-K (MARTINEZ)
3. Deberías entrar y ver el comentario de PICASSO
4. Este usuario SÍ puede comentar (es diferente tipo)

---

## 🔑 Credenciales de Prueba

### Departamento 21 (completo)
- **Propietario**: 17407124-1 (PICASSO)
- **Residente**: 19134605-K (MARTINEZ)

### Departamento 74 (tu departamento)
- **Residente**: 17366287-4 (PUIG)
- **Propietario**: 10047347-K (BARRIGA)

### Departamento 101 (también tu departamento)
- **Residente**: 17366287-4 (PUIG)
- **Propietario**: 17366287-4 (PUIG)

### Departamento 122 (sin residente)
- **Propietario**: 13851375-0 (MARTIN)
- **Residente**: N/A (no hay)

**Formato del RUT**: Se puede ingresar con o sin puntos/guión:
- ✅ `17407124-1`
- ✅ `17.407.124-1`
- ✅ `174071241`

---

## 🐛 Troubleshooting

### Problema: "Credenciales incorrectas"
- **Causa**: RUT, departamento o tipo incorrectos
- **Solución**: Verificar que el usuario existe en la tabla `usuarios`
- **Query de verificación**:
```sql
SELECT * FROM usuarios WHERE departamento = '21';
```

### Problema: "No puedo crear comentario"
- **Causa 1**: Ya existe un comentario para ese depto/tipo
- **Solución**: Verificar en dashboard si ya comentaste
- **Causa 2**: Fecha límite pasada (25 dic 2025)
- **Solución**: Modificar fecha en código si es para testing

### Problema: Variables de entorno no cargan
- **Solución**:
  1. Verificar en Vercel > Settings > Environment Variables
  2. Asegurarse que están en "Production"
  3. Hacer redeploy después de agregar variables

---

## 📊 Estadísticas del Sistema

- **Total Departamentos**: 68
- **Total Usuarios**: ~130 (propietarios + residentes)
- **Pisos**: 2 al 18
- **Departamentos por piso**: 4 (X1, X2, X3, X4)
- **Fecha límite**: 25 de diciembre de 2025
- **Comentarios máximos**: 136 (68 deptos × 2 tipos, menos los 2 deptos sin residente)

---

## 🚀 Próximos Pasos Después del Testing

1. **Comunicar a la comunidad**
   - Enviar email con URL del sistema
   - Explicar cómo funciona el login
   - Recordar fecha límite

2. **Monitoreo**
   - Revisar logs en Vercel si hay errores
   - Verificar que todos pueden acceder
   - Responder preguntas de usuarios

3. **Antes del 25 de diciembre**
   - Enviar recordatorio 1 semana antes
   - Enviar recordatorio 2 días antes
   - Último recordatorio el 24 de diciembre

4. **Después del 25 de diciembre**
   - Exportar todos los comentarios
   - Consolidar propuestas
   - Preparar documento para votación

---

## 📞 Soporte

Si tienes algún problema:

1. **Revisar logs de Vercel**
   - Deployment > Functions > Ver logs

2. **Revisar logs de Supabase**
   - Logs Explorer > Ver errores

3. **Verificar base de datos**
   - Table Editor > Ver datos
   - SQL Editor > Ejecutar queries de verificación

---

## ✅ Checklist Final

Antes de comunicar el sistema a la comunidad:

- [ ] Script de usuarios ejecutado en Supabase
- [ ] Variables de entorno configuradas en Vercel
- [ ] Login funcionando con al menos 3 usuarios diferentes
- [ ] Crear comentario funciona
- [ ] Editar comentario funciona
- [ ] Restricciones funcionan (no doble comentario)
- [ ] Dashboard muestra todos los comentarios
- [ ] Búsqueda funciona
- [ ] Cuenta regresiva se ve correctamente
- [ ] Diseño responsive en móvil
- [ ] Logout funciona

---

**¡El sistema está listo para producción!** 🎉

Una vez completes el PASO 1 (cargar usuarios en Supabase), todo estará funcionando y podrás comunicarlo a la comunidad del edificio.
