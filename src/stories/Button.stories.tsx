import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Comprobar respuesta",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {};
export const Ghost: Story = { args: { variant: "ghost", children: "Saltar" } };
export const Small: Story = { args: { size: "sm", children: "Copiar" } };
export const Disabled: Story = { args: { disabled: true } };
