/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',  // Make sure JIT is enabled
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ea2e0e',
      },
    },
  },
  plugins: [],
};