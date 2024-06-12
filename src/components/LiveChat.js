import React from 'react'
import ChatMessage from './ChatMessage'

function LiveChat() {
  return (
    <div className='px-3 py-1'>
        <div>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
        </div>
    </div>
  )
}

export default LiveChat