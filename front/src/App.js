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
import SeeAllBio from "./components/SeeAllBio"
import CreateBio from "./components/Create/BioCreate"
import SeeOneBio from "./components/SeeOne/Bio"
import ModifyBio from "./components/Modify/Bio"
import SeeAllExperience from "./components/SeeAllExperience";
import CreateExperience from "./components/Create/Experience"
import SeeOneExperience from "./components/SeeOne/Experience";
import ModifyExperience from "./components/Modify/Experience";
import SeeAllPortfolio from "./components/SeeAllPortfolio";
import CreatePortfolio from "./components/Create/Portfolio"
import SeeOnePortfolio from "./components/SeeOne/Portfolio"
import ModifyPortfolio from "./components/Modify/Portfolio"
import SeeAllContact from "./components/SeeAllContact";
import CreateContact from "./components/Create/Contact"
import SeeOneContact from "./components/SeeOne/Contact"
import ModifyContact from "./components/Modify/Contact"

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
                 <Route path="/create-bio" element={
            <PrivateRoute>
              <CreateBio />
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
          <Route path="/seeAll-bio" element={
            <PrivateRoute>
              <SeeAllBio />
            </PrivateRoute>
          }></Route>
          <Route path="/seeOne-bio/:id" element={
            <PrivateRoute>
              <SeeOneBio />
            </PrivateRoute>
          }></Route>
          <Route path="/modify-bio/:id" element={
            <PrivateRoute>
              <ModifyBio />
            </PrivateRoute>
          }></Route>
              <Route path="/seeAll-experience" element={
            <PrivateRoute>
              <SeeAllExperience />
            </PrivateRoute>
          }></Route>
              <Route path="/create-experience" element={
            <PrivateRoute>
              <CreateExperience />
            </PrivateRoute>
          }></Route>
          <Route path="/seeOne-experience/:id" element={
            <PrivateRoute>
              <SeeOneExperience />
            </PrivateRoute>
          }></Route>
          <Route path="/modify-experience/:id" element={
            <PrivateRoute>
              <ModifyExperience />
            </PrivateRoute>
          }></Route>
          <Route path="/seeAll-portfolio" element={
            <PrivateRoute>
              <SeeAllPortfolio />
            </PrivateRoute>
          }></Route>
          <Route path="/create-portfolio" element={
            <PrivateRoute>
              <CreatePortfolio />
            </PrivateRoute>
          }></Route>
          <Route path="/seeOne-portfolio/:id" element={
            <PrivateRoute>
              <SeeOnePortfolio />
            </PrivateRoute>
          }></Route>
          <Route path="/modify-portfolio/:id" element={
            <PrivateRoute>
              <ModifyPortfolio />
            </PrivateRoute>
          }></Route>
          <Route path="/seeAll-contact" element={
            <PrivateRoute>
              <SeeAllContact />
            </PrivateRoute>
          }></Route>
          <Route path="/create-contact" element={
            <PrivateRoute>
              <CreateContact />
            </PrivateRoute>
          }></Route>
          <Route path="/seeOne-contact/:id" element={
            <PrivateRoute>
              <SeeOneContact />
            </PrivateRoute>
          }></Route>
          <Route path="/modify-contact/:id" element={
            <PrivateRoute>
              <ModifyContact />
            </PrivateRoute>
          }></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
