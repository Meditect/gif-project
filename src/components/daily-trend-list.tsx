import Axios from "axios";
import { useQuery } from "react-query";

import { Card, CardBody, CardFooter, Image, Text, Heading, Stack, Button, Box, SimpleGrid } from '@chakra-ui/react';

function DailyTrendsList() {

  const fetchTrends = async () => {
    const response = await Axios.get(
      "http://192.168.1.34:3200"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("trends", fetchTrends);

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>"An error has occurred: " + error</p>;

  return (
    <div>
      <SimpleGrid minChildWidth='400px' spacingX='0px' spacingY='20px'>
        {data.map((item: any, index: number) => {
          console.log(item)
          return (
            <Box>
              <Card style={{ margin: "10px" }}
                key={item.title}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >

                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '20%' }}
                  maxH={{ base: '100%', sm: '40%' }}
                  src='https://media1.giphy.com/media/Jcv1hzMf1LUnbfYYFm/giphy.gif?cid=ecf05e47dce4d853f2156f63b83d15e8386c546ea3c64ccf&rid=giphy.gif&ct=g'
                  alt='Caffe Latte'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>{index + 1} - {item.title}</Heading>

                    <Text py='2'>
                      {item.nbSearch} research
                    </Text>
                  </CardBody>

                  <CardFooter >
                    <Button variant='solid' colorScheme='blue' size='xs'>
                      <a href={"https://trends.google.fr" + item.link} target="_blank">Explore</a>
                    </Button>
                    <Button colorScheme='teal' size='xs' marginLeft={2}>
                      <a href="https://media1.giphy.com/media/Jcv1hzMf1LUnbfYYFm/giphy.gif?cid=ecf05e47dce4d853f2156f63b83d15e8386c546ea3c64ccf&rid=giphy.gif&ct=g" target="_blank">See gif</a>
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>

  );
}

export default DailyTrendsList;