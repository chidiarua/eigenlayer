/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '450px',
      md: '748px',
      lg: '976',
      xl: '1440px'
    },
    extend: {
      colors: {
        themeBlue: '#1A0C6D',
        accent1: '#CADFFF',
        accent2: '#8986FF',
        accent3: '#CADFFF',
        themeYellow: '#FFB800',
      }
    },
  },
  plugins: [],
}

