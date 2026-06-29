import React , {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"

const Login = () => {
  const [user, setUser] = useState({
      username: "",
      password: "",
    });

    const navigate = useNavigate();
  
    const onSubmitHandler = async(e) =>{
      e.preventDefault();
      try{
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`,user,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      toast.success("logged in successfully")
      navigate('/')
      

    } catch(error){
      toast.error(error.response?.data?.message || "Something went wrong")
      console.log(error);
    }
      setUser({
         username: "",
         password: "",
      })
    }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-full max-w-sm p-6 rounded-lg
                bg-white/10
                backdrop-blur-md
                border border-white/20
                shadow-md"
        >
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <form onSubmit={onSubmitHandler} action="">

            <div className="mt-4">
              <label className="label p-2">
                <span className="label-text">User name</span>
              </label>
              <input
                value={user.username}
                onChange={(e)=>setUser({...user,username:e.target.value})}
                type="text"
                placeholder="username"
                className="input w-full
             bg-white/10
             backdrop-blur-md
             border-white/20
             text-white
             placeholder-gray-300"
              />
            </div>

            <div className="mt-4">
              <label className="label p-2">
                <span className="label-text">Password</span>
              </label>
              <input
                value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})}
                type="password"
                placeholder="*******"
                className="input w-full
             bg-white/10
             backdrop-blur-md
             border-white/20
             text-white
             placeholder-gray-300"
              />
            </div>
            

            <p className="mt-3 text-center">Don't have an account?
            <Link to="/SignUp" className="ml-1 text-blue-500 hover:underline">Signup</Link>
            </p>
            
            <div className="mt-2">
             <button 
             type="submit"
             className="btn w-full
             bg-white/10
             hover:bg-white/20
             hover:shadow-lg hover:shadow-white/10
             backdrop-blur-md
             border-white/10
             text-white
             placeholder-gray-300
             flex justify-center items-center
             cursor-pointer
             py-1 rounded-md">
              Login
             </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
