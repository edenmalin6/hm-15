import React, { useState, useSyncExternalStore } from "react";
import { storageService } from "../services/storageService";
import { AdminEditRow } from "./AdminEditRow";

export const Admin = () => {
  const [users, setUsers] = useState(storageService.getUsers());
  const [adminEditId, setAdminEditId] = useState(null);

  const handleRemoveClick = (userId) => {
    const updateUsers = users.filter((user) => user.id !== userId);
    storageService.saveUsers(updateUsers);
    setUsers(updateUsers);
  };

  const handleEditClick = (e, userId) => {
    e.preventDefault();
    setAdminEditId(userId);
  };
  return (
    <div className="admin-table>">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Admin Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {storageService.getUsers().map((user, index) =>
            adminEditId === user.id ? (
              <AdminEditRow setAdminEditId={setAdminEditId} index={index} user={user} users={users} setUsers={setUsers} />
            ) : (
              <tr key={index} className="tr">
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin.toString()}</td>
                <td>
                  <button
                    className="admin-edit-btn"
                    onClick={(e) => handleEditClick(e, user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="admin-remove-btn"
                    onClick={() => handleRemoveClick(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
