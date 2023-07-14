import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="data:image/jpeg;base64,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" alt="Logo"  width={"45px"}/>
             
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
