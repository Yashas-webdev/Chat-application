import React from 'react'
import Otheruser from './Otheruser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux';

function Otherusers() {
  //my custom hook
  useGetOtherUsers();
  const {otherUsers} = useSelector(Store => Store.user);
  if(!otherUsers) return; //early return in react
  return (
    <div className='overflow-auto'>
      {
      
        otherUsers?.map((user)=>{
          return(
            <Otheruser key={user._id} user={user}/>
          )
        })

      }
    </div>
  )
}

export default Otherusers