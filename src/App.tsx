import React from 'react';
import './App.css';

import { ChakraProvider, Container, theme } from '@chakra-ui/react';
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
        <div id="app">
          <div className="home">
            <Home></Home>
          </div>
          <div className="footer">
            <CustomFooter></CustomFooter>
          </div>
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
