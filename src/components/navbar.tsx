import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FiTrendingUp } from 'react-icons/fi';

function NavBar() {

    return (
        <Box as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{ base: '4', lg: '5' }}>
                    <HStack spacing="10">
                        <IconButton
                            variant="ghost"
                            icon={<FiTrendingUp fontSize="1.25rem" />}
                            aria-label="Open Menu"
                        />
                        <Heading >Google Trends</Heading>
                    </HStack>
                </Container>
            </Box>
        </Box>
    );
};

export default NavBar;