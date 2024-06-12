import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { YT_VIDEOS_API } from '../constants/youtube'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

function VideoContainer() {
    const [videos, setVideos] = useState([]);

   const fetchYtVideos = async () =>{
    try {
      const response = await axios.get(YT_VIDEOS_API)
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
          return(
            <Link to={`/watch?v=${item.id}`} key={item.id}>
             <VideoCard  item={item}/>
             </Link>
           
          )  
        })}  
    </div>
  )
}

export default VideoContainer