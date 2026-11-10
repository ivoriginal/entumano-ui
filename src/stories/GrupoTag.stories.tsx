import type { Meta, StoryObj } from "@storybook/react-vite";
import { GrupoTag } from "../components/GrupoTag/GrupoTag";

const meta = {
  title: "Dominio/GrupoTag",
  component: GrupoTag,
  args: { siglas: "PSOE", color: "0 75% 45%" },
} satisfies Meta<typeof GrupoTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Con_punto: Story = {};
export const Sin_punto: Story = { args: { dot: false } };
