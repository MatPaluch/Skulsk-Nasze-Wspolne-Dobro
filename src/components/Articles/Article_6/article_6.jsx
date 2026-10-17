import { HeroSection } from "../../Hero/HeroSection";
import logotypes from "../../../assets/logotypwojewodztwawielkopolskiegoiherbsamorzaduwojewodztwawielkopolskiego.jpg";
import logo from "../../../assets/logo.jpg";
import styles from "./article_6.module.css";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";

import Formularz_uczestnika from "../../../assets/Docs/Article_6/FORMULARZ-uczestnika „Zainwestuj w zdrowie - to się opłaca” - edycja II.doc";

export const Art6 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logotypes} className={styles.logotypes} />
          <img src={logo} className={styles.logo} />
        </div>

        <section className="project-description">
          <h2>Projekt „Zainwestuj w zdrowie – to się opłaca” – edycja II</h2>

          <p>
            Projekt<strong> „Zainwestuj w zdrowie – to się opłaca” </strong>
            skierowany jest do<strong> dzieci oraz osób dorosłych </strong>
            zamieszkujących teren gminy Skulsk oraz gminy Wilczyn.
          </p>

          <h3>Cel projektu</h3>

          <p>
            Celem projektu jest wspieranie zdrowia fizycznego i psychicznego uczestników w walce z
            nadwagą i otyłością, a także kształtowanie zdrowych nawyków związanych z aktywnym stylem
            życia i prawidłowym odżywianiem.
          </p>

          <h3>Formy wsparcia i aktywności</h3>

          <p>W ramach realizacji projektu przewidziano:</p>

          <ul>
            <li>Konferencje z dietetykiem</li>
            <li>Konferencje z psychologiem</li>
            <li>Indywidualne spotkania z dietetykiem dla dzieci oraz osób dorosłych</li>
            <li>Indywidualne spotkania z psychologiem dla dzieci oraz osób dorosłych</li>
            <li>Rekreację ruchową</li>
            <li>
              Aktywną rehabilitację obejmującą:
              <ul>
                <li>Zajęcia z tenisa stołowego</li>
                <li>Zajęcia z badmintona</li>
                <li>Zajęcia z pływania</li>
              </ul>
            </li>
            <li>Zajęcia fitness</li>
            <li>Zajęcia z biomasażystą</li>
            <li>
              Indywidualne sesje{" "}
              <i>
                <b>Lifestyle Coaching</b>
              </i>
            </li>
            <li>
              Indywidualne zajęcia Terapii VR wykorzystywane w zajęciach fitness i promowaniu
              zdrowego stylu życia
            </li>
          </ul>

          <h3>Wsparcie psychologiczne i dietetyczne</h3>

          <p>
            Wsparciem psychologa i dietetyka zostaną objęte zarówno dzieci, jak i osoby dorosłe.
            Indywidualne spotkania będą ukierunkowane na wspieranie uczestników w kształtowaniu
            zdrowych nawyków żywieniowych, poprawie samopoczucia oraz wprowadzaniu pozytywnych zmian
            w codziennym życiu.
          </p>

          <h3>Konferencje edukacyjne</h3>

          <p>
            W ramach projektu odbędą się również
            <strong> po trzy konferencje z dietetykiem i psychologiem</strong>, skierowane do
            szerszej grupy odbiorców.
          </p>

          <p>
            Spotkania będą poświęcone propagowaniu zasad zdrowego odżywiania, aktywnego stylu życia
            oraz zwiększaniu świadomości na temat wpływu codziennych nawyków na zdrowie psychiczne
            człowieka.
          </p>
        </section>

        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki do pobrania:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_uczestnika}
              download="FORMULARZ-uczestnika „Zainwestuj w zdrowie - to się opłaca” - edycja II.doc"
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
