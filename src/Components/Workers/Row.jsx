import React from 'react'

const Row = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row" style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.uniqueKey}</th>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.name}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.projectID}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.attendance}</td>
        <td style={{zIndex:"2", paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}><button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.del} style={{borderRadius:"20px", background: "#3A477C", border: "none", color:"white"}}>Delete</button></td>
        </tr>
    </>
  )
}

export default Row