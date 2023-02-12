import React, { useEffect } from 'react';

import { Card, CardBody, CardFooter, Text, Heading, Stack, Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';

import Axios from "axios";
import { useQuery } from "react-query";
import LoadingAlert from './loading-alert';
import ErrorAlert from './error-alert';

class ListItem extends React.Component<{ item: any, index: number, geo: string }> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <Box>
                <Card style={{ height: "100%" }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <iframe src={this.props.item.gifUrl}></iframe>

                    <Stack>
                        <CardBody>
                            <Heading size='md'>{this.props.index + 1} - {this.props.item.title}</Heading>

                            <Text py='2'>
                                {this.props.item.nbSearch} research
                            </Text>
                        </CardBody>

                        <CardFooter >
                            <Button variant='solid' colorScheme='blue' size='xs'>
                                <a href={"https://trends.google.fr" + this.props.item.link} target="_blank">Explore</a>
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

    const { isOpen, onOpen, onClose } = useDisclosure();

    const fetchGifs = async () => {
        const gifsResponse = await Axios.get(
                "https://api.giphy.com/v1/gifs/search", { params: { api_key: "Fyj7bIDMXHpY7rFGCGE98dHiBVdaFEYV", q: item.item.title ? item.item.title : "not found", limit: 10, lang: item.geo } }
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
        setValue(prevValue => prevValue + 1 );
        setValue(prevValue => prevValue + 1 );
    };
    
    return (
        <>
            <Button colorScheme='teal' size='xs' marginLeft={2} onClick={open}>More gif
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Gifs related to {item.item.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {isOpen && data.map((gif: any, index: number) => {
                                return (
                                    <>
                                        <iframe key={gif.id + String(index)} src={gif.embed_url}></iframe>
                                    </>
                                )
                            })}
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='teal' size='xs' onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Button>
        </>
    );
}

export default ListItem;