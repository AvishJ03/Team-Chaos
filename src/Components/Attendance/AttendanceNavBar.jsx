import React from 'react'

const AttendanceNavBar = (props) => {
  return (
    <nav className='navbar navbar-light pt-5' style={{marginLeft:"240px", marginTop:"35px"}}>
        <div className='container-fluid' style={{margin:"0px", display:"inline"}}>
        
        
        
        
        
        <div class="btn-group mr-2" role="group" aria-label="First group">
        <input type="file" class="form-control" id="customFile" style={{width:"500px", marginLeft:"250px", marginRight:"10px", borderRadius:"20px", background: "#5A72D3", border: "none", color:"white"}}/>
    <button type="button" class="btn btn-secondary" style={{background:"#3A477C", borderRadius:"20px"}}>Upload</button>
  </div>
  
        </div>
        <button type="button" class="btn btn-dark btn-lg px-4" style={{marginLeft:"500px", borderRadius:"20px", background: "#3A477C", border: "none", color:"white", marginTop: "10px", height:"40px", padding:"5px", height:"38px"}}>Show in Maps</button>
    </nav>
  )
}

export default AttendanceNavBar