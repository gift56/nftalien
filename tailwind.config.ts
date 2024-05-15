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
        primary: "#21E786",
        dark: "#141B22",
        graycolor: "#c2c3c5",
        bodydark: "#040B11",
      },
      fontFamily: {
        bak: '"Bakbak One", sans-serif',
      },
    },
  },
  plugins: [],
};
export default config;
