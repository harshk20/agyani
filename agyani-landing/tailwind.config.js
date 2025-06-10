/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 