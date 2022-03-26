// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDESYX828pCN8q0jFMZkGZpDKQLfECcyps",
  authDomain: "construct-w.firebaseapp.com",
  projectId: "construct-w",
  storageBucket: "construct-w.appspot.com",
  messagingSenderId: "428762654784",
  appId: "1:428762654784:web:0be7041f4f1ca2a5c797a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
