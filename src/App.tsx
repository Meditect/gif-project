import React, { useEffect, useState } from 'react';
import './App.css';

import DailyTrendsList from './components/daily-trend-list';
import NavBar from './components/navbar';

import { ChakraProvider, Flex, Heading, theme, Select, Box, Container, HStack, IconButton } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from "react-query";

import { useTranslation } from 'react-i18next';
import { FiTrendingUp } from 'react-icons/fi';

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

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <div>
          <Box
            px={4}
            position={"sticky"}
            top={0}
            boxShadow={"md"}
            zIndex={2}
            backgroundColor="white">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <HStack alignItems={"center"} spacing={4}>
                <IconButton
                  variant="ghost"
                  icon={<FiTrendingUp fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <Heading size='md'>{t("title")} ({countryValue})</Heading>
              </HStack>
              <Select onChange={handleSetSelectedOptions} variant="outline" maxWidth={"15%"}>
                <option value='FR'>🇫🇷 France</option>
                <option value='US'>🇺🇸 United States</option>
              </Select>
            </Flex>
          </Box>
        </div>
        <div style={{ marginTop: "2%" }}><DailyTrendsList key={countryValue} countryValue={countryValue}></DailyTrendsList></div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
