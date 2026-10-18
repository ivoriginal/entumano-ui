import type { Meta, StoryObj } from "@storybook/react-vite";
import { Verdict } from "../components/Verdict/Verdict";

const meta = {
  title: "Components/Verdict",
  component: Verdict,
  args: { tone: "hit", children: "Respuesta exacta · +1" },
} satisfies Meta<typeof Verdict>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hit: Story = {
  args: { tone: "hit", children: "Respuesta exacta · +1" },
};

export const Near: Story = {
  args: { tone: "near", children: "Casi · 0 puntos" },
};

export const Miss: Story = {
  args: { tone: "miss", children: "Dato oficial · 0 puntos" },
};

export const All: Story = {
  args: { tone: "hit", children: "—" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      <Verdict tone="hit">Respuesta exacta · +1</Verdict>
      <Verdict tone="near">Casi · 0 puntos</Verdict>
      <Verdict tone="miss">Dato oficial · 0 puntos</Verdict>
    </div>
  ),
};
