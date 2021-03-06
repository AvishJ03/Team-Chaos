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
        <div className="card px-3 rounded-me" style={{width: "25rem",height:"33rem", margin:"150px 900px", textAlign:"center"}}>
            <div className="card-body ">
                <h5 className="card-title pt-4" style={{fontSize:"30px", fontWeight:"bold", color:"#3A477C"}}>{register && "Welcome Back!"}{register || "Hola!"}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{register && "Please enter your email and password"}{register || "Please enter your Details"}</h6>
                <Form state={register}/>
                <div class="m-2">
                {register && <p> <span className = "hover-effect" style = {{textDecoration:"underline", cursor: "pointer"}} >Forgot Password?</span> </p>}
                {register && <p>New Here? <span className = "hover-effect" style = {{textDecoration:"underline", cursor: "pointer"}} onClick={changeRegister}>Register</span> </p>}
                {register || <p>Already Signed Up? <span className = "hover-effect" style = {{textDecoration:"underline", cursor: "pointer"}} onClick={changeRegister}>Login</span> </p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login