/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 }
        },
        fadeOut: {
          'from': { opacity: 1 },
          'to': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}