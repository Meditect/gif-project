import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiTrendingUp } from 'react-icons/fi';

import { Flex, Heading, Select, Box, HStack, IconButton, useMediaQuery } from '@chakra-ui/react';

import DailyTrendsList from '../components/daily-trend-list';

function Home() {

    const [countryValue, setCountryValue] = useState('FR');
    const { t, i18n } = useTranslation();

    const handleSetSelectedOptions = async (e: any) => {
        const newValue = e.target.value;
        i18n.changeLanguage(newValue.toLowerCase());
        setCountryValue(newValue);
    }

    const [isMobile] = useMediaQuery("(max-width: 768px)")

    return (
        <div style={{position: "relative", minHeight: "100%", display: "flex", flexDirection: "column"}}>
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
                            <a href="."><IconButton
                                variant="ghost"
                                icon={<FiTrendingUp fontSize="1.25rem" />}
                                aria-label="Open Menu" /></a>
                            <Heading size='md'>{t("title")} ({countryValue})</Heading>
                        </HStack>
                        <Select onChange={handleSetSelectedOptions} variant="outline" maxWidth={"20%"}>
                            <option value='FR'>{isMobile && '🇫🇷'}{!isMobile && '🇫🇷 France'}</option>
                            <option value='US'>{isMobile && '🇺🇸'}{!isMobile && '🇺🇸 United States'}</option>
                        </Select>
                    </Flex>
                </Box>
            </div>
            <div style={{ marginTop: "2%" }}>
                <DailyTrendsList key={countryValue} countryValue={countryValue}></DailyTrendsList>
            </div>
        </div>
    );
};

export default Home;