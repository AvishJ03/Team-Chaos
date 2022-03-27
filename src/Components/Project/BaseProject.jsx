import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar';
import AddProject from './AddProject';
import Tableproj from './Tableproj';
import ProjectNavBar from './ProjectNavBar';

const BaseProject = () => {
  const [display, setDisplay] = useState(0);

  const addWorker = () => {
    setDisplay(1)
    setTimeout(console.log(display), 5000)

  }
  const viewDetails = () => {
    setDisplay(0)
    setTimeout(console.log(display), 5000)

  }

  return (
    <div class="row">
      <Navbar />
      <ProjectNavBar add={addWorker} view={viewDetails} />
      {display === 0 && <Tableproj />}
      {display === 1 && <AddProject setDisplay={setDisplay}/>}
    </div>
  )
}

export default BaseProject