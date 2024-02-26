import "./style.css";
import { Table } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import students from "./data/students";
import { useState } from "react";
// import {useTable} from "react-table"

  
function App() {
  return (
    <div className="App">
      <Header />
      <h2>Student List</h2>
      <Table />
      <Footer />
    </div>
  );
}


export default App
