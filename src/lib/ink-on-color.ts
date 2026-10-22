/**
 * Tinta legible sobre un fondo sólido (WCAG AA ≥4,5:1 para texto normal).
 * Elige blanco o tinta de marca (#141414) según luminancia relativa.
 */

export type InkOnColor = "#ffffff" | "#141414";

const INK: InkOnColor = "#141414";
const PAPER: InkOnColor = "#ffffff";

function srgbChannelToLinear(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(r: number, g: number, b: number): number {
  return (
    0.2126 * srgbChannelToLinear(r) +
    0.7152 * srgbChannelToLinear(g) +
    0.0722 * srgbChannelToLinear(b)
  );
}

function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Parsea hex (#rgb / #rrggbb), rgb()/rgba(), hsl()/hsla() o "H S% L%" (estilo Congreso). */
export function parseCssColorToRgb(
  input: string,
): { r: number; g: number; b: number } | null {
  const raw = input.trim();
  if (!raw) return null;

  const hex = raw.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    let h = hex[1]!;
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    };
  }

  const rgb = raw.match(
    /^rgba?\(\s*([.\d]+)\s*[, ]\s*([.\d]+)\s*[, ]\s*([.\d]+)/i,
  );
  if (rgb) {
    return {
      r: Math.min(255, Math.max(0, Number(rgb[1]))),
      g: Math.min(255, Math.max(0, Number(rgb[2]))),
      b: Math.min(255, Math.max(0, Number(rgb[3]))),
    };
  }

  const hslFn = raw.match(
    /^hsla?\(\s*([.\d]+)\s*[, ]\s*([.\d]+)%?\s*[, ]\s*([.\d]+)%?/i,
  );
  const hslBare = raw.match(/^([.\d]+)\s+([.\d]+)%\s+([.\d]+)%$/);
  const hsl = hslFn ?? hslBare;
  if (hsl) {
    const h = ((Number(hsl[1]) % 360) + 360) % 360;
    const s = Number(hsl[2]) / 100;
    const l = Number(hsl[3]) / 100;
    return hslToRgb(h, s, l);
  }

  return null;
}

function hslToRgb(
  h: number,
  s: number,
  l: number,
): { r: number; g: number; b: number } {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let rp = 0;
  let gp = 0;
  let bp = 0;
  if (h < 60) [rp, gp, bp] = [c, x, 0];
  else if (h < 120) [rp, gp, bp] = [x, c, 0];
  else if (h < 180) [rp, gp, bp] = [0, c, x];
  else if (h < 240) [rp, gp, bp] = [0, x, c];
  else if (h < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];
  return {
    r: Math.round((rp + m) * 255),
    g: Math.round((gp + m) * 255),
    b: Math.round((bp + m) * 255),
  };
}

/**
 * Devuelve `#ffffff` o `#141414` para texto/iconos sobre `background`.
 * Si no se puede parsear el color, asume fondo oscuro → blanco.
 */
export function inkOnColor(background: string): InkOnColor {
  const rgb = parseCssColorToRgb(background);
  if (!rgb) return PAPER;
  const L = relativeLuminance(rgb.r, rgb.g, rgb.b);
  const withWhite = contrastRatio(1, L);
  const withInk = contrastRatio(relativeLuminance(0x14, 0x14, 0x14), L);
  return withWhite >= withInk ? PAPER : INK;
}
