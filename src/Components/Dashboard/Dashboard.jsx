import React from 'react'
import Navbar from './Navbar'
import StatsCard from './StatsCard'
import Welcome from './Welcome'

const Dashboard = () => {
  return (
    <div className="row">
      {/* <div className="col-6"> */}
        <Navbar />
      {/* </div> */}
      {/* <div className="col-3"> */}
      <Welcome />
      {/* </div> */}
      {/* <div className="col-3"> */}
      {/* </div> */}
    </div>
    )
}

export default Dashboard