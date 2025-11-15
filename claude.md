# Sistema de Comentarios para Revisión del Reglamento Interno

## Contexto del Proyecto

En la asamblea del 13 de noviembre de 2025, los propietarios y residentes del edificio acordaron revisar el Reglamento Interno vigente de manera transparente, ordenada y participativa. Este sistema permitirá recoger comentarios y propuestas de modificación de todos los miembros de la comunidad.

## Objetivos

1. **Recoger todos los comentarios** sin perder ninguno (con RUT, departamento, tipo de usuario, fecha/hora)
2. **Asegurar transparencia absoluta** - todos pueden ver su comentario y el de los demás
3. **Dar igualdad de participación** - cada departamento tiene dos voces (propietario y residente)
4. **Evitar conflictos futuros** mediante registro digital permanente
5. **No depender de correos, cadenas ni plataformas externas**
6. **Formalizar los cambios** al Reglamento Interno después del 25 de diciembre

## Stack Tecnológico

- **Frontend/Deployment**: Vercel
- **Backend/Database**: Supabase

## Funcionalidades Principales

### Sistema de Autenticación
- **Usuario**: RUT
- **Contraseña**: Apellido o razón social
- Simple, accesible y universal

### Gestión de Comentarios
- Cada departamento puede tener **dos comentarios**:
  - Uno del propietario
  - Uno del residente (si existe)
- Los comentarios **NO se eliminan ni se sobreponen**
- Todos los comentarios son **visibles para todos**

### Registro de Datos
Cada comentario incluye:
- RUT del usuario
- Departamento
- Tipo de usuario (propietario o residente)
- Fecha y hora exacta
- Contenido del comentario

### Fecha Límite
- **25 de diciembre de 2025**: Fecha límite para ingresar comentarios
- Después de esta fecha se consolidarán todos los comentarios para preparar la votación formal

## Proceso Post-Comentarios

1. Recopilación de todos los comentarios
2. Consolidación de temas propuestos
3. Preparación de documento con modificaciones
4. Consulta escrita formal donde propietarios votan:
   - Mantener reglamento vigente, o
   - Aprobar modificaciones específicas

## Principios de Diseño

- **Ordenado**: Estructura clara y organizada
- **Transparente**: Visibilidad total de todos los comentarios
- **Inclusivo**: Todos pueden participar
- **Simple**: Fácil de usar para todos
- **Sin intermediarios**: Acceso directo sin correos ni apps externas
- **Sin pérdida de información**: Todo queda registrado permanentemente
- **Individual**: Cada comentario se registra por separado

## Cumplimiento

Este sistema asegura que la revisión del Reglamento Interno sea un proceso participativo, verificable y correctamente documentado, cumpliendo tanto con la voluntad de la comunidad como con los procedimientos formales que exige la copropiedad.
