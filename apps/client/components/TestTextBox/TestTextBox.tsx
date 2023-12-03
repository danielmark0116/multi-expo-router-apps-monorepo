import { CustomText } from '@apps/shared';
import { View } from 'react-native';

type Props = {
  text: string;
};

export const TestTextBox = ({ text }: Props) => {
  return (
    <View>
      <CustomText>{text}</CustomText>
    </View>
  );
};
