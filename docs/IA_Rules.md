# Reglas obligatorias para Cline

## Idioma y comportamiento general

- Respóndeme siempre en español.
- No des por confirmado nada que yo no haya aprobado explícitamente.
- Antes de ejecutar acciones irreversibles o potencialmente riesgosas, pídeme confirmación.
- No modifiques archivos, no ejecutes comandos y no instales dependencias sin mi confirmación explícita.

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

### Al terminar una tarea

Actualiza `current.md` para que refleje el estado real:

1. Registra los cambios aplicados en la sección de avances.
2. Actualiza la tabla de componentes si cambió el estado de alguno.
3. Actualiza la fecha de última modificación.
4. Revisa si los próximos pasos siguen siendo vigentes.

---

## Plantilla de `current.md`

Cuando crees `current.md` desde cero, usa esta estructura:

```markdown
NXChile v2 - Resumen del Proyecto
Última actualización: <fecha>

✅ Avances
- [ÁREA] Descripción del cambio

🎨 Sistema de Diseño
- Contenedores
- Tipografía
- Colores
- Movimiento

🧭 Estado de Componentes
| Componente | Estado | Notas |
|---|---|---|
| archivo.tsx | ✅ Listo | notas |

🔗 Enlaces externos
- Nombre → https://dominio.com

🏗️ Estructura
- Orden de secciones o rutas

🚧 Deuda Técnica / Observaciones
- [Prioridad] Descripción

🎯 Próximos Pasos (Orden de Prioridad)
1. Acción concreta

📦 Comandos Útiles
npm run dev
npm run build
npm run lint

🔗 Referencias
- Repo
- Framework
- Estilo
```

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
```

Si el usuario responde afirmativamente, procedes. Si responde con correcciones, ajustas el plan y vuelves a pedir confirmación. No interpretes silenciosamente una aprobación parcial.

---

## Reglas de verificación

Antes de dar por terminado cualquier cambio de código:

1. Ejecuta `npm run build`. Debe completar sin errores de TypeScript.
2. Ejecuta `npm run lint`. No introduzcas errores nuevos; los preexistentes se documentan en `current.md` pero no son tu responsabilidad corregirlos sin que se solicite.
3. Si modificaste JSX o CSS, levanta `npm run dev` y verifica que la página renderiza.
4. Reporta el resultado real de los comandos. Nunca afirmes que algo funciona sin haberlo verificado.

---

## Reglas de assets e imágenes

- Los assets van en `public/images/`, organizados por subcarpeta (`public/images/products/`, `public/images/clientes/`).
- Usa `next/image` para PNG, JPG y WebP. Evita `<img>` salvo para SVG inline o SVG que no quieras optimizar.
- Toda imagen debe tener `alt` descriptivo en español.
- Define `sizes` cuando la imagen se muestra responsiva.
- Usa `priority` solo en la imagen principal above the fold (LCP).

---

## Reglas de datos y contenido

- El copy de los productos SaaS vive en `data/productos.ts`. No lo dupliques dentro de los componentes.
- Si agregas un producto, actualiza `data/productos.ts` y los assets en `public/images/products/`.
- Los logos de clientes también deben estar centralizados (pendiente: `data/clientes.ts`).
- No inventes métricas, precios ni testimonios. Si el dato no está en el sitio del producto o en `current.md`, no lo escribas.

---

## Reglas de copy

- Responde en español de Chile, tono profesional y directo.
- Evita superlativos vacíos ("revolucionario", "disruptivo"). Prefiere beneficios concretos y verificables.
- Si un producto está en fase temprana, dilo. No lo presentes como maduro.
- Evita el espanglish innecesario en el texto visible al usuario. Los nombres de producto, rutas y código pueden mantener su forma original.

---

## Flujo de trabajo esperado

1. Leer `current.md`.
2. Explorar el estado real del código. No asumas: el archivo puede haber cambiado desde la última sesión.
3. Presentar plan con los 7 puntos requeridos.
4. Esperar confirmación.
5. Implementar.
6. Verificar con `build` y `lint`.
7. Reportar resultado.
8. Actualizar `current.md` tras confirmación.
9. Commit y push solo cuando yo lo pida explícitamente.