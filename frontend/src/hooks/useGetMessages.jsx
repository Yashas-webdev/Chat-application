import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSetlectedUser } from '../redux/userSlice'
const useGetMessages =  () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMessages = async()=>{
            try{
                axios.defaults.withCredintials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/6a246eeae17b23ef63660ccd`);
                //store
                dispatch(setSetlectedUser(res.data))
            }catch(error){

            }
        }
    },[])
}
export default useGetMessages