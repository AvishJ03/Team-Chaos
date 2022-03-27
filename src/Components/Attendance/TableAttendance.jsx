import React, { useState } from "react";
import Row from "./RowAttendance";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import Tesseract from "tesseract.js";

const TableAttendance = () => {
  const [attend, setAttend] = useState("");
  const [file, setFile] = useState(null);
  const [workers, setWorkers] = useState([]);
  let present = false;
  let attendees = [];

  function filesubmit(e) {
    setFile(e.target.files[0]);
  }

  const getUser = async () => {
    try {
      const workersRef = collection(db, "workers");
      const docSnap = await getDocs(workersRef);
      docSnap.docs.forEach(async (element) => {
        const id = element.id;
        const worker = doc(db, "workers", id);
        const snap = await getDoc(worker);
        present = false;
        for (let i = 0; i < attendees.length; i++) {
          if (attendees[i] == snap.data().name) {
            console.log(snap.data().name);
            present = true;
            console.log(present);
            break;
          }
        }
        const man = {
          workerID: id,
          name: snap.data().name,
          today: present ? "Present" : "Absent",
          attendance: present
            ? snap.data().attendance + 1
            : snap.data().attendance,
        };
        // console.log(man);
        setWorkers((prevSelected) => [...prevSelected, man]);
      });
      // console.log(workers);
    } catch (error) {
      console.log(error);
    }
  };
  // getUser();
  async function processImage() {
    console.log(file);
    await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      const txt = text.replace("\n", "");
      attendees = txt.split(", ");
      console.log(attendees);
    });
    getUser();
    console.log(workers);
  }

  let createRow = (worker) => {
    return (
      <Row
        uniqueKey={worker.workerID}
        name={worker.name}
        today={worker.today}
        attendance={worker.attendance}
      />
    );
  };

  return (
    <>
      <nav
        className="navbar navbar-light pt-5"
        style={{ marginLeft: "240px", marginTop: "35px" }}
      >
        <div
          className="container-fluid"
          style={{ margin: "0px", display: "inline" }}
        >
          <input
            type="file"
            class="form-control"
            id="customFile"
            onChange={filesubmit}
            style={{
              width: "500px",
              marginLeft: "350px",
              borderRadius: "20px",
              background: "#5A72D3",
              border: "none",
              color: "white",
            }}
          />

          <button
            type="button"
            class="btn btn-dark btn-lg px-4"
            style={{
              marginLeft: "550px",
              borderRadius: "20px",
              background: "#3A477C",
              border: "none",
              color: "white",
              marginTop: "10px",
              height: "40px",
              padding: "5px",
              height: "38px",
            }}
            onClick={() => {
              processImage();
            }}
          >
            Upload
          </button>
        </div>
      </nav>
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
                Worker Id
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
                Worker Name
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
                Today's Attendance
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
                Monthly Attendance
              </th>
            </tr>
          </thead>
          <tbody>{workers.map((createRow))}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableAttendance;
