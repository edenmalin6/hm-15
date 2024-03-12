import React from "react";

const ReadOnlyRow = ({
  student,
  handleRemoveClick,
  handleEditClick,
}) => {
  return (
    <tr key={student.id} className="tr">
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td>     
      <button
        className="btn-edit"
        onClick={(e) => handleEditClick(e, student.id)}
      >
        Edit
      </button>
      <button
        className="btn-remove"
        onClick={() => handleRemoveClick(student.id)}
      >
        Remove
      </button>
      </td>      
    </tr>
  );
};

export default ReadOnlyRow;
