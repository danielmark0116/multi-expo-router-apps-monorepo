import { ThemeProvider } from '@apps/ui';
import { render, RenderOptions } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';

const AllTheProviders = ({ children }: PropsWithChildren<unknown>) => {
  console.log('theme provider: ', ThemeProvider);
  return <ThemeProvider appSlug="testApp">{children}</ThemeProvider>;
};

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: RenderOptions
): ReturnType<typeof render> => {
  // return render(ui, { wrapper: AllTheProviders, ...options }) as any;
  return render(ui, { wrapper: AllTheProviders, ...options }) as any;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
