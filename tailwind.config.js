/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'baloo-tamma': '"Baloo Tamma 2"',
      'barlow': '"Barlow Condensed"',
      'ubuntu': '"Ubuntu"',
    },
    extend: {},
  },
  plugins: [],
}
