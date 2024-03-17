import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Table } from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { AddStudent } from "../components/AddStudent";
import databaseStudents from "../data/students";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storageService } from "../services/storageService";

export const StudentsPage = () => {
  const [students, setStudents] = useState(databaseStudents);
  const navigate = useNavigate();
  const { logout, user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [navigate, user])

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <Header handleLogout={handleLogout} />
      <h2>Student List</h2>
      <img src={storageService.getLoggedInUser().avatar}></img>
      <AddStudent setStudents={setStudents} />
      <Table students={students} setStudents={setStudents} />
      <Footer />
    </div>
  );
};
