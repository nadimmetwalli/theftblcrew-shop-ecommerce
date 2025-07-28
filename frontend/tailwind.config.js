/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ea2e0e',
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke") // Only this plugin
  ],
};