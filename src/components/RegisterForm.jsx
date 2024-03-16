import React, { useState } from "react";

export const RegisterForm = ({ register, setShowRegisterPage,  error, setError }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !email.trim()) return;
    register(email, username, password);
  };

  return (
    <section className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="register-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
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
          <button type="submit" className="btn-register">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <span>Already have an account? </span>
        <button onClick={() => setShowRegisterPage(false)+ setError("")} className="go-to-sign">Sign In</button>
      </div>
    </section>
  );
};
