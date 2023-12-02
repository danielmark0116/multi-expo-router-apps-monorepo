import { CustomText, createStyleSheet, useStyles } from '@apps/ui';
import { View } from 'react-native';

export default function TabTwoScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Tab Two</CustomText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CustomText style={styles.title}>Client app</CustomText>
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
