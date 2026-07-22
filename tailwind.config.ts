import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0F172A",
        border: "#1E293B",
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#60A5FA",
        },
        accent: "#06B6D4",
        text: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "24px",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(0,0,0,0.45)",
        glow: "0 0 60px -10px rgba(59,130,246,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.25), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "scale-in": "scaleIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
