import { PropsWithChildren } from 'react';
import { Text } from 'react-native';

export const CustomText = ({ children }: PropsWithChildren<unknown>) => {
  return <Text style={{ backgroundColor: 'red' }}>{children}</Text>;
};
