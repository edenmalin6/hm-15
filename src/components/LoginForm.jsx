import React, { useState } from "react";

export const LoginForm = ({ login, setShowRegisterPage, error,setError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password);
  };
  return (
    <section className="login-container">
      <h2>Login</h2>
      {error}
      <form onSubmit={handleLogin}>
        <div className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
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
      <span>Don't have an account yet? </span>
      <button
        onClick={() => {
          setError("");
          setShowRegisterPage(true);
        }}
      >
        Sign Up
      </button>
    </section>
  );
};
