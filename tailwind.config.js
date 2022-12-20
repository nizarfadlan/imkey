/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/common/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#121130',
        'primary2': '#409E85',
        'primary2-m': '#4CC39B',
        'primary3': '#ff9100',
        'dark': '#252525'
      }
    },
  },
  plugins: [],
}
