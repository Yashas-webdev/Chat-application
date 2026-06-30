import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Sidebar() {
  return (
    <div>
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md bg-white text-black placeholder:text-gray-500"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-700 hover:bg-zinc-400 text-white">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>

      <div>
        
      </div>
    </div>
  );
}

export default Sidebar;
