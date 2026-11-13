import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApoyoBotones, ApoyoCapsula } from "../components/ApoyoCapsula/ApoyoCapsula";

const meta = {
  title: "Dominio/ApoyoCapsula",
  component: ApoyoCapsula,
  parameters: { layout: "fullscreen" },
  args: { siempreVisible: true },
} satisfies Meta<typeof ApoyoCapsula>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Escritorio: cápsula; por debajo de 640 px pasa a barra inferior. */
export const Capsula: Story = { render: (args) => <div style={{ minHeight: 240 }}><ApoyoCapsula {...args} /></div> };

export const EnLinea: StoryObj = { render: () => <div style={{ padding: 24 }}><ApoyoBotones /></div> };
