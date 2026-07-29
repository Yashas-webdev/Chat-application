import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/signup";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { setAuthUser, setOnlineUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";
import axios from "axios";
import io from "socket.io-client";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
// import  from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element:<ProtectedRoute>
               <HomePage />
               </ProtectedRoute> ,
    },
    {
        path: "/signup",
        element:<PublicRoute>
            <Signup />
               </PublicRoute> ,
    },
    {
        path: "/login",
        element:<PublicRoute>
            <Login />
              </PublicRoute> ,
    },
]);

function App() {
    const { authUser } = useSelector((store) => store.user);
    // const {newSocket} = useSelector((store)=>store.socket)
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

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
            }finally{
                setLoading(false);
            }
        };

        fetchUser();
    }, [dispatch]);


    useEffect(() => {
    if (authUser) {
        const socket = io("http://localhost:8080", {
            query: {
                userId: authUser._id,
            },
        });

        dispatch(setSocket(socket));

        socket.on("getOnlineUsers", (users) => {
            dispatch(setOnlineUsers(users));
        });

        return () => {
            socket.disconnect();
            dispatch(setSocket(null));
        };
    }
}, [authUser, dispatch]);

if(loading){
    return(
        <div className="h-screen flex items-center justify-center">
            Loading...
        </div>
    )
}

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;