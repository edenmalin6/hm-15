import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { StudentsApp } from "./components/StudentsApp";
import { Toggle } from "./components/Toggle";
import { storageService } from "./services/storageService";
import { userService } from "./services/userService";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  const register = (email, username, password) => {
    userService.createUser(email, username, password);
    setShowRegisterPage(false);
  };
  const login = (username, password) => {
    const user = userService.login(username, password);
    if (!user && user.password!== password) {
      alert("User Not Found. Please Make Sure You Already Have An Account.");
      setShowRegisterPage(true);
      return;
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
          <LoginForm login={login} setShowRegisterPage={setShowRegisterPage} />
        )
      ) : (
        <StudentsApp setLoggedInUser={setLoggedInUser}/>
      )}
    </div>
  );
}

export default App;
