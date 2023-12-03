import { fireEvent, render, screen } from '@testing-library/react-native';

import { TestButton } from '@/components/TestButton/TestButton';

describe('TestButton', () => {
  it('should ovoke onPress when pressed', () => {
    const onPress = jest.fn();

    render(<TestButton onPress={onPress} testID="test" />);

    const button = screen.getByTestId('test');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });
});
