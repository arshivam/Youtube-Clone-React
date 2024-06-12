import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { YT_VIDEOS_API } from '../constants/youtube'
import VideoCard from './VideoCard'

function VideoContainer() {
    const [videos, setVideos] = useState([])

   const fetchYtVideos = async () =>{
    try {
      const response = await axios.get(YT_VIDEOS_API)
       console.log(response?.data?.items);
      setVideos(response?.data?.items)
    } catch (error) {
      console.log(error);
    }

   }
   useEffect(() => {
    fetchYtVideos()
   }, [])
   

  return (
    <div className='grid grid-cols-3 gap-2 mt-4'>
        {videos.map((item)=>{
          return  <VideoCard key={item.id} item={item}/>
        })}  
    </div>
  )
}

export default VideoContainer