import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import Button from "./Button";

export const Navbar = () => {
  return (
    <div className="row">
      <div className="container">
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand logo mb-0 h1">Piso Fijo</span>
          </Link>
          <div className="ml-auto">
            <Link to="">
              <span className="navItem">Home</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/filter">
              <span className="navItem">Search</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/contactus">
              <span className="navItem">Contact us</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Button title="Log In"></Button>
          </div>
        </div>
      </nav>
    </div></div>
  );
};
