import type { Meta, StoryObj } from "@storybook/react-vite";
import { PartidoLogo } from "../components/PartidoLogo/PartidoLogo";

const meta = {
  title: "Dominio/PartidoLogo",
  component: PartidoLogo,
  args: { siglas: "PSOE", color: "0 75% 45%", nombre: "Grupo Socialista" },
} satisfies Meta<typeof PartidoLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** La tinta cambia sola: ERC (ámbar) lleva texto oscuro, el resto blanco. */
export const TintaPorContraste: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <PartidoLogo siglas="PP" color="210 80% 40%" />
      <PartidoLogo siglas="PSOE" color="0 75% 45%" />
      <PartidoLogo siglas="Vox" color="100 50% 35%" />
      <PartidoLogo siglas="ERC" color="40 95% 45%" />
      <PartidoLogo siglas="U. Podemos" color="285 45% 42%" size={56} />
    </div>
  ),
};
