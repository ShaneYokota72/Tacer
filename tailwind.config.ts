import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        "18": '72px',
      },
      dropShadow: {
        'tacerPurple': '0 4px 4px rgba(95,59,147, 0.25)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary": "#7A08FA",
        "secondary": "#A82FFC",
        "accent": "#C264FE",
        "subtle": "#F8ECFD",

        "text": "#FDFCFF", // white

        "background": "#B05DE5",
        "tacer": "#A63AD9",
        "dark-tacer": "#8628B4"
      },
      animation: {
        'spin-slow': 'spin-slow 4s linear infinite',
        'move': 'move 5s linear infinite',
      },
      keyframes: {
        'move': {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        }
      },
    },
  },
  plugins: [],
};
export default config;