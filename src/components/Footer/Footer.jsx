import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.wrapper}>
          <div>
            <h4>Social Media</h4>
            <ul className={styles.listSocial}>
              <li>
                <ReactSVG
                  className={styles.svg}
                  src="/src/assets/facebook.svg"
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", "white");
                  }}
                />
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <ReactSVG
                  className={styles.svg}
                  src="/src/assets/linkedin2.svg"
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", "white");
                  }}
                />
                <a href="https://www.linkedin.com" target="_blank">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Skulsk - Nasze Wspólne Dobro</h4>
            <ul className={styles.nav}>
              <li>
                <Link to="news">Aktualności</Link>
              </li>
              <li>
                <Link to="about">O nas</Link>
              </li>
              <li>
                <Link to="projects">Nasze projekty</Link>
              </li>
              <li>
                <Link to="statute">Statut</Link>
              </li>
              <li>
                <Link to="contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copy}>
        Copyright &copy; 2024 STOWARZYSZENIE &quot;SKULSK - NASZE WSPÓLNE DOBRO&quot;
      </p>
    </footer>
  );
};
