/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0C38',
        secondary: '#7A42F4',
        accent: '#56CCF2',
      },
    },
  },
  plugins: [],
}
