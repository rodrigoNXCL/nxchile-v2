# Reglas obligatorias para Cline

## Idioma y comportamiento general

- Respóndeme siempre en español.
- No des por confirmado nada que yo no haya aprobado explícitamente.
- Antes de ejecutar acciones irreversibles o potencialmente riesgosas, píde confirmación.
- No modifiques archivos, no ejecutes comandos y no instale dependencias sin mi confirmación explícita.

---

## Archivo de estado: `current.md`

El archivo `current.md` es la fuente principal de estado actual del proyecto o tarea.

### Al iniciar cualquier tarea

Siempre que inicies una nueva tarea, solicitud o sesión de trabajo, debes hacer esto primero:

1. Leer completamente el archivo `current.md`.
2. Usar su contenido como contexto principal antes de proponer o ejecutar cambios.
3. Si el archivo `current.md` no existe:
   - Informarme que no existe.
   - Proponer crearlo usando la plantilla definida más abajo.
   - Esperar mi confirmación antes de crearlo.
4. Si `current.md` existe pero está vacío o incompleto:
   - Avisarme.
   - Proponer actualizarlo o completarlo.
   - Esperar mi confirmación antes de modificarlo.

No comiences a implementar cambios sin haber leído antes `current.md`.

---

## Confirmación obligatoria antes de realizar cambios

Antes de hacer cualquier cambio, debes mostrarme un plan claro y pedirme confirmación.

El plan debe incluir, como mínimo:

1. Objetivo del cambio.
2. Archivos que serán creados, modificados o eliminados.
3. Comandos que serán ejecutados, si aplica.
4. Dependencias que serán instaladas, si aplica.
5. Riesgos posibles.
6. Resultado esperado.
7. Preguntar explícitamente:

```text
¿Confirmas estos cambios?