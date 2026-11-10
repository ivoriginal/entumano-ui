/**
 * Acepta cualquier color CSS y también el formato "H S% L%" (triplete HSL sin
 * función) que usan los datos del Congreso: "285 45% 42%" → "hsl(285 45% 42%)".
 */
export function cssColor(color: string): string {
  const c = color.trim();
  return /^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(c) ? `hsl(${c})` : c;
}
