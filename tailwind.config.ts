import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        cyan: "#00E7FF",
        violet: "#8A4DFF",
        magenta: "#FF2FD6",
      },
    },
  },
  plugins: [],
};
export default config;
