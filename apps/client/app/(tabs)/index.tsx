import { CustomText, createStyleSheet, useStyles } from '@apps/ui';
import { View } from 'react-native';

import { env } from '@/constants/env';

export default function TabOneScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText>Tab One</CustomText>
      <View style={styles.separator} />
      <CustomText>Client app</CustomText>

      <CustomText>{JSON.stringify(env)}</CustomText>
    </View>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
