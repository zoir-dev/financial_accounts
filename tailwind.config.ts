// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary2: "#C35427",
        primary3: "#DB987E",
        primary4: "#E6BBAA",
        secondary2: "#577EA9",
        secondary3: "#809DBD",
        secondary4: "#ACBED4",
        text1: "#101828",
        text2: "#475467",
        text3: "#344054",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          extend: "light",
          colors: {
            primary: {
              DEFAULT: "#C45329",
            },
            secondary: {
              DEFAULT: "#2E5D93",
            },
          },
        },
      },
    }),
  ],
};

export default config;
