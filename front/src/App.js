import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import AdminPanel from "./components/AdminPanel"
import HomePage from "./components/HomePage";
import SeeAllAccueil from "./components/SeeAllAccueil";
import CreateAccueil from "./components/Create/AccueilCreate"
import SeeOneAccueil from "./components/SeeOne/Accueil"
import ModifyAccueil from "./components/Modify/ModifyAccueil";

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
          <Route path="/seeAll-accueil" element={
            <PrivateRoute>
              <SeeAllAccueil />
            </PrivateRoute>
          }></Route>
          <Route path="/create-accueil" element={
            <PrivateRoute>
              <CreateAccueil />
            </PrivateRoute>
          }></Route>
          <Route path="/seeOne-accueil/:id" element={
            <PrivateRoute>
              <SeeOneAccueil />
            </PrivateRoute>
          }></Route>
                 <Route path="/modify-accueil/:id" element={
            <PrivateRoute>
              <ModifyAccueil />
            </PrivateRoute>
          }></Route>
          </Routes>
          
    </BrowserRouter>
  );
}

export default App;
