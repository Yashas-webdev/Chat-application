import React from 'react'
import Otheruser from './Otheruser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'

function Otherusers() {

  useGetOtherUsers();
  return (
    <div className='overflow-auto'>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
    </div>
  )
}

export default Otherusers