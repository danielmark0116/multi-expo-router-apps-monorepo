import { createStyleSheet, useStyles } from '@ui/components/ThemeProvider/ThemeProvider';
import { PropsWithChildren } from 'react';
import { Text } from 'react-native';

export const CustomText = ({ children }: PropsWithChildren<unknown>) => {
  const { styles } = useStyles(stylesheet);

  return <Text style={styles.text}>{children}</Text>;
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.primary,
  },
}));
