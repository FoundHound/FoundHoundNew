import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar extraMargin"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link className="" to="/">
          <img src="assets/images/found_hound_logo.png" alt="Found Hound Logo"/>
        </Link>
        <i class="glyphicon glyphicon-user"></i>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/discover" ? "active" : ""}
        >
          <Link to="/discover">Discover</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>;

export default Navbar;
