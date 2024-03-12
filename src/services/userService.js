import { v4 as uuidv4 } from "uuid";
import { storageService } from "./storageService";

export const createUser = (email, username, password) => {
  const id = uuidv4();
  const newUser = {
    id,
    email,
    username,
    password,
    avatar: "http://robohash.org/" + id,
    isAdmin: false,
  };
  const usersList = storageService.getUsers();

  const matchingUsername = usersList.findOne((user) => user.username === newUser.username);
  if(matchingUsername) throw Error ("Username already taken.")

  const matchingEmail = usersList.findOne((user) => user.email === newUser.email);
  if(matchingEmail) throw Error ("User with that email already exists.")

  storageService.saveUsers([...usersList, newUser]);
};

export const login = (username, password) => {
  const users = storageService.getUsers();
  const foundUser = users.find((user) => user.username === username);
  console.log(username, password);

  if (!foundUser) throw Error("User not found.");
  if (foundUser.password !== password) throw Error("Invalid password.");

  storageService.saveLoggedInUser(foundUser);
  return foundUser;
};

export const logout = () => {
  storageService.clearAll();
};
export const userService = { createUser, login, logout };
