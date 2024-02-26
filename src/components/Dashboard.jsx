import databaseStudents from "../data/students";
import React, { useState } from "react";

export const Table = () => {
  const [students, setStudents] = useState(databaseStudents);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [averageGrade, setAverageGrade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        ></input>
        <label htmlFor="major">Major: </label>
        <input
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="university">University: </label>
        <input
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          type="text"
        ></input>
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          id="averageGrade"
          value={averageGrade}
          onChange={(e) => setAverageGrade(e.target.value)}
          type="number"
        ></input>
        <button type="submit">Add Student</button>
      </form>
      <div className="Table>">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Major</th>
              <th>University</th>
              <th>Average Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="tr">
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.major}</td>
                <td>{student.university}</td>
                <td>{student.averageGrade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
