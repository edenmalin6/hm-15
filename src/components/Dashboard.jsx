import React, { useState } from "react";
import databaseStudents from "../data/students";
import ReadOnlyRow from "./ReadOnlyRow";
import { EditRow } from "./EditRow";
import { Admin } from "./Admin";
import { storageService } from "../services/storageService";

export const Table = ({ students, setStudents }) => {
  const [editId, setEditId] = useState(null);

  const handleRemoveClick = (studentId) => {
    const studentIndex = databaseStudents.findIndex(
      (student) => student.id === studentId
    );
    databaseStudents.splice(studentIndex, 1);
    setStudents([...databaseStudents]);
  };

  const handleEditClick = (e, studentId) => {
    e.preventDefault();
    setEditId(studentId);
  };
  return (
    <div className="content-box">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>University</th>
            <th>Average Grade</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, key) =>
            editId === student.id ? ( //editId - when null, edit and remove actions are available. when editId is equal to student.id save anf cancel actions are available.
              <EditRow
                setEditId={setEditId}
                student={student}
                setStudents={setStudents}
              />
            ) : (
              <ReadOnlyRow
                student={student}
                handleRemoveClick={handleRemoveClick}
                handleEditClick={handleEditClick}
              />
            )
          )}
        </tbody>
      </table>
      <br></br>
      {storageService.getLoggedInUser().isAdmin && <Admin/>} 
    </div>
  );
}; 
// // And(&&) returns the last checked value. logged user is truthy and also 
