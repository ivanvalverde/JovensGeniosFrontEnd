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
        'desktop': "url('../public/imgs/bgDesktop.jpg')",
        'tablet': "url('../public/imgs/bgTablet.jpg')",
        'mobile': "url('../public/imgs/bgMobile.jpg')"
      }
    },
  },
  plugins: [],
}
