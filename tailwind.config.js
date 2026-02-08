/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2596be",
          50: "#238cb2",
          100: "#238cb2",
          200: "#1d708f",
        },
        secondary: {
          DEFAULT: "#e6d51c",
          50: "#cfbf1b",
          100: "#b9ac1a",
          200: "#a89c17",
        },
        tertiary: {
          DEFAULT: "#242a31",
          50: "#1d2127",
          100: "#b9ac1a",
          200: "#a89c17",
        },
      },
    },
  },
  plugins: [],
};
