import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { TrendingMovies } from './pages/trendingMovies/TrendingMovies';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TrendingMovies />
    </QueryClientProvider>
  );
};

export { App };
