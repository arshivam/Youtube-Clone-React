import React from 'react'

const buttonItems = ["All","Java", "JavaScript", "Trending", "Sports", "Cars", "Programming"]

function ButtonList() {
  return (
    <div>
      {buttonItems.map((button,index)=>{
        return <button key={index} className='py-1 px-3 bg-slate-200 mx-1 rounded-xl' type="button">{button}</button>
      })}  
    </div>
   
  )
}

export default ButtonList;