import React from 'react'
import Avatar from 'react-avatar'
function ChatMessage() {
  return (
    <div className='mt-3 flex items-center'>
        <div>
        <Avatar
              className="cursor-pointer"
              size="30"
              src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              round={true}
            />
        </div>
        <div className='flex items-center'>
            <h1 className='font-bold text-sm ml-2'>Prommer name</h1>
            <p className='text-sm ml-2'>comment  message</p>
        </div>
    </div>
  )
}

export default ChatMessage