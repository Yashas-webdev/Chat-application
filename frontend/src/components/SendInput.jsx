import React, { useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import axios from 'axios';

function SendInput() {
  const [message,setMessage] = useState('');
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user);
  const {messages} = useSelector(store=>store.message)

  const onSubmithandler = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{message},{
        hearders:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      console.log(res.data)
      dispatch(setMessages([...messages, res.data.newMessage]))
      setMessage('');
    }catch(error){
      console.log(error.response?.data || error.message); 
    }
  }
  return (
    <form onSubmit={onSubmithandler} className='px-3 my-3'>
        <div className='w-full relative '>
            <input 
             type='text'
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             placeholder='Send a message...'
             className='border text-sm rounded-lg p-3 block w-full border-zinc-600 bg-gray-700 text-white'
            />
            <button type='submit' className='absolute flex inset-y-0 end-0 items-center pr-4 cursor-pointer'>
                <RiSendPlaneFill />
            </button>
        </div>
    </form>
  )
}

export default SendInput