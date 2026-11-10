import type { SVGAttributes } from "react";

/** Hemiciclo del Congreso: logotipo de marca (mismo dibujo que favicon e iconos de la app). Usa `currentColor`. */
export function LogoHemiciclo(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="40 112 432 284" fill="currentColor" aria-hidden {...props}>
      <path d="M128.00 330.00 A128 128 0 0 1 176.03 230.05 L214.77 278.47 A66 66 0 0 0 190.00 330.00Z" />
      <path d="M200.56 214.63 A128 128 0 0 1 311.44 214.63 L284.59 270.51 A66 66 0 0 0 227.41 270.51Z" />
      <path d="M335.97 230.05 A128 128 0 0 1 384.00 330.00 L322.00 330.00 A66 66 0 0 0 297.23 278.47Z" />
      <path d="M44.00 330.00 A212 212 0 0 1 135.49 155.58 L170.73 206.59 A150 150 0 0 0 106.00 330.00Z" />
      <path d="M157.52 142.26 A212 212 0 0 1 354.48 142.26 L325.68 197.16 A150 150 0 0 0 186.32 197.16Z" />
      <path d="M376.51 155.58 A212 212 0 0 1 468.00 330.00 L406.00 330.00 A150 150 0 0 0 341.27 206.59Z" />
      <rect x="44" y="352" width="424" height="40" rx="20" />
    </svg>
  );
}
