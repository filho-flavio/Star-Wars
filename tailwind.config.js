/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '700': "95%",
      },
      colors: {
        'custom-gray': '#181818',
      },
      borderRadius:{
        'custom': '1.25em',
      }
    },
  },
  plugins: [],
};
