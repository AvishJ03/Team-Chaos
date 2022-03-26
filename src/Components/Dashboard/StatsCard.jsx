import React from 'react'

const StatsCard = (props) => {
  return (
    <div>
        <div className="col-md-4">
            <div className="card-body">
                <h1 className="card-title" style={{fontSize:"30px"}}>Total Projects</h1>
                <p className="card-text">
                    Value
                </p>
            </div>
            </div>
            <div className="col-md-4">
                {/* <img
                    // src="assets/4-card-2.svg"
                    className="img-fluid rounded-start edit-img edit-img-two"
                    alt="..."
                /> */}
        </div>
    </div>
  )
}

export default StatsCard