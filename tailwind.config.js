/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '700': "95%",
      },
      width: {
        '80': '80%',
        '90': '90%',
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
