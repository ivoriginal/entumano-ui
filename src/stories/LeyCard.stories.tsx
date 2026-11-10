import type { Meta, StoryObj } from "@storybook/react-vite";
import { LeyCard } from "../components/LeyCard/LeyCard";

const base = {
  titulo: "Ley de Vivienda",
  fecha: "27 de abril de 2023",
  categoria: "Vivienda",
  aprobada: true,
  resumen:
    "Regula zonas tensionadas de alquiler, limita las subidas de los contratos y define incentivos fiscales para los propietarios que bajen rentas.",
  impacto: "Inquilinos y propietarios de viviendas en zonas tensionadas.",
  recuento: { si: 176, no: 167, abstencion: 5, ausente: 2 },
  href: "#",
};

const meta = {
  title: "Dominio/LeyCard",
  component: LeyCard,
  args: base,
  decorators: [(Story) => <div style={{ maxWidth: 400 }}><Story /></div>],
} satisfies Meta<typeof LeyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Aprobada: Story = {};
export const Rechazada: Story = {
  args: {
    titulo: "Reforma del Reglamento",
    categoria: "Institucional",
    aprobada: false,
    recuento: { si: 121, no: 177, abstencion: 48, ausente: 4 },
  },
};
