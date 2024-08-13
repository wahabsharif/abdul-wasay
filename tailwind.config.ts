import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
    colors: {
      devIcon: "#0d9488",
      celticPrim: "#2C3531",
      blueStonePrim: "#116466",
      brandy: "#D9B08C",
      peachOrange: "#FFCB91",
      hummingBird: "#D1E8E2",
      celtic: {
        50: "#e5f0f2",
        100: "#c6e0e5",
        200: "#a2d0d2",
        300: "#7fbdbf",
        400: "#5ab4b2",
        500: "#2d9d9b",
        600: "#287b79",
        700: "#1f5e5a",
        800: "#164e4a",
        900: "#0f3b37",
        950: "#062b26",
      },
      blueStone: {
        50: "#f0f4f8",
        100: "#d9e1e8",
        200: "#b4c2d1",
        300: "#8f9bb6",
        400: "#6b7a9e",
        500: "#4a5a7a",
        600: "#3d4a64",
        700: "#2f3b50",
        800: "#1e2934",
        900: "#0f172a",
        950: "#081220",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
  },
  plugins: [],
};
export default config;
