/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out',
        spinWords: 'spinWords 6s infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinWords: {
          '10%': { transform: 'translateY(-112%)' },
          '25%': { transform: 'translateY(-100%)' },
          '35%': { transform: 'translateY(-212%)' },
          '50%': { transform: 'translateY(-200%)' },
          '60%': { transform: 'translateY(-312%)' },
          '75%': { transform: 'translateY(-300%)' },
          '85%': { transform: 'translateY(-412%)' },
          '100%': { transform: 'translateY(-400%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}