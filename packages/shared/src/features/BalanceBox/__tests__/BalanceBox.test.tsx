import { fireEvent, render, screen } from '@shared/testUtils/testUtils';

import { BalanceBox } from '../BalanceBox';

describe('BalanceBox', () => {
  it('should increment balance when button is pressed', async () => {
    render(<BalanceBox />);

    const button = await screen.getByTestId('balanceBoxButton');
    fireEvent.press(button);
    fireEvent.press(button);

    expect(screen.getByText('Count: 2')).toBeTruthy();
  });
});
