import React from 'react'

const WorkerNavBar = (props) => {
  return (
    <nav className='navbar navbar-light py-3' style={{marginLeft:"240px"}}>
        <div className='container-fluid' style={{margin:"0px", display:"inline"}}>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.add}>Add</button>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.del}>Delete</button>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.update}>Update</button>
            <button type="button" class="btn btn-dark btn-lg px-4" style={{marginLeft:"580px"}} onClick={props.view}>View Details</button>
        </div>
    </nav>
  )
}

export default WorkerNavBar