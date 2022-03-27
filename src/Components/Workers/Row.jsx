import React from 'react'

const Row = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row" style={{paddingLeft:"100px", paddingRight:"50px"}}>{props.uniqueKey}</th>
        <td style={{paddingRight:"50px"}}>{props.name}</td>
        <td style={{paddingRight:"50px", paddingLeft:"50px"}}>{props.projectID}</td>
        <td style={{paddingRight:"50px", paddingLeft:"80px"}}>{props.attendance}</td>
        <td style={{zIndex:"2"}}><button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.del} style={{borderRadius:"20px", background: "#3A477C", border: "none", color:"white"}}>Delete</button></td>
        </tr>
    </>
  )
}

export default Row