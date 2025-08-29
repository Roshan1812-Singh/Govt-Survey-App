import React from "react";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import loginlogo from '../assets/login.png'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-logo left">
          <img src={logo1} alt="Logo1" className="logo-img" />
        </div>
        <div className="header-title">
          <p className="title-text">
            <Link to={"/"} className="title-link">
              An Online Mircodata Library
            </Link>
          </p>
        </div>
        <div className="header-logo righ">
          <img src={logo2} alt="Logo2" className="logo-img" />
        </div>
      </div>
      <div className="nav-bar">
        <img src={loginlogo} alt="login" className="user-icon" />
        <nav>
          <select className="nav-select">
            <option value="login">Login</option>
          </select>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
