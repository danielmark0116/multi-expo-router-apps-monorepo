import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { spacings } from './spacings';

export const baseTheme = {
  spacings,
  breakpoints,
  colorTokens: colors,
};

const lightTheme = {
  ...baseTheme,
  colors: {
    primary: colors.black,
    background: colors.white,
  },
  styleName: 'light',
} as const;

const darkTheme = {
  ...baseTheme,
  colors: {
    primary: colors.white,
    background: colors.black,
  },
  styleName: 'dark',
} as const;

export const themes = {
  lightTheme,
  darkTheme,
} as const;

export type Theme = typeof lightTheme | typeof darkTheme;
