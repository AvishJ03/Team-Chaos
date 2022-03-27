import React, { useEffect, useState } from "react";
import Row from "./Row";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

const Table = ({ setDisplay }) => {
  let [workers, setWorkers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const workersRef = collection(db, "workers");
        const docSnap = await getDocs(workersRef);
        docSnap.docs.forEach(async (element) => {
          const id = element.id;
          const worker = doc(db, "workers", id);
          const snap = await getDoc(worker);
          const man = {
            workerID: id,
            name: snap.data().name,
            projectID: snap.data().project,
            attendance: snap.data().attendance,
          };
          setWorkers((prevSelected) => [...prevSelected, man]);
        });
        console.log(workers);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  let createRow = (worker) => {
    return (
      <Row
        uniqueKey={worker.workerID}
        name={worker.name}
        projectID={worker.projectID}
        attendance={worker.attendance}
        setDisplay={setDisplay}
      />
    );
  };

  return (
    <div
      className="px-3 container"
      style={{
        backgroundColor: "white",
        marginLeft: "300px",
        width: "1200px",
        marginTop: "15px",
        borderRadius: "20px",
        zIndex: "2",
      }}
    >
      <table className="table">
        <thead>
          <tr style={{ height: "12px" }}>
            <th
              scope="col"
              style={{
                color: "#A3A2A2",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
              }}
            >
              Worker ID
            </th>
            <th
              scope="col"
              style={{
                color: "#A3A2A2",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
              }}
            >
              Name
            </th>
            <th
              scope="col"
              style={{
                color: "#A3A2A2",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
              }}
            >
              Project ID
            </th>
            <th
              scope="col"
              style={{
                color: "#A3A2A2",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
              }}
            >
              Attendance
            </th>
            <th
              scope="col"
              style={{
                color: "#A3A2A2",
                paddingLeft: "20px",
                paddingRight: "20px",
                textAlign: "center",
              }}
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>{workers.map(createRow)}</tbody>
      </table>
    </div>
  );
};

export default Table;
