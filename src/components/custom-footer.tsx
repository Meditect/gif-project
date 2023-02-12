import { Box, Flex, Heading } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

function CustomFooter() {

    const { t, i18n } = useTranslation();

    function changeColor(e: any) {
        e.target.style.color == 'blue' ? e.target.style.color = 'black' : e.target.style.color = 'blue';
    }

    return (
        <div>
            <Box
                px={4}
                position={"sticky"}
                top={0}
                boxShadow={"md"}
                zIndex={2}
                backgroundColor="white">
                <Flex h={16} alignItems={"center"} justifyContent={"center"}>
                    <Heading as='h6' size='xs'>
                        {t("footer-text")} <a href="https://github.com/HenriGourgue" target="_blank" style={styles.textStyle} onMouseOver={changeColor} onMouseLeave={changeColor}>Henri GOURGUE</a>
                    </Heading>
                </Flex>
            </Box>
        </div>
    );


};

const styles = {
    textStyle: {
        textDecorationLine: 'underline',
    },
    footerStyle: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    }
}

export default CustomFooter;