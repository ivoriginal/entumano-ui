/**
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

export const lightColors: ColorTokens = {
  bg: "#f6f6f4",
  surface: "#ffffff",
  ink: "#141414",
  textMuted: "#5a5a5a",
  line: "#e0e0dc",
  track: "#ebebe8",
  cta: "#141414",
  ctaInk: "#ffffff",
  good: "#1b7a4e",
  near: "#8a6a12",
  bad: "#9f1510",
  goodFill: "#1b7a4e",
  nearFill: "#8a6a12",
  badFill: "#9f1510",
  ausente: "#75726d",
};

export const darkColors: ColorTokens = {
  bg: "#0c0c0c",
  surface: "#171717",
  ink: "#f3f3f3",
  textMuted: "#a8a8a8",
  line: "#2c2c2c",
  track: "#262626",
  cta: "#f3f3f3",
  ctaInk: "#0c0c0c",
  good: "#3dce84",
  near: "#e0b04d",
  bad: "#ff6b5c",
  goodFill: "#1b7a4e",
  nearFill: "#8a6a12",
  badFill: "#9f1510",
  ausente: "#9a9893",
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
