import styles from "./article_3.module.css";
import { HeroSection } from "../../Hero/HeroSection";
import logo from "../../../assets/logo.jpg";
import logoWojewoda from "../../../assets/wojewoda_wielkopolski.png";
import invalid from "../../../assets/invalid_art1.webp";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";
import Formularz_zgloszeniowy from "../../../assets/Docs/Article_3/Formularz zgłoszeniowy-asystentura.odt";

export const Art3 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logoWojewoda} className={styles.logoWojewoda} />
          <img src={logo} className={styles.logo} />
        </div>

        <section className="project-description">
          <h2>Projekt „Nie jesteś sama, nie jesteś sam” – edycja II</h2>

          <p>
            Projekt<strong> „Nie jesteś sama, nie jesteś sam” – edycja II </strong>
            skierowany jest do <strong>14 osób</strong> posiadających orzeczenie o
            niepełnosprawności.
          </p>

          <h3>Rekrutacja i realizacja projektu</h3>

          <p>
            Rekrutacja uczestników odbywać się będzie w terminie od 1 lipca 2025 r. do 31 lipca 2025
            r.
          </p>

          <p>
            W okresie od 1 sierpnia 2025 r. do 30 listopada 2025 r. realizowane będą zadania
            obejmujące świadczenie następujących usług:
          </p>

          <ul>
            <li>Usługi asystenckie dla osób z niepełnosprawnościami</li>
            <li>Usługi doradcze prawnika</li>
            <li>Usługi doradcze psychologa</li>
          </ul>

          <h3>Zakres wsparcia uczestników</h3>

          <p>
            <strong>Asystenci osób z niepełnosprawnościami</strong> będą wspierać uczestników w
            codziennym funkcjonowaniu w miejscu ich zamieszkania.
          </p>

          <p>
            <strong>Prawnik</strong> zapewni uczestnikom wsparcie prawne dotyczące praw osób z
            niepełnosprawnościami.
          </p>

          <p>
            <strong>Psycholog</strong> będzie świadczyć wsparcie psychologiczne, którego celem jest
            wspomaganie zdrowia psychicznego uczestników oraz wzmacnianie ich motywacji do rozwoju.
          </p>

          <h3>Miejsce realizacji usług</h3>

          <p className={styles.links}>
            Usługi prawne oraz psychologiczne odbywać się będą w{" "}
            <a href="https://www.facebook.com/CentrumMISIO/" target="_blank">
              <strong>Centrum Rozwoju Terapii i Rehabilitacji MISIO</strong>
            </a>{" "}
            pod adresem:
          </p>

          <address>
            ul. Doktora Michała Ilczyszyna 2b
            <br />
            62-560 Skulsk
          </address>
        </section>

        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_zgloszeniowy}
              download="Formularz zgłoszeniowy-asystentura.odt"
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
              Formularz zgłoszeniowy asystenta
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
