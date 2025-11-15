# Complexity Report - Sistema de Comentarios para Reglamento Interno

**Fecha:** 15 de noviembre de 2025
**Proyecto:** Sistema de Comentarios - Reglamento Interno
**Stack:** Next.js + Vercel + Supabase
**Deadline:** 25 de diciembre de 2025

---

## 1. RESUMEN EJECUTIVO

### Complejidad General: **MEDIA-ALTA**

| Aspecto | Complejidad | Justificación |
|---------|-------------|---------------|
| **Arquitectura** | Media | Next.js + Supabase es stack bien documentado |
| **Autenticación** | Media | Sistema custom con RUT/Apellido requiere validación especial |
| **Base de Datos** | Media | Esquema relacional con restricciones específicas |
| **Lógica de Negocio** | Alta | Reglas complejas: 2 comentarios por depto, inmutabilidad, visibilidad |
| **UI/UX** | Media | Interfaz simple pero debe ser accesible para todos los usuarios |
| **Testing** | Media | Casos de prueba específicos para reglas de negocio |
| **Deployment** | Baja | Vercel + Supabase tienen deployment automatizado |

**Tiempo Estimado Total:** 40-60 horas de desarrollo

---

## 2. ANÁLISIS DE COMPONENTES

### 2.1 Base de Datos (Complejidad: MEDIA)

**Tablas Principales:**

1. **usuarios**
   - rut (PK)
   - apellido/razon_social
   - departamento
   - tipo (propietario/residente)
   - activo

2. **comentarios**
   - id (PK)
   - rut_usuario (FK)
   - departamento
   - tipo_usuario
   - contenido
   - fecha_creacion
   - fecha_modificacion
   - version

**Restricciones Críticas:**
- Un propietario + un residente máximo por departamento
- Comentarios inmutables (solo lectura después de crear)
- Historial de versiones si se permite edición
- Validación de RUT chileno
- Fecha límite: 25 diciembre 2025

**Desafíos:**
- ✅ Constraint único compuesto: (departamento, tipo_usuario)
- ✅ Trigger para prevenir eliminación de comentarios
- ✅ RLS (Row Level Security) para visibilidad total pero edición limitada
- ✅ Validación de RUT en backend

---

### 2.2 Autenticación (Complejidad: MEDIA-ALTA)

**Sistema Custom:**
- **Usuario:** RUT (sin puntos, con guión y dígito verificador)
- **Password:** Apellido o Razón Social

**Desafíos:**
- ❗ No usar sistema de auth tradicional (email/password)
- ❗ Validación de RUT chileno (algoritmo módulo 11)
- ❗ Normalización de RUT (12345678-9, 12.345.678-9, etc.)
- ❗ Case-insensitive para apellidos
- ❗ Manejo de razones sociales con caracteres especiales
- ❗ Session management con NextAuth o similar adaptado

**Implementación Sugerida:**
- NextAuth con custom provider
- Credential provider con validación de RUT
- JWT para sesiones
- Middleware para proteger rutas

---

### 2.3 Lógica de Negocio (Complejidad: ALTA)

**Reglas Críticas:**

1. **Dos Voces por Departamento**
   - ✅ Un comentario de propietario
   - ✅ Un comentario de residente
   - ❌ No más de uno de cada tipo
   - ❌ No se pueden sobrescribir

2. **Inmutabilidad**
   - Comentarios no se pueden eliminar
   - ¿Se pueden editar? → Definir política
   - Si se editan, mantener historial de versiones

3. **Transparencia Total**
   - Todos ven todos los comentarios
   - Mostrar: RUT, departamento, tipo, fecha, contenido

4. **Fecha Límite**
   - Hard deadline: 25 de diciembre de 2025, 23:59
   - Después: solo lectura (congelar sistema)

5. **Validaciones**
   - Usuario debe existir en base de datos
   - Usuario debe pertenecer al departamento que indica
   - Usuario debe ser del tipo que indica (propietario/residente)

**Casos Edge:**
- ¿Qué pasa si un departamento no tiene residente?
- ¿Qué pasa si un propietario vende y hay cambio de titularidad?
- ¿Se permite que un residente comente si el propietario no lo ha hecho?
- ¿Se permite comentario vacío?

---

### 2.4 Frontend (Complejidad: MEDIA)

**Páginas Principales:**

1. **Login (`/`)**
   - Form: RUT + Apellido
   - Validación en tiempo real
   - Mensajes de error claros

2. **Dashboard (`/dashboard`)**
   - Vista de todos los comentarios
   - Filtros por departamento
   - Búsqueda
   - Indicador de fecha límite

