// import React from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

function HomePage() {
  return (
<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20">   
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage