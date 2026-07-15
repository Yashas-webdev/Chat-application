import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/signup";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAuthUser, setOnlineUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";
import axios from "axios";
import io from "socket.io-client";
// import  from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    const { authUser } = useSelector((store) => store.user);
    const {newSocket} = useSelector((store)=>store.socket)
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
    if (!authUser) {
        if (newSocket) {
            newSocket.disconnect();
            dispatch(setSocket(null));
        }
        return;
    }

    const socket = io("http://localhost:8080", {
        query: {
            userId: authUser._id,
        },
    });

    dispatch(setSocket(socket));

    socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
    });

    return () => {
        socket.disconnect();
    };
}, [authUser, newSocket, dispatch]);

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;