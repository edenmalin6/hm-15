import { useState } from "react";
import databaseStudents from "../data/students";

export const EditRow = ({ setEditId, student, setStudents }) => {
  const [updatedName, setUpdatedName] = useState(student.name);
  const [updatedAge, setUpdatedAge] = useState(student.age);
  const [updatedMajor, setUpdatedMajor] = useState(student.major);
  const [updatedUniversity, setUpdatedUniversity] = useState(student.university);
  const [updatedAverageGrade, setUpdatedAverageGrade] = useState(
    student.averageGrade
  );

  const handleSave = (e) => {
    e.preventDefault();

    const studentIndex = databaseStudents.findIndex(
      (findStudent) => findStudent.id === student.id
    );
    databaseStudents[studentIndex] = {
      id: student.id,
      name: updatedName,
      age: updatedAge,
      major: updatedMajor,
      university: updatedUniversity,
      averageGrade: updatedAverageGrade,
    };
    setStudents([...databaseStudents])
    
   handleCancel()
  };
  const handleCancel = () => {
    setEditId(null); // to set editId back to null
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={updatedAge}
          onChange={(e) => setUpdatedAge(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={updatedMajor}
          onChange={(e) => setUpdatedMajor(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={updatedUniversity}
          onChange={(e) => setUpdatedUniversity(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={updatedAverageGrade}
          onChange={(e) => setUpdatedAverageGrade(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleSave} className="btn-update" type="submit">
          Save
        </button>
        <button onClick={handleCancel} className="btn-cancel" type="submit">Cancel</button>
      </td>
    </tr>
  );
};
