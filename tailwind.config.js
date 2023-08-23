/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "San-Serif"],
        inter: ["Inter", "San-Serif"],
      }
    },
  },
  plugins: [],
}

