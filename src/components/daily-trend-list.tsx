import Axios from "axios";
import { useQuery } from "react-query";

import { SimpleGrid, useMediaQuery } from '@chakra-ui/react';

import ListItem from './trend-list-item';
import LoadingAlert from './loading-alert';
import ErrorAlert from './error-alert';

import { withTranslation } from 'react-i18next';

const MyComponent = withTranslation()(ListItem)

function DailyTrendsList(props: {countryValue: any}) {

  const [isMobile] = useMediaQuery("(max-width: 1200px)");
  
  const fetchTrends = async () => {

    const trendsResponse = await Axios.get(
      "http://192.168.1.34:3200/" + props.countryValue
    );

    const dailyTrends = trendsResponse.data;

    for (var i = 0; i < dailyTrends.length; i -= -1) {
      if(dailyTrends[i].title.length>20){
        dailyTrends[i].title = dailyTrends[i].title.slice(0,20);
      }
      const gifResponse = await Axios.get(
        "https://api.giphy.com/v1/gifs/search", { params: { api_key: process.env.REACT_APP_GIPHY_API_KEY, q: dailyTrends[i] ? dailyTrends[i].title : "not found", limit: 1, lang: props.countryValue } }
      );

      let gifUrl: string
      gifResponse.data.data.length > 0 ? gifUrl = gifResponse.data.data[0].embed_url : gifUrl = 'https://giphy.com/embed/26xBIygOcC3bAWg3S'

      dailyTrends[i].gifUrl = gifUrl;
    }

    return dailyTrends;
  };

  const { data, isLoading, error } = useQuery("trends", fetchTrends);

  if (isLoading) {
    return <LoadingAlert></LoadingAlert>
  }
  if (error) {
    console.log(error)
    return <ErrorAlert></ErrorAlert>
  }

  const minMax = isMobile ? "100%" : "33%";

  return (
    <div>
      {/* <SimpleGrid minChildWidth='25%' spacingX='0px' spacingY='20px' marginLeft={5} marginRight={5}> */}
      <SimpleGrid spacing={3} templateColumns={'repeat(auto-fill, minmax(' + minMax + ', 1fr))'}>
        {data.map((item: any, index: number) => {
          return (
            <MyComponent key={index} item={item} index={index} geo={props.countryValue}></MyComponent>
          )
        })}
      </SimpleGrid>
    </div>

  );
}

export default DailyTrendsList;
