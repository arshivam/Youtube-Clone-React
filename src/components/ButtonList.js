import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { setCategory } from '../utils/appSlice'

const buttonItems = ["All","Java", "JavaScript", "Trending", "Sports", "Cars", "Programming","gaming","scifi", "TVS", "cricket", "football", "hockey", "New to you", "News", "Hindi news", "english new", "english songs", "hindi songs"]

function ButtonList() {
  const category = useSelector((store) => store.app.category)
  const [active, setActive] = useState("All")
  const dispatch = useDispatch()

  const videoByTag = (tag) => {
    if(category != tag){
      setActive(tag)
      dispatch(setCategory(tag))
    }
  }

  return (
    <div className='flex w-full overflow-x-scroll my-1 pb-2'>
      {buttonItems.map((buttonName,index)=>{
        return(
          <div key={index}>
               <button onClick={()=>{videoByTag(buttonName)}} className={`${active == buttonName ? "bg-black text-white  py-1 px-3 mx-1" :" bg-slate-200 py-1 px-3 mx-1 "} rounded-xl`} type="button"><span className='whitespace-nowrap'>{buttonName}</span></button>
          </div>
        ) 
     
      })}  
    </div>
   
  )
}

export default ButtonList;