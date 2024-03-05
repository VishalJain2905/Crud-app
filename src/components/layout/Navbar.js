import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
    <Link className='btn btn-outline-success' to='/Users/add'> Add User</Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar