/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scarlet': '#FF2400',
        'dark-bg': '#050505',
        'dark-surface': '#111111',
        'dark-border': '#222222',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
