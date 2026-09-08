import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#f5f0eb",
          secondary: "#ffffff",
          tertiary: "#faf8f5",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#6b6b6b",
          tertiary: "#999999",
        },
        accent: {
          DEFAULT: "#2d5a3d",
          hover: "#1e3a2a",
          light: "#e8f0eb",
        },
        border: {
          DEFAULT: "#e5e0db",
          light: "#ede9e4",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;