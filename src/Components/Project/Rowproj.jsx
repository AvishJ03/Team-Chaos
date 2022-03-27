import React from 'react'

const Rowproj = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row" style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center", fontSize:"15px"}}>{props.uniqueKey}</th>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center", fontSize:"15px"}}>{props.name}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center", fontSize:"15px"}}>{props.projectID}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center", fontSize:"15px"}}>{props.attendance}</td>
        </tr>
    </>
  )
}

export default Rowproj