/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter-reg": ["Inter-Regular", "sans-serif"],
        "inter-med": ["Inter-Medium", "sans-serif"],
        "inter-semi-bold": ["Inter-Semi-Bold", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.42rem",
        "2xl": "1.71rem",
        "3xl": "2.28rem",
        "4xl": "2.5rem",
        "5xl": [
          "3rem",
          {
            lineHeight: "3.8rem",
            letterSpacing: "0.01em",
            fontWeight: "900",
          },
        ],
      },
      colors: {
        "kj-grey": {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#DBDBDB",
          400: "#B5B5B5",
          500: "#4A4A4A",
          600: "#363636",
          700: "#242424",
          800: "#121212",
          900: "#0A0A0A",
        },
        "kj-warning": {
          light: "#FFFBEB",
          main: "#FFE08A",
          hover: "#FFDC7D",
          active: "#FFD970",
          dark: "#947600",
        },
        "kj-primary": {
          light: "#EBFFFC",
          main: "#70259B",
          hover: "#9939D0",
          active: "#D100C9",
          dark: "#00947E",
        },
        "kj-link": {
          light: "#EEF3FC",
          main: "#485FC7",
          hover: "#3E56C4",
          active: "#3A51BB",
          dark: "#384FB8",
        },
        "kj-info": {
          light: "#EEF6FC",
          main: "#209CEE",
          hover: "#3488CE",
          active: "#3082C5",
          dark: "#1D72AA",
        },
        "kj-success": {
          light: "#F0FAF4",
          main: "#48C78E",
          hover: "#3EC487",
          active: "#3ABB81",
          dark: "#257942",
        },
        "kj-danger": {
          light: "#FEECF0",
          main: "#FF3860",
          hover: "#F03A5F",
          active: "#EF2E55",
          dark: "#CC0F35",
        },
      },
      maxWidth: {
        "8xl": "85.375rem",
        "9xl": "90rem",
      },
    },
  },
  plugins: [],
};
