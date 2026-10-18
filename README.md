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
src/tokens/tokens.css     # CSS variables (B&W)
src/styles/base.css       # fonts + reset
src/components/           # Button, Card, Choice, Eyebrow, Verdict, ProgressTicks
src/stories/              # Storybook stories
```

Not published as an npm package yet — iterate here first, then wire into the web app and Expo theme.

## Package

Published as **`@entumano/ui`** (brand-wide: Congreso, Senado, Autonomías…).

```bash
# GitHub (until npm org exists)
npm install github:ivoriginal/entumano-ui#v0.0.1
```

```ts
import "@entumano/ui/bridge-shadcn.css";
import { Button } from "@entumano/ui";
```
