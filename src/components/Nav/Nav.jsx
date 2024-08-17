import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useMediaQuery } from "@mui/material";
import { ReactSVG } from "react-svg";
import menu from "../../assets/menu3.svg";
import { useState } from "react";
import { MobileNav } from "../MobileNav/MobileNav";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:960px)");

  const mobileMenuHandler = (ev) => {
    setIsActive(!isActive);
  };
  
  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <div className={styles.logo}></div>
      </NavLink>
      {isSmallScreen ? (
        <button className={styles.menuButton} onClick={mobileMenuHandler}>
          <ReactSVG
            src={menu}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", "white");
            }}
          />
        </button>
      ) : (
        <ul className={styles.navList}>
          <li>
            <NavLink to="news">Aktualności</NavLink>
          </li>
          <li>
            <NavLink to="about">O nas</NavLink>
          </li>
          <li>
            <NavLink to="projects">Nasze projekty</NavLink>
          </li>
          <li>
            <NavLink to="statute">Statut</NavLink>
          </li>
          <li>
            <NavLink to="contact">Kontakt</NavLink>
          </li>
        </ul>
      )}
      {isActive && <MobileNav isSmallScreen={isSmallScreen} styles={styles} isActive={isActive} mobileMenuHandler={mobileMenuHandler} />}
    </nav>
  );
};
