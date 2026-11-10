import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarraRecuento } from "../components/BarraRecuento/BarraRecuento";

const meta = {
  title: "Dominio/BarraRecuento",
  component: BarraRecuento,
  args: { recuento: { si: 178, no: 169, abstencion: 0, ausente: 3 } },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>],
} satisfies Meta<typeof BarraRecuento>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
export const ConCifras: Story = { args: { mostrarCifras: true } };
export const Abstenciones: Story = {
  args: { mostrarCifras: true, recuento: { si: 120, no: 110, abstencion: 90, ausente: 30 } },
};
