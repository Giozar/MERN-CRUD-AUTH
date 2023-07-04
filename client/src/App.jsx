import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/tasks" element={<h1>TAREAS</h1>}></Route>
          <Route path="/add-task" element={<h1>AÑADIR TAREA</h1>}></Route>
          <Route path="/tasks/:id" element={<h1>TAREA</h1>}></Route>
          <Route path="/profile" element={<h1>PERFIL</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
