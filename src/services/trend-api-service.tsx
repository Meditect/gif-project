import React from 'react'
import axios from 'axios'

async function fetchTrends(country: String){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
    return data
}
