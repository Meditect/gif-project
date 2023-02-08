import React from 'react';
import './App.css';

import DayliTrendsList from './components/dayli-trend-list';

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
        <DayliTrendsList></DayliTrendsList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
