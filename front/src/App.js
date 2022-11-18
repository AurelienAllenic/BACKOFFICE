import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import AdminPanel from "./components/AdminPanel"
import Accueil from "./components/AdminOptions/Accueil";
import Bio from "./components/AdminOptions/Bio";
import Experience from "./components/AdminOptions/Experience";
import Portfolio from "./components/AdminOptions/Portfolio";
import Contact from "./components/AdminOptions/Contact";
import HomePage from "./components/HomePage";

function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/admin" element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }></Route>
      
      <Route path="/accueil" element={
            <PrivateRoute>
              <Accueil />
            </PrivateRoute>
          }></Route>
          <Route path="/bio" element={
            <PrivateRoute>
              <Bio />
            </PrivateRoute>
          }></Route>
          <Route path="/experience" element={
            <PrivateRoute>
              <Experience />
            </PrivateRoute>
          }></Route>
          <Route path="/portfolio" element={
            <PrivateRoute>
              <Portfolio />
            </PrivateRoute>
          }></Route>
          <Route path="/contact" element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }></Route>
          </Routes>
          
    </BrowserRouter>
  );
}

export default App;
