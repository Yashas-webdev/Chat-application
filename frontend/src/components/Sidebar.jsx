import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Otherusers from "./Otherusers";

function Sidebar() {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md bg-white text-black placeholder:text-gray-500"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-700 hover:bg-zinc-500 text-white border-amber-50">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>

      <div className="divider px-3"></div>
        <Otherusers/>
        <div className="mt-2">
          <button className="btn btn-sm">Logout</button>
        </div>
    </div>
  );
}

export default Sidebar;
