import React from 'react';
import './App.css';

import DailyTrendsList from './components/daily-trend-list';

import { ChakraProvider, Flex, Heading, theme } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from "react-query";
// import Axios from "axios";
// import { useQuery } from "react-query";

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
          <Heading>Daily Trends :</Heading>
        </Flex>
        <DailyTrendsList></DailyTrendsList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
