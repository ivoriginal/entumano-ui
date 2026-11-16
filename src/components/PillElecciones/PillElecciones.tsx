import { Fragment, useEffect, useState, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { faseCiclo, type FaseCiclo } from "../../lib/fechas-29n";
import "./PillElecciones.css";

export type PillEleccionesTextos = {
  /** «días» */
  dias: string;
  /** Entre los días y «29N»: «hasta las elecciones del» */
  elecciones: string;
  /** Tras los días: «hasta la constitución de las Cortes» */
  constitucion: string;
  /** Tras los días: «de la XVI legislatura» */
  legislatura: string;
  /**
   * Opcional. Orden propio de las piezas hasta las elecciones, para idiomas cuya sintaxis no es
   * «días + texto + fecha». Marcadores: `{dias}` (p. ej. «13 días», en negrita) y `{fecha}` («29N», en negrita).
   * Por defecto: `{dias} ${elecciones} {fecha}`. Ejemplo en euskera: `{fecha} hauteskundeetarako {dias} falta dira`.
   */
  plantillaElecciones?: string;
  /** Opcional. Marcador `{dias}`. Por defecto: `{dias} ${constitucion}`. */
  plantillaConstitucion?: string;
  /** Opcional. Marcador `{dias}`. Por defecto: `{dias} ${legislatura}`. */
  plantillaLegislatura?: string;
};

/** Parte una plantilla en texto suelto y marcadores `{dias}` / `{fecha}`; el texto suelto va en `<span>` (la pill es un flex con `gap`). */
function piezas(plantilla: string, nodos: { dias: ReactNode; fecha: ReactNode }): ReactNode[] {
  return plantilla
    .split(/(\{dias\}|\{fecha\})/)
    .map((parte, i) => {
      if (parte === "{dias}") return <Fragment key={i}>{nodos.dias}</Fragment>;
      if (parte === "{fecha}") return <Fragment key={i}>{nodos.fecha}</Fragment>;
      const texto = parte.trim();
      return texto ? <span key={i}>{texto}</span> : null;
    })
    .filter(Boolean);
}

export type PillEleccionesProps = Omit<ComponentPropsWithoutRef<"a">, "children"> &
  Record<string, unknown> & {
    /** Elemento raíz: `"a"` por defecto; pasa tu `Link` de router para navegación SPA. */
    as?: ElementType;
    /** Textos ya traducidos por la web. */
    textos: PillEleccionesTextos;
    /** Instante fijo (stories, tests). Por defecto, la hora actual, refrescada cada minuto. */
    ahora?: number;
  };

/**
 * Pill de una línea con la cuenta atrás del 29N. Tras el 29N → días hasta la constitución de las
 * Cortes; luego → días de legislatura. Las fechas viven en `fechas-29n.ts`.
 */
export function PillElecciones({ as: Root = "a", textos, ahora, className = "", ...rest }: PillEleccionesProps) {
  // Sin fecha en el primer render: el HTML del servidor puede ser de otro día (React #418).
  const [vivo, setVivo] = useState<{ fase: FaseCiclo; dias: number } | null>(null);

  useEffect(() => {
    if (ahora != null) return;
    const tick = () => setVivo(faseCiclo());
    const inicio = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 60_000);
    return () => {
      window.clearTimeout(inicio);
      window.clearInterval(id);
    };
  }, [ahora]);

  const estado = ahora != null ? faseCiclo(ahora) : vivo;
  const fase = estado?.fase ?? "elecciones";
  const nodos = {
    dias: (
      <strong className="ds-pill-elecciones__fuerte ds-pill-elecciones__num">
        {estado?.dias ?? "–"} {textos.dias}
      </strong>
    ),
    fecha: <strong className="ds-pill-elecciones__fuerte">29N</strong>,
  };
  const plantilla =
    fase === "elecciones"
      ? (textos.plantillaElecciones ?? `{dias} ${textos.elecciones} {fecha}`)
      : fase === "hastaConstitucion"
        ? (textos.plantillaConstitucion ?? `{dias} ${textos.constitucion}`)
        : (textos.plantillaLegislatura ?? `{dias} ${textos.legislatura}`);
  return (
    <Root className={["ds-pill-elecciones", className].filter(Boolean).join(" ")} {...rest}>
      {piezas(plantilla, nodos)}
      <span aria-hidden>→</span>
    </Root>
  );
}
