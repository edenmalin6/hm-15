import React from "react";
import "../components/Dashboard.css"

export const Table = ({students}) => {
  return (
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
  );
};
