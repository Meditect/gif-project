import React, { Component } from 'react';
import { Select } from '@chakra-ui/react'
import {useQuery} from 'react-query'

export class Menu extends Component {
  render() {
    return(
        <Select placeholder='Country...'>
            <option value='france'>France</option>
            <option value='england'>England</option>
            <option value='united-states'>United States</option>
        </Select>


    )
  }
}
export default Menu;