import React, { useState } from 'react';
import './App.css';

import DailyTrendsList from './components/daily-trend-list';
import NavBar from './components/navbar';

import { ChakraProvider, Flex, Heading, theme } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from "react-query";

import { Select } from '@chakra-ui/react'

function App() {

  const [countryValue, setCountryValue] = useState('FR');

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const handleSetSelectedOptions = (e: any) => {
    const newValue = e.target.value;
    setCountryValue(newValue);
  }
  
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <NavBar></NavBar>
        <Select onChange={handleSetSelectedOptions} variant="outline">
          <option value='FR'>France</option>
          <option value='US'>United States</option>
        </Select>
        <Flex
          as="nav"
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
          mb={1}
          p={3}
          bg={["primary.500", "primary.500", "transparent", "transparent"]}
        >
          <Heading>Daily Trends ({countryValue}):</Heading>
        </Flex>
        <DailyTrendsList key={countryValue} countryValue={countryValue}></DailyTrendsList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
