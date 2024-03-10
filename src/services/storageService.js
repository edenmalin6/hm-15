const USERS_KEY = "users";
const LOGGED_IN_USER = "loggedInUser";

export const storageService = {
  getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },
  saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  getLoggedInUser(){
    const loggedInUser = localStorage.getItem(LOGGED_IN_USER)
    return loggedInUser ? JSON.parse(loggedInUser) : null 
  },
  saveLoggedInUser(user){
    localStorage.setItem(LOGGED_IN_USER,JSON.stringify(user) )
  },
  clearAll(){
    sessionStorage.removeItem(LOGGED_IN_USER)
  }
};
