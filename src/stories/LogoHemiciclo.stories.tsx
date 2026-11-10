import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoHemiciclo } from "../components/LogoHemiciclo/LogoHemiciclo";

const meta = {
  title: "Dominio/LogoHemiciclo",
  component: LogoHemiciclo,
  args: { width: 96 },
} satisfies Meta<typeof LogoHemiciclo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
