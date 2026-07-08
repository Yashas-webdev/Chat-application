import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer(props) {

  
  const {selectedUser} = useSelector(store => store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    return()=>{
      dispatch (setSelectedUser(null));
    }
  },[])

  const user = props.user;
  return (
    <>
    {
      selectedUser !== null ? (
        <div className="md:min-w-[450px] flex flex-col ">
      <div className="flex gap-3 items-center bg-zinc-800 text-amber-50 px-4 py-2 mb-2 border rounded border-zinc-700 ">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src="https://img.magnific.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?semt=ais_hybrid&w=740&q=80"
              alt="User-profile"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex  justify-between gap-2 ">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
      
      <Messages/>   
      
      <SendInput/>
    </div>
      ) : (
        <h1>Let's start conversation</h1>
      )
    }
    </>
    
  );
}

export default MessageContainer;
