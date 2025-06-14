/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        beige: {
          50: '#fdfaf6',
          100: '#faf5ed',
          200: '#f5ebdb',
          300: '#f0e1c9',
          400: '#ebd7b7',
          500: '#e6cda5',
          600: '#e1c393',
          700: '#dcb981',
          800: '#d7af6f',
          900: '#d2a55d',
        },
        pastel: {
          blue: '#a8d8ea',
          pink: '#f8b3d0',
          green: '#b5e5cf',
          yellow: '#f7e8c3',
          purple: '#d4c4e7',
        },
        primary: {
          light: '#4a90e2',
          DEFAULT: '#357abd',
          dark: '#2a5f9e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
} 