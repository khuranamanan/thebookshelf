import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import signUpImg from "../assets/SignUpPageImg.jpg";
import logo from "../assets/Colorlogo.png";
import { AuthContext } from "../Contexts/AuthContext";

function SignUpPage() {
  const { signUpUser, loginData } = useContext(AuthContext);
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formInputError, setFormInputError] = useState();
  const navigate = useNavigate();

  function handleSignUpFormSubmit(e) {
    e.preventDefault();
    if (
      !signUpFormData.firstName.trim() ||
      !signUpFormData.lastName.trim() ||
      !signUpFormData.email.trim() ||
      !signUpFormData.password.trim() ||
      !signUpFormData.confirmPassword.trim()
    ) {
      setFormInputError(
        "Error: Incomplete Form Submission. Please fill in all required fields."
      );
      return;
    } else if (signUpFormData.password !== signUpFormData.confirmPassword) {
      setFormInputError(
        "Error: Passwords do not match. Please ensure that the password and confirm password fields are the same."
      );
      return;
    }
    signUpUser(
      signUpFormData.email.trim(),
      signUpFormData.password.trim(),
      signUpFormData.firstName.trim(),
      signUpFormData.lastName.trim()
    );
  }

  const formInputErrorDisplay = formInputError && (
    <p className="form-input-error"> {formInputError} </p>
  );

  const apiErrorDisplay = loginData.isError && (
    <p className="form-input-error"> {loginData.isError} </p>
  );

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate("/");
    }
  }, [loginData.isLoggedIn, navigate]);

  return (
    <div className="signup-page">
      <div className="content-box">
        <div className="branding-logo">
          <img src={logo} alt="the-bookshelf-logo" />
        </div>
        <form className="form-fields" onSubmit={handleSignUpFormSubmit}>
          <h1 className="signup-page-heading">Sign Up</h1>
          <div className="input-name-fields">
            <input
              type="text"
              className="input-name-field"
              placeholder="First Name"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              className="input-name-field"
              placeholder="Last Name"
              onChange={(e) =>
                setSignUpFormData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              required
            />
          </div>

          <input
            type="email"
            className="input-email-field"
            placeholder="Email"
            onChange={(e) =>
              setSignUpFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
          />
          <input
            type="password"
            className="input-password-field"
            placeholder="Create Password"
            onChange={(e) =>
              setSignUpFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            required
          />
          <input
            type="password"
            className="input-password-field"
            placeholder="Confirm Password"
            onChange={(e) =>
              setSignUpFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            required
          />
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
        {formInputErrorDisplay}
        {apiErrorDisplay}
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
