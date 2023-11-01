import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        showContent: {
          "0%": { top: "-5rem", opacity: "0" },
          "100%": { top: "0", opacity: "1" },
        },
        hideContent: {
          "0%": { top: "0", opacity: "1" },
          "100%": { top: "-5rem", opacity: "0", display: "none" },
        },
      },
      animation: {
        showContent: "showContent 1s ease-in-out",
        hideContent: "hideContent 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
