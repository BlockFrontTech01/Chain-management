/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#2a2930",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "inknut-antiqua": "'Inknut Antiqua'",
        "hermeneus-one": "'Hermeneus One'",
        inika: "Inika",
        "gravitas-one": "'Gravitas One'",
        hanuman: "Hanuman",
      },
      borderRadius: {
        "41xl": "60px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      mid: "17px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
