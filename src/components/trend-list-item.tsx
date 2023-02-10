import React, { useState, useEffect } from 'react';

import { Card, CardBody, CardFooter, Text, Heading, Stack, Button, Box, SimpleGrid, Spinner } from '@chakra-ui/react';

class ListItem extends React.Component<{ item: any, index: number }> {

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
                            <Button colorScheme='teal' size='xs' marginLeft={2}>
                                <a href={this.props.item.gifUrl} target="_blank">More gif</a>
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
        );
    }
};

export default ListItem;