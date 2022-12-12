/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { lightColors, darkColors } = require('app/ui/theme/colors');

/** @param {{ [s: string]: { [s: string]: any; } | string; }} colors */
const createColorVariables = (colors) => {
  /** @type {{ [s: string]: any; }} */
  let colorMap = {};

  for (const [colorName, colorObj] of Object.entries(colors)) {
    if (typeof colorObj === 'string') {
      colorMap[`--${colorName}`] = colorObj;
    } else {
      for (const [key, value] of Object.entries(colorObj)) {
        colorMap[`--${key}`] = value;
      }
    }
  }

  return colorMap;
};

/** @param {{ [s: string]: any; }} colors */
const createColorTheme = (colors) => {
  /** @type {{ [s: string]: { [s: string]: string; }; }} */
  const themeColors = {};

  for (const [colorName, colorObj] of Object.entries(colors)) {
    if (colorName.includes('Dark')) {
      continue;
    }

    /** @type {{ [s: string]: string; }} */
    const themeColor = {};
    for (const key of Object.keys(colorObj)) {
      const scale = key.replace(colorName, '');
      themeColor[scale] = `var(--${colorName}${scale})`;
    }

    themeColors[colorName] = themeColor;
  }

  return themeColors;
};

/** @param {{ [s: string]: any; }} aliases */
const createAliasTheme = (aliases) => {
  /** @type {{ [s: string]: string; }} */
  const themeColors = {};

  for (const colorName of Object.keys(aliases)) {
    themeColors[colorName] = `var(--${colorName})`;
  }

  return themeColors;
};

const colorTheme = createColorTheme(lightColors);

const aliasLightColors = {
  appBg: colorTheme.gray.gray1,
  appBgSubtle: colorTheme.gray.gray2,
  panel: colorTheme.gray.gray3,
  panelHover: colorTheme.gray.gray4,
  shadow: colorTheme.grayA.grayA3,
  overlay: colorTheme.blackA.blackA8,
};

const aliasDarkColors = {
  ...aliasLightColors,
  shadow: colorTheme.blackA.blackA12,
  overlay: colorTheme.blackA.blackA12,
};

const lightColorVariables = createColorVariables({
  ...lightColors,
  ...aliasLightColors,
});
const darkColorVariables = createColorVariables({
  ...darkColors,
  ...aliasDarkColors,
});

const aliasTheme = createAliasTheme(aliasLightColors);

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  // extend: {
  //   colors: {
  //     ...lightColors,
  //   },
  // },
  colors: {
    ...colorTheme,
    ...aliasTheme,
  },
  variables: {
    ...lightColorVariables,
  },
  darkVariables: {
    ...darkColorVariables,
  },
};

module.exports = {
  theme,
};
