import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import LiveChat from "./LiveChat";

function Watch() {
  const [singlevideo, setSingleVideo] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let videoId = searchParams.get("v");

  const fetchVideoById = async () => {
    try {
      let res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoById();
  }, []);

  return (
    <div className="ml-4 flex w-full">
      <div className="video">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2">{singlevideo?.snippet?.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center  mt-1">
            <div className="flex gap-2">
              <Avatar
                size="50"
                src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                round={true}
              />
              <h1 className="w-[170px] font-bold">
                {singlevideo?.snippet?.channelTitle}
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="bg-black text-white font-medium rounded-full py-1 px-3"
                type="button"
              >
                Join
              </button>
              <button
                className="bg-black text-white font-medium rounded-full py-1 px-3"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
              <AiOutlineLike size={20} />
              <AiOutlineDislike size={20} />
            </div>
            <div className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
              <PiShareFat size={20} />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
              <MdOutlineFileDownload size={20} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>

      <div className="live-chat ml-3 w-full mx-16 p-3 border border-gray-300 rounded-xl h-fit">
        <div className="flex items-center justify-between">
          <h1>Top Chat</h1>
          <BsThreeDotsVertical />
        </div>
        
        <div className="overflow-y-auto h-[28rem] mt-2">
          <LiveChat />
        </div>

        <div className="p-2 border-t border-gray-300">
          <div className="flex gap-4 items-center w-[90%]">
            <Avatar
              className="cursor-pointer"
              size="35"
              src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              round={true}
            />
            <input
              className="border-b border-gray-300 outline-none cursor-pointer"
              type="text"
              name=""
              id=""
              placeholder="Send message ..."
            />
            <IoSend className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
