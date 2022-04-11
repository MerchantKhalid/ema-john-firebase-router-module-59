import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              onBlurCapture={handleEmailBlur}
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
          <input className="form-submit" type="submit" value="login"></input>
        </form>
        <p>
          new to ema-john?
          <Link className="form-link" to="/signup">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
