NXChile v2 - Resumen del Proyecto
Última actualización: 5 de octubre de 2026

✅ Avances — Modernización total + 4 productos SaaS (commit `b216865`)
- [ARQUITECTURA] `data/productos.ts` como fuente única de datos de los 4 productos (nombre, tagline, href, logo, copy, beneficios, CTA, estado). Reemplaza duplicación de copy entre componentes
- [ASSETS] Logos reales descargados a `public/images/products/`: `gastosnx.png`, `qualitynx.png`, `transnx.svg`, `rindenx-icon.png`
- [NUEVO] `components/ProductLogo.tsx` — unifica los 3 formatos de logo (wordmark / ícono / texto) con `next/image` y `priority` opcional
- [SOLUCIONES] Rediseño completo con RindeNX como producto destacado:
  · Card featured full-width con su flujo de 7 pasos (Asignar → Cerrar) y badge "Asiento contable"
  · Grid responsive `sm:2 / lg:3` con GastosNX, TransNX y QualityNX
  · Sección "Ecosistema NX": RindeNX + GastosNX (flujo `Fondo → RindeNX → GastosNX → Contador`)
  · QualityNX etiquetado honestamente como "Implementaciones iniciales"
- [DESIGN SYSTEM] `globals.css` modernizado:
  · Escala tipográfica fluida con `clamp()`: `.display-hero`, `.display-section`, `.display-card`, `.body-lg`
  · `.container-wide` (max-w-6xl) — added sin tocar `.container-premium` para evitar regresiones
  · Sombras en capas: `--shadow-soft`, `--shadow-card`, `--shadow-lift`
  · Easing Apple: `--ease-apple`, `--ease-out`
  · Botones redondeados (`rounded-full`), `.tag-pill`, `.hover-lift`, `.text-balance`, `.text-pretty`
  · `:focus-visible` global, `cv02/cv03/cv04/cv11` en Inter
- [HERO] `display-hero`, aura radial de fondo, tira con los 4 productos enlazados
- [HEADER] Dropdown "Soluciones" alimentado desde `data/productos.ts` (4 productos + separador + a medida), con tagline por producto. Cierre de menú en `onClick` en vez de `setState` en `effect` (elimina error `react-hooks/set-state-in-effect`)
- [CLIENTES] Menciones explícitas de RindeNX, GastosNX y TransNX
- [HOW WE WORK] Metadata visual, timeline con `<ol>/<li>`, iconos numéricos
- [PARA QUIÉN] Grid `sm:2 / lg:3` con card final "tu rubro no aparece aquí"
- [CTA FINAL] Grid responsive `2 / lg:4` con los 4 productos
- [FOOTER] 4 columnas (marca + Productos + Empresa + Contacto), fondo `#0B1220`, barra inferior con nombres de los 4 productos
- [LAYOUT] Metadata de los 4 productos, `metadataBase`, keywords extendidas, `data-scroll-behavior="smooth"` (elimina warning de Next), `display: "swap"` en Inter
- [BUILD] `npm run build` OK. Lint sin errores nuevos (quedan 8 errores preexistentes en `app/nxquality/page.tsx` por `react/no-unescaped-entities`)

🎨 Sistema de Diseño (Activo)
- Contenedores: `.container-premium` / `.container-custom` (max-w-5xl) · `.container-wide` (max-w-6xl)
- Tipografía: Inter con feature settings, tracking -0.028em en headings
- Escala fluida: hero `clamp(2.5rem → 5rem)`, section `clamp(2rem → 3.5rem)`, card `clamp(1.25rem → 1.75rem)`
- Colores: `--bg: #FAFAFA`, `--surface: #FFFFFF`, `--surface-muted: #F5F5F7`, `--text-primary: #0F172A`, `--text-secondary: #475569`, `--text-tertiary: #94A3B8`, `--accent: #1B5E20`, `--accent-subtle: #F1F8F2`
- Geometría: `--radius-md: 18px`, `--radius-lg: 24px`, `--radius-xl: 32px`
- Movimiento: `--ease-apple: cubic-bezier(0.4,0,0.2,1)`, `--ease-out: cubic-bezier(0.16,1,0.3,1)`

🧭 Estado de Componentes
| Componente | Estado | Notas |
|---|---|---|
| app/layout.tsx | ✅ Listo | Metadata 4 productos, metadataBase, data-scroll-behavior |
| app/globals.css | ✅ Listo | Escala fluida, container-wide, sombras, easing Apple |
| data/productos.ts | ✅ Listo | **Fuente única de datos de los 4 productos** |
| ProductLogo.tsx | ✅ Listo | Normaliza wordmark / ícono / texto |
| Header.tsx | ✅ Listo | Dropdown 4 productos + a medida, mobile expandible, sin setState en effect |
| Hero.tsx | ✅ Listo | display-hero, aura, tira de 4 productos |
| ClientMarquee.tsx | ✅ Listo | Subtítulo con nombres de productos + marquee |
| Soluciones.tsx | ✅ Listo | RindeNX featured + grid 3 + Ecosistema NX |
| HowWeWork.tsx | ✅ Listo | Metadata visual, timeline semántico |
| ParaQuien.tsx | ✅ Listo | 5 segmentos + card "tu rubro no aparece aquí" |
| FinalCTA.tsx | ✅ Listo | CTA + grid 4 productos |
| Footer.tsx | ✅ Listo | 4 columnas, contacto, fondo oscuro |

📦 Productos SaaS (data/productos.ts)
| Producto | URL | Estado | Logo |
|---|---|---|---|
| RindeNX | https://rinde.nxchile.com | listo · destacado | `rindenx-icon.png` (solo ícono, sin wordmark) |
| GastosNX | https://gastos.nxchile.com | listo | `gastosnx.png` |
| TransNX | https://trans.nxchile.com | listo | `transnx.svg` |
| QualityNX | https://quality.nxchile.com | iniciando | `qualitynx.png` |

Nota: RindeNX no expone wordmark en su sitio (usa texto plano). Se compensa con ícono + texto.
QualityNX está en fase de "implementaciones iniciales" — no presentarlo como producto maduro.

🔗 Enlaces externos (verificados)
- RindeNX → https://rinde.nxchile.com (card featured, menú, CTA final, footer, hero)
- GastosNX → https://gastos.nxchile.com (card, menú, CTA final, footer, hero)
- TransNX → https://trans.nxchile.com (card, menú, CTA final, footer, hero)
- QualityNX → https://quality.nxchile.com (card, menú, CTA final, footer, hero)
- Evaluación gratuita / Contacto → /contacto
- Anclas internas → `#soluciones`, `#como-trabajamos` (con `scroll-mt-24`)
- Contacto global → `mailto:contacto@nxchile.com`, `https://wa.me/56977412178`

🏗️ Estructura de la Home
`Hero → ClientMarquee → Soluciones (#soluciones) → HowWeWork (#como-trabajamos) → ParaQuien → FinalCTA`

🚧 Deuda Técnica / Observaciones
- [Seguridad] Web3forms `access_key` en client-side → mover a API Route server-side. Prioridad media
- `app/nxquality/page.tsx`: 8 errores de lint `react/no-unescaped-entities` + hook con deps faltantes. Preexistente, 24 slides en un solo archivo
- `ClientesHome.tsx`, `PremiumStats.tsx`, `ExperienciaReal.tsx`: componentes sin uso en la home, disponibles para otras páginas
- Datos de clientes de logos aún hardcodeados en `ClientMarquee.tsx` → centralizar en `data/clientes.ts`
- RindeNX sin wordmark propio →Asset pendiente de diseño

🎯 Próximos Pasos (Orden de Prioridad)
1. Validar responsive en 375px / 768px / 1440px con DevTools
2. Pedir wordmark de RindeNX al equipo de diseño
3. Centralizar logos de clientes en `data/clientes.ts`
4. [Seguridad] Mover web3forms a API Route server-side
5. Refactor modular de `app/nxquality/page.tsx` (24 slides)
6. [Opcional] Sección de testimonios reales de RindeNX (80% menos tiempo admin, contador 60% más rápido) — disponibles en rinde.nxchile.com

📦 Comandos Útiles
npm run dev        # Desarrollo con HMR
npm run build      # Build producción (OK post-cambios)
npm run start      # Preview producción local
npm run lint       # ESLint (8 errores preexistentes en nxquality)

🔗 Referencias
- Repo: https://github.com/rodrigoNXCL/nxchile-v2
- Framework: Next.js 16.2.9 (App Router, Turbopack)
- Estilo: Tailwind 3.4.19 + CSS Variables
- Portafolio de productos: rinde.nxchile.com · gastos.nxchile.com · trans.nxchile.com · quality.nxchile.com