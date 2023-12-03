import { CustomText } from '@apps/ui';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

export const BalanceBox = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <CustomText>BalanceBox</CustomText>
      <Pressable onPress={() => setCount(count + 1)}>
        <CustomText>Count: {count}</CustomText>
      </Pressable>
    </View>
  );
};
