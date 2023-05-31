import React from 'react'

import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, debounce } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant'

const VideoCard = ({ video:{ id:{videoId}, snippet}}) => {
    // console.log(snippet)
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
               image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: {xs:'100%', sm:'358px', md:'320px'}, height:180}}
               />
        </Link>

        <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color='#FFF'>
            { snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography varient="subtitle2" fontWeight="bold" color='gray'>
            { snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px', textAlign:'center'}} />
          </Typography>
        </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard