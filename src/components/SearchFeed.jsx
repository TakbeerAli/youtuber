import { useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom'

import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromApi'

const SearchFeed = () => {

  const [video, setVideo]  = useState();
  const { searchTerm } = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideo(data.items))
  }, [searchTerm]);
 

  return (
    <Box p={2} sx={{ overflowY: 'auto', height:'90vh', flex:2}}>
    <Typography variant="h4" fontWeight="bold" mr={2} sx={{ color: 'white'}}>
     Search Results for:
       <span style={{color:'#F31503', paddingLeft:"10px"}}> {searchTerm}</span> videos
    </Typography>

      <Videos  videos={video} />
  </Box>
  )
}

export default SearchFeed