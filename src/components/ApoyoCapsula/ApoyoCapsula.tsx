import { useEffect, useState } from "react";
import "./ApoyoCapsula.css";

const PATREON_URL = "https://patreon.com/ivoriginal";
const KOFI_URL = "https://ko-fi.com/ivitodr";

export type RedApoyo = "patreon" | "kofi";

type ComunProps = {
  /** Se llama al pulsar un botón (para analítica). */
  onApoyo?: (red: RedApoyo) => void;
  patreonHref?: string;
  kofiHref?: string;
};

function IconPatreon() {
  return (
    <svg className="ds-apoyo-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
    </svg>
  );
}

function IconKofi() {
  return (
    <svg className="ds-apoyo-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  );
}

function Botones({ onApoyo, patreonHref = PATREON_URL, kofiHref = KOFI_URL }: ComunProps) {
  return (
    <>
      <a className="ds-apoyo-btn" href={patreonHref} target="_blank" rel="noopener noreferrer" onClick={() => onApoyo?.("patreon")}>
        <IconPatreon />
        Patreon
      </a>
      <a className="ds-apoyo-btn" href={kofiHref} target="_blank" rel="noopener noreferrer" onClick={() => onApoyo?.("kofi")}>
        <IconKofi />
        Ko-fi
      </a>
    </>
  );
}

export type ApoyoBotonesProps = ComunProps & { className?: string };

/** Patreon y Ko-fi en línea (menú, pie, «acerca de»). Los dos blancos, iguales en claro y oscuro. */
export function ApoyoBotones({ className = "", ...rest }: ApoyoBotonesProps) {
  return (
    <span className={["ds-apoyo-fila", className].filter(Boolean).join(" ")}>
      <Botones {...rest} />
    </span>
  );
}

function useVisibleAlBajar(apareceTras: number, margenPie: number) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    const calcular = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cercaDelPie = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - margenPie;
        setVisible(window.scrollY > window.innerHeight * apareceTras && !cercaDelPie);
      });
    };
    calcular();
    window.addEventListener("scroll", calcular, { passive: true });
    window.addEventListener("resize", calcular);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", calcular);
      window.removeEventListener("resize", calcular);
    };
  }, [apareceTras, margenPie]);
  return visible;
}

export type ApoyoCapsulaProps = ComunProps & {
  /** Texto de la cápsula y `aria-label` (ya traducido por la web). */
  etiqueta?: string;
  /** En escritorio, pantallas de scroll antes de aparecer. */
  apareceTras?: number;
  /** En escritorio, px desde el final de la página a partir de los cuales se esconde. */
  margenPie?: number;
  /** Fuerza la cápsula visible (stories, tests). */
  siempreVisible?: boolean;
};

/**
 * Apoyo fijo: barra inferior en móvil (siempre) y cápsula abajo a la izquierda en escritorio, que sale
 * al bajar por la página y se esconde cerca del pie. La web que lo monte debe dejar ~4,5rem de
 * `padding-bottom` en móvil.
 */
export function ApoyoCapsula({
  etiqueta = "Apoya el proyecto",
  apareceTras = 0.8,
  margenPie = 360,
  siempreVisible = false,
  ...rest
}: ApoyoCapsulaProps) {
  const visibleScroll = useVisibleAlBajar(apareceTras, margenPie);
  const visible = siempreVisible || visibleScroll;
  return (
    <nav aria-label={etiqueta} className={["ds-apoyo", visible ? "ds-apoyo--visible" : ""].filter(Boolean).join(" ")}>
      <span className="ds-apoyo-texto">{etiqueta}</span>
      <Botones {...rest} />
    </nav>
  );
}
