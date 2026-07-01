import React from 'react'

function Otheruser() {
  return (
    <div>
        <div className='flex gap-3 items-center text-white hover:text-zinc-900 hover:bg-zinc-200 rounded p-2 cursor-pointer'>
                <div className='avatar avatar-online'>
                    <div className='w-10 rounded-full'>
                        <img src='https://img.magnific.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?semt=ais_hybrid&w=740&q=80' alt='User-profile'/>
                    </div>
                </div>
            
            <div className='flex flex-col flex-1'> 
                <div className='flex  gap-2 flex-1'>
                        <p>Yashas MERNstack</p>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Otheruser