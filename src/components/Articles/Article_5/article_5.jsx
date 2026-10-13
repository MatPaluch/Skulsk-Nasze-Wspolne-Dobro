import { HeroSection } from "../../Hero/HeroSection";
import img from "../../../assets/imgStick.png";
import logotypes from "../../../assets/logotypwojewodztwawielkopolskiegoiherbsamorzaduwojewodztwawielkopolskiego.jpg";
import logo from "../../../assets/logo.jpg";
import styles from "./article_5.module.css";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";

import Formularz_uczestnika from "../../../assets/Docs/Article_5/FORMULARZ-uczestnika „Zainwestuj w zdrowie - to się opłaca”.doc";

export const Art5 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logotypes} className={styles.logotypes} />
          <img src={logo} className={styles.logo} />
        </div>

        <section className="project-description">
          <h2>Projekt „Zainwestuj w zdrowie – to się opłaca”</h2>

          <p>
            Projekt <strong>„Zainwestuj w zdrowie – to się opłaca”</strong>
            skierowany jest do dzieci w wieku od 5 do 18 lat oraz ich rodziców, zamieszkujących
            teren gminy Skulsk.
          </p>

          <h3>Termin realizacji projektu:</h3>

          <p>Czas trwania projektu: 01.08.2025 - 30.11.2025</p>
          <h3>Cel projektu</h3>

          <p>
            Celem projektu jest wspieranie zdrowia fizycznego i psychicznego dzieci w walce z
            nadwagą i otyłością, a także kształtowanie zdrowych nawyków związanych ze stylem życia i
            prawidłowym odżywianiem.
          </p>

          <h3>Formy wsparcia i aktywności</h3>

          <p>W ramach realizacji projektu przewidziano:</p>

          <ul>
            <li>Konferencje z dietetykiem</li>
            <li>Konferencje z psychologiem</li>
            <li>Indywidualne spotkania z dietetykiem dla dzieci, rodziców oraz rodzin</li>
            <li>Indywidualne spotkania z psychologiem dla dzieci, rodziców oraz rodzin</li>
            <li>Rekreację ruchową dla dzieci</li>
            <li>
              Aktywną rehabilitację dla dzieci, obejmującą:
              <ul>
                <li>Zajęcia z tenisa stołowego</li>
                <li>Zajęcia z badmintona</li>
                <li>Zajęcia z pływania</li>
              </ul>
            </li>
            <li>Zajęcia fitness</li>
            <li>Zajęcia z fizjoterapeutą</li>
          </ul>

          <h3>Wsparcie psychologiczne i dietetyczne</h3>

          <p>
            Wsparciem psychologa i dietetyka zostaną objęci zarówno dzieci, jak i ich rodzice.
            Indywidualne spotkania będą dostosowane do potrzeb uczestników, wspierając ich w
            kształtowaniu zdrowych nawyków i dbaniu o dobre samopoczucie.
          </p>

          <h3>Konferencje edukacyjne</h3>

          <p>
            W ramach projektu odbędą się również po trzy konferencje z dietetykiem oraz
            psychologiem, skierowane do szerszej grupy odbiorców.
          </p>

          <p>
            Spotkania będą poświęcone propagowaniu zasad zdrowego odżywiania, zdrowego stylu życia
            oraz wpływu codziennych nawyków na zdrowie psychiczne człowieka.
          </p>
        </section>

        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki do pobrania:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_uczestnika}
              download="FORMULARZ-uczestnika „Zainwestuj w zdrowie - to się opłaca”.doc"
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
