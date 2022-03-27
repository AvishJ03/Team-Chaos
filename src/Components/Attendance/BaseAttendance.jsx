import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import TableAttendance from './TableAttendance';

const BaseProject = () => {
  const[display, setDisplay] = useState(0);
    
  const addWorker = ()=>{
    setDisplay(1)
    setTimeout(console.log(display),5000)
    
  }
  const deleteWorker = ()=>{
      setDisplay(2)
      setTimeout(console.log(display),5000)
      
  }
  const updateWorker = ()=>{
      setDisplay(3)
      setTimeout(console.log(display),5000)
      
  }
  const viewDetails = ()=>{
      setDisplay(0)
      setTimeout(console.log(display),5000)
      
  }

  return (
    <div class="row">
        <Navbar />
        {display===0&&<TableAttendance/>}
    </div>
  )
}

export default BaseProject