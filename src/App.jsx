import "./style.css";
import { Table } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AddStudent } from "./components/AddStudent";
import databaseStudents from "./data/students";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(databaseStudents);

  return (
    <div className="App">
      <Header />
      <h2>Student List</h2>
      <AddStudent setStudents={setStudents} />
      <Table students={students} />
      <Footer />
    </div>
  );
}

export default App;
