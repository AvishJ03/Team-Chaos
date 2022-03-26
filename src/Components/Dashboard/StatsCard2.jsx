import { func } from 'prop-types';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip} from 'recharts';

const StatsCard2 = (props) => {
  const barColor=["#3A477C","#5A72D3"]

  let renderLabel = function (entry){
    return entry.name
  }

  const data = [
    {name: 'Attendees', students: 400},
    {name: 'Absentees', students: 700},
  ];
  return (
    <div>
        <div className="card col-md-4" style={{margin : "250px 0px 0 0px", borderRadius:"15px", position:"absolute"}}>
            <div className="card-body">
                <h1 className="card-title" style={{fontSize:"30px", color: "#3A477C" }}>Attendance Reports</h1>

        <PieChart width={470} height={200}>
          <Pie data={data} dataKey="students" outerRadius={60} label={renderLabel}>
          {data.map((entry, index)=>(
            <Cell key={`cell-${index}`} fill={barColor[index%2]}/>
          ))}
          </Pie>
          <Tooltip /> 
        </PieChart>
            </div>
        </div>
    </div>
  )
}

export default StatsCard2