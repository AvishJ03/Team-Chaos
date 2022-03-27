import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import TableAttendance from './TableAttendance';
import AttendanceNavBar from './AttendanceNavBar';

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
        <AttendanceNavBar add={addWorker} del = {deleteWorker} update = {updateWorker} view = {viewDetails}/>
        {display===0&&<TableAttendance/>}
        {/* {display===1&&<AddProject/>} */}
        {/* {display===2&&<DeleteWorker/>} */}
        {/* {display===3&&<UpdateWorker/>} */}
    </div>
  )
}

export default BaseProject