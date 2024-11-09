import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
