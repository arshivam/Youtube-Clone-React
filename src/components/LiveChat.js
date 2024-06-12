import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessasge } from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';

function LiveChat() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(setMessasge({
        name: getRandomName(),
        message: getRandomMessage()
    }))
    },1000)
    return(()=>{
      clearInterval(timer)
    })
  },[])
  const message = useSelector((store) => store.chat.message)

  return (
    <div className='px-3 py-1'>
        <div>
          {message.map((item,index) => <ChatMessage key={index} item={item}/> )}
        
        </div>
    </div>
  )
}

export default LiveChat