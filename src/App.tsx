import React, { useState } from 'react';
import './App.css';

import DailyTrendsList from './components/daily-trend-list';
import NavBar from './components/navbar';

import { ChakraProvider, Flex, Heading, theme, Select } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from "react-query";

import { useTranslation } from 'react-i18next';

function App() {

  const [countryValue, setCountryValue] = useState('FR');
  const { t, i18n } = useTranslation();

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const handleSetSelectedOptions = (e: any) => {
    const newValue = e.target.value;
    i18n.changeLanguage(newValue.toLowerCase());
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
          <Heading>{t("title")} ({countryValue}) :</Heading>
        </Flex>
        <DailyTrendsList key={countryValue} countryValue={countryValue}></DailyTrendsList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
