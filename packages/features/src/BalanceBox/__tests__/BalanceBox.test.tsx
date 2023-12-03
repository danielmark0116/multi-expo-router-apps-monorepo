import { ThemeProvider } from '@apps/ui';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { BalanceBox } from '../BalanceBox';

describe('BalanceBox', () => {
  it('should increment balance when button is pressed', async () => {
    render(<BalanceBox />, { wrapper: ThemeProvider });

    const button = await screen.getByTestId('balanceBoxButton');
    fireEvent.press(button);
    fireEvent.press(button);

    expect(screen.getByText('Count: 2')).toBeTruthy();
  });
});