3. **Crear/Editar Comentario (`/comentario/nuevo` o `/comentario/editar`)**
   - Textarea para comentario
   - Información del usuario
   - Contador de caracteres (opcional)
   - Confirmación antes de enviar

4. **Vista de Comentario Individual (`/comentario/[id]`)**
   - Detalle completo
   - Historial de versiones (si aplica)

**Componentes Reutilizables:**
- CommentCard
- UserBadge
- DepartmentFilter
- DateCountdown
- RutInput (con validación)

**Desafíos UI/UX:**
- 📱 Responsive (muchos usuarios en móvil)
- ♿ Accesibilidad (usuarios de todas las edades)
- 🌐 Lenguaje simple y claro
- ⏰ Indicador visible de tiempo restante
- 🔒 Indicadores claros de qué puede/no puede hacer el usuario

---

### 2.5 Testing (Complejidad: MEDIA)

**Tests Críticos:**

1. **Validación de RUT**
   - RUT válidos/inválidos
   - Formatos diversos
   - Edge cases

2. **Lógica de Comentarios**
   - Crear primer comentario (propietario)
   - Crear segundo comentario (residente)
   - Intentar crear tercer comentario → ERROR
   - Intentar sobrescribir → ERROR
   - Comentario después de deadline → ERROR

3. **Autenticación**
   - Login exitoso
   - Login fallido (RUT incorrecto, apellido incorrecto)
   - Session persistence
   - Logout

4. **Permisos**
   - Ver comentarios: ✅ todos
   - Editar comentario propio: ✅ (si se permite)
   - Editar comentario ajeno: ❌
   - Eliminar comentario: ❌

**Tipos de Tests:**
- Unit tests (utilidades, validaciones)
- Integration tests (API routes)
- E2E tests (flujos completos con Playwright/Cypress)

---

## 3. ARQUITECTURA TÉCNICA

