import React from 'react'
import Row from './Row'

const Table = () => {
  let workers =[
    {
      workerID : 1, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 2, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 3, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 4, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 5, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 6, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    },
    {
      workerID : 7, 
      name : "Mark Zucku",
      projectID : 1,
      attendance : "100%"  
    }
  ]

  let createRow = (worker)=>{
    return (
      <Row 
        uniqueKey = {worker.workerID}
        name = {worker.name}
        projectID = {worker.projectID}
        attendance = {worker.attendance}
      />
    )
  }

  return (
  <div className='px-3 container' style={{backgroundColor:"white", marginLeft:"300px", width:"1200px", marginTop:"15px", borderRadius:"20px", zIndex:"2"}}>
    <table className="table" >
      <thead>
        <tr className = "mx-3" style={{height:"12px"}}>
          <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Worker ID</th>
          <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Name</th>
          <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Project ID</th>
          <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Attendance</th>
          <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Delete</th>
        </tr>
      </thead>
      <tbody> 
        {workers.map((createRow))}
      </tbody>
    </table>
  </div>
  )
}

export default Table
