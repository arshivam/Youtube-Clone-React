import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector} from 'react-redux'

const sideBarItems = [
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
  {
    item: <IoMdHome size="25px" />,
    title: "Home",
  },
  {
    item: <SiYoutubeshorts size="25px" />,
    title: "Shorts",
  },
  {
    item: <MdOutlineSubscriptions size="25px" />,
    title: "Subscription",
  },
];

function SideBar() {
  const isOpen = useSelector((store)=>store.app.open)
  return (
    <div className={`${isOpen ? "w-[13%]" : "w-auto"} px-1 py-2 overflow-y-scroll overflow-x-hidden h-[calc(100vh-4.625rem)] relative l-0`}>
        {
            sideBarItems.map((item, index)=>{
                return(
                    <div key={index} className='flex gap-3 py-2 px-1 cursor-pointer hover:bg-slate-300 rounded-xl ml-2'>
                    {item.item}
                    <p className={`font-bold ${isOpen ? "" : "hidden"}`}>{item.title}</p>
                    </div>
                )
            })
        }
     
    </div>
  )
}

export default SideBar