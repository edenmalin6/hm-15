import { v4 as uuidv4 } from "uuid";
import { storageService } from "./storageService";

export const createUser = (email, username, password, avatar = "") => {
  const newUser = {
    id: uuidv4(),
    email,
    username,
    password,
    avatar,
    isAdmin: false,
  };
  const usersList = storageService.getUsers();
  storageService.saveUsers([...usersList, newUser]);
};

export const login = (username, password) => {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.username === username 
  );
    if (!foundedUser) return null;
    if (foundedUser.password !== password) {
      alert("Invalid Password. Please Make Sure You Entered The Right Password.");
      return null;
    }
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
};

export const logout = () => {
  storageService.clearAll();
};
export const userService = { createUser, login, logout };
