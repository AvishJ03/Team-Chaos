import React from 'react'
import "../../styles/navbar.css"

const Navbar = () => {
  return (
      <div className="row" style={{height:"100vh", width:"1500px", textAlign:"center"}}>
          <div className="col-2" >
                <div className="wrapper">
                <nav id="sidebar" style={{height:"100vh"}}>
                    <div className="sidebar-header p-0">
                        <h3 className=""><img src="assets/logo.png" style={{width:"200px"}}></img></h3>
                    </div>
                    <ul className="list-unstyled components pt-0">
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