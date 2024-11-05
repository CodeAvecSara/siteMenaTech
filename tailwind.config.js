/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        customIndigo: '#30325e', // nom personnalisé pour la couleur
      },
    },
  },
  plugins: [],
};


