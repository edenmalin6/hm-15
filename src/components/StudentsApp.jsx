import React from "react";
import { Header } from "./Header";
import { Table } from "./Dashboard";
import { Footer } from "./Footer";
import { AddStudent } from "./AddStudent";
import databaseStudents from "../data/students";
import { logout } from "../services/userService";
import { useState } from "react";
import { storageService } from "../services/storageService";

export const StudentsApp = ({setLoggedInUser}) => {
  const [students, setStudents] = useState(databaseStudents);

  const handleLogout = () =>{
    logout()
    setLoggedInUser(null)
    
   }
  return (
    <div>
      <Header handleLogout={handleLogout}/>
      <h2>Student List</h2>
      <img src={storageService.getLoggedInUser().avatar}></img>
      <AddStudent setStudents={setStudents} />
      <Table students={students} setStudents={setStudents} />
      <Footer />
    </div>
  );
};
