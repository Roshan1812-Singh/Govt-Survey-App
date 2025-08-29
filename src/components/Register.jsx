import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateCaptcha } from "./captchaUtils";
import "./Form.css";
import Footer from "./Footer";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (captcha !== inputCaptcha) {
      alert("Captcha does not match!");
      setCaptcha(generateCaptcha());
      return;
    }
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div>
      <div className="form-container">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="First Name*" onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name*" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address*" onChange={handleChange} required />
          <input name="country" placeholder="Country*" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password*" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Password Confirm*" onChange={handleChange} required />

          <div className="captcha-box">
            <div className="captcha-creation">
              <p className="captcha-text">{captcha}</p>
            </div>
            <div className="reload">
              <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
                ↻
              </button>
            </div>
          </div>
          <input placeholder="Type the text in the box" onChange={(e) => setInputCaptcha(e.target.value)} required />

          <button type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
