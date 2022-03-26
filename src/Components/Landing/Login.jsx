import React, { useState } from 'react'
import "../../styles/login.css"
import Form from './Form'

const Login = () => {
  const [register, setRegister] = useState(false)
    const changeRegister = () =>{
        setRegister(!register)
        console.log((register));
    }
  return (
    <div>
        <div className="card px-3 rounded-me" style={{width: "25rem", margin:"150px 900px", textAlign:"center"}}>
            <div className="card-body ">
                <h5 className="card-title pt-4" style={{fontSize:"30px"}}>Welcome Back...</h5>
                <h6 className="card-subtitle mb-2 text-muted">Please enter your email and password</h6>
                <Form state={register}/>
                <div class="m-4">
                  <p>New Here? <span className = "hover-effect" style = {{textDecoration:"underline", cursor: "pointer"}} onClick={changeRegister}>Register</span> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login