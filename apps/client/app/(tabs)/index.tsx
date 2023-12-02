import { CustomText } from '@apps/ui';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { env } from '@/constants/env';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Tab One</CustomText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CustomText>Client app</CustomText>

      <CustomText>{JSON.stringify(env)}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
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
