/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#5F2F14',
        babyBlue: '#53B2B6',
        fayrouz: '#1AD7DB',
        bgWhite: '#F3F1F1',
        offWhite: '#EDEDED',
        inWhite: '#e4e4e4'
      },
    },
  },
  plugins: [],
}