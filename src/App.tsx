import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu';

import { ChakraProvider, theme, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Menu></Menu>
    </ChakraProvider>
  );
}

export default App;
