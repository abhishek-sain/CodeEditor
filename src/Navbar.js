import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">HTML/CSS/JavaScript Editor</h1>
      <div className="navbar-buttons">
        <Link to="/editor" className="navbar-button">
          Editor
        </Link>
        <Link to="/learn" className="navbar-button">
          Learn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
