import type { HTMLAttributes } from "react";
import "./BarraRecuento.css";

export type Recuento = {
  si: number;
  no: number;
  abstencion: number;
  ausente: number;
};

export type BarraRecuentoProps = HTMLAttributes<HTMLDivElement> & {
  recuento: Recuento;
  /** Leyenda con cifras bajo la barra. */
  mostrarCifras?: boolean;
};

const SEGMENTOS = [
  { k: "si", leyenda: "sí" },
  { k: "no", leyenda: "no" },
  { k: "abstencion", leyenda: "abst." },
  { k: "ausente", leyenda: "no votan" },
] as const;

export function BarraRecuento({
  recuento: r,
  mostrarCifras = false,
  className = "",
  ...rest
}: BarraRecuentoProps) {
  const total = r.si + r.no + r.abstencion + r.ausente || 1;
  return (
    <div className={["ds-recuento", className].filter(Boolean).join(" ")} {...rest}>
      <div
        className="ds-recuento__bar"
        role="img"
        aria-label={`${r.si} a favor, ${r.no} en contra, ${r.abstencion} abstenciones, ${r.ausente} no votan`}
      >
        {SEGMENTOS.map((s) => (
          <span
            key={s.k}
            className={`ds-recuento__seg ds-recuento__seg--${s.k}`}
            style={{ width: `${(r[s.k] / total) * 100}%` }}
          />
        ))}
      </div>
      {mostrarCifras ? (
        <ul className="ds-recuento__legend">
          {SEGMENTOS.map((s) => (
            <li key={s.k}>
              <span className={`ds-recuento__dot ds-recuento__seg--${s.k}`} aria-hidden />
              {r[s.k]} {s.leyenda}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
