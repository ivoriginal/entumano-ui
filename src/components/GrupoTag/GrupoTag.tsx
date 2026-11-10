import type { HTMLAttributes } from "react";
import { cssColor } from "../../lib/css-color";
import "./GrupoTag.css";

export type GrupoTagProps = HTMLAttributes<HTMLSpanElement> & {
  siglas: string;
  /** Color oficial del grupo (CSS o "H S% L%"). Sin él no se pinta el punto. */
  color?: string;
  /** Ocultar el punto cuando ya hay un `PartidoLogo` al lado. */
  dot?: boolean;
};

export function GrupoTag({ siglas, color, dot = true, className = "", ...rest }: GrupoTagProps) {
  return (
    <span className={["ds-grupo", className].filter(Boolean).join(" ")} {...rest}>
      {dot && color ? (
        <span className="ds-grupo__dot" style={{ background: cssColor(color) }} aria-hidden />
      ) : null}
      {siglas}
    </span>
  );
}
