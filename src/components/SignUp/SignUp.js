import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordlBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  // const handleErrorBlur = (e) => {
  //   setError(e.target.value);
  // };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("password didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password should be minimum 6 characters length");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordlBlur}
              type="password"
              name="confirm-password"
              required
            ></input>
            <p style={{ color: "red" }}>{error}</p>
          </div>

          <input className="form-submit" type="submit" value="signup"></input>
        </form>
        <p>
          already ahve an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
