import React, { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";

const StatsCard = () => {
  const [noProjects, setNoProjects] = useState(0);
  const { currentUser } = useAuth();
  const uid = currentUser?.uid;

  useEffect(() => {
    const getProject = async () => {
      try {
        const contractorRef = collection(db, "Contractor");
        const q = query(contractorRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(uid);
        const userDoc = doc(db, "Contractor", userID);
        const docSnap = await getDoc(userDoc);
        setNoProjects(docSnap.data().projects.length);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, [noProjects, currentUser, uid]);

  return (
    <div>
      <div
        className="card col-md-4"
        style={{
          margin: "120px 0 0 0",
          borderRadius: "15px",
          position: "absolute",
        }}
      >
        <div className="card-body">
          <h1 className="card-title" style={{ fontSize: "30px" }}>
            Total Projects
          </h1>
          <p className="card-text" style={{ color: "black" }}>
            {noProjects}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
