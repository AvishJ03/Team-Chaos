import React from 'react'

const Table = () => {
  return (
    <div className='px-3 container' style={{backgroundColor:"white", marginLeft:"300px", width:"1200px", marginTop:"50px"}}>
      <table className="table">
  <thead>
    <tr className = "mx-3" style={{height:"12px"}}>
      <th scope="col">Worker ID</th>
      <th scope="col">Name</th>
      <th scope="col">Project ID</th>
      <th scope="col">Attendance</th>
    </tr>
  </thead>
  <tbody> 
    <tr className='py-3' style={{height:"12px"}}>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr style={{height:"12px"}}>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr style={{height:"12px"}}>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr style={{height:"12px"}}>
        a
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table
