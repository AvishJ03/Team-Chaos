import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import AddWorker from './AddWorker';
import UpdateWorker from './UpdateWorker';
import DeleteWorker from './DeleteWorker';
import Table from './Table';
import WorkerNavBar from './WorkerNavBar';

const BaseWorker = () => {
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
        <WorkerNavBar add={addWorker} del = {deleteWorker} update = {updateWorker} view = {viewDetails}/>
        {display===0&&<Table/>}
        {display===1&&<AddWorker/>}
        {display===2&&<DeleteWorker/>}
        {display===3&&<UpdateWorker/>}
    </div>
  )
}

export default BaseWorker