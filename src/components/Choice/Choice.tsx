import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Choice.css";

export type ChoiceState = "default" | "right" | "wrong";

export type ChoiceProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ChoiceState;
  children: ReactNode;
};

export function Choice({
  state = "default",
  className = "",
  children,
  type = "button",
  ...rest
}: ChoiceProps) {
  const stateClass =
    state === "right" ? "ds-choice--right" : state === "wrong" ? "ds-choice--wrong" : "";
  return (
    <button
      type={type}
      className={["ds-choice", stateClass, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
