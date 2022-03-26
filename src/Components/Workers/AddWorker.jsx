import React from 'react'

const AddWorker = () => {
  return (
    <div className='container' style={{backgroundColor:"white", marginLeft:"300px", width:"1200px", marginTop:"20px", borderRadius:"20px"}}>
        <div>
            <form >
              <div className='row' >
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="text" className="form-control mx-4" placeholder='Full Name' style={{borderRadius:"20px", width:"500px"}}/></div>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="text" className="form-control mx-4" placeholder='Age' style={{borderRadius:"20px", width:"500px"}}/></div>
              </div>
              <div className='row'>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="text" className="form-control mx-4" placeholder='Aadhar Number' style={{borderRadius:"20px", width:"500px"}}/></div>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="text" className="form-control mx-4" placeholder='Work Location' style={{borderRadius:"20px", width:"500px"}}/></div>
              </div>
              <div className='row'>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="email" className="form-control mx-4" placeholder='Email' style={{borderRadius:"20px", width:"500px"}}/></div>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}><input type="text" className="form-control mx-4" placeholder='Address' style={{borderRadius:"20px", width:"500px"}}/></div>
              </div>
              <div className='row'>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}></div>
                <div className='col-6 p-3 my-3' style={{zIndex:"2"}}></div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default AddWorker