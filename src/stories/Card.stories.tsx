import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card/Card";
import { Eyebrow } from "../components/Eyebrow/Eyebrow";
import { Button } from "../components/Button/Button";

function CardDemo() {
  return (
    <Card style={{ maxWidth: 420 }}>
      <Eyebrow>Pregunta 3 de 12</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(1.3rem, 4.8vw, 1.7rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        ¿Cuántos escaños tiene el Congreso?
      </h2>
      <p style={{ margin: 0, color: "var(--text-muted)" }}>
        Dato institucional del Reglamento, no una medición de actividad.
      </p>
      <Button>Comprobar</Button>
    </Card>
  );
}

const meta = {
  title: "Components/Card",
  component: CardDemo,
} satisfies Meta<typeof CardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Question: Story = {};
