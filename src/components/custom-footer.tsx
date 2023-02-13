import { Box, Flex, Heading } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

function CustomFooter() {

    const { t, i18n } = useTranslation();

    function changeUnderline(e: any) {
        e.target.style.textDecoration == 'underline' ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = 'underline';
    }

    return (
        <div>
            <Box
                px={4}
                position={"sticky"}
                top={0}
                boxShadow={"md"}
                zIndex={2}
                backgroundColor="var(--chakra-colors-teal-500)">
                <Flex h={16} alignItems={"center"} justifyContent={"center"}>
                    <Heading as='h6' size='xs' color={"white"}>
                        {t("footer-text")} <a href="https://github.com/HenriGourgue" target="_blank" onMouseOver={changeUnderline} onMouseLeave={changeUnderline}>Henri GOURGUE</a>
                    </Heading>
                </Flex>
            </Box>
        </div>
    );


};

export default CustomFooter;