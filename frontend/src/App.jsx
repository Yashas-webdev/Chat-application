import './App.css'

import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/signup';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAuthUser } from './redux/userSlice';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/api/v1/user/me",
          {
            withCredentials:true,
          }
        );

        console.log("user from backend",res.data)
       
        dispatch(setAuthUser(res.data));
      }catch(error){
        console.log(error);

        if(error.res?.status === 401){
          Navigate('/login')
        }
      }
    };
    fetchUser();
  },[])

  return (
   <div className='p-4 h-screen flex itmes-center justify-center'>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App
