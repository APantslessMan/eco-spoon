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
    },
  },
  plugins: [

    require('daisyui'),
   
  ],
  daisyui: {
    themes: [
      {
        earthy: {
          "primary": "#D4E09B",
          "secondary": "#CBDFBD",
          "accent": "#F19C79",
          "neutral": "#F6F4D2",
          "base-100": "#ffffff",
        },
      },
      'bumblebee',
      'coffee',
      ],
  },
};
export default config;
