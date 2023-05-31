import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import {Link } from "react-router-dom"
import { demoProfilePicture } from '../utils/constant'


const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
   <Box
   sx={{
     width: { xs: '356px',sm: '358px', md: "320px", },
     height:'325px', 
     boxShadow: "none",  
     borderRadius:'20px', 
     justifyContent:'center', 
     alignItems:'center',
     display:'flex', 
     margin:'auto',
     marginTop
      }}
   
   >

   <Link to={`/channel/${channelDetail?.id?.channelId}`}>
   <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
   <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
     <Typography varient="h6">
       {channelDetail?.snippet?.title}
       <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px', textAlign:'center'}} /> 

     </Typography>
     {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}

   </CardContent>

   </Link>

   </Box>
  )
}

export default ChannelCard