import type { Meta, StoryObj } from "@storybook/react-vite";

const SWATCHES = [
  { name: "bg", varName: "--bg" },
  { name: "surface", varName: "--surface" },
  { name: "ink", varName: "--ink" },
  { name: "muted", varName: "--text-muted" },
  { name: "line", varName: "--line" },
  { name: "track", varName: "--track" },
  { name: "cta", varName: "--cta" },
  { name: "cta-ink", varName: "--cta-ink" },
  { name: "good", varName: "--good" },
  { name: "near", varName: "--near" },
  { name: "bad", varName: "--bad" },
] as const;

const TYPE_ROLES = [
  {
    name: "display",
    token: "--type-display",
    sample: "La política, en tu mano",
    note: "Hero / banda primaria. Tracking display.",
    tracking: "var(--tracking-display)",
  },
  {
    name: "score",
    token: "--type-score",
    sample: "176",
    note: "Marcadores grandes (quiz / resultado).",
  },
  {
    name: "title",
    token: "--type-title",
    sample: "Ley de Vivienda",
    note: "Títulos de card y sección. Tracking title.",
    tracking: "var(--tracking-title)",
  },
  {
    name: "stat",
    token: "--type-stat",
    sample: "167 NO",
    note: "Cifras de recuento en cards.",
  },
  {
    name: "lead",
    token: "--type-lead",
    sample: "Resumen corto bajo un título, una idea por frase.",
    note: "Párrafo de apoyo / lede.",
  },
  {
    name: "body",
    token: "--type-body",
    sample:
      "Cuerpo por defecto. La transparencia parlamentaria se lee mejor sin ruido de color.",
    note: "Base del documento (también en body).",
  },
  {
    name: "caption",
    token: "--type-caption",
    sample:
      "Texto secundario: impacto, pies, bloques de lectura en cards.",
    note: "sm + leading relaxed.",
  },
  {
    name: "ui",
    token: "--type-ui",
    sample: "Seguir votación",
    note: "Botones y Choice.",
  },
  {
    name: "label",
    token: "--type-label",
    sample: "SÍ · NO · ABSTENCIÓN",
    note: "Pills, tags compactos.",
  },
  {
    name: "eyebrow",
    token: "--type-eyebrow",
    sample: "Vivienda",
    note: "Mono uppercase + tracking meta.",
    tracking: "var(--tracking-meta)",
    transform: "uppercase" as const,
  },
  {
    name: "meta",
    token: "--type-meta",
    sample: "Fuente · BOE · 27 abr 2023",
    note: "Meta con leading snug.",
    tracking: "var(--tracking-meta)",
    transform: "uppercase" as const,
  },
] as const;

const TEXT_SIZES = [
  ["--text-xs", "0.75rem"],
  ["--text-sm", "0.875rem"],
  ["--text-md", "1rem"],
  ["--text-ui", "1.0625rem"],
  ["--text-lg", "1.125rem"],
  ["--text-xl", "1.5rem"],
  ["--text-2xl", "1.875rem"],
  ["--text-3xl", "clamp hero"],
  ["--text-4xl", "clamp score"],
] as const;

const LEADINGS = [
  ["--leading-none", "1"],
  ["--leading-tight", "1.2"],
  ["--leading-snug", "1.4"],
  ["--leading-normal", "1.5"],
  ["--leading-relaxed", "1.75"],
] as const;

function TokensBoard() {
  return (
    <div style={{ display: "grid", gap: 28, maxWidth: 720 }}>
      <div>
        <p
          style={{
            font: "var(--type-eyebrow)",
            letterSpacing: "var(--tracking-meta)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          Tokens · color
        </p>
        <h1
          style={{
            font: "var(--type-display)",
            letterSpacing: "var(--tracking-display)",
            margin: "6px 0 0",
          }}
        >
          Congreso design system
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "46ch", margin: "8px 0 0" }}>
          Chrome neutro; semántica de voto en color. Tipografía: ver story Type.
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
                  font: "var(--weight-medium) 11px/1.3 var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {s.varName}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeBoard() {
  return (
    <div style={{ display: "grid", gap: 32, maxWidth: 720 }}>
      <div>
        <p
          style={{
            font: "var(--type-eyebrow)",
            letterSpacing: "var(--tracking-meta)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          Tokens · tipografía
        </p>
        <h1
          style={{
            font: "var(--type-display)",
            letterSpacing: "var(--tracking-display)",
            margin: "6px 0 0",
          }}
        >
          Escala y roles
        </h1>
        <p
          style={{
            font: "var(--type-body)",
            color: "var(--text-muted)",
            maxWidth: "52ch",
            margin: "8px 0 0",
          }}
        >
          Preferir roles (<code>--type-*</code>) en UI. Átomos (
          <code>--text-*</code>, <code>--leading-*</code>) solo al componer.
          No inventar line-heights sueltos en las webs.
        </p>
      </div>

      <section style={{ display: "grid", gap: 16 }}>
        {TYPE_ROLES.map((role) => (
          <div
            key={role.name}
            style={{
              display: "grid",
              gap: 6,
              padding: "14px 16px",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px 12px",
                alignItems: "baseline",
              }}
            >
              <code
                style={{
                  font: "var(--type-meta)",
                  letterSpacing: "var(--tracking-meta)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {role.token}
              </code>
              <span
                style={{
                  font: "var(--type-caption)",
                  color: "var(--text-muted)",
                }}
              >
                {role.note}
              </span>
            </div>
            <p
              style={{
                margin: 0,
                font: `var(${role.token})`,
                letterSpacing: "tracking" in role ? role.tracking : undefined,
                textTransform: "transform" in role ? role.transform : undefined,
              }}
            >
              {role.sample}
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          display: "grid",
          gap: 12,
          padding: 16,
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-md)",
          background: "var(--surface)",
        }}
      >
        <p
          style={{
            margin: 0,
            font: "var(--type-eyebrow)",
            letterSpacing: "var(--tracking-meta)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Átomos
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 6,
              font: "var(--type-caption)",
            }}
          >
            {TEXT_SIZES.map(([token, value]) => (
              <li key={token}>
                <code style={{ fontFamily: "var(--font-mono)" }}>{token}</code>{" "}
                <span style={{ color: "var(--text-muted)" }}>{value}</span>
              </li>
            ))}
          </ul>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 6,
              font: "var(--type-caption)",
            }}
          >
            {LEADINGS.map(([token, value]) => (
              <li key={token}>
                <code style={{ fontFamily: "var(--font-mono)" }}>{token}</code>{" "}
                <span style={{ color: "var(--text-muted)" }}>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <p style={{ margin: 0, font: "var(--type-caption)", color: "var(--text-muted)" }}>
          Familias: <code>--font-display</code>, <code>--font-body</code>,{" "}
          <code>--font-mono</code>. Tracking: <code>--tracking-display</code>,{" "}
          <code>--tracking-title</code>, <code>--tracking-meta</code>.
        </p>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundation/Tokens",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => <TokensBoard />,
};

export const Type: Story = {
  name: "Type",
  render: () => <TypeBoard />,
};
