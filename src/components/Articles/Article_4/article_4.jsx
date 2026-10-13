import { HeroSection } from "../../Hero/HeroSection";
import img from "../../../assets/imgStick.png";
import logotypes from "../../../assets/logotypwojewodztwawielkopolskiegoiherbsamorzaduwojewodztwawielkopolskiego.jpg";
import logo from "../../../assets/logo.jpg";
import styles from "./article_4.module.css";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";

import Formularz_uczestnika from "../../../assets/Docs/Article_4/FORMULARZ-uczestnika „Rozwijam się w MISIO!”.doc";

export const Art4 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logotypes} className={styles.logotypes} />
          <img src={logo} className={styles.logo} />
        </div>

        <section className="project-description">
          <h2>Projekt „Rozwijam się w MISIO!”</h2>

          <p>
            Projekt <strong>„Rozwijam się w MISIO!”</strong> skierowany jest do{" "}
            <strong>18 osób</strong> (12 dzieci oraz 6 osób dorosłych) posiadających orzeczenie o
            niepełnosprawności.
          </p>

          <h3>Etapy realizacji projektu</h3>

          <p>Projekt będzie realizowany w dwóch etapach:</p>

          <ul>
            <li>
              <strong>Rekrutacja uczestników:</strong> od 01.07.2025 r. do 31.07.2025 r.
            </li>
            <li>
              <strong>Realizacja terapii:</strong> od 01.08.2025 r. do 30.11.2025 r.
            </li>
          </ul>

          <h3>Indywidualny Plan Wsparcia</h3>

          <p>
            Podczas rekrutacji z każdym uczestnikiem zostanie przeprowadzony wywiad przez pracownika
            socjalnego oraz pedagoga szkolnego. Jego celem będzie określenie indywidualnej sytuacji
            i potrzeb każdego uczestnika.
          </p>

          <p>
            Na podstawie zebranych informacji zostanie opracowany
            <strong> Indywidualny Plan Wsparcia</strong>, który pozwoli dostosować formy terapii do
            potrzeb uczestników i umożliwić osiągnięcie jak najlepszych rezultatów.
          </p>

          <h3>Rodzaje terapii i zajęć</h3>

          <p>W ramach projektu przewidziano następujące formy wsparcia:</p>

          <ul>
            <li>Terapia behawioralna</li>
            <li>Terapia logopedyczna</li>
            <li>Terapia Warnkego</li>
            <li>Terapia VR</li>
            <li>Grupowe zajęcia treningu umiejętności społecznych</li>
            <li>Komunikacja wspomagana i alternatywna (AAC)</li>
            <li>Terapia integracji sensorycznej z komunikacją wspomaganą i alternatywną (AAC)</li>
            <li>
              Grupowe zajęcia terapii integracji sensorycznej z komunikacją wspomaganą i
              alternatywną (AAC)
            </li>
            <li>Zajęcia w Sali Doświadczania Świata (sali światła)</li>
            <li>Zajęcia z surdopedagogiem</li>
            <li>Zajęcia z tyflopedagogiem</li>
          </ul>

          <h3>Miejsce realizacji projektu</h3>

          <p className={styles.links}>
            Zajęcia realizowane będą w{" "}
            <a href="https://www.facebook.com/CentrumMISIO/" target="_blank">
              <strong>Centrum Rozwoju Terapii i Rehabilitacji MISIO</strong>
            </a>{" "}
            w Skulsku, przy ul. Doktora Michała Ilczyszyna 2b, 62-560 Skulsk.
          </p>
        </section>

        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki do pobrania:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_uczestnika}
              download="FORMULARZ-uczestnika „Rozwijam się w MISIO!”.doc"
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
              Formularz uczestnika
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
