import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useMediaQuery } from "@mui/material";
import { ReactSVG } from "react-svg";
import menu from "../../assets/menu3.svg";

export const Navigation = () => {
  const isSmallScreen = useMediaQuery("(max-width:1024px)");
  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <div className={styles.logo}></div>
      </NavLink>
      {isSmallScreen ? (
        <button className={styles.menuButton}>
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
      <div>
        <ul>
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
      </div>
    </nav>
  );
};
