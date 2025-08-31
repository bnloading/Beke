/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Just: ["justanotherfont", "sans-serif"],
        Toy: ["KZRosaMarena", "sans-serif"],
      },
    },
  },
  plugins: [],
};
