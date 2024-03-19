import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storageService } from "../services/storageService";

export const NotFound = () => {
  const LOGGED_IN_USER = "loggedInUser";
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem(LOGGED_IN_USER)) {
        navigate("/students");
      } else {
        navigate("/login");
      }
    }, 1500);
  }, []);
  return (
    <div style={{ margin: "10px", padding: "10px", fontSize: "50px" }}>
      404 Not Found
    </div>
  );
};
