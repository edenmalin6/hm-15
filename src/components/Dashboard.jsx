import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import { EditRow } from "./EditRow";

export const Table = ({ students, setStudents }) => {
  const [editId, setEditId] = useState(null);

  const handleRemoveClick = (e, studentId) => {
    e.preventDefault();
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };

  const handleEditClick = (e, studentId) => {
    e.preventDefault();
    setEditId(studentId);
  };
  return (
    <div className="Table>">
      <form>
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
                <EditRow setEditId={setEditId} student={student} />
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
      </form>
    </div>
  );
};
