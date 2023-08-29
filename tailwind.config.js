/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3DABF7',
        'bg-color': '#F5F5F5',
      },
      fontFamily: {
        brandFont: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
