import type { HTMLAttributes, ReactNode } from "react";
import "./VotoPill.css";

import { VOTO_LABEL, type Voto } from "./voto-label";

export type { Voto };

export type VotoPillProps = HTMLAttributes<HTMLSpanElement> & {
  voto: Voto;
  /** Por defecto, la etiqueta en castellano de `VOTO_LABEL`. */
  children?: ReactNode;
};

export function VotoPill({ voto, className = "", children, ...rest }: VotoPillProps) {
  return (
    <span
      className={["ds-voto", `ds-voto--${voto}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children ?? VOTO_LABEL[voto]}
    </span>
  );
}
