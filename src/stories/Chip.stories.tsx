import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "../components/Chip/Chip";

const meta = {
  title: "Dominio/Chip",
  component: Chip,
  args: { active: false, onClick: () => {}, children: "Todas" },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactivo: Story = {};
export const Activo: Story = { args: { active: true } };

function FiltrosDemo() {
  const [f, setF] = useState<string | null>(null);
  const items = ["Economía", "Vivienda", "Sanidad", "Educación"];
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip active={f === null} onClick={() => setF(null)}>Todas</Chip>
      {items.map((k) => (
        <Chip key={k} active={f === k} onClick={() => setF(k)}>{k}</Chip>
      ))}
    </div>
  );
}

export const Filtros: Story = { render: () => <FiltrosDemo /> };
