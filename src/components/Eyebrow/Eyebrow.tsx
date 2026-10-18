import type { HTMLAttributes, ReactNode } from "react";
import "./Eyebrow.css";

export type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function Eyebrow({ className = "", children, ...rest }: EyebrowProps) {
  return (
    <p className={["ds-eyebrow", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </p>
  );
}
