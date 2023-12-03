import { BalanceBox, API, CustomText, createStyleSheet, useStyles } from '@apps/shared';
import { View } from 'react-native';

import { TestGraph } from '@/components/TestGraph/TestGraph';

export default function TabTwoScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText>Tab Two</CustomText>
      <CustomText>{API.GET.USERS}</CustomText>
      <View style={styles.separator} />
      <CustomText>Client app</CustomText>
      <BalanceBox />
      <TestGraph />
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
