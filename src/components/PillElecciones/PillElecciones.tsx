import { useEffect, useState, type ComponentPropsWithoutRef, type ElementType } from "react";
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
};

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
  return (
    <Root className={["ds-pill-elecciones", className].filter(Boolean).join(" ")} {...rest}>
      <strong className="ds-pill-elecciones__fuerte ds-pill-elecciones__num">
        {estado?.dias ?? "–"} {textos.dias}
      </strong>
      {fase === "elecciones" ? (
        <>
          <span>{textos.elecciones}</span>
          <strong className="ds-pill-elecciones__fuerte">29N</strong>
        </>
      ) : (
        <span>{fase === "hastaConstitucion" ? textos.constitucion : textos.legislatura}</span>
      )}
      <span aria-hidden>→</span>
    </Root>
  );
}
