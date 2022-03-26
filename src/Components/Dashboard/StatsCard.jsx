import { query, collection, getDocs, doc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { db, auth } from '../../utils/init-firebase';

const StatsCard = (props) => {

  const [noProjects, setNoProjects] = useState(0);

  useEffect(() => {
    const getProject = async () => {
      const project = collection(db, "projects");
      const docSnap = await getDocs(project);
      setNoProjects(docSnap.docs.length);
    }
    getProject();
  }, [])

  return (
    <div>
      <div className="card col-md-4" style={{ margin: "120px 0 0 0", borderRadius: "15px", position: "absolute" }}>
        <div className="card-body">
          <h1 className="card-title" style={{ fontSize: "30px" }}>Total Projects</h1>
          <p className="card-text" style={{ color: "black" }}>
            {noProjects}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard