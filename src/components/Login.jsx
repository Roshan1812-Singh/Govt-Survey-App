import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { generateCaptcha } from "./captchaUtils";
import "./Form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (captcha !== inputCaptcha) {
      alert("Captcha does not match!");
      setCaptcha(generateCaptcha());
      return;
    }
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2 style={{ display: "flex", justifyContent: "start" }}>Log in</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="captcha-box">
          <p className="captcha-text">{captcha}</p>
          <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
            ↻
          </button>
        </div>
        <input
          placeholder="Type the text in the box"
          onChange={(e) => setInputCaptcha(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/register">Register</Link>
          <Link to="#">Forgot password</Link>
        </p>
        <p style={{display: "flex", justifyContent: "center", alignContent: "center", color: "violet"}}>
             Information you provide by registering or login to our catalog will be used in compliance with the terms of the NSO's Privacy Policy.
        </p>
      </form>
    </div>
  );
}

export default Login;
