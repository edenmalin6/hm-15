import databaseStudents from "../data/students";
import React, { useState } from "react";

export const AddStudent = ({ setStudents }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [averageGrade, setAverageGrade] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    databaseStudents.push({ name, age, major, university, averageGrade });
    setStudents([...databaseStudents]);

    // Ik its rly ugly that way but im tired
    setName("")
    setAge("")
    setMajor("")
    setUniversity("")
    setAverageGrade("")

  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          required= "required"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          required= "required"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        ></input>
        <label htmlFor="major">Major: </label>
        <input
          id="major"
          required= "required"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="university">University: </label>
        <input
          id="university"
          required= "required"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          id="averageGrade"
          required= "required"
          value={averageGrade}
          onChange={(e) => setAverageGrade(e.target.value)}
          type="number"
        ></input>
        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  );
};
