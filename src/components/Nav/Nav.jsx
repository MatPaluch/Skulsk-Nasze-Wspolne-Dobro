import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <div className={styles.logo}></div>
      </NavLink>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/news">Aktualności</NavLink>
        </li>
        <li>
          <NavLink to="/about">O nas</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Nasze projekty</NavLink>
        </li>
        <li>
          <NavLink to="/statute">Statut</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};
