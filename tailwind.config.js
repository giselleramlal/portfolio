/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal1': '#041421',
        'teal2': '#042630',
        'teal3': '#4c7273',
        'teal4': '#86b9b0',
        'teal5': '#d0d6d6',
      },
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}
