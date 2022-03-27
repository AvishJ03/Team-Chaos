import React from 'react'

const Row1 = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row" style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.uniqueKey}</th>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.name}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.projectID}</td>
        <td style={{paddingLeft:"20px",paddingRight:"20px", textAlign:"center"}}>{props.attendance}</td>
        </tr>
    </>
  )
}

export default Row1