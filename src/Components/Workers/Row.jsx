import React from 'react'

const Row = (props) => {
  return (
    <>
        <tr className='py' style={{height:"12px"}}>
        <th scope="row">{props.uniqueKey}</th>
        <td className='py-3'>{props.name}</td>
        <td className='py-3'>{props.projectID}</td>
        <td className='py-3'>{props.attendance}</td>
        </tr>
    </>
  )
}

export default Row