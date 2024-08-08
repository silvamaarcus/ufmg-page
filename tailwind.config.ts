import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      img_bg_hero: "url(../assets/img/bg-hero.png)",
    },
    extend: {
      fontFamily: {
        title: ["var(--font-family-title)", "sans-serif"],
        body: ["var(--font-family-body)", "sans-serif"],
      },
      colors: {
        "brand-color": "#1F3748",
        "brand-white-dark": "#E6E6E6",
        "brand-dark": "#454545",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
