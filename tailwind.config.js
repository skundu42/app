/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '440px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        appyellow: '#ecc94b',
        appblue: '#1997B2'
       
        // ...
      }
    },
  },
  plugins: [],
}