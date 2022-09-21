/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: '300px',
      tablet: '640px',
      desktop: '1350px',
    },
    extend: {
      backgroundImage: {
        'desktop': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url('../public/imgs/bgDesktop.jpg')",
        'tablet': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url('../public/imgs/bgTablet.jpg')",
        'mobile': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url('../public/imgs/bgMobile.jpg')"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [],
}
