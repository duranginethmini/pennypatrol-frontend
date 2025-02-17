import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#001f3d",
        },
        teal: {
          500: "#00B3B8",
        },
        coral: {
          500: "#FF7F50",
        },
        lightgray: "#F7F7F7",
        charcoal: "#333333",
        offwhite: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;


