import React, { useEffect } from 'react';

import { Card, CardBody, CardFooter, Text, Heading, Stack, Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useMediaQuery, SimpleGrid } from '@chakra-ui/react';

import Axios from "axios";
import { useQuery } from "react-query";
import LoadingAlert from './loading-alert';
import ErrorAlert from './error-alert';
import { useTranslation } from 'react-i18next';

class ListItem extends React.Component<{ item: any, index: number, geo: string, t: any }> {

    constructor(props: any) {
        super(props);
    }

    render() {

        const { t } = this.props;

        return (
            <Box >
                <Card style={{ height: "100%" }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <iframe src={this.props.item.gifUrl}></iframe>

                    <Stack>
                        <CardBody width={"100%"}>
                            <Heading size='md'>{this.props.index + 1} - {this.props.item.title}</Heading>

                            <Text py='2'>
                                {this.props.item.nbSearch} {t('search')}
                            </Text>
                        </CardBody>

                        <CardFooter >
                            <Button variant='solid' colorScheme='blue' size='md'>
                                <a href={"https://trends.google.fr" + this.props.item.link} target="_blank">{t('explore')}</a>
                            </Button>
                            <CustomModal key={this.props.item.title} item={this.props.item} geo={this.props.geo}></CustomModal>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
        );
    }
};

function CustomModal(item: any) {

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t, i18n } = useTranslation();

    const fetchGifs = async () => {
        const gifsResponse = await Axios.get(
            "https://api.giphy.com/v1/gifs/search", { params: { api_key: "Fyj7bIDMXHpY7rFGCGE98dHiBVdaFEYV", q: item.item.title ? item.item.title : "not found", limit: 25, lang: item.geo } }
        );
        return gifsResponse.data.data;
    };

    const { data, isLoading, error, refetch } = useQuery("gifs", fetchGifs, {
        refetchOnWindowFocus: true,
        staleTime: 0,
        cacheTime: 0,
        refetchInterval: 0,
    });

    const [value, setValue] = React.useState(7);

    useEffect(() => {
        refetch();
    }, [value, refetch]);

    if (isLoading) {
        return <LoadingAlert></LoadingAlert>
    }
    if (error) {
        console.log(error)
        return <ErrorAlert></ErrorAlert>
    }

    const open = () => {
        onOpen();
        setValue(prevValue => prevValue + 1);
    };

    const minMax = isMobile ? "40%" : "25%";

    return (
        <>
            <Button colorScheme='teal' size='md' marginLeft={2} onClick={open}>{t("more")}
                <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{t('related')} {item.item.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <SimpleGrid spacing={3} templateColumns={'repeat(auto-fill, minmax(' + minMax + ', 1fr))'}>
                                {isOpen && data.map((gif: any, index: number) => {
                                    return (

                                        <Box textAlign={"center"} justifyContent={"center"}>
                                            <Card style={{ height: "100%" }}
                                                direction={{ base: 'column', sm: 'row' }}
                                                overflow='hidden'
                                                variant='outline'
                                            >
                                                <iframe width={"100%"} key={gif.id + String(index)} src={gif.embed_url}></iframe>
                                            </Card>
                                        </Box>
                                    )
                                })}
                            </SimpleGrid>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='teal' size='md' onClick={onClose}>
                                {t('close')}
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Button>
        </>
    );
}

export default ListItem;