# Congreso design system

Storybook sandbox for **El Congreso en tu mano** (web + `congreso-movil`).

## Visual direction

- **Shape / type** from the Claude artifact [Datos que no imaginabas](https://claude.ai/artifact/NTGDAR2r7y55wKQLoQGoaq): Bricolage Grotesque, IBM Plex Sans/Mono, soft cards, mono eyebrows.
- **Color:** black / white / gray only (no green accent from that artifact).

## Scripts

```bash
npm install
npm run storybook   # http://localhost:6006
npm run build-storybook
```

## Layout

```
src/tokens/tokens.css         # CSS variables (B&W); CTA = --cta / --cta-ink
src/tokens/bridge-shadcn.css  # DS → shadcn: primary←cta, accent←track (hover)
src/styles/base.css           # fonts + reset
src/components/               # Button, Card, Choice, Eyebrow, Verdict, ProgressTicks
src/stories/                  # Storybook stories
```

**Nota semántica:** en el DS `--cta` es la tinta de acción. En shadcn `--accent` es superficie de hover. El bridge no reutiliza el nombre `accent` para la CTA; así `hover:bg-accent` en la web no pinta negro.

Not published as an npm package yet — iterate here first, then wire into the web app and Expo theme.

## Package

Published as **`@entumano/ui`** (brand-wide: Congreso, Senado, Autonomías…).

```bash
# GitHub (until npm org exists)
npm install github:ivoriginal/entumano-ui#v0.0.3
```

```ts
import "@entumano/ui/bridge-shadcn.css";
import { Button, inkOnColor } from "@entumano/ui";

// Logos / badges de partido: tinta legible sobre el color oficial
const ink = inkOnColor("#FFB511"); // → "#141414" (amarillos no pasan con blanco)
```

**a11y de color (v0.0.3):**
- `inkOnColor(bg)` elige blanco o `#141414` ≥4,5:1 sobre un fondo sólido (hex, rgb, hsl o `H S% L%`).
- Tokens `--*-fill` (`--si-fill`, `--no-fill`, `--abstencion-fill`) para badges con texto blanco; en dark los `--si/--no/--abstencion` siguen claros para iconos/texto.
