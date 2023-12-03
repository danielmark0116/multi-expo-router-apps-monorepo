import { CustomText, createStyleSheet, useStyles } from '@apps/shared';
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <CustomText>This screen doesn't exist.</CustomText>

        <Link href="/" style={styles.link}>
          <CustomText>Go to home screen!</CustomText>
        </Link>
      </View>
    </>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
