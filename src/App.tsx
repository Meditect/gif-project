import React from 'react';
import './App.css';

import DailyTrendsList from './components/daily-trend-list';

import { ChakraProvider, theme } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <DailyTrendsList></DailyTrendsList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
