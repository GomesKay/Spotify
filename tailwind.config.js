/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#B3B3B3",
      green: "#1ED760",
      greenui: "#1DB954",
      jet: "#292929",
      night: "#121212",
      purple: "#4C37D7",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      screens: {
        sm: { min: "320px", max: "425px" },
        // => @media (min-width: 320px and max-width: 425px)
        md: { min: "426px", max: "768px" },
        // => @media (min-width: 426px and max-width: 768px)
        lg: { min: "769px", max: "1024px" },
        // => @media (min-width: 769px and max-width: 1024px)
      },
    },
  },
  plugins: [],
};
