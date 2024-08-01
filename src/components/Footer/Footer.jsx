import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebookSvg from "../../assets/facebook.svg";
import linkedinSvg from "../../assets/linkedin2.svg";

export const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <Link to="/Skulsk-Nasze-Wspolne-Dobro/">
          <div className={styles.logo}></div>
        </Link>
        <div className={styles.wrapper}>
          <div>
            <h4>Portale Społecznościowe</h4>
            <ul className={styles.listSocial}>
              <li>
                <ReactSVG
                  className={styles.svg}
                  src={facebookSvg}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", "white");
                  }}
                />
                <a
                  href="https://www.facebook.com/p/Skulsk-Nasze-Wspólne-Dobro-100069142384712/"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <ReactSVG
                  className={styles.svg}
                  src={linkedinSvg}
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
                <Link to="/Skulsk-Nasze-Wspolne-Dobro/news">Aktualności</Link>
              </li>
              <li>
                <Link to="/Skulsk-Nasze-Wspolne-Dobro/about">O nas</Link>
              </li>
              <li>
                <Link to="/Skulsk-Nasze-Wspolne-Dobro/projects">Nasze projekty</Link>
              </li>
              <li>
                <Link to="/Skulsk-Nasze-Wspolne-Dobro/statute">Statut</Link>
              </li>
              <li>
                <Link to="/Skulsk-Nasze-Wspolne-Dobro/contact">Kontakt</Link>
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
