/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff'
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      'robotoslab': ["Roboto Slab", 'serif'],
      'poppins': ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}