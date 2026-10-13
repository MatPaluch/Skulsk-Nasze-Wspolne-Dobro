import { HeroSection } from "../../Hero/HeroSection";
import img from "../../../assets/imgStick.png";
import logotypes from "../../../assets/logotypwojewodztwawielkopolskiegoiherbsamorzaduwojewodztwawielkopolskiego.jpg";
import logo from "../../../assets/logo.jpg";
import styles from "./article_2.module.css";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";

import Formularz_uczestnika_dorośli from "../../../assets/Docs/Article_2/FORMULARZ-uczestnika-dorośli.docx";
import Formularz_uczestnika_dzieci from "../../../assets/Docs/Article_2/FORMULARZ-uczestnika-dzieci.doc";

export const Art2 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logotypes} className={styles.logotypes} />
          <img src={logo} className={styles.logo} />
        </div>
        <h2>Projekt „Z rehabilitacją na TY!”</h2>

        <section className="project-description">
          <p>
            Projekt <strong>„Z rehabilitacją na TY!”</strong> skierowany jest do{" "}
            <strong>27 osób</strong> (15 dzieci oraz 12 osób dorosłych) posiadających orzeczenie o
            niepełnosprawności.
          </p>

          <h3>Etapy realizacji projektu</h3>

          <p>Realizacja projektu odbywać się będzie w dwóch etapach:</p>

          <ul>
            <li>
              <strong>Rekrutacja uczestników:</strong> od 01.07.2025 r. do 15.07.2025 r.
            </li>
            <li>
              <strong>Realizacja zajęć rehabilitacyjnych:</strong> od 01.08.2025 r. do 30.11.2025 r.
            </li>
          </ul>

          <p>
            Podczas rekrutacji zostanie ustalony
            <strong> Indywidualny Plan Działania</strong>, którego celem jest określenie
            indywidualnych potrzeb każdego uczestnika na podstawie wywiadów przeprowadzonych przez
            pracownika socjalnego oraz pedagoga szkolnego.
          </p>

          <h3>Rodzaje zajęć rehabilitacyjnych</h3>

          <p>W ramach projektu przewidziano następujące zajęcia:</p>

          <ul>
            <li>Rehabilitacja logopedyczna</li>
            <li>Rehabilitacja ruchowa</li>
            <li>Rehabilitacja Metodą Ruchu Rozwijającego Weroniki Sherborne</li>
          </ul>

          <h3>Miejsce realizacji projektu</h3>

          <p className={styles.links}>
            Zajęcia odbywać się będą w{" "}
            <a href="https://www.facebook.com/CentrumMISIO/" target="_blank">
              <strong>Centrum Rozwoju Terapii i Rehabilitacji MISIO</strong>
            </a>{" "}
            w Skulsku, przy ul. Doktora Michała Ilczyszyna 2b, 62-560 Skulsk.
          </p>

          <h3>Cel projektu</h3>

          <p>
            Celem projektu jest wspomaganie osób z niepełnosprawnościami w codziennym funkcjonowaniu
            poprzez rehabilitację, przyczyniającą się do poprawy
            <strong> zdrowia fizycznego i psychicznego </strong>
            uczestników.
          </p>
        </section>

        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki do pobrania:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_uczestnika_dorośli}
              download="FORMULARZ-uczestnika-dorośli.docx"
            >
              <ReactSVG
                className={styles.svgFile}
                src={file}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "rgb(75, 185, 103)");
                }}
              />
              Formularz uczestnika dorośli
            </a>
          </li>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_uczestnika_dzieci}
              download="FORMULARZ-uczestnika-dzieci.doc"
            >
              <ReactSVG
                className={styles.svgFile}
                src={file}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "rgb(75, 185, 103)");
                }}
              />
              Formularz uczestnika dzieci
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
