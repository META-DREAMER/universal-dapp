// @ts-check
const { theme } = require('app/ui/theme');
const nativewind = require('nativewind/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...theme,
  },
  presets: [nativewind],
  important: 'html',
};
