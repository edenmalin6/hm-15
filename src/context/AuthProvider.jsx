import React, { createContext, useContext, useEffect, useState } from "react";
import { storageService } from "../services/storageService";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = storageService.getLoggedInUser();
    if (existingUser) {
      setUser(existingUser);
    }
  }, []);

  const [error, setError] = useState("");

  const register = (email, username, password) => {
    try {
      userService.createUser(email, username, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
    navigate("/login");
  };

  const login = (username, password) => {
    let user;
    try {
     user = userService.login(username, password);
    } catch (error) {
      setError(error.message)
      throw error;
    }
    setUser(user)
    navigate("/students");
  };
  const logout = () => {
    userService.logout()
    setUser(null)
    navigate("/login")
  }

  const value = { user, register, login, logout,  error, setError };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext)
