import React from 'react'

const WorkerNavBar = (props) => {
  return (
    <nav className='navbar navbar-light pt-5' style={{marginLeft:"240px", marginTop:"35px"}}>
        <div className='container-fluid' style={{margin:"0px", display:"inline"}}>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.add} style={{borderRadius:"20px"}}>Add</button>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.del} style={{borderRadius:"20px"}}>Delete</button>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.update} style={{borderRadius:"20px"}}>Update</button>
            <button type="button" class="btn btn-dark btn-lg px-4" style={{marginLeft:"580px", borderRadius:"20px"}} onClick={props.view} >View Details</button>
        </div>
    </nav>
  )
}

export default WorkerNavBar