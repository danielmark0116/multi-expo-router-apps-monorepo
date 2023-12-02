import { Theme, themes } from '@ui/theme';
import { breakpoints } from '@ui/theme/breakpoints';
import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { createUnistyles, UnistylesTheme } from 'react-native-unistyles';

type Props = {
  /**
   * for persisting user preference in storage
   */
  appSlug?: string;
};

export const { useStyles, createStyleSheet } = createUnistyles<typeof breakpoints, Theme>(
  breakpoints
);

export const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  const colorScheme = useColorScheme();

  return (
    <UnistylesTheme theme={colorScheme === 'dark' ? themes.darkTheme : themes.lightTheme}>
      {children}
    </UnistylesTheme>
  );
};
