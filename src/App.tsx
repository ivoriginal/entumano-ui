import "./styles/base.css";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Choice } from "./components/Choice/Choice";
import { Eyebrow } from "./components/Eyebrow/Eyebrow";
import { ProgressTicks } from "./components/ProgressTicks/ProgressTicks";
import { Verdict } from "./components/Verdict/Verdict";

export default function App() {
  return (
    <main style={{ maxWidth: 620, margin: "0 auto", padding: "28px 16px 56px", display: "grid", gap: 18 }}>
      <header style={{ display: "grid", gap: 6 }}>
        <Eyebrow>Design system · B&amp;W</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.9rem,7vw,2.6rem)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: 0 }}>
          Congreso
        </h1>
        <p style={{ margin: 0, color: "var(--text-muted)", maxWidth: "46ch" }}>
          Preview local. El catálogo vivo está en Storybook.
        </p>
      </header>
      <ProgressTicks ticks={["hit", "miss", "near", "now", "idle", "idle"]} />
      <Card>
        <Eyebrow>Pregunta 4 de 12</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", margin: 0 }}>
          ¿El Senado puede enmendar un real decreto-ley?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <Choice>Verdadero</Choice>
          <Choice>Falso</Choice>
        </div>
        <Verdict tone="hit">Respuesta exacta · +1</Verdict>
        <Button>Siguiente</Button>
      </Card>
    </main>
  );
}
