import { ThemeProvider } from '@shared/components/ThemeProvider/ThemeProvider';
import { render, RenderOptions } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';

const AllTheProviders = ({ children }: PropsWithChildren<unknown>) => {
  return <ThemeProvider appSlug="testApp">{children}</ThemeProvider>;
};

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: RenderOptions
): ReturnType<typeof render> => {
  return render(ui, { wrapper: AllTheProviders, ...options }) as any;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
