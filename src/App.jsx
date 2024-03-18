import { Route, Routes, Navigate } from "react-router-dom";
import {HomePage} from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { StudentsPage } from "./pages/StudentsPage";
// import { AdminPage } from "./pages/AdminPage";
import { NotFound } from "./pages/NotFound";
import { AuthProvider } from "./context/AuthProvider";
function App() {
 
  return (
   <main>
    <AuthProvider >
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/students" element={<StudentsPage/>}/> 
      {/* <Route path="students/:isAdmin" element={<AdminPage/>}/> */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </AuthProvider>
   </main>
  );
}

export default App;
