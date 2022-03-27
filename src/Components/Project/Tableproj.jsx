import React, { useEffect, useState } from "react";
import Row from "./Rowproj";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

const Tableproj = () => {
  let [projects, setProjects] = useState([]);
  const workers = [];

  useEffect(() => {
    const getUser = async () => {
      try {
        const projectsRef = collection(db, "projects");
        const docSnap = await getDocs(projectsRef);
        docSnap.docs.forEach(async (element) => {
          const id = element.id;
          const pro = doc(db, "projects", id);
          const snap = await getDoc(pro);
          // console.log(snap.data());
          const long = snap.data().location._long;
          const lat = snap.data().location._lat;
          const p = {
            projectID: id,
            title: snap.data().title,
            location: `${lat} N, ${long} E`,
            workers: snap.data().workers,
          };
          // console.log(p);
          setProjects((prevSelected) => [...prevSelected, p]);
        });
        // console.log(projects);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  let createRow = (project) => {
    return (
      <Row
        uniqueKey={project.projectID}
        title={project.title}
        location={project.location}
        workers={project.workers}
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
              Project Title
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
              Location
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
              Workers
            </th>
          </tr>
        </thead>
        <tbody>{projects.map(createRow)}</tbody>
      </table>
    </div>
  );
};

export default Tableproj;
