/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {

      fontFamily: {
        luxury: ['Playfair Display', 'serif'],
      },
      
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slide: 'slide 12s linear infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide: {
          '0%, 25%': { transform: 'translateY(0%)' },
          '25%, 50%': { transform: 'translateY(-25%)' },
          '50%, 75%': { transform: 'translateY(-50%)' },
          '75%, 100%': { transform: 'translateY(-75%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}