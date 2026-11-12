#!/usr/bin/env node
/**
 * Genera src/tokens/tokens.ts desde tokens.css (fuente de verdad de color).
 * Tipografía / radio / espacio se documentan como constantes RN-friendly.
 *
 * Uso: node scripts/generate-tokens-ts.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = path.join(root, "src/tokens/tokens.css");
const outPath = path.join(root, "src/tokens/tokens.ts");

const css = fs.readFileSync(cssPath, "utf8");

/** @param {string} block */
function parseVars(block) {
  /** @type {Record<string, string>} */
  const out = {};
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(block))) {
    const key = m[1];
    const val = m[2].trim();
    // Skip aliases / type-scale atoms; keep color keys (incl. text-muted).
    if (val.startsWith("var(") || val.startsWith("clamp(")) continue;
    if (key.startsWith("font-") || key.startsWith("leading-")) continue;
    if (/^text-(xs|sm|md|ui|lg|xl|2xl|3xl|4xl)$/.test(key)) continue;
    if (key.startsWith("tracking-") || key.startsWith("weight-") || key.startsWith("type-"))
      continue;
    if (key.startsWith("radius-") || key.startsWith("space-")) continue;
    out[key] = val;
  }
  return out;
}

function extractBlock(source, startMarker) {
  const i = source.indexOf(startMarker);
  if (i < 0) return "";
  const brace = source.indexOf("{", i);
  let depth = 0;
  for (let j = brace; j < source.length; j++) {
    if (source[j] === "{") depth++;
    else if (source[j] === "}") {
      depth--;
      if (depth === 0) return source.slice(brace + 1, j);
    }
  }
  return "";
}

const light = parseVars(extractBlock(css, ":root {"));
const darkMedia = parseVars(
  extractBlock(css, '@media (prefers-color-scheme: dark)'),
);
const darkTheme = parseVars(extractBlock(css, ':root[data-theme="dark"]'));
const dark = { ...darkMedia, ...darkTheme };

const COLOR_KEYS = [
  "bg",
  "surface",
  "ink",
  "text-muted",
  "line",
  "track",
  "cta",
  "cta-ink",
  "good",
  "near",
  "bad",
  "good-fill",
  "near-fill",
  "bad-fill",
  "ausente",
];

function pick(map, key) {
  const v = map[key];
  if (!v) throw new Error(`Missing token --${key} in tokens.css`);
  return v;
}

function toCamel(k) {
  return k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function emitObject(map, indent = "  ") {
  return COLOR_KEYS.map((k) => `${indent}${toCamel(k)}: "${pick(map, k)}",`).join(
    "\n",
  );
}

const banner = `/**
 * Color tokens for web + React Native.
 *
 * GENERATED from tokens.css — do not edit by hand.
 *   node scripts/generate-tokens-ts.mjs
 *
 * CSS remains the source of truth for webs; this module is the portable map
 * (Expo / vanilla JS) so apps do not drift from @entumano/ui.
 */

export type ColorSchemeName = "light" | "dark";

export type ColorTokens = {
  bg: string;
  surface: string;
  ink: string;
  textMuted: string;
  line: string;
  track: string;
  cta: string;
  ctaInk: string;
  /** Semántica de voto: texto / iconos / leyendas */
  good: string;
  near: string;
  bad: string;
  /** Fondos sólidos con tinta clara (≥4,5:1) */
  goodFill: string;
  nearFill: string;
  badFill: string;
  ausente: string;
};

`;

const body = `export const lightColors: ColorTokens = {
${emitObject(light)}
};

export const darkColors: ColorTokens = {
${emitObject(dark)}
};

export function colorsFor(scheme: ColorSchemeName): ColorTokens {
  return scheme === "dark" ? darkColors : lightColors;
}

/** Familias tipográficas del DS (nombre CSS; Expo carga variantes vía expo-font). */
export const fontFamilies = {
  display: "Bricolage Grotesque",
  body: "IBM Plex Sans",
  mono: "IBM Plex Mono",
} as const;

/** Radios en px (tokens.css --radius-*). */
export const radii = {
  sm: 3,
  md: 10,
  lg: 14,
  pill: 999,
} as const;

/** Espaciado en px (tokens.css --space-*). */
export const space = {
  1: 4,
  2: 6,
  3: 10,
  4: 12,
  5: 14,
  6: 18,
  7: 20,
  8: 26,
} as const;

/** Oro España / acento no-semántico (bridge --spain-gold). */
export const spainGold = {
  light: "#c9a227",
  dark: "#e0c35a",
} as const;
`;

fs.writeFileSync(outPath, banner + body);
console.log(`Wrote ${path.relative(root, outPath)}`);
