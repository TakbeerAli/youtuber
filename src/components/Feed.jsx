import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {

   // these selectedCategory are coming from sidebaer componenet
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [video, setVideo]  = useState();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideo(data.items))
  }, [selectedCategory]);
 

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0, md:2 }}}>
         
        {/* here we sending props to sidebar component of useState to change value there */}
        <Sidebar selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}   />
                       
        <Typography className="copyright" varient="body2" sx={{mt: 1.5, color:'#fff' }}>
          copyright
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto' , height:'90vh', flex:2}}>
        <Typography variant="h4" fontWeight="bold" mr={2} sx={{ color: 'white'}}>
        {selectedCategory} 
           <span style={{color:'#F31503', paddingLeft:"10px"}}>videos</span>
        </Typography>

          <Videos  videos={video} />
      </Box>

    </Stack>
  )
}

export default Feed