
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
 
const Otheruser = ({user})=> {
    const dispatch = useDispatch();
    const {selectedUser,onlineUsers} = useSelector(store => store.user)
    const isOnline = onlineUsers.includes(user._id)
    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(setSelectedUser(user));
    }
    
  return (
    <div>
        <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id === user?._id ?'bg-zinc-200 text-zinc-900' : 'text-white' } flex gap-3 items-center hover:bg-zinc-300 hover:text-black rounded p-2 cursor-pointer `} >
                <div className={`avatar ${isOnline ? 'avatar-online' : 'avatar-offline'}` }>
                    <div className='w-10 rounded-full'>
                        <img src={user?.profilePhoto} alt='User-profile'/>
                    </div>
                </div>
            
            <div className='flex flex-col flex-1'> 
                <div className='flex  gap-2 flex-1'>
                        <p>{user?.fullName}</p>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default Otheruser