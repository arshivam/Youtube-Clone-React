import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY, YT_VIDEOS_API } from "../constants/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVideos } from "../utils/appSlice.js";

function VideoContainer() {
  const { videos, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchYtVideos = async () => {
    try {
      const response = await axios.get(YT_VIDEOS_API);
      dispatch(setVideos(response?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideosByCategory = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setVideos(response?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category == "All") {
      fetchYtVideos();
    } else {
      fetchVideosByCategory();
    }
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {videos.map((item) => {
        return (
          <Link
            to={`/watch?v=${
              typeof item.id == "object" ? item.id.videoId : item.id
            }`}
            key={typeof item.id == "object" ? item.id.videoId : item.id}
          >
            <VideoCard item={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
