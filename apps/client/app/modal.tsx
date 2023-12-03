import { CustomText, createStyleSheet, useStyles } from '@apps/shared';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

export default function ModalScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <CustomText>Modal</CustomText>
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
