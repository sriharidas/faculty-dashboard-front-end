import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://www.bitsathy.ac.in/assets/images/logo.png"
        alt="logo"
        className="navbar-logo"
      />
      {/* <h1 className="navbar-title">Faculty Dashboard</h1> */}
      <ul className="navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-nav-active">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
