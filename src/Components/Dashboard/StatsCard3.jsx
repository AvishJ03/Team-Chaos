import React from 'react'
import Row from '../Workers/Row'

const StatsCard3 = (props) => {
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
    <div>
        <div className="card col-md-4" style={{margin : "250px 0px 0 600px", borderRadius:"15px", position:"absolute"}}>
            <div className="card-body"  style={{overflow:"scroll", height:"270px"}}>
                <h1 className="card-title" style={{fontSize:"30px", color: "#3A477C" }}>Projects</h1>
                <p className="card-text" style={{color:"black"}}>
                <table className="table">
                  <thead>
                    <tr className = "mx-3" style={{height:"12px"}}>
                      <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Worker ID</th>
                      <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Name</th>
                      <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Project ID</th>
                      <th className = "py-3" scope="col" style={{color:"#A3A2A2"}}>Attendance</th>
                    </tr>
                  </thead>
                  <tbody> 
                    {workers.map((createRow))}
                  </tbody>
                </table>
                </p>
            </div>
        </div>
    </div>
  )
}

export default StatsCard3