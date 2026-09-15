import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E11",
        panel: "#10151A",
        "panel-border": "#1E262D",
        text: "#E8EDF0",
        "text-dim": "#8B98A3",
        "text-faint": "#556069",
        accent: "#22D3EE",
        "accent-dim": "#0E5A66",
        "accent-glow": "rgba(34, 211, 238, 0.12)",
        green: "#4ADE80",
      },
      fontFamily: {
        disp: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
