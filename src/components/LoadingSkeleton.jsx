import React from 'react'

import { Card, CardContent} from '@mui/material'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LoadingSkeleton = () => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <div style={{backgroundColor:"#1e1e1e"}}>
     {/* video skeleton */}
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
     <Skeleton width="100%" height={140} />
     </SkeletonTheme>
    
    </div>

    <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">

    <Skeleton width={280}borderRadius="0.7rem" enableAnimation={true} height={30} />
    <Skeleton width={270} borderRadius="0.7rem" enableAnimation={true} height={30} />
    <Skeleton width={250} borderRadius="0.7rem" enableAnimation={true} height={30}  />
    </SkeletonTheme>
                       

    </CardContent>
</Card>
  )
}

export default LoadingSkeleton