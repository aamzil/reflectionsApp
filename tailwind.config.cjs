/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'plus': ['"Plus Jakarta Sans"', 'sans-serif'],
        'sfpro':["'SF Pro Display'", 'sans-serif']
      }
    },
  },
  plugins: [],
}