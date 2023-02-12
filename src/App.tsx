import React from 'react';
import './App.css';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";

import Home from './pages/home';
import CustomFooter from './components/custom-footer';

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
          <CustomFooter></CustomFooter>
        </ChakraProvider>
      </QueryClientProvider>
  );
}

export default App;
