import React, { useState } from "react";

 export const LoginForm = ({ login, setShowRegisterPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password);
    console.log( username, password);

  };
  return (
    <section className="login-container">
      <h2>Login</h2>
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
      <button onClick={()=> setShowRegisterPage(true)}>Sign Up</button>
    </section>
  );
};


