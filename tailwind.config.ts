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
      backgroundImage: {
        cardLinear: "linear-gradient(137.5deg, #21E786 0.49%, #21E786 47.32%)",
      },
      boxShadow: {
        textshad: "0px 4px 16px 0px #FFFFFF66",
      },
    },
  },
  plugins: [],
};
export default config;
