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
        graapes: {
          purple: "#6B46C1",
          light: "#E9D8FD",
          dark: "#44337A"
        },
        navy: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      }
    },
  },
  plugins: [],
};
export default config;
