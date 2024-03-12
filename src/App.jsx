import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { StudentsApp } from "./components/StudentsApp";
import { Toggle } from "./components/Toggle";
import { storageService } from "./services/storageService";
import { userService } from "./services/userService";
import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const register = (email, username, password) => {
    try {
      userService.createUser(email, username, password);
    } catch (e) {
      alert(e.message)
      throw e
    }
    setShowRegisterPage(false);
  };
  const [error, setError] = useState("");

  const login = (username, password) => {
    let user;
    try {
      user = userService.login(username, password);
    } catch (e) {
      setError(e.message);
      throw e;
    }
    setLoggedInUser(user);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* <Toggle isChecked={isDark} handleChange={() => setIsDark(isDark)} /> */}
      {!loggedInUser ? (
        showRegisterPage ? (
          <RegisterForm
            register={register}
            setShowRegisterPage={setShowRegisterPage}
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
          loggedInUser={loggedInUser}
        />
      )}
    </div>
  );
}

export default App;
