import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./EtiquetaRelacion.css";

export type EtiquetaRelacionProps = {
  /** Texto de la pill: «Directa», «Parcial», «Estimada»… */
  label: ReactNode;
  /** Explicación que se muestra al pulsar la «i». */
  explicacion: ReactNode;
  /** `estimada` se pinta en ámbar: el dato no es literal del programa. */
  tone?: "neutral" | "estimada";
  className?: string;
};

/** Pill con «i»: al pulsar muestra la explicación. Se cierra con Esc o clic fuera. */
export function EtiquetaRelacion({
  label,
  explicacion,
  tone = "neutral",
  className = "",
}: EtiquetaRelacionProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className={["ds-relacion", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        className={["ds-relacion__btn", `ds-relacion__btn--${tone}`].join(" ")}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className="ds-relacion__i" aria-hidden>i</span>
      </button>
      {open ? (
        <span id={panelId} role="note" className="ds-relacion__panel">
          <strong>{label}</strong>
          <span>{explicacion}</span>
        </span>
      ) : null}
    </span>
  );
}
