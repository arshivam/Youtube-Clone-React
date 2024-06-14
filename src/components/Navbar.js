import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import Avatar from "react-avatar";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSuggestions, toggleSidebar } from "../utils/appSlice";
import axios from "axios";
import { SUGGESTION_API } from "../constants/youtube";

function Navbar() {
  const [input, setInput] = useState("");
  const ref = useRef();
  //const [suggestions, setSuggestions] = useState([])
  const dispatch = useDispatch();
  const suggestions = useSelector((store) => store.app.suggestions);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleSearchInput = (e) => {
    setInput(e?.target?.value);
  };

  const handleSearchClick = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const fetchSuggestionApi = async () => {
    try {
      let res = await axios.get(SUGGESTION_API + input);
      dispatch(setSuggestions(res.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuggestionList = (e) =>{
    dispatch(setCategory(e?.target?.id));
  }

  useEffect(() => {
    //Debouncing
   
    let timer = setTimeout(()=>{
      fetchSuggestionApi();
    },300)

   return() =>{
     clearTimeout(timer)
   }
  }, [input]);

  return (
    <nav className="fixed w-[100%] bg-white z-10 top-0">
      <div className="flex  justify-between px-4 py-2">
        <div className="flex items-center">
          <GiHamburgerMenu
            className="hover:cursor-pointer"
            size="30px"
            onClick={() => handleToggle()}
          />
          <img
            className="px-2"
            width={"110px"}
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_167938.png"
            alt="ytlogo"
          />
        </div>
        <div className="flex items-center w-[40%] relative">
          <div className="w-[100%] border border-gray-300 rounded-l-full py-1 px-4">
            <input
              className="outline-none w-full"
              type="text"
              name="searchinput"
              id="searchinput"
              placeholder="search anything"
              value={input}
              onChange={(e) => {
                handleSearchInput(e);
              }}
            />
          </div>
          <button
            onClick={() => {
              handleSearchClick();
            }}
            type="button"
            className="border border-gray-300 rounded-r-full py-1 px-4"
          >
            <GrSearch size={23} />
          </button>
          {input != "" && (
            <div className="bg-white absolute top-12 left-3 w-[60%] rounded-xl ">
              <ul className="p-2 ">
                {suggestions.map((suggestion, idx) => {
                  return (
                    <div key={idx} className=" flex item-center px-2  gap-2 ml-3 hover:bg-slate-200">
                      <GrSearch size={15} />
                      <li onClick={(e)=>{handleSuggestionList(e)}} ref={ref} id={suggestion} className=" py-1 cursor-pointer text-md font-medium">{suggestion}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <TbVideoPlus size={30} />
          <IoIosNotificationsOutline size={30} />
          <Avatar
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
            size={30}
            round={true}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
