import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPageCard() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const [keyOn, setKeyOn] = useState(false);

  return (
    <div className={style.container}>
      <form>
        <h1>- YOU ARE? - </h1>

        <div className={style.img}></div>

        <div className={style.buttonContainer}>
          <button type="submit" onClick={() => navigate("/home")}>
            USER
          </button>

          <div>OR</div>
          <button type="submit" onClick={() => navigate("/admin/login")}>
            ADMIN
          </button>
        </div>
      </form>
    </div>
  );
}