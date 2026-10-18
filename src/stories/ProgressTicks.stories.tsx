import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressTicks } from "../components/ProgressTicks/ProgressTicks";

const meta = {
  title: "Components/ProgressTicks",
  component: ProgressTicks,
} satisfies Meta<typeof ProgressTicks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MidGame: Story = {
  args: {
    ticks: ["hit", "miss", "near", "now", "idle", "idle", "idle", "idle", "idle", "idle", "idle", "idle"],
  },
};

export const Finished: Story = {
  args: {
    ticks: [
      "hit",
      "hit",
      "miss",
      "near",
      "hit",
      "miss",
      "hit",
      "near",
      "miss",
      "hit",
      "hit",
      "miss",
    ],
  },
};
