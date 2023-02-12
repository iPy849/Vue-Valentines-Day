/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'Loved-by-the-king': ['"Loved by the King"', 'cursive'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