```
┌─────────────────────────────────────────────────────┐
│                   VERCEL (Deployment)                │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │         Next.js App (Frontend + API)       │    │
│  │                                             │    │
│  │  Pages:                                     │    │
│  │  - / (login)                                │    │
│  │  - /dashboard                               │    │
│  │  - /comentario/nuevo                        │    │
│  │  - /comentario/[id]                         │    │
│  │                                             │    │
│  │  API Routes:                                │    │
│  │  - /api/auth/[...nextauth]                  │    │
│  │  - /api/comentarios                         │    │
│  │  - /api/comentarios/[id]                    │    │
│  │  - /api/usuarios                            │    │
│  │                                             │    │
│  │  Middleware:                                │    │
│  │  - Auth check                               │    │
│  │  - Deadline check                           │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
                        │
                        │ Supabase Client
                        ▼
┌─────────────────────────────────────────────────────┐
│              SUPABASE (Backend + DB)                 │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │         PostgreSQL Database                │    │
│  │                                             │    │
│  │  Tables:                                    │    │
│  │  - usuarios                                 │    │
│  │  - comentarios                              │    │
│  │  - comentarios_historial (opcional)         │    │
│  │                                             │    │
│  │  Views:                                     │    │
│  │  - comentarios_con_usuarios                 │    │
│  │                                             │    │
│  │  Functions:                                 │    │
│  │  - validar_rut()                            │    │
│  │  - puede_comentar()                         │    │
│  │                                             │    │
│  │  Triggers:                                  │    │
│  │  - prevent_delete_comentarios               │    │
│  │  - versionar_comentario (si aplica)         │    │
│  │                                             │    │
│  │  RLS Policies:                              │    │
│  │  - SELECT: todos pueden leer todo           │    │
│  │  - INSERT: solo si no existe comentario     │    │
│  │  - UPDATE: solo propio y antes de deadline  │    │
│  │  - DELETE: nadie                            │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

---

## 4. RIESGOS Y MITIGACIONES

### 4.1 Riesgos Técnicos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| RUT inválidos en BD inicial | Alta | Alto | Script de validación pre-carga |
| Pérdida de comentarios | Baja | Crítico | Backups automáticos de Supabase |
| Sistema caído cerca de deadline | Media | Alto | Monitoreo + extensión de deadline si falla |
| Usuarios confundidos con login | Alta | Medio | Tutorial en video + instrucciones claras |
| Apellidos no coinciden (mayúsculas, tildes) | Alta | Alto | Normalización case-insensitive + sin tildes |
| Timezone issues con deadline | Media | Medio | Usar UTC-3 (Chile) explícitamente |

### 4.2 Riesgos de Negocio

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Baja participación | Media | Alto | Comunicación proactiva + recordatorios |
| Comentarios ofensivos/inapropiados | Media | Medio | Moderación post-deadline + código de conducta |
| Disputas sobre autoría | Baja | Medio | Registro inmutable con timestamp |
| Cambios de propietarios durante proceso | Baja | Medio | Política clara: solo usuarios al 13-nov |

---

## 5. PLAN DE IMPLEMENTACIÓN

### FASE 1: Setup (3-5 horas)
- ✅ Inicializar proyecto Next.js
- ✅ Configurar Supabase
- ✅ Setup básico de autenticación
- ✅ Configurar variables de entorno

### FASE 2: Base de Datos (5-8 horas)
- ✅ Diseñar esquema
- ✅ Crear tablas
- ✅ Implementar constraints
- ✅ Crear functions y triggers
- ✅ Configurar RLS policies
- ✅ Cargar datos iniciales de usuarios

### FASE 3: Autenticación (6-10 horas)
- ✅ Implementar validación de RUT
- ✅ Configurar NextAuth con provider custom
- ✅ Crear página de login
- ✅ Implementar middleware de protección
- ✅ Testing de auth

### FASE 4: API Backend (8-12 horas)
- ✅ API route: crear comentario
- ✅ API route: obtener comentarios
- ✅ API route: editar comentario (si aplica)
- ✅ Validaciones de negocio
- ✅ Manejo de errores
- ✅ Testing de APIs

### FASE 5: Frontend (10-15 horas)
- ✅ Componentes base
- ✅ Página dashboard
- ✅ Página crear comentario
- ✅ Sistema de filtros y búsqueda
- ✅ Responsive design
- ✅ Accesibilidad

### FASE 6: Testing & QA (5-8 horas)
- ✅ Tests unitarios
- ✅ Tests de integración
- ✅ Tests E2E
- ✅ Testing con usuarios reales

### FASE 7: Deploy & Monitoreo (3-5 horas)
- ✅ Deploy a Vercel
- ✅ Configurar dominio (opcional)
- ✅ Setup de monitoreo
- ✅ Documentación de usuario

---

## 6. MÉTRICAS DE ÉXITO

### Técnicas
- ✅ 99.9% uptime durante período de comentarios
- ✅ Tiempo de carga < 2 segundos
- ✅ 0 pérdida de datos
- ✅ 100% de comentarios registrados con timestamp correcto

### Negocio
- 🎯 >70% de departamentos con al menos un comentario
- 🎯 >50% de departamentos con dos comentarios (propietario + residente)
- 🎯 0 disputas sobre pérdida de comentarios
- 🎯 Proceso completado antes del 25 de diciembre

---

## 7. DECISIONES PENDIENTES

### Alta Prioridad
1. ❓ ¿Los comentarios se pueden editar después de crearlos?
2. ❓ ¿Hay límite de caracteres para los comentarios?
3. ❓ ¿Qué pasa con cambios de propietarios durante el período?
4. ❓ ¿Se permite comentario si el usuario del otro tipo (propietario/residente) no ha comentado?

### Media Prioridad
5. ❓ ¿Se necesita dominio personalizado o es suficiente subdominio de Vercel?
6. ❓ ¿Se envían notificaciones/recordatorios? (¿cómo?)
7. ❓ ¿Hay moderación de contenido antes de publicar?
8. ❓ ¿Se exportan comentarios a PDF/Excel al final?

### Baja Prioridad
9. ❓ ¿Analytics de uso?
10. ❓ ¿Modo oscuro?
11. ❓ ¿Multi-idioma? (español/inglés/otros)

---

## 8. CONCLUSIÓN

**Proyecto VIABLE** con las siguientes consideraciones:

### ✅ Ventajas
- Stack moderno y bien documentado
- Tiempo suficiente (40 días hasta deadline)
- Requisitos claros y específicos
- No requiere funcionalidades complejas (pagos, real-time, etc.)

### ⚠️ Atención Especial
- Sistema de autenticación custom requiere cuidado
- Reglas de negocio deben implementarse correctamente desde el inicio
- Testing exhaustivo es crítico (no hay margen de error con datos de la comunidad)
- Accesibilidad y UX son fundamentales para adopción

### 🚀 Recomendación
**Comenzar desarrollo inmediatamente** con enfoque en:
1. Base de datos sólida
2. Autenticación robusta
3. Testing continuo
4. Deploy temprano y frecuente

**Tiempo buffer:** Terminar para el 15 de diciembre (10 días antes de deadline) para permitir testing exhaustivo con usuarios reales.
