import React from 'react'
import SideBar from "./SideBar"
import Feed from './Feed'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex mt-[65px]'>
    <SideBar/>
    <Outlet/>
    {/* <Feed /> */}
  </div>
  )
}

export default Body