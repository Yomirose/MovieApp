/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        'ipad-pro': '834px',
        'ipad-air': '820px',
        'galaxy-tab-s7': '800px',
        'ipad-mini': '768px',
      },
      colors: {
        primary: "#b2d4bb"
      }
    },
  },
  variants: {},
  plugins: [],
}

