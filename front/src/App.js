import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import AdminPanel from "./components/AdminPanel"
import HomePage from "./components/HomePage";
import SeeAll from "./components/SeeAll";
import CreateAccueil from "./components/Create/AccueilCreate"

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
          <Route path="/seeAll" element={
            <PrivateRoute>
              <SeeAll />
            </PrivateRoute>
          }></Route>
          <Route path="/create-accueil" element={
            <PrivateRoute>
              <CreateAccueil />
            </PrivateRoute>
          }></Route>
          </Routes>
          
    </BrowserRouter>
  );
}

export default App;
