import type { Meta, StoryObj } from "@storybook/react-vite";
import { VotoPill } from "../components/VotoPill/VotoPill";

const meta = {
  title: "Dominio/VotoPill",
  component: VotoPill,
  args: { voto: "si" },
} satisfies Meta<typeof VotoPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Si: Story = { args: { voto: "si" } };
export const No: Story = { args: { voto: "no" } };
export const Abstencion: Story = { args: { voto: "abstencion" } };
export const Ausente: Story = { args: { voto: "ausente" } };

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <VotoPill voto="si" />
      <VotoPill voto="no" />
      <VotoPill voto="abstencion" />
      <VotoPill voto="ausente" />
    </div>
  ),
};
