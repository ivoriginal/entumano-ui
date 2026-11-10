import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { BarraRecuento, type Recuento } from "../BarraRecuento/BarraRecuento";
import "./LeyCard.css";

export type LeyCardProps = Omit<ComponentPropsWithoutRef<"a">, "title"> &
  Record<string, unknown> & {
    /** Elemento raíz: `"a"` por defecto; pasa tu `Link` de router para navegación SPA. */
    as?: ElementType;
    titulo: string;
    /** Fecha ya formateada. */
    fecha: string;
    categoria: string;
    icono?: ReactNode;
    aprobada: boolean;
    /** Etiquetas del estado, por i18n. */
    etiquetaAprobada?: string;
    etiquetaRechazada?: string;
    resumen?: string;
    /** «A quién afecta». */
    impacto?: string;
    etiquetaImpacto?: string;
    recuento: Recuento;
    /** Etiqueta del porcentaje, p. ej. «% del hemiciclo». */
    etiquetaPorcentaje?: string;
    /** Contenido extra entre el impacto y el recuento (avisos, votos por partido…). */
    children?: ReactNode;
  };

export function LeyCard({
  as: Root = "a",
  titulo,
  fecha,
  categoria,
  icono,
  aprobada,
  etiquetaAprobada = "Aprobada",
  etiquetaRechazada = "Rechazada",
  resumen,
  impacto,
  etiquetaImpacto = "A quién afecta",
  recuento,
  etiquetaPorcentaje = "% del hemiciclo",
  className = "",
  children,
  ...rest
}: LeyCardProps) {
  const total = recuento.si + recuento.no + recuento.abstencion + recuento.ausente || 1;
  return (
    <Root
      className={["ds-ley", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <span className={`ds-ley__head ds-ley__head--${aprobada ? "si" : "no"}`}>
        {icono ? <span className="ds-ley__icono" aria-hidden>{icono}</span> : null}
        <span className="ds-ley__kicker">{categoria}</span>
        <span className="ds-ley__kicker ds-ley__estado">
          {aprobada ? etiquetaAprobada : etiquetaRechazada}
        </span>
      </span>

      <span className="ds-ley__body">
        <span className="ds-ley__kicker ds-ley__fecha">{fecha}</span>
        <h2 className="ds-ley__titulo">{titulo}</h2>
        {resumen ? <p className="ds-ley__resumen">{resumen}</p> : null}
        {impacto ? (
          <p className="ds-ley__impacto">
            <span className="ds-ley__kicker">{etiquetaImpacto}</span> {impacto}
          </p>
        ) : null}
        {children}
        <span className="ds-ley__foot">
          <span className="ds-ley__cifras">
            <span className="ds-ley__num ds-ley__num--si">{recuento.si}</span>
            <span className="ds-ley__kicker">sí</span>
            <span className="ds-ley__num ds-ley__num--no">{recuento.no}</span>
            <span className="ds-ley__kicker">no</span>
            <span className="ds-ley__kicker ds-ley__pct">
              {Math.round((recuento.si / total) * 100)}
              {etiquetaPorcentaje}
            </span>
          </span>
          <BarraRecuento recuento={recuento} />
        </span>
      </span>
    </Root>
  );
}
