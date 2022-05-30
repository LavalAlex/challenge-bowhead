import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div>
      YOU ARE? <Link to="/admin/login">Admin</Link> OR <Link to='/home'>User</Link>
    </div>    
  );
}
