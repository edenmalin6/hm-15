import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { StudentsApp } from "./components/StudentsApp";
import { storageService } from "./services/storageService";
import { userService } from "./services/userService";
import { useState, useEffect } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const [error, setError] = useState("");

  const register = (email, username, password) => {
    try {
      userService.createUser(email, username, password);
    } catch (e) {
      setError(e.message)
      throw e
    }
    setShowRegisterPage(false);
  };
  
  const login = (username, password) => {
    let user;
    try {
      user = userService.login(username, password);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      throw e;
      
    }
    setLoggedInUser(user);
  };

  return (
    <div className="App">
      {!loggedInUser ? (
        showRegisterPage ? (
          <RegisterForm
            register={register}
            setShowRegisterPage={setShowRegisterPage}
            error={error}
            setError={setError}
          />
        ) : (
          <LoginForm
            login={login}
            setShowRegisterPage={setShowRegisterPage}
            error={error}
            setError={setError}
          />
        )
      ) : (
        <StudentsApp
          setLoggedInUser={setLoggedInUser}
        />
      )}
    </div>
  );
}

export default App;
