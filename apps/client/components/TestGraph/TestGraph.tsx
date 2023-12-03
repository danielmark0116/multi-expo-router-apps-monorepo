import { createStyleSheet, useStyles } from '@apps/shared';
import { View } from 'react-native';

export const TestGraph = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.container} />;
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: theme.spacings.xl,
    backgroundColor: theme.colors.primary,
    width: '100%',
    aspectRatio: 1,
  },
}));
