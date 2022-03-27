import React from 'react'

const AttendanceNavBar = (props) => {
  return (
    <nav className='navbar navbar-light pt-5' style={{marginLeft:"240px", marginTop:"35px"}}>
        <div className='container-fluid' style={{margin:"0px", display:"inline"}}>
        <div class="btn-group mr-2" role="group" aria-label="First group">

        <input type="file" class="form-control" id="customFile" style={{width:"500px", marginLeft:"250px", marginRight:"15px", marginTop:"50px", borderRadius:"20px", background: "#5A72D3", border: "none", color:"white"}}/>
        <button type="button" class="btn btn-secondary" style={{background:"#3A477C", borderRadius:"20px",marginTop:"50px"}}>Upload</button>
  </div>
  
        </div>
        
    </nav>
  )
}

export default AttendanceNavBar