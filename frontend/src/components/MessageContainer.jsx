import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col p-1 ">
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
          <div className="flex  justify-between gap-2 flex-1 ">
            <p>Yashas MERNstack</p>
          </div>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
}

export default MessageContainer;
