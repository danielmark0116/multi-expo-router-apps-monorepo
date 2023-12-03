import { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { createStyleSheet, useStyles } from '../ThemeProvider/ThemeProvider';

export const CustomText = ({ children }: PropsWithChildren<unknown>) => {
  const { styles } = useStyles(stylesheet);

  return <Text style={styles.text}>{children}</Text>;
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.primary,
  },
}));
