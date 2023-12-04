import { CustomText, createStyleSheet, useStyles } from '@apps/shared';
import { View } from 'react-native';

import { env } from '@/constants/env';

export default function Root() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText>Merchant App</CustomText>
      <CustomText>{JSON.stringify(env)}</CustomText>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
}));
