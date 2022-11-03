import { makeTheme } from 'dripsy';
import { fontName, fontNames, webFont } from './fonts';

const darkColors = {
  $background: 'rgb(1, 1, 1)',
  $card: 'rgb(18, 18, 18)',
  $text: 'rgb(229, 229, 231)',
  $border: 'rgb(39, 39, 41)',
  $alert: 'rgb(255, 69, 58)',
  $primary: '#c8e400',
};

const lightColors: typeof darkColors = {
  $background: 'rgb(242, 242, 242)',
  $card: 'rgb(255, 255, 255)',
  $text: 'rgb(28, 28, 30)',
  $border: 'rgb(216, 216, 216)',
  $alert: 'rgb(255, 59, 48)',
  $primary: '#ABC200',
};

const theme = makeTheme({
  colors: darkColors,
  sizes: {
    container: 900,
  },
  space: {
    // recommended: set 0 first, then double for consistent nested spacing
    $0: 0,
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    '2xl': 128,
    '3xl': 256,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
  },
  customFonts: {
    [fontName]: {
      bold: webFont(fontNames.bold),
      default: webFont(fontNames.normal),
      normal: webFont(fontNames.normal),
      '200': webFont(fontNames.light),
      '300': webFont(fontNames.light),
      '400': webFont(fontName),
      '500': webFont(fontName),
      '600': webFont(fontNames.bold),
      '700': webFont(fontNames.bold),
      '800': webFont(fontNames.bold),
      '900': webFont(fontNames.bold),
    },
  },
  fonts: {
    root: fontName,
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  text: {
    body: {
      color: '$text',
      fontSize: 'md',
    },
    p: {
      color: '$text',
      fontSize: 'sm',
    },
    h1: {
      color: '$text',
      fontWeight: 'bold',
      letterSpacing: -2,
    },
    h2: {
      color: '$text',
      fontWeight: 'bold',
    },
    h3: {
      color: '$text',
      fontWeight: 'bold',
    },
    link: {
      fontSize: 'md',
      fontWeight: 'bold',
      color: '$primary',
    },
  },
  layout: {
    background: {
      flex: 1,
      backgroundColor: '$background',
    },
    container: {
      px: 'md',
      flex: 1,
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

const themeLight = {
  ...theme,
  colors: lightColors,
};

type MyTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme, themeLight };
