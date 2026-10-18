import type { Meta, StoryObj } from "@storybook/react-vite";

const SWATCHES = [
  { name: "bg", varName: "--bg" },
  { name: "surface", varName: "--surface" },
  { name: "ink", varName: "--ink" },
  { name: "muted", varName: "--muted" },
  { name: "line", varName: "--line" },
  { name: "track", varName: "--track" },
  { name: "accent", varName: "--accent" },
  { name: "accent-ink", varName: "--accent-ink" },
  { name: "good", varName: "--good" },
  { name: "near", varName: "--near" },
  { name: "bad", varName: "--bad" },
] as const;

function TokensBoard() {
  return (
    <div style={{ display: "grid", gap: 28, maxWidth: 720 }}>
      <div>
        <p
          style={{
            font: "500 0.75rem/1 var(--font-mono)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Tokens · blanco y negro
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 7vw, 2.6rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            margin: "6px 0 0",
          }}
        >
          Congreso design system
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "46ch", margin: "8px 0 0" }}>
          Misma tipografía y ritmo que el artefacto «Datos que no imaginabas»;
          paleta en escala de grises (sin verde).
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 10,
        }}
      >
        {SWATCHES.map((s) => (
          <div
            key={s.name}
            style={{
              border: "1px solid var(--line)",
              borderRadius: 10,
              overflow: "hidden",
              background: "var(--surface)",
            }}
          >
            <div style={{ height: 72, background: `var(${s.varName})` }} />
            <div style={{ padding: "8px 10px" }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</div>
              <code
                style={{
                  font: "500 11px var(--font-mono)",
                  color: "var(--muted)",
                }}
              >
                {s.varName}
              </code>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gap: 12,
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 14,
          padding: 20,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.5rem",
            margin: 0,
          }}
        >
          Bricolage Grotesque — display
        </p>
        <p style={{ fontFamily: "var(--font-body)", margin: 0 }}>
          IBM Plex Sans — cuerpo. La transparencia parlamentaria se lee mejor
          sin ruido de color.
        </p>
        <p
          style={{
            font: "500 0.75rem/1.3 var(--font-mono)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: 0,
          }}
        >
          IBM Plex Mono — meta / eyebrow
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Foundation/Tokens",
  component: TokensBoard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof TokensBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {};
