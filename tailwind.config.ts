import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        boxShadow: {
          'white': '0 4px 8px rgba(255, 255, 255, 0.5)', // Custom white shadow
        },
        textShadow: {
          'white': '2px 2px 4px rgba(255, 255, 255, 0.7)', // Custom white text shadow
        },
    },
  },
  plugins: [],
};
export default config;
