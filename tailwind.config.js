/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      minWidth: {
        'c10': '10%',
        'c20': '20%',
        'c30': '30%',
        'c50': '50%',
      },
      height: {
        '700': "95%",
        'c70': '70%',
        'c80': '80%',
        'c85': '85%',
        'c90': '90%',
        'c100': '100%',
      },
      width: {
        'c30': '30%',
        'c40': '40%',
        'c50': '50%',
        'c70': '70%',
        'c80': '80%',
        'c90': '90%',
        'c100': '100%',
      },
      colors: {
        'custom-gray': '#181818',
        'input': '#232323',
        'custom-gold': '#ffe919',
      },
      borderRadius:{
        'custom': '1.25em',
        'custom-2': '5em'
      }
    },
  },
  plugins: [],
};
