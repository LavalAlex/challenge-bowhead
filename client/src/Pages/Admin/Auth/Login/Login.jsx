import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginCard from "../../../../Components/Login/LoginCard";

import styles from "./Login.module.css";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const navitage = useNavigate();
  console.log(auth.user.email)

  if(auth.success){

    navitage("/admin/chartbar")
  }

  return( 
    <div className={styles.container}>
      <LoginCard />
    </div>
  )
}
