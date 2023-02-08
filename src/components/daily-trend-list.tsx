import Axios from "axios";
import { useQuery } from "react-query";

import { Card, CardBody, CardFooter, Image, Text, Heading, Stack, Button } from '@chakra-ui/react';

function DailyTrendsList() {

  const fetchTrends = async () => {
    const response = await Axios.get(
      "http://localhost:3200"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("trends", fetchTrends);

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>"An error has occurred: " + error</p>;

  return (
    <div>
      {data.map((item: any) => {
        console.log(item)
        return (
          <Card style={{width: "20%"}}
          key={item.title}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >

            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              alt='Caffe Latte'
            />
            <Stack>
              <CardBody>
                <Heading size='md'>{item.title}</Heading>

                <Text py='2'>
                  {item.nbSearch} recherches
                </Text>
              </CardBody>

              <CardFooter >
                <Button variant='solid' colorScheme='blue' size='xs'>
                  <a href={"https://trends.google.fr" + item.link} target="_blank">Explore</a>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </div>

  );
}

export default DailyTrendsList;