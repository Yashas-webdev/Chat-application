import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
function SendInput() {
  return (
    <form className='px-3 my-3'>
        <div className='w-full relative '>
            <input 
             type='text'
             placeholder='Send a message...'
             className='border text-sm rounded-lg p-3 block w-full border-zinc-500 bg-gray-500 text-white'
            />
            <button className='absolute flex inset-y-0 end-0 items-center pr-4 cursor-pointer'>
                <RiSendPlaneFill />
            </button>
        </div>
    </form>
  )
}

export default SendInput