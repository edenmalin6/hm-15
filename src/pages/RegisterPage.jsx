import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {register, user, error, setError} = useUser()

  useEffect(()=>{
    if(user){
      navigate("/students")
    }
  },[user])

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !email.trim()) return;
    console.log(email, username, password);
    register(email, username, password)
  };
  return (
    <section className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="register-form">
          <label htmlFor="email">Email</label>
          <input
          required="required"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
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
          <button type="submit" className="btn-register">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <span>Already have an account? </span>
        <button
          onClick={() => {navigate("/login")
            setError("")}
          }
          className="go-to-sign"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};
