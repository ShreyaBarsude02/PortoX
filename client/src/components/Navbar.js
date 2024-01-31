import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="base">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">PortoX</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">Explore</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upload">Upload</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar
