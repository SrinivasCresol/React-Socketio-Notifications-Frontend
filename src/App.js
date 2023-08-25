import { Routes, Route } from "react-router-dom";
import UserHome from "./Pages/UserHome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminHome from "./Pages/AdminHome";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
