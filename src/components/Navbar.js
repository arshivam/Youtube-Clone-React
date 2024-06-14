import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import Avatar from 'react-avatar';
import { GrSearch } from "react-icons/gr";
import { useDispatch } from 'react-redux'
import { setCategory, toggleSidebar } from "../utils/appSlice";

function Navbar() {
  const [input , setInput] = useState("")
  const dispatch = useDispatch()
  
  const handleToggle = () =>{
    dispatch(toggleSidebar())
  }

  const handleSearchInput = (e) =>{
      console.log(e.target.value);
      setInput(e?.target?.value)
  }

  const handleSearchClick = () =>{
    console.log("search clicked");
    dispatch(setCategory(input))
    setInput("")
  }

  return (
    <nav className="fixed w-[100%] bg-white z-10 top-0">
      <div className="flex  justify-between px-4 py-2">
      <div className="flex items-center">
        <GiHamburgerMenu className="hover:cursor-pointer" size="30px" onClick={()=>handleToggle()} />
        <img
          className="px-2"
          width={"110px"}
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_167938.png"
          alt="ytlogo"
        />
      </div>
      <div className="flex items-center w-[40%]">
        <div className="w-[100%] border border-gray-300 rounded-l-full py-1 px-4">
          <input
            className="outline-none w-full"
            type="text"
            name="searchinput"
            id="searchinput"
            placeholder="search anything"
            value={input}
            onChange={(e)=>{handleSearchInput(e)}}
          />
        </div>
        <button onClick={()=>{handleSearchClick()}} type="button" className="border border-gray-300 rounded-r-full py-1 px-4"><GrSearch size={23}/></button>
      </div>
      <div className="flex items-center gap-3">
        <TbVideoPlus size={30} />
        <IoIosNotificationsOutline size={30} />
        <Avatar src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" size={30} round={true} />
      </div>
           
      </div>
    </nav>
  );
}

export default Navbar;
