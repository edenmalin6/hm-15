import React, { useState } from "react";
import { storageService } from "../services/storageService";

export const AdminEditRow = ({
  setAdminEditId,
  user,
  users,
  index,
  setUsers,
}) => {
  const [updatedEmail, setUpdatedEmail] = useState(user.email);
  const [updatedUsername, setUpdatedUsername] = useState(user.username);
  const [updatedPassword, setUpdatedPassword] = useState(user.password);
  const [updatedAdminStat, setUpdatedAdminStat] = useState(user.isAdmin);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUsers = [...users];
    updatedUsers[index] = {
      ...user,
      email: updatedEmail,
      username: updatedUsername,
      password: updatedPassword,
      isAdmin: updatedAdminStat,
    };
    storageService.saveUsers(updatedUsers);
    setUsers(updatedUsers);
    
    handleCancel();
  };
  const handleCancel = () => {
    setAdminEditId(null);
  };

  return (
    <div className="admin-edit-row">
      <tr>
        <td>
          <input
            type="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
          />
        </td>
        <td>
          <input
            type="password"
            value={updatedPassword}
            onChange={(e) => setUpdatedPassword(e.target.value)}
          />
        </td>
        <td>
          <select
            value={updatedAdminStat}
            onChange={(e) => setUpdatedAdminStat(e.target.value === "true")}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </td>
        <td>
          <button
            onClick={handleSave}
            className="admin-btn-update"
            type="submit"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="admin-btn-cancel"
            type="submit"
          >
            Cancel
          </button>
        </td>
      </tr>
    </div>
  );
};
