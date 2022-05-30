import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Pages/Admin/Auth/Login/Login";
import Signup from "./Pages/Admin/Auth/Sigup/Signup";

import LandingPage from "./Pages/Landing/LandingPage";
import HomeAdmin from "./Pages/Admin/Home/HomeAdmin";

import Home from "./Pages/Home/Home";

import Navbar from "./Components/Navbar/NavBar";


import PrivateRoute from "./Components/TypeRoutes/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="admin">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<HomeAdmin />} />
          </Route>
        </Route>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
