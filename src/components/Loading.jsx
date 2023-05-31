import React from 'react'

import { Stack, Box} from "@mui/material"
import LoadingSkeleton from './LoadingSkeleton';



const Loading = () => {
    // console.log(snippet)
  return (

    <Stack flexWrap="wrap" justifyContent="start" direction="row" alignItems="start" gap={2}>
         <LoadingSkeleton/>
         <LoadingSkeleton/>
         <LoadingSkeleton/>
         <LoadingSkeleton/>
         <LoadingSkeleton/>
         <LoadingSkeleton/>
    </Stack>
  );
}

export default Loading


{/* <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton height={140} duration={0.5}/>  </SkeletonTheme> */}

