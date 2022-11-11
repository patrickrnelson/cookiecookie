/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#F3D2DC',
      'black': '#060807',
      'gray-dark': '#817F75',
      'gray': '#B3B3B3',
      'gray-light': '#F2F4F3',
    },
  },
  plugins: [],
}
