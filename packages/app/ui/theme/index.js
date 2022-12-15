/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { toRadixVar, toRadixVars } = require('windy-radix-palette/vars');

/**
 * Generates CSS variables for given set of colors
 * @param {{ [s: string]: { [s: string]: any; } | string; }} colors */
const createAliasColorVariables = (colors) => {
  /** @type {{ [s: string]: any; }} */
  let colorMap = {};

  for (const [colorName, colorObj] of Object.entries(colors)) {
    if (typeof colorObj === 'string') {
      colorMap[`--${colorName}`] = colorObj;
    } else if (colorObj) {
      for (const [key, value] of Object.entries(colorObj)) {
        colorMap[`--${colorName}${key}`] = value;
      }
    }
  }

  return colorMap;
};

/** @param {{ [s: string]: any; }} aliases */
const createAliasTheme = (aliases) => {
  /** @type {{ [s: string]: { [s: string]: any; } | string; }} */
  const themeColors = {};

  for (const [colorName, colorObj] of Object.entries(aliases)) {
    if (typeof colorObj === 'string') {
      themeColors[colorName] = `var(--${colorName})`;
    } else if (colorObj) {
      themeColors[colorName] = toRadixVars(colorName);
    }
  }

  return themeColors;
};

const aliasLightColors = {
  appBg: toRadixVar('gray', 1),
  appBgSubtle: toRadixVar('gray', 2),
  panel: toRadixVar('gray', 3),
  panelHover: toRadixVar('gray', 4),
  shadow: toRadixVar('grayA', 3),
  overlay: toRadixVar('blackA', 8),
  border: toRadixVar('gray', 6),
  text: toRadixVar('gray', 12),
  subtleText: toRadixVar('gray', 11),
  brand: toRadixVars('teal'),
};

const aliasDarkColors = {
  ...aliasLightColors,
  shadow: toRadixVar('blackA', 12),
  overlay: toRadixVar('blackA', 12),
};

const lightColorVariables = createAliasColorVariables({
  ...aliasLightColors,
});
const darkColorVariables = createAliasColorVariables({
  ...aliasDarkColors,
});

const aliasTheme = createAliasTheme(aliasLightColors);

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  extend: {
    colors: {
      ...aliasTheme,
      brand: toRadixVars('teal'),
      brandText: toRadixVar('teal', 11),
      brandTextContrast: toRadixVar('teal', 11),
      brandBg: toRadixVar('teal', 4),
      brandBgHover: toRadixVar('teal', 5),
      brandBgActive: toRadixVar('teal', 6),
      grayText: toRadixVar('gray', 11),
      grayTextContrast: toRadixVar('gray', 12),
      grayBg: toRadixVar('gray', 3),
      grayBgHover: toRadixVar('gray', 4),
      grayBgActive: toRadixVar('gray', 5),
      grayBorder: toRadixVar('gray', 7),
      grayBorderHover: toRadixVar('gray', 8),
    },
  },
  borderRadius: {
    none: '0',
    sm: 'var(--border-sm)',
    DEFAULT: 'var(--border-md)',
    md: 'var(--border-md)',
    lg: 'var(--border-lg)',
    full: '9999px',
  },
  variables: {
    ...lightColorVariables,
  },
  darkVariables: {
    ...darkColorVariables,
  },
};
console.log(theme);

module.exports = {
  theme,
};
