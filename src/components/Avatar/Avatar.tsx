import type { HTMLAttributes } from "react";
import { cssColor } from "../../lib/css-color";
import { inkOnColor } from "../../lib/ink-on-color";
import "./Avatar.css";

export type AvatarProps = HTMLAttributes<HTMLElement> & {
  /** URL de la foto; sin ella se muestran las iniciales. */
  foto?: string;
  iniciales: string;
  /** Texto alternativo de la foto (p. ej. «Foto de Ana López»). */
  alt?: string;
  /** Color del grupo (CSS o "H S% L%"): borde de la foto o fondo de las iniciales. */
  color: string;
  size?: number;
};

export function Avatar({
  foto,
  iniciales,
  alt = "",
  color,
  size = 44,
  className = "",
  style,
  ...rest
}: AvatarProps) {
  const c = cssColor(color);
  const cls = ["ds-avatar", className].filter(Boolean).join(" ");
  if (foto) {
    return (
      <img
        src={foto}
        alt={alt}
        loading="lazy"
        width={size}
        height={size}
        className={`${cls} ds-avatar--foto`}
        style={{
          width: size,
          height: size,
          borderColor: c,
          background: `color-mix(in srgb, ${c} 15%, transparent)`,
          ...style,
        }}
        {...(rest as HTMLAttributes<HTMLImageElement>)}
      />
    );
  }
  return (
    <span
      className={cls}
      style={{ width: size, height: size, background: c, color: inkOnColor(color), fontSize: size * 0.36, ...style }}
      aria-hidden
      {...rest}
    >
      {iniciales}
    </span>
  );
}
