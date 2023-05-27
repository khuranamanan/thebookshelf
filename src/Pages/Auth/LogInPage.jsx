import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./LogInPage.css";
import logInImg from "../../assets/LogInPageImg.jpg";
import logo from "../../assets/Colorlogo.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function LogInPage() {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { logInUser, loginData } = useContext(AuthContext);
  const [formInputError, setFormInputError] = useState();
  const [showPassword, setShowPassword] = useState();
  useDocumentTitle("Log In | The Bookshelf");

  function handleLogInFormSubmit(event) {
    event.preventDefault();
    if (!logInFormData.email.trim() || !logInFormData.password.trim()) {
      setFormInputError(
        "Error: Incomplete Form Submission. Please fill in all required fields."
      );
      return;
    }
    logInUser(logInFormData.email.trim(), logInFormData.password.trim());
  }

  const loginErrorHandler = loginData.isError && (
    <p className="login-error"> {loginData.isError} </p>
  );

  const formInputErrorDisplay = formInputError && (
    <p className="login-error"> {formInputError} </p>
  );

  const showPasswordIcon = showPassword ? (
    <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
  ) : (
    <AiFillEye onClick={() => setShowPassword(true)} />
  );

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate(location?.state?.from || "/", { replace: true });
    }
  }, [loginData.isLoggedIn, navigate, location]);

  return (
    <div className="login-page">
      <div className="quote-box">
        <img src={logInImg} alt="Book" className="book-image" />
        <div className="overlay"></div>
        <div className="quote">
          "There is no friend as loyal as a book." -Ernest Hemingway
        </div>
      </div>
      <div className="login-box">
        <div className="branding-logo">
          <img src={logo} alt="the-bookshelf-logo" />
        </div>
        <form className="form-fields" onSubmit={handleLogInFormSubmit}>
          <h1 className="login-page-heading">Log In</h1>
          <input
            type="email"
            placeholder="Email"
            value={logInFormData.email}
            onChange={(e) =>
              setLogInFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <div className="password-input-box flex-center">
            <input
              type={showPassword ? "text" : "password"}
              className="password-input-field"
              placeholder="Password"
              onChange={(e) =>
                setLogInFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              value={logInFormData.password}
            />
            <div className="show-password-icon flex-center">
              {showPasswordIcon}
            </div>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <button
            className="test-login-button"
            type="submit"
            onClick={() =>
              setLogInFormData({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              })
            }
          >
            Login with Test Credentials
          </button>
        </form>
        {loginErrorHandler}
        {formInputErrorDisplay}
        <div className="new-user-prompt">
          New user? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
