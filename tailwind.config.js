/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: true,
  content: [
    "./src/**/*.{html,ts}",
    // "./src/material.scss"
  ],
  theme: {
    extend: {},
  },
  // Still get an error with this setup not sure what is wrong
  plugins: [
    require('postcss-import'),
    require('postcss-scss'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss'),
  ]
}

