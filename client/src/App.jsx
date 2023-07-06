import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from './pages/TasksPage';
import ProfilePage from "./pages/ProfilePage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />}></Route>
              <Route path="/add-task" element={<TaskFormPage />}></Route>
              <Route path="/tasks/:id" element={<TaskFormPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
