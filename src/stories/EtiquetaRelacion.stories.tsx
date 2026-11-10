import type { Meta, StoryObj } from "@storybook/react-vite";
import { EtiquetaRelacion } from "../components/EtiquetaRelacion/EtiquetaRelacion";

const meta = {
  title: "Dominio/EtiquetaRelacion",
  component: EtiquetaRelacion,
  args: {
    label: "Directa",
    explicacion: "La ley desarrolla literalmente una medida del programa electoral.",
  },
  decorators: [(Story) => <div style={{ minHeight: 140 }}><Story /></div>],
} satisfies Meta<typeof EtiquetaRelacion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Directa: Story = {};
export const Parcial: Story = {
  args: { label: "Parcial", explicacion: "La ley toca el tema del programa, pero no lo cumple entero." },
};
export const Estimada: Story = {
  args: {
    label: "Estimada",
    tone: "estimada",
    explicacion: "Relación inferida: el programa no menciona la medida de forma literal.",
  },
};
