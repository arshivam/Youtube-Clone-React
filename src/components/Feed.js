import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer"
import { useSelector } from "react-redux";

function Feed() {
  const isOpen = useSelector((store)=>store.app.open)
  return (
    <div className={`${isOpen ? "w-[87%]" : "w-[93%]"} ml-5 h-[calc(100vh-4.625rem)] overflow-y-scroll pr-3`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default Feed;
