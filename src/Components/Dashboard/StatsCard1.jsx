import React from 'react'
import {collection, getDocs, doc } from 'firebase/firestore';
import { useEffect } from 'react'
import { useState } from 'react';
import {db} from '../../utils/init-firebase';

const StatsCard1 = (props) => {

  const [noWorkers, setNoWorkers] = useState(0);

  useEffect(() => {
    const getWorkers = async () => {
      const workers = collection(db, "workers");
      const docSnap = await getDocs(workers);
      setNoWorkers(docSnap.docs.length);
    }
    getWorkers();
  }, [])

  return (
    <div>
        <div className="card col-md-4" style={{margin : "120px 0px 0 600px", borderRadius:"15px", position:"absolute"}}>
            <div className="card-body">
                <h1 className="card-title" style={{fontSize:"30px"}}>No of workers</h1>
                <p className="card-text" style={{color:"black"}}>
                   {noWorkers} 
                </p>
            </div>
        </div>
    </div>
  )
}

export default StatsCard1