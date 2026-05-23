import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        backgroundClaro: "var(--backgroundClaro)",
        inputColor: "var(--inputColor)",
        inputTextColor: "var(--inputTextColor)",
        header: "var(--header)",
        foreground: "#ffffff",
        primary: "#2563eb",
        secondary: "#64748b",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
} satisfies Config;
