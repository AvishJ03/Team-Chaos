import React from 'react'


const Form = (props) => {
    if(props.state === true) 
    {
        return(    
            <div>
                <form>
                    <div class="m-4">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email"/>
                    </div>
                    <div class="m-4">
                        <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Enter your Password"/>
                    </div>
                    <button type="button " class="btn btn-dark mb-3 px-3">Login as Manager</button>
                    <br />
                    <button type="button " class="btn btn-dark mb-3 px-4">Login as Worker</button>
                </form>
            </div>
        )
    }else{
        return(
        <div>
            <form>
                <div class="m-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Fullname"/>
                </div>
                <div class="m-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email"/>
                </div>
                <div class="m-4">
                    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Enter your Password"/>
                </div>
                <button type="button " class="btn btn-dark mb-3 px-3">Sign Up</button> 
                </form>
            </div>
        )
    }
}

export default Form