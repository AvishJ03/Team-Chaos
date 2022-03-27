import React from 'react'

const Row = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row">{props.uniqueKey}</th>
        <td className='py-3'>{props.name}</td>
        <td className='py-3'>{props.projectID}</td>
        <td className='py-3'>{props.attendance}</td>
        <td style={{zIndex:"2"}}><button type="button" class="btn btn-light btn-lg px-4 mx-4" onClick={props.del} style={{borderRadius:"20px", background: "#3A477C", border: "none", color:"white"}}>Delete</button></td>
        </tr>
    </>
  )
}

export default Row