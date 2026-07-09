import {React} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Otherusers from "./Otherusers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Sidebar() {
  const [search,setSearch] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/user/logout`,
        {
          withCredentials:true,
        }
      );

      dispatch(setAuthUser(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const searchSubmitHandler = () => {
    alert(search);
  }
  

  return (
    <div className="border-r border-slate-400 p-4 flex flex-col ">
      <form onSubmit={searchSubmitHandler} action="" className="flex items-center gap-2">
        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="input input-bordered rounded-md bg-white text-black placeholder:text-gray-500"
          type="text"
          placeholder="Search..."
        />

        <button
          type="submit"
          className="btn bg-zinc-700 hover:bg-zinc-500 text-white border-amber-50"
        >
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>

      <div className="divider px-3 "></div>
      <Otherusers />
      <div className="mt-2">
        <button
          onClick={logoutHandler}
          className="btn btn-sm text-white hover:text-zinc-900 hover:bg-white cursor-pointer "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
