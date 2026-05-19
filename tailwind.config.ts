import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06080d",
        panel: "#0d1119",
        graphite: "#151b24",
        line: "rgba(255,255,255,0.12)",
        signal: "#70f0c8",
        amberline: "#f6c177",
        steel: "#8ea4bd",
        muted: "#aebbd0"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(112, 240, 200, 0.18)",
        card: "0 24px 90px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
