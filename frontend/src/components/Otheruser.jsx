import React from 'react'

function Otheruser(props) {

    const user = props.user
  return (
    <div>
        <div className='flex gap-3 items-center text-white hover:text-zinc-900 hover:bg-zinc-200 rounded p-2 cursor-pointer'>
                <div className='avatar avatar-online'>
                    <div className='w-10 rounded-full'>
                        <img src={user?.profilePhoto} alt='User-profile'/>
                    </div>
                </div>
            
            <div className='flex flex-col flex-1'> 
                <div className='flex  gap-2 flex-1'>
                        <p>{user?.fullName}</p>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Otheruser