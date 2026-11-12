import type { Meta, StoryObj } from "@storybook/react-vite";
import { PillElecciones } from "../components/PillElecciones/PillElecciones";

const textos = {
  dias: "días",
  elecciones: "hasta las elecciones del",
  constitucion: "hasta la constitución de las Cortes",
  legislatura: "de la XVI legislatura",
};

const meta = {
  title: "Dominio/PillElecciones",
  component: PillElecciones,
  args: { textos, href: "#" },
} satisfies Meta<typeof PillElecciones>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HastaElecciones: Story = { args: { ahora: new Date("2026-11-13T12:00:00+01:00").getTime() } };
export const HastaConstitucion: Story = { args: { ahora: new Date("2026-12-05T12:00:00+01:00").getTime() } };
export const Legislatura: Story = { args: { ahora: new Date("2026-12-30T12:00:00+01:00").getTime() } };
