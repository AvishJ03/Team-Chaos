import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import TableAttendance from '../Attendance/TableAttendance';
import SimpleMap from '../Map/SimpleMap'
import Tableproj from './Tableproj';

const ProjectNavBar = (props) => {

  function showMap(){
    <Link to="/gmap">
    </Link>
  }
  return (
    <nav className='navbar navbar-light pt-5' style={{marginLeft:"240px", marginTop:"35px"}}>
        <div className='container-fluid' style={{margin:"0px", display:"inline"}}>
            <button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.add} style={{borderRadius:"20px", background: "#3A477C", border: "none", color:"white"}}>Add</button>
            <button type="button" class="btn btn-dark btn-lg px-4" style={{marginLeft:"920px", borderRadius:"20px", background: "#5A72D3", border: "none", color:"white"}} onClick={props.view} >View Details</button>
            
            <ul>
            <li style={{backgroundColor:"red"}}>
                <Link to="/gmap">
                  <span class="icon">
                    <ion-icon name="grid-outline"></ion-icon>
                  </span>
                  &nbsp;&nbsp;&nbsp;Dashboard
                </Link>
              </li>
              </ul>
        </div>
    </nav>
  )
}

export default ProjectNavBar