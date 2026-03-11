/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#ee8c2b",
        "primary-dark": "#d97b1f",
        "background-light": "#f8f7f6",
        "background-dark": "#221910",
        "earth-green": "#4a6741",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
    },
  },
  plugins: [],
}

