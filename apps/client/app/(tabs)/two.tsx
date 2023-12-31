import {
  BalanceBox,
  API,
  CustomText,
  createStyleSheet,
  useStyles,
  AnimatedGraph,
} from '@apps/shared';
import { View } from 'react-native';

export default function TabTwoScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText>Tab Two</CustomText>
      <CustomText>{API.GET.USERS}</CustomText>
      <View style={styles.separator} />
      <CustomText>Client app</CustomText>
      <BalanceBox />
      <AnimatedGraph />
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
