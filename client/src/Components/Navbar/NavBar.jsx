import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";

import Menu from "./Menu/Menu";
import logo from "../../Img/logo.jpeg";
import { logout } from "../../Redux/Actions/Auth";

import styles from "./NavBar.module.css";

export default function NavbarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((state) => state.auth.success);
  const [showMenu, setShowMenu] = useState(false);

  const logoutNav = () => {
    dispatch(logout());
    navigate("/login");
  };

  console.log(session);

  return (
    <header className={`${styles.navbar}  `}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.brand} to="/">
            <span>SUGSA</span>
            <img src={logo} className={styles.logo} alt="" />
          </Link>
        </div>
        <ul className={styles.menu}>
          {session ? "" : ""}
        </ul>
        <Menu column dashboard user />

        <div className={styles.right}>
          {session ? (
            <div className={styles.profile__container}>
              <div
                className={
                  `${showMenu ? styles.show : styles.hide} ` +
                  styles.profile__menu
                }
              >
                <Menu column dashboard user />
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button
                title="Log In"
                className={`${styles.nav__link} ${styles.sigup}`}
                onClick={() => logoutNav()}
              >
                <FiLogIn />
              </button>
            </NavLink>
          )}
          {session ? (
            <div className={styles.right}>
              <button
                title="Log Out"
                className={`${styles.nav__link} ${styles.logout}`}
                onClick={() => logoutNav()}
              >
                <FiLogOut />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
      <Outlet />
    </header>
  );
}