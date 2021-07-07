import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./SignUpForm.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    eMail: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      [name]: value,
    });
    console.log(formData.username);
  };

  return (
    <div className="layout">
      <ErrorMessage />
      <div className="form-container">
        <h1>Create account</h1>
        <form class="sign-up">

          <div className="input-container">
            <label className="input-label">Your name</label>
            <input onChange={handleChange} type="text" name="username" />
          </div>

          <div className="input-container">
            <label className="input-label">Email</label>
            <input onChange={handleChange} type="text" name="email" />
          </div>

          <div className="input-container">
            <label className="input-label">Password</label>
            <input onChange={handleChange} type="text" name="password" />
          </div>

          <div className="input-container">
            <label className="input-label">Re-enter password</label>
            <input onChange={handleChange} type="text" name="confirmPassword" />
          </div>

        </form>
        <button>Create your not Amazon account</button>
        <p className="disclaimer">
          By not really creating an account, you agree that Pete Du Beau can
          make a sign up form. Checkout more of his work{" "}
          <a href="http://petedubeau.surge.sh/" target="_blank" rel="noreferrer">
            here.
          </a>
        </p>
        <div className="already">
          <p>Already have an account? Then go to the real Amazon page.</p>
        </div>
      </div>
    </div>
  );
}
