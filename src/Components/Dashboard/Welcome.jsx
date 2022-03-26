import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/welcome.css";
import StatsCard from "./StatsCard";
import StatsCard1 from "./StatsCard1";
import StatsCard2 from "./StatsCard2";
import StatsCard3 from "./StatsCard3";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/init-firebase";

const Welcome = () => {
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  const uid = currentUser?.uid;

  useEffect(() => {
    const getUser = async () => {
      try {
        const contractorRef = collection(db, "Contractor");
        const q = query(contractorRef, where("user_id", "==", uid));
        const querySnapshot = await getDocs(q);
        const userID = querySnapshot.docs[0].id;
        console.log(userID);
        const userDoc = doc(db, "Contractor", userID);
        const docSnap = await getDoc(userDoc);
        setName(docSnap.data().name.toUpperCase());
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div className="backgroundA mt-3">
        <h1 className="pt-5 pb-3 px-5" style={{ color: "#fff" }}>
          Hello, Welcome Back!
        </h1>
        <h3 className="px-5" style={{ color: "#fff" }}>
          {name}
        </h3>
        <StatsCard />
        <StatsCard1 />
        <StatsCard2 />
        <StatsCard3 />
      </div>
    </>
  );
};

export default Welcome;
