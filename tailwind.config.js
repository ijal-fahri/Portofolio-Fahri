/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b ",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};


