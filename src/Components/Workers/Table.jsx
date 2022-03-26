import React from 'react'

const Table = () => {
  return (
    <div className='px-3 container' style={{backgroundColor:"white", marginLeft:"300px", width:"1200px", marginTop:"50px"}}>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Worker ID</th>
      <th scope="col">Name</th>
      <th scope="col">Project ID</th>
      <th scope="col">Attendance</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
        a
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table
