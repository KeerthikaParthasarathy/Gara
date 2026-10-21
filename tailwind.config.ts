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
        obsidian: {
          DEFAULT: "#090909",
          dark: "#050505",
          light: "#111111",
        },
        charcoal: {
          DEFAULT: "#141414",
          light: "#1a1a1a",
          dark: "#0f0f0f",
        },
        graphite: {
          DEFAULT: "#1D1D1D",
          border: "#303030",
          hover: "#252525",
        },
        gold: {
          DEFAULT: "#C6A76A",
          soft: "#E1CC9B",
          dark: "#A38647",
          muted: "rgba(198, 167, 106, 0.15)",
        },
        ivory: {
          DEFAULT: "#F4F0E8",
          muted: "#A7A39B",
          dark: "#171717",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        editorial: ["var(--font-editorial)", "Playfair Display", "serif"],
      },
      letterSpacing: {
        widest_luxury: "0.25em",
        subtle: "0.05em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "rendition-pan": "renditionPan 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "rendition-editorial": "renditionEditorial 500ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        renditionPan: {
          "0%": { opacity: "0.7", transform: "translateX(-2%) scale(1.04)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        renditionEditorial: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
