// @ts-check
const { theme } = require('app/ui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', '../../packages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
  plugins: [],
};
