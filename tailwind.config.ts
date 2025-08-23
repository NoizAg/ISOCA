/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Stupid Meeting', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'bangers': ['Bangers', 'cursive'],
      },
      colors: {
        'isoca-green': {
          DEFAULT: '#4CAF50', // Verde pasto principal
          light: '#81C784',   // Verde claro
          dark: '#388E3C',    // Verde oscuro
        },
        'isoca-blue': {
          DEFAULT: '#4FC3F7', // Celeste principal
          light: '#B3E5FC',   // Celeste claro
          dark: '#0288D1',    // Celeste oscuro
        },
      },
    },
  },
  plugins: [],
} 