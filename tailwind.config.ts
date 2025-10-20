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
        bg: "var(--bg)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        fg: "var(--fg)",

        // keep your existing sets for one-off use:
        primary: { DEFAULT: "#1e3a5f", light: "#2c5282", dark: "#152a45" },
        secondary: { DEFAULT: "#8b9f87", light: "#a8b9a5", dark: "#6d7d6a" },
        accentFixed: { DEFAULT: "#b5a8c5", light: "#d1c7dd", dark: "#9381a8" }, // renamed to avoid clash
        sage: "#8b9f87",
        lavender: "#b5a8c5",
        navy: "#1e3a5f",
      },
    },
  },
  plugins: [],
};
export default config;
