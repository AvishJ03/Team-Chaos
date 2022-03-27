import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AddWorker = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [number, setNumber] = useState(null);
  const [project, setProject] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const addWorker = async (e) => {
    try {
      const workerRef = collection(db, "workers");
      await addDoc(workerRef, {
        name: name,
        age: parseInt(age),
        mobile: parseInt(number),
        project: project,
        email: email,
        address: address,
        attendance: parseInt(0),
      });
      navigate("/dashboard");
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
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  placeholder="Age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
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
                  placeholder="Mobile Number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
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
                  placeholder="Project Id"
                  value={project}
                  onChange={(e) => {
                    setProject(e.target.value);
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
                  type="email"
                  className="form-control mx-4"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
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
              <div className='col-4 p-2 my-2' style={{zIndex:"2", marginLeft:"25px"}}>
                <button
                  type="button"
                  className='col-4 p-2 my-2' style={{zIndex:"2", marginLeft:"25px"}}
                >
                  Upload Photo
                </button>
              </div>
              <div
                className='col-4 p-2 my-2' style={{zIndex:"2", marginLeft:"-90px"}}
              >
                <button
                  type="button"
                  class="btn btn-dark btn-lg px-4" style={{borderRadius:"20px", background: "#3A477C"}}
                >
                  Upload Aadhar
                </button>
              </div>
              <div
                className='col-4 p-2 my-2' style={{zIndex:"2"}}
              >
                <button
                  type="button"
                  class="btn btn-dark btn-lg px-4" style={{borderRadius:"20px", background: "#5A72D3", marginLeft:"270px", border:"none"}}
                  onClick={addWorker}
                >
                  Submit
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

export default AddWorker;
