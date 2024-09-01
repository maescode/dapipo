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
      backgroundPosition: {
        "gallery-custom-position": "top right 80px, bottom left 80px",
        "team-custom-position": "bottom right, bottom left 80px",
      },

      colors: {
        green: {
          100: "#00715D",
        },
        blue: {
          100: "#E9F7F8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
