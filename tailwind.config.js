/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#1e293b",
        p2: "#0c1838",
        s1: "#f1f5f9",
        s2: "#0C1838",
        black: {
          DEFAULT: "#000000",
          100: "#05091D",
        },
      },
      fontFamily: {
        bruno: ["Bruno Ace", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};