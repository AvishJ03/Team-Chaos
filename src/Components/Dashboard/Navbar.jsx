import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/navbar.css";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div
      className="row"
      style={{
        height: "100vh",
        position: "absolute",
        marginTop: "-19px",
      }}
    >
      <div className="col-2">
        <div className="wrapper">
          <nav
            id="sidebar"
            style={{ height: "110vh", width: "250px", marginLeft: "-12px" }}
          >
            <div className="sidebar-header my-4" style={{}}>
              <h3 className="">
                <img src="assets/logo-2.png" style={{ width: "200px" }}></img>
              </h3>
            </div>
            <ul
              className="list-unstyled components"
              style={{ marginTop: "-20px" }}
            >
              <li>
                <Link to="/dashboard">
                  <span class="icon">
                    <ion-icon name="grid-outline"></ion-icon>
                  </span>
                  &nbsp;&nbsp;&nbsp;Dashboard
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span class="icon">
                    <ion-icon name="build-outline"></ion-icon>
                  </span>
                  &nbsp;&nbsp;&nbsp;Projects
                </Link>
              </li>
              <li>
                <Link to="/worker">
                  <span class="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  &nbsp;&nbsp;&nbsp;Workers
                </Link>
              </li>
              <li>
                <Link to="/attendance">
                  <span class="icon">
                    <ion-icon name="clipboard-outline"></ion-icon>
                  </span>
                  &nbsp;&nbsp;&nbsp;Attendance
                </Link>
              </li>

              <Link to="/">
                <span class="icon">
                  <button
                    type="button"
                    class="btn btn-light btn-lg px-4 mx-4"
                    onClick={() => {
                      logout();
                      console.log("logout");
                    }}
                    style={{
                      borderRadius: "20px",
                      marginTop: "295px",
                      background: "#3A477C",
                      color: "white",
                    }}
                  >
                    Logout
                  </button>
                </span>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
