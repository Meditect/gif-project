import Axios from "axios";
import { useQuery } from "react-query";

import { UnorderedList, ListItem } from '@chakra-ui/react';

function DayliTrendsList(): JSX.Element {
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
        <h1>Dayli Trends :</h1>
  
        <UnorderedList>
        {data.map((item: string) => {
          console.log(item)
          return (
            <ListItem key={item}>{item}</ListItem>
          );
        })}
        </UnorderedList>
      </div>
    );
}

export default DayliTrendsList;