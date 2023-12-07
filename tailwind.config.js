/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif']
    },
    extend: {
      colors:{
        'red-rgba': "rgba(255, 31, 28, 0.7)",
        'green-rgba': "rgba(102, 204, 153, 0.7)",
      },
    },
  },
  plugins: [],
}