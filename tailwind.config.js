/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
      colors: {
        highlight: {
          light: "hsl(227, 82%, 62%)",
          base: "hsl(227, 82%, 56%)",
          dark: "hsl(227, 82%, 49%)",
        },
        accent: "hsl(306, 93%, 66%)",
        secondary: "hsl(281, 68%, 31%)",
        background: "hsl(252, 8%, 12%)",
      },
      fontFamily: {
        sans: ["Neue Montreal", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
