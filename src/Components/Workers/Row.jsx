import React from "react";
import { db } from "../../utils/init-firebase";
import {
  deleteDoc,
  doc,
} from "firebase/firestore";

const Row = (props) => {

  async function deleteWorker() {
    props.setDisplay(2);
    const id = props.uniqueKey;
    const userDoc = doc(db, "workers", id);
    await deleteDoc(userDoc);
    props.setDisplay(0);
  }
  return (
    <>
      <tr className="py" style={{ height: "12px" }}>
        <th
          scope="row"
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          {props.uniqueKey}
        </th>
        <td
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          {props.name}
        </td>
        <td
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          {props.projectID}
        </td>
        <td
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          {props.attendance}
        </td>
        <td
          style={{
            zIndex: "2",
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            class="btn btn-light btn-lg px-4 mx-4"
            onClick={deleteWorker}
            style={{
              borderRadius: "20px",
              background: "#3A477C",
              border: "none",
              color: "white",
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Row;
