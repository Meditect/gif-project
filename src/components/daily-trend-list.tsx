import Axios from "axios";
import { useQuery } from "react-query";

import { Card, CardBody, CardFooter, Text, Heading, Stack, Button, Box, SimpleGrid, Spinner } from '@chakra-ui/react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function DailyTrendsList() {

  const fetchTrends = async () => {
    const trendsResponse = await Axios.get(
      "http://192.168.1.34:3200"
    );
    const dailyTrends = trendsResponse.data;

    for (var i = 0; i < dailyTrends.length; i -= -1) {
      const gifResponse = await Axios.get(
        "https://api.giphy.com/v1/gifs/search", { params: { api_key: "Fyj7bIDMXHpY7rFGCGE98dHiBVdaFEYV", q: dailyTrends[i].title, limit: 1, lang: 'fr' } }
      );

      const gifUrl = gifResponse.data.data[0].embed_url;

      dailyTrends[i].gifUrl = gifUrl;
    }

    return dailyTrends;
  };

  const { data, isLoading, error } = useQuery("trends", fetchTrends);

  if (isLoading){
    return <div style={alertDiv}><Alert status='info'>
            <Spinner color='blue.500' marginRight={3}/>
            Loading data
          </Alert>
          </div>
  }
  if (error) {
    return <div style={alertDiv}><Alert status='error'>
              <AlertIcon />
                Error while loading data
            </Alert></div>
  }

  return (
    <div>
      <SimpleGrid minChildWidth='25%' spacingX='0px' spacingY='20px' marginLeft={5} marginRight={5}>
        {data.map((item: any, index: number) => {
          return (
            <Box key={item.title}>
              <Card style={{height: "100%"}}
                key={item.title}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >

                <iframe src={item.gifUrl}></iframe>

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
                      <a href={item.gifUrl} target="_blank">More gif</a>
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

const alertDiv = {
  backgroundColor: "red",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 50,
  marginRight: 50
};

export default DailyTrendsList;