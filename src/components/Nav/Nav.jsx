import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/">
        <div className={styles.logo}></div>
      </NavLink>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/news">Aktualności</NavLink>
        </li>
        <li>
          <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/about">O nas</NavLink>
        </li>
        <li>
          <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/projects">Nasze projekty</NavLink>
        </li>
        <li>
          <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/statute">Statut</NavLink>
        </li>
        <li>
          <NavLink to="/Skulsk-Nasze-Wspolne-Dobro/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};
