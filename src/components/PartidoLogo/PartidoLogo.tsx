import type { HTMLAttributes } from "react";
import { cssColor } from "../../lib/css-color";
import { inkOnColor } from "../../lib/ink-on-color";
import "./PartidoLogo.css";

export type PartidoLogoProps = HTMLAttributes<HTMLSpanElement> & {
  siglas: string;
  /** Color oficial (CSS o "H S% L%"). */
  color: string;
  /** Nombre completo; va en `title`. */
  nombre?: string;
  size?: number;
};

/** Bloque de color oficial con siglas. La tinta se elige por contraste (AA). */
export function PartidoLogo({
  siglas,
  color,
  nombre,
  size = 36,
  className = "",
  style,
  ...rest
}: PartidoLogoProps) {
  return (
    <span
      className={["ds-partido", className].filter(Boolean).join(" ")}
      style={{
        width: size,
        height: size,
        background: cssColor(color),
        color: inkOnColor(color),
        fontSize: Math.max(9, size * (siglas.length > 4 ? Math.min(0.24, 1.9 / siglas.length) : 0.34)),
        ...style,
      }}
      title={nombre}
      aria-hidden
      {...rest}
    >
      {siglas}
    </span>
  );
}
