import React from 'react'
import "../../styles/navbar.css"

const Navbar = () => {
  return (
      <div className="row" style={{height:"100vh", textAlign:"center", position: "absolute", marginTop:"-19px"}}>
          <div className="col-2" >
                <div className="wrapper">
                <nav id="sidebar" style={{height:"100vh", width:"250px"}}>
                    <div className="sidebar-header" style={{border:""}}>
                        <h3 className=""><img src="assets/logo-2.png" style={{width:"200px"}}></img></h3>
                    </div>
                    <ul className="list-unstyled components pt-3">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Workers</a>
                        </li>
                        <li>
                            <a href="#">Attendance</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
      </div>
    
  )
}

export default Navbar