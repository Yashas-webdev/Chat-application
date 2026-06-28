import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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

          <form action="">
            <div className="mt-4">
              <label className="label p-2">
                <span className="label-text">Full Name</span>
              </label>
              <input
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
                  type="checkbox"
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>

              <div className="flex items-center">
                <p>Female</p>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
            </div>

            <p className="mt-2 text-center">Already have an account?
            <Link to="/login" className="ml-1 text-blue-500 hover:underline">Login</Link>
            </p>
            
            <div className="mt-2">
             <button className="input w-full
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
