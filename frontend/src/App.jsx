import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/signup';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setAuthUser } from './redux/userSlice';
import axios from 'axios';
import io from 'socket.io-client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/Signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {

  const { authUser } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/user/me",
          {
            withCredentials: true,
          }
        );

        dispatch(setAuthUser(res.data));

      } catch (error) {
        console.log(error);

        if (error.response?.status === 401) {
          dispatch(setAuthUser(null));
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:8080",{
        query:{
          userId:authUser._id
        }
      });


      dispatch(setSocket(newSocket));

      Socket.on('getOnlineUsers',(onlineUsers)=>{
        dispatch(setOnelineUsers(onlineUsers))
      })

      return () => {
        newSocket.disconnect();
      };
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;