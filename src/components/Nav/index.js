import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand"to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/aboutme">About Me</Link>
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
    <Link className="nav-link" to="/resume">Resume</Link>
  
        </div>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;

