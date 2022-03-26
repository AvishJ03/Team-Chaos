import React from 'react'
import "../../styles/welcome.css"
import StatsCard from './StatsCard'
import StatsCard1 from './StatsCard1'
import StatsCard2 from './StatsCard2'
import StatsCard3 from './StatsCard3'

const Welcome = () => {
  return (
    <>
    <div className  = "backgroundA mt-3">
      <h1 className="pt-5 pb-3 px-5" style={{color:"#fff"}}>Hello, Welcome Back!</h1>
      <h3 className="px-5" style={{color:"#fff"}}>Name of the manager</h3>
      <StatsCard />
      <StatsCard1 />    
      <StatsCard2 />
      <StatsCard3 />
    </div>
    </>
  )
}

export default Welcome