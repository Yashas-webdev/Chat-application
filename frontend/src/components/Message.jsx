import React, { useEffect,useRef } from 'react'

function Message({message}) {
  const scroll = useRef();
  useEffect(()=>{
    scroll.current?.scrollIntoView({behaviour:"smooth"})
  })
  return (
    
<div ref={scroll} className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-gray-900">12:45</time>
  </div>
  <div className="chat-bubble">{message?.message}</div>
</div>


  )
}

export default Message