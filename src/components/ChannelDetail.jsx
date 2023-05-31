import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"

import {Videos, ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromApi'
import zIndex from '@mui/material/styles/zIndex'
import { height } from '@mui/system'


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams(); 

  console.log("channelDetail",channelDetail,videos);

  useEffect(()=>{
      fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
         <div style={{
          background: 'linear-gradient(90deg, rgba(1,0,36,1) 0%, rgba(121,9,77,1) 41%, rgba(255,0,211,1) 100%)',
          zIndex:10,
          height:'300px'
         }}
         />
         <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>

      </Box>
      <Box  display="flex" p="2">
        <Box sx={{ mr:{ sm:'20px'}}} />
           <Videos videos={videos} />
        
      </Box>
    </Box>
  )
}

export default ChannelDetail