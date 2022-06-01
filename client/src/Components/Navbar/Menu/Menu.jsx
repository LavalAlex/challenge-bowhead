import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiHomeAlt,  } from "react-icons/bi";
import { IoBarChartOutline, IoPieChart } from "react-icons/io5";
import styles from "./Menu.module.css";

export default function Menu({ barchart ,piechart }) {
  const path = useLocation().pathname;

  return (
    <ul className={`${styles.menu} `}>
      {barchart ? (
        <li>
          <NavLink
            title="Chart Bar"
            className={`${styles.menu__link} ${
              path === "/admin/chartbar" ? styles.active : ""
            }`}
            to="/admin/chartbar"
          >
            <IoBarChartOutline className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}

      {piechart ? (
        <li>
          <NavLink
            title="Chart Pie"
            className={`${styles.menu__link} ${
              path === "/admin/chartpie" ? styles.active : ""
            }`}
            to="/admin/chartpie"
          >
            <IoPieChart className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
