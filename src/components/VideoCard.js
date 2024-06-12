import axios from "axios";
import React, {useEffect} from "react";
import Avatar from "react-avatar";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { API_KEY } from "../constants/youtube";

function VideoCard({item}) {

    const fetchYtChannelByID = async()=>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelID}&key=${API_KEY}`) 
           // console.log(res.data);
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
        <div className="flex  gap-2">
          <Avatar
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
            size={30}
            round={true}
          />
          <div>
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
