import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      test
    </ChakraProvider>
  );
}

export default App;
