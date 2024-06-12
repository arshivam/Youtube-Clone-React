import axios from "axios";
import React, {useEffect, useState} from "react";
import Avatar from "react-avatar";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { API_KEY } from "../constants/youtube";

function VideoCard({item}) {

  const [avatar, setAvatar] = useState('')

    const fetchYtChannelByID = async()=>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`) 
           setAvatar(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url)
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchYtChannelByID()
    }, [])
    

  return (
    <div className="w-full cursor-pointer my-2">
      <img
        className="rounded-xl my-1 w-full"
        src={item.snippet.thumbnails.medium.url}
        alt="ythumbnail"
      />
      <div className="flex  justify-between gap-4 ">
        <div className="flex">
          <Avatar
            src={avatar}
            size={50}
            round={true}
          />
          <div className="ml-2">
            <h2 className="font-bold ">{item.snippet.title}</h2>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
            <p className="text-sm text-gray-500">4k views . 4 month ago</p>
          </div>
        </div>
        <HiOutlineDotsVertical size={25} />
      </div>
    </div>
  );
}

export default VideoCard;
