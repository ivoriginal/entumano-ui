import type { Preview } from "@storybook/react-vite";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      options: {
        paper: { name: "Paper", value: "#f4f4f4" },
        surface: { name: "Surface", value: "#ffffff" },
        ink: { name: "Ink", value: "#111111" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  initialGlobals: {
    backgrounds: { value: "paper" },
  },
};

export default preview;
