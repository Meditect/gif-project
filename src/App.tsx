import React from 'react';
import './App.css';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";

import Home from './pages/home';

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
        <Home></Home>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
