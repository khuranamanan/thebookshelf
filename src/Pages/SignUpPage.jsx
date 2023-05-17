import React from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";
import signUpImg from "../assets/SignUpPageImg.jpg";
import logo from "../assets/Colorlogo.png";

function SignUpPage() {
  return (
    <div className="signup-page">
      <div className="content-box">
        <div className="branding-logo">
          <img src={logo} alt="the-bookshelf-logo" />
        </div>
        <div className="form-fields">
          <h1 className="signup-page-heading">Sign Up</h1>
          <div className="input-name-fields">
            <input
              type="text"
              className="input-name-field"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="input-name-field"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            type="email"
            className="input-email-field"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="input-password-field"
            placeholder="Create Password"
            required
          />
          <input
            type="password"
            className="input-password-field"
            placeholder="Re-enter Password"
            required
          />
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="existing-user-prompt">
          Existing user? <Link to="/login">Log In</Link>
        </div>
      </div>
      <div className="quote-box">
        <img src={signUpImg} alt="Book" className="book-image" />
        <div className="overlay"></div>
        <div className="quote">
          "It is our choices, Harry, that show what we truly are, far more than
          our abilities." - Albus Dumbledore
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
