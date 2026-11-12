# Inventario: web → design system

Análisis de `elcongresoentumano` (uso real en rutas/componentes) cruzado con el Storybook actual.

## Ya en el DS (probar vía link)

| DS | Equivalente web | Notas |
|----|-----------------|-------|
| Tokens B&W | `src/styles.css` `:root` | Bridge: `--primary`←`--cta`, `--accent`←`--track` (hover shadcn) |
| `inkOnColor` + `--*-fill` | logos partido, badges sí/no | a11y: tinta sobre color oficial; fills oscuros con blanco |
| `Button` | `ui/button` (24 imports) | Sustituir en trial selectivo |
| `Card` | `ui/card` + `.card` producto | Radios distintos (14 vs sm) |
| `Eyebrow` | `.kicker` | Mono uppercase |
| `Choice` | botones V/F quiz | `datos-que-no-imaginabas`, quizzes |
| `Verdict` | chips acierto/fallo | Quiz + contraste |
| `ProgressTicks` | `<progress>` / ticks | Quiz |
| `VotoPill` | fichas, diputado, histórico | si/no/abstención/ausente; exporta `VOTO_LABEL` |
| `BarraRecuento` | ley, votaciones, perfiles | `recuento` por props; leyenda opcional |
| `GrupoTag` | directorio, home, vista rápida | punto + siglas; `color` por props |
| `PartidoLogo` | home, partidos, test, histórico | tinta por contraste (`inkOnColor`) |
| `Avatar` | directorio, contacta, test | foto con borde de grupo / iniciales |
| `Chip` | filtros leyes / histórico | `aria-pressed` |
| `LeyCard` | home, catálogo | prop `as` para el `Link` del router; hijos = extras |
| `LogoHemiciclo` | header, favicon | SVG `currentColor` |
| `ApoyoCapsula` / `ApoyoBotones` | todas las webs React | barra móvil + cápsula escritorio con scroll; botones blancos fijos; `onApoyo` para analítica; texto por props. Las Cortes (vanilla) copian el CSS de `ApoyoCapsula.css` |
| `PillElecciones` | hero de Congreso, Senado, Cortes | cuenta atrás 29N → constitución → legislatura; `as` para el `Link`; textos por props; fechas únicas en `fechas-29n.ts` (`ELECCIONES_29N`, `CONSTITUCION_CORTES`, `faseCiclo`). Las Cortes (vanilla) copian el CSS |
| `EtiquetaRelacion` | programas | sin Popover de Radix; `label` + `explicacion` por props |

Los componentes de dominio **no importan datos**: reciben siglas, color, recuento, textos… por props. Cada web mapea sus tipos (`Ley`, `Diputado`, `grupoDe`).

## Faltan — chrome / layout (prioridad media)

| Componente | Notas |
|------------|-------|
| `SiteHeader` | Wordmark + nav; en app se reduce |
| `SiteFooter` | fuentes / enlaces |
| `PerfilNav` | sticky / scroll horizontal |
| `BandaPrimaria` | hero `bg-primary` |
| `NotaMetodo` | aviso metodológico |

## Faltan — primitivos UI usados de verdad

shadcn tiene ~40 primitivos; **uso real** es corto:

| Primitivo | Imports | Prioridad |
|-----------|---------|-----------|
| `Button` | 24 | ya en DS |
| `DropdownMenu` | 4 | alta |
| `Dialog` | 3 | alta |
| `Input` / `Label` / `Textarea` | 2–1 | alta (feedback) |
| `Popover` | 1 | media |
| `Slider` | quiz cifras | media |
| `Sheet` / `Skeleton` / `Separator` / `Tooltip` / `Toggle` | 1 | baja |

El resto de `ui/*` (sidebar, calendar, carousel…) está en el kit pero casi no se importa: **no portar por defecto**.

## Fuera del DS (no es roadmap)

Esto solo dice qué **no empaquetamos** en el design system: pantallas con datos/API (`SeguimientoVotaciones`, `MapaEspana`, `Patrimonio`, push…). No es una lista de trabajo; el roadmap de producto vive en los repos de web/app.

## Tipografía

Escala en `tokens.css`. Preferir roles (`font: var(--type-title)`); átomos solo al componer.

| Rol | Uso |
|-----|-----|
| `--type-display` / `--type-score` | Hero y marcadores |
| `--type-title` / `--type-stat` | Títulos de card / cifras |
| `--type-lead` / `--type-body` / `--type-caption` | Lectura |
| `--type-ui` / `--type-label` | Botones, pills, tags |
| `--type-eyebrow` / `--type-meta` | Mono uppercase |

Leading fijo: `none 1` · `tight 1.2` · `snug 1.4` · `normal 1.5` · `relaxed 1.75`. Story: Foundation → Tokens → Type.

## Regla de color (tras trial B&W)

- **Chrome / hero / tipografía:** neutro (papel claro, tinta). Heroes blancos, no bandas negras ni teal.
- **Aprobado / Rechazado / sí / no / charts:** color (verde / rojo / ámbar / series). No grisificar semántica.

## Plan de trial (worktree + link)

1. Empaquetar `@congreso/ui` con exports (tokens + componentes).
2. Worktree en `elcongresoentumano` → `npm link @congreso/ui`.
3. Fase A: solo **bridge de tokens B&W** (ver toda la web en B&N).
4. Fase B: sustituir `Button` / `kicker` / quiz en una ruta.
5. Decidir: quedarnos → publicar (npm / GitHub Packages / Origin) para otras webs.
