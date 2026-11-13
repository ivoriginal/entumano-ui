/**
 * Fechas del ciclo electoral 2026. Única fuente para todas las webs «en tu mano»:
 * si se mueven, se cambian aquí y se publica una versión nueva del DS.
 */

/** Elecciones generales del 29N (00:00, hora peninsular). */
export const ELECCIONES_29N = new Date("2026-11-29T00:00:00+01:00");

/** Sesión constitutiva de las Cortes (BOE-A-2026-20742): inicio de la XVI legislatura. */
export const CONSTITUCION_CORTES = new Date("2026-12-23T10:00:00+01:00");

export type FaseCiclo = "elecciones" | "hastaConstitucion" | "legislatura";

const DIA_MS = 24 * 60 * 60 * 1000;

/** Fase del ciclo y días: hasta el 29N → hasta la constitución → días de legislatura. */
export function faseCiclo(ahora: number = Date.now()): { fase: FaseCiclo; dias: number } {
  const constitucion = CONSTITUCION_CORTES.getTime();
  const elecciones = ELECCIONES_29N.getTime();
  if (ahora >= constitucion) return { fase: "legislatura", dias: Math.floor((ahora - constitucion) / DIA_MS) };
  if (ahora >= elecciones) return { fase: "hastaConstitucion", dias: Math.max(0, Math.ceil((constitucion - ahora) / DIA_MS)) };
  return { fase: "elecciones", dias: Math.ceil((elecciones - ahora) / DIA_MS) };
}
