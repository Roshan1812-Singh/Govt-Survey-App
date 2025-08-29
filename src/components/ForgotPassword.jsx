import React, { useState } from 'react'
import './ForgotPassword.css'
import Footer from './Footer';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage("A password reset link has been sent to your email.");
            setEmail("");
        } else {
            setMessage("Please enter a valid email address.");
        }

    };
    return (
        <div className="page-container">
            <div className="forgot-container">
                <div className="forgot-box">
                    <h2>Forgot password</h2>
                    <p>
                        Please enter your email address so we can send you an email to reset
                        your password.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <div>
                                <label htmlFor="Email">Email Address</label>
                            </div>
                            <div>
                                <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPassword
