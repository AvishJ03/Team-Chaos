import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser, register } = useAuth();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigate();
  const contractorCollectionRef = collection(db, "Contractor");

  function changeName(e) {
    setName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }

  const onSignup = async (e) => {
    try {
      e.preventDefault();
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(authUser);
      await addDoc(contractorCollectionRef, {
        user_id: authUser.user.uid,
        name: name,
        email: authUser.user.email,
        projects: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (props.state === true) {
    return (
      <div>
        <form>
          <div className="m-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="m-4">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              value={password}
              onChange={changePassword}
            />
          </div>
          <button
            type="button "
            className="btn btn-dark mb-3 px-3"
            onClick={async (e) => {
              e.preventDefault();
              // your login logic here
              if (!email || !password) {
                console.log("Please enter email and password");
              }
              setIsSubmiting(true);
              login(email, password);
              navigate("/dashboard");
              console.log(currentUser);
            }}
          >
            Login as Manager
          </button>
          <br />
          <button
            type="button "
            className="btn btn-dark mb-3 px-4"
            onClick={async (e) => {
              e.preventDefault();
              // your login logic here
              if (!email || !password) {
                console.log("Please enter email and password");
              }
              setIsSubmiting(true);
              login(email, password);
              navigate("/dashboard");
              console.log(currentUser);
            }}
          >
            Login as Worker
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <div className="m-4">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your Fullname"
              value={name}
              onChange={changeName}
            />
          </div>
          <div className="m-4">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="m-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              onChange={changePassword}
              valyue={password}
            />
          </div>
          <button
            type="button "
            className="btn btn-dark mb-3 px-3"
            onClick={onSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
};

export default Form;
