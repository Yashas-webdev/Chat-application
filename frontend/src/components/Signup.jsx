import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"


const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) =>{
    setUser({...user,gender})
  }

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`,user,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message);

      }

    } catch(error){
      console.log(error);
    }
    setUser({
       fullName: "",
       username: "",
       password: "",
       confirmPassword: "",
       gender: "",
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
          <h1 className="text-3xl font-bold text-center">SignUp</h1>

          <form onSubmit={onSubmitHandler} action="">
            <div className="mt-4">
              <label className="label p-2">
                <span className="label-text">Full Name</span>
              </label>
              <input
                value={user.fullName}
                onChange={(e)=>setUser({...user,fullName:e.target.value})}
                type="text"
                placeholder="Full Name"
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

            <div className="mt-4">
              <label className="label p-2">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                value={user.confirmPassword}
                onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
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

            <div className="flex items-center my-4">
              <div className="flex items-center">
                <p>Male</p>
                <input
                  value={user.gender}
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  type="checkbox"
                  className="checkbox mx-2"
                />
              </div>

              <div className="flex items-center">
                <p>Female</p>
                <input
                  value={user.gender}
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  type="checkbox"
                  className="checkbox mx-2"
                /> 
              </div>
            </div>

            <p className="mt-2 text-center">
              Already have an account?
              <Link to="/login" className="ml-1 text-blue-500 hover:underline">
                Login
              </Link>
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
             py-1 rounded-md"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
