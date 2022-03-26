import React from 'react'
import {Link} from 'react-router-dom'
import "../../styles/navbar.css"

const Navbar = () => {
  return (
      <div className="row" style={{height:"100vh", textAlign:"center", position: "absolute", marginTop:"-19px"}}>
          <div className="col-2" >
                <div className="wrapper">
                <nav id="sidebar" style={{height:"110vh", width:"250px", marginLeft:"-12px"}}>
                    <div className="sidebar-header my-4" style={{}}>
                        <h3 className=""><img src="assets/logo-2.png" style={{width:"200px"}}></img></h3>
                    </div>
                    <ul className="list-unstyled components" style={{marginTop:"-20px"}}>
                        <li>
                        <Link to="/dashboard"><span class="icon"><ion-icon name="grid-outline"></ion-icon></span>&nbsp;&nbsp;&nbsp;Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/worker"><span class="icon"><ion-icon name="build-outline"></ion-icon></span>&nbsp;&nbsp;&nbsp;Projects</Link>
                        </li>
                        <li>
                            <Link to="/worker"><span class="icon"><ion-icon name="people-outline"></ion-icon></span>&nbsp;&nbsp;&nbsp;Workers</Link>
                        </li>
                        <li>
                            <a href="#"><span class="icon"><ion-icon name="clipboard-outline"></ion-icon></span>&nbsp;&nbsp;&nbsp;Attendance</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
      </div>
    
  )
}

export default Navbar