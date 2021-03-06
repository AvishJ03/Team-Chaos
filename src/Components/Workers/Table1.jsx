import React from 'react'
import Row from './Row1'

const Table1 = () => {
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
        <tr style={{height:"12px"}}>
          <th scope="col" style={{color:"#A3A2A2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>Worker ID</th>
          <th scope="col" style={{color:"#A3A2A2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>Name</th>
          <th scope="col" style={{color:"#A3A2A2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>Project ID</th>
          <th scope="col" style={{color:"#A3A2A2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>Attendance</th>
          <th scope="col" style={{color:"#A3A2A2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>Delete</th>
        </tr>
      </thead>
      <tbody> 
        {workers.map((createRow))}
      </tbody>
    </table>
  </div>
  )
}

export default Table1
