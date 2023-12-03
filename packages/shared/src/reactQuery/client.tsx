import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

export const queryClient = new QueryClient({});

export const QueryProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
