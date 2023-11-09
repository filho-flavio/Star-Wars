/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '700': "95%",
        'c70': '70%',
      },
      width: {
        'c50': '50%',
        'c70': '70%',
        'c80': '80%',
        'c90': '90%',
        '100': '100%',
      },
      colors: {
        'custom-gray': '#181818',
        'input': '#232323',
        'custom-gold': '#ffe919',
      },
      borderRadius:{
        'custom': '1.25em',
      }
    },
  },
  plugins: [],
};
