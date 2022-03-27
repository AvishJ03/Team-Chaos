import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { GeoPoint } from "@firebase/firestore";

const AddProject = ({setDisplay}) => {
  const [title, setTitle] = useState("");
  const [lat, setLatitude] = useState(null);
  const [long, setLongitude] = useState(null);
  const [worker, setWorker] = useState(null);
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const geolocation = new GeoPoint(lat,long);

  const addProject = async (e) => {
    try {
      const projectRef = collection(db, "projects");
      await addDoc(projectRef, {
        title: title,
        location: geolocation,
        workers: parseInt(worker),
      });
      setDisplay(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          marginLeft: "300px",
          width: "1200px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <div>
          <form>
            <div className="row">
              <div className="col-6 p-2 pt-4 my-3" style={{ zIndex: "2" }}>
                <input
                  type="text"
                  className="form-control mx-4"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  style={{
                    borderRadius: "20px",
                    width: "500px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="col-6 p-2 pt-4 my-3" style={{ zIndex: "2" }}>
                <input
                  type="text"
                  className="form-control mx-4"
                  placeholder="Project Latitude"
                  value={lat}
                  onChange={(e) => {
                    setLatitude(e.target.value);
                  }}
                  style={{
                    borderRadius: "20px",
                    width: "500px",
                    height: "50px",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 p-2 my-3" style={{ zIndex: "2" }}>
                <input
                  type="text"
                  className="form-control mx-4"
                  placeholder="Project Longitude"
                  value={long}
                  onChange={(e) => {
                    setLongitude(e.target.value);
                  }}
                  style={{
                    borderRadius: "20px",
                    width: "500px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="col-6 p-2 my-3" style={{ zIndex: "2" }}>
                <input
                  type="text"
                  className="form-control mx-4"
                  placeholder="No of workers"
                  value={worker}
                  onChange={(e) => {
                    setWorker(e.target.value);
                  }}
                  style={{
                    borderRadius: "20px",
                    width: "500px",
                    height: "50px",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div
                className='col-3 p-2 my-2' style={{zIndex:"2", margin:"475px"}}
              >
                <button
                  onClick={addProject}
                  type="button"
                  class="btn btn-dark btn-lg px-4" style={{borderRadius:"20px", background: "#3A477C", border:"none"}}
                >
                  Create Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginLeft: "1180px",
          width: "1200px",
          marginTop: "20px",
          borderRadius: "20px",
          zIndex: "2",
        }}
      ></div>
    </>
  );
};

export default AddProject;
