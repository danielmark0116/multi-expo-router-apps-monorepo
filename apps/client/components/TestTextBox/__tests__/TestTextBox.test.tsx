import { render, screen } from '@apps/shared';

import { TestTextBox } from '@/components/TestTextBox/TestTextBox';

describe('TestTextBox', () => {
  it('should render with provided text correctly', () => {
    render(<TestTextBox text="Hello World" />);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });
});
