import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, user, error, setError } = useUser();

  useEffect(()=>{
    if(user){
      navigate("/students")
    }
  },[user]) //check if user is truthy when the user's state changes

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    login(username, password);
  };
  return (
    <section className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="login-form">
          <label htmlFor="username">Username</label>
          <input
          required="required"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
          required="required"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="btn-login">
            Sign In
          </button>
        </div>
      </form>
      <span className="text">Don't have an account yet?</span>
      <button
        className="go-to-sign"
        onClick={() => {
          setError("");
          navigate("/register");
        }}
      >
        Sign Up
      </button>
    </section>
  );
};
