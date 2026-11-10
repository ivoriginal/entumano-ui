import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/Avatar/Avatar";

const meta = {
  title: "Dominio/Avatar",
  component: Avatar,
  args: { iniciales: "AL", color: "0 75% 45%", size: 56 },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Iniciales: Story = {};
export const Foto: Story = {
  args: {
    foto: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='%23c9c9c4'/><circle cx='32' cy='26' r='12' fill='%23888'/><ellipse cx='32' cy='62' rx='22' ry='18' fill='%23888'/></svg>",
    alt: "Foto de Ana López",
  },
};
