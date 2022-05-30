import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginCard from "../../../../Components/Login/LoginCard";

import styles from "./Login.module.css";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const navitage = useNavigate();
  
   return auth.success ? (
    navitage("/admin/home")
  ) : (
    <div className={styles.container}>
      <LoginCard />
    </div>
  );
}
