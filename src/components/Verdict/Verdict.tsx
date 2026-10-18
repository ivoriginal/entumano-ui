import type { HTMLAttributes, ReactNode } from "react";
import "./Verdict.css";

export type VerdictTone = "hit" | "near" | "miss";

export type VerdictProps = HTMLAttributes<HTMLParagraphElement> & {
  tone: VerdictTone;
  children: ReactNode;
};

export function Verdict({ tone, className = "", children, ...rest }: VerdictProps) {
  return (
    <p
      className={["ds-verdict", `ds-verdict--${tone}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </p>
  );
}
