import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LandingPageCard from "../../Components/LandigPage/LandiPageCard";
import style from "./LandingPage.module.css";

export default function LandingPage() {


  return (
    <div className={style.container}>
    <diV className={style.landing}>

      <LandingPageCard/>
    </diV>
    </div>
  );
}
