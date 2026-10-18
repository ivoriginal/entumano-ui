import "./ProgressTicks.css";

export type TickState = "idle" | "now" | "hit" | "near" | "miss";

export type ProgressTicksProps = {
  ticks: TickState[];
  label?: string;
};

export function ProgressTicks({
  ticks,
  label = "Progreso",
}: ProgressTicksProps) {
  return (
    <div className="ds-progress" role="img" aria-label={label}>
      {ticks.map((state, i) => (
        <span
          key={i}
          className={["ds-tick", state !== "idle" ? `ds-tick--${state}` : ""]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}
