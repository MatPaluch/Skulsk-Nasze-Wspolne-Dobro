import styles from "./article_8.module.css";
import { HeroSection } from "../../Hero/HeroSection";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";
import logoEU from "../../../assets/logo_eu.png";

import DeklaracjaUczestnictwa from "../../../assets/Docs/Article_8/Deklaracja uczestnictwa.docx";
import FormularzRekrutacyjny from "../../../assets/Docs/Article_8/Formularz rekrutacyjny.docx";
import Wizerunek from "../../../assets/Docs/Article_8/Wizerunek.docx";
import RegulaminProjektu from "../../../assets/Docs/Article_8/REGULAMIN PROJEKTU I REKRUTACJI.docx";

export const Art8 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logoEU} className={styles.logoEU} />
        </div>
        <div className="project-hashtags">#FunduszeUE #FunduszeEuropejskie</div>
        <div className="project-financing">
          <p>
            <strong>Kwota dofinansowania UE:</strong> 198 572,50 PLN
          </p>
          <p>
            <strong>Kwota dofinansowania:</strong> 269 491,25 PLN
          </p>
          <p>
            <strong>Całkowita wartość projektu:</strong> 283 675,00 PLN
          </p>
        </div>
        <p>
          Projekt pn.{" "}
          <strong>„Nie dla dyskryminacji ze względu na niepełnosprawność i wiek!”</strong>, nr
          FEWP.06.10-IP.01-0130/25, realizowany jest przez STOWARZYSZENIE „SKULSK - NASZE WSPÓLNE
          DOBRO”. Projekt współfinansowany jest ze środków Unii Europejskiej w ramach Programu
          Fundusze Europejskie dla Wielkopolski na lata 2021–2027.
        </p>
        <h3>Cel projektu</h3>
        <p>
          Celem głównym projektu jest zwiększenie kompetencji w zakresie przepisów i polityk
          antydyskryminacyjnych wśród osób z województwa wielkopolskiego, które bezpośrednio
          doświadczają dyskryminacji ze względu na wiek i/lub niepełnosprawność.
        </p>
        <p>Cel zostanie osiągnięty poprzez realizację następujących form wsparcia:</p>
        <ul>
          <li>warsztaty z zakresu zarządzania różnorodnością i przeciwdziałania dyskryminacji,</li>
          <li>
            indywidualne wsparcie specjalistyczne dla osób doświadczających dyskryminacji ze względu
            na wiek i/lub niepełnosprawność,
          </li>
          <li>kampanie antydyskryminacyjne prowadzone w mediach społecznościowych.</li>
        </ul>
        <p>Projekt realizowany będzie w okresie od 01.06.2026 r. do 31.05.2028 r.</p>
        <h3>Działania w projekcie</h3>
        <ul>
          <li>
            <strong>Zadanie 1.</strong> Kampania informacyjna w celu zwalczania dyskryminacji.
          </li>
          <li>
            <strong>Zadanie 2.</strong> Warsztaty w zakresie przeciwdziałania dyskryminacji i
            zarządzania różnorodnością.
          </li>
          <li>
            <strong>Zadanie 3.</strong> Poradnictwo specjalistyczne - prawne i mediacyjne - dla osób
            doświadczających dyskryminacji.
          </li>
          <li>
            <strong>Zadanie 4.</strong> Poradnictwo specjalistyczne - psychologiczne - dla osób
            doświadczających dyskryminacji.
          </li>
          <li>
            <strong>Zadanie 5.</strong> Grupy samopomocowe dla osób doświadczających dyskryminacji.
          </li>
        </ul>
        <h3>Rezultaty projektu</h3>
        <ol>
          <li>Zdobycie nowych kompetencji przez uczestników dzięki udziałowi w warsztatach.</li>
          <li>Poprawa sytuacji społecznej uczestników projektu.</li>
        </ol>
        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={FormularzRekrutacyjny}
              download="Formularz rekrutacyjny - Nie dla dyskryminacji, ze względu na niepełnosprawność i wiek!.docx"
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
              Formularz rekrutacyjny
            </a>
          </li>

          <li>
            <a
              className={styles.downloadLinks}
              href={DeklaracjaUczestnictwa}
              download="Deklaracja uczestnictwa - Nie dla dyskryminacji, ze względu na niepełnosprawność i wiek!.docx"
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
              Deklaracja uczestnictwa
            </a>
          </li>

          <li>
            <a
              className={styles.downloadLinks}
              href={Wizerunek}
              download="Wizerunek - Nie dla dyskryminacji, ze względu na niepełnosprawność i wiek!.docx"
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
              Wizerunek
            </a>
          </li>
          <li>
            <a
              className={styles.downloadLinks}
              href={RegulaminProjektu}
              download="REGULAMIN PROJEKTU I REKRUTACJI.docx"
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
              Regulamin projektu
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
