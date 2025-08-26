/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
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
      // Tambahkan bagian keyframes dan animation di sini
      keyframes: {
        fadeInOverlay: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomInModal: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeOutModal: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        fadeOutOverlay: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        // Anda juga punya fadeInUp di HTML, sebaiknya pindahkan ke sini juga
        fadeInUp: {
            "0%": { opacity: "0", transform: "translateY(50px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Dan fadeIn serta zoomIn jika Anda menggunakannya di tempat lain
        fadeIn: {
            "0%": { opacity: "0", transform: "translateY(30px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
            "0%": { opacity: "0", transform: "scale(0.5)" },
            "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeInOverlay: 'fadeInOverlay 0.2s ease-out forwards',
        zoomInModal: 'zoomInModal 0.2s ease-out forwards',
        fadeOutModal: 'fadeOutModal 0.2s ease-out forwards',
        fadeOutOverlay: 'fadeOutOverlay 0.2s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        zoomIn: 'zoomIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};