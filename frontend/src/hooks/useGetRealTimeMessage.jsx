import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from '../redux/messageSlice';

const useGetRealTimeMessage = () => {
    const { socket } = useSelector(store => store.socket);
    const { messages } = useSelector(store => store.message); // ✅ fixed
    const dispatch = useDispatch();

    useEffect(() => {
        if(!socket) return; // safety check

        socket.on("newMessage", (newMessage) => {
            dispatch(setMessages([...messages, newMessage])) // ✅ fixed
        });

        return () => socket.off("newMessage"); //  cleanup

    }, [socket, dispatch, messages]);
}

export default useGetRealTimeMessage;