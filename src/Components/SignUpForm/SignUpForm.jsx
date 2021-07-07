import React, { useState } from "react";
import ErrorMessage from "../Layout/ErrorMessage/ErrorMessage";
import iIcon from "../../assets/i-icon.png";
import "./SignUpForm.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false)

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function ValidateEmail() {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      return true
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username.length === 0 || formData.username === "") {
      setUserName("Please enter your name");
      setError(true)
    } else {
      setUserName("");
      setUserData({ ...userData, username: formData.username });
    }

    if (ValidateEmail()) {
      setEmail("");
      setUserData({ ...userData, email: formData.email });
    } else {
      setError(true)
      setEmail("Please enter a valid email address")
    }

    if (formData.password.length < 6) {
      setPassword("Please enter a valad password")
    } else if (formData.password === formData.confirmPassword) {
      setPassword("");
      setUserData({ ...userData, password: formData.password })
    } else {
      setError(true)
      setPassword("Please make sure your passwords match")
    }

    if (password === "" && email === "" && userName === "") {
      setError(false)
    }
  };


  return (
    <div className="layout">
      <ErrorMessage
        user={userName}
        password={password}
        email={email}
        error={error}
      
      />
      <div className="form-container">
        <h1>Create account</h1>
        <form className="sign-up">
          <div className="input-container">
            <label className="input-label">Your name</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={formData.username}
            />
          </div>

          <div className="input-container">
            <label className="input-label">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
            />
          </div>

          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              onChange={handleChange}
              type="text"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
            />
            <span className="password-details">
              <img src={iIcon} />
              Passwords must be at least 6 characters.
            </span>
          </div>

          <div className="input-container" style={{ marginTop: "20px" }}>
            <label className="input-label">Re-enter password</label>
            <input
              onChange={handleChange}
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
            />
          </div>

          <button onClick={handleSubmit}>Create your not Amazon account</button>
        </form>
        <p className="disclaimer">
          By not really creating an account, you agree that Pete Du Beau can
          make a sign up form. Checkout more of his work{" "}
          <a
            href="http://petedubeau.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </p>
        <div className="already">
          Already have an account? Then go to the real Amazon page.
        </div>
      </div>
    </div>
  );
}
