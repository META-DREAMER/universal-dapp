// @ts-check
const { theme } = require('app/ui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...theme,
  },
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
};
