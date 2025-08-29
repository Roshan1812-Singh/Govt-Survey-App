import React, { useState } from "react";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const handleLoginRedirect = () => {
    setShowPopup(false);
    navigate("/");
  };

  const compulsoryNavs = ['/' , '/dashboard']

  const isOtherNavs = compulsoryNavs.includes(location.pathname);

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

      <div className="navbar">
        <a href="/dashboard">Home</a>
        {!isOtherNavs && (
          <>
            <a href="/policies">Policies and Guidelines</a>
            <a href="https://microdata.gov.in/NADA/Guide_to_download_microdata.pdf">Download Manual</a>
            <a href="/contact">Contact Us</a>
          </>
        )}
        
        <button className="login-btn" onClick={handleLoginClick}>
          <VscAccount style={{ marginRight: "5px" }} /> Login ▾
        </button>

        {showPopup && (
          <div className="popup">
            <button className="popup-login" onClick={handleLoginRedirect}>Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// https://microdata.gov.in/NADA/Guide_to_download_microdata.pdf
