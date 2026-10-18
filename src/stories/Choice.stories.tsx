import type { Meta, StoryObj } from "@storybook/react-vite";
import { Choice } from "../components/Choice/Choice";

const meta = {
  title: "Components/Choice",
  component: Choice,
  args: { children: "Verdadero" },
} satisfies Meta<typeof Choice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 420 }}>
      <Choice>Verdadero</Choice>
      <Choice>Falso</Choice>
    </div>
  ),
};

export const Answered: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 420 }}>
      <Choice state="wrong" disabled>
        Verdadero
      </Choice>
      <Choice state="right" disabled>
        Falso
      </Choice>
    </div>
  ),
};
