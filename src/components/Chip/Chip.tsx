import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Chip.css";

export type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

/** Filtro conmutable (`aria-pressed`). No se aplasta en filas con scroll horizontal. */
export function Chip({ active, onClick, className = "", children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={["ds-chip", active ? "ds-chip--active" : "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
