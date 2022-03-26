import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [isSubmiting, setIsSubmiting] = useState(false);

  function changeName(e) {
    setName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }

  function registerUser() {}
  const loginUser = async (e) => {
    e.preventDefault();
    // your login logic here
    try {
      login(email, password);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  if (props.state === false) {
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
          <button type="button " className="btn btn-dark mb-3 px-3">
            Login as Manager
          </button>
          <br />
          <button
            type="button "
            className="btn btn-dark mb-3 px-4"
            onSubmit={loginUser}
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
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Fullname"
              //   value={name}
              //   onChange={changeName}
            />
          </div>
          <div className="m-4">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
              //   value={email}
              //   onChange={changeEmail}
            />
          </div>
          <div className="m-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              //   onChange={changePassword}
              //   valyue={password}
            />
          </div>
          <button
            type="button "
            className="btn btn-dark mb-3 px-3"
            // onClick={registerUser}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
};

export default Form;
