import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Pages/Admin/Auth/Login/Login";
import Signup from "./Pages/Admin/Auth/Sigup/Signup";

import LandingPage from "./Pages/Landing/LandingPage";
import HomeAdmin from "./Pages/Admin/Home/HomeAdmin";

import Home from "./Pages/Home/Home";

import Navbar from "./Components/Navbar/NavBar";

import PrivateRoute from "./Components/TypeRoutes/PrivateRoute";
import ChartBar from "./Pages/Admin/ChartBar/ChartBar";
import ChartPie from "./Pages/Admin/ChartPie/ChartPie";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="admin">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="admin" element={<Navbar />}>
            <Route path="chartbar" element={<ChartBar />} />
            <Route path="chartpie" element={<ChartPie />} />

          </Route>
        </Route>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
