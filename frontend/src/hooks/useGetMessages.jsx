import axios from 'axios'
import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import { setSelectedUser} from '../redux/userSlice'
const useGetMessages =  () =>{
    const {selectedUser} = useSelector(store=>store.user)
    useEffect(()=>{
        const fetchMessages = async()=>{
             if (!selectedUser?._id) return;
            try{
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
                console.log("Message",res.data);
                //store
            }catch(error){
                console.log(error);
            }
        }
        fetchMessages();
    },[selectedUser])
}
export default useGetMessages