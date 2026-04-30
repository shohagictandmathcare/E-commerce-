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
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#a855f7',
          dark: '#7e22ce',
          light: '#c084fc',
        },
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        light: {
          DEFAULT: '#f8fafc',
          surface: '#ffffff',
        }
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(to right, #3b82f6, #a855f7)',
      },
      fontFamily: {
        sans:['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: