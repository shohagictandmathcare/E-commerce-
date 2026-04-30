/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Blue 500
          dark: '#1d4ed8',    // Blue 700
          light: '#60a5fa',   // Blue 400
        },
        secondary: {
          DEFAULT: '#a855f7', // Purple 500
          dark: '#7e22ce',    // Purple 700
          light: '#c084fc',   // Purple 400
        },
        dark: {
          DEFAULT: '#0f172a', // Slate 900
          light: '#1e293b',   // Slate 800
        },
        light: {
          DEFAULT: '#f8fafc', // Slate 50
          surface: '#ffffff', // White
        }
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(to right, #3b82f6, #a855f7)', // Premium Blue to Purple Gradient
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Clean modern font
      }
    },
  },
  plugins: 