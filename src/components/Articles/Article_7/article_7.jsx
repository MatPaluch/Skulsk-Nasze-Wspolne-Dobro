import styles from "./article_7.module.css";
import { HeroSection } from "../../Hero/HeroSection";
import logo from "../../../assets/logo.jpg";
import logoWojewoda from "../../../assets/wojewoda_wielkopolski.png";
import { ReactSVG } from "react-svg";
import file from "../../../assets/file-text.svg";
import FormularzAsystenta from "../../../assets/Docs/Article_3/Formularz zgłoszeniowy-asystentura.odt";

export const Art7 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logoWojewoda} className={styles.logoWojewoda} />
          <img src={logo} className={styles.logo} />
        </div>

        <section className="project-description">
          <h2>Projekt „Krok w stronę zdrowia”</h2>

          <p>
            Projekt <strong>„Krok w stronę zdrowia”</strong> skierowany jest do{" "}
            <strong>15 osób</strong> posiadających orzeczenie o niepełnosprawności.
          </p>

          <h3>Cel projektu</h3>

          <p>
            Projekt ma na celu wspomaganie funkcjonowania osób z niepełnosprawnościami w codziennym
            życiu poprzez świadczenie usług asystenckich, usług doradczych prawnika, usług
            doradczych psychologa, usług logopedy oraz usług fizjoterapeuty.
          </p>

          <h3>Termin i zakres realizacji projektu</h3>

          <p>
            Realizacja zadań przewidzianych w projekcie odbędzie się w terminie{" "}
            <strong>od 1 czerwca do 31 października 2026 r.</strong>
          </p>

          <p>W ramach projektu uczestnicy zostaną objęci wsparciem świadczonym przez:</p>

          <ul>
            <li>Asystentów osób z niepełnosprawnościami</li>
            <li>Prawnika</li>
            <li>Psychologa</li>
            <li>Fizjoterapeutę</li>
            <li>Logopedę</li>
          </ul>

          <h3>Zakres wsparcia uczestników</h3>

          <p>
            <strong>Asystenci osób z niepełnosprawnościami</strong> będą wspierać uczestników w
            codziennym funkcjonowaniu w miejscu ich zamieszkania, pomagając im w wykonywaniu
            codziennych czynności i zwiększaniu samodzielności.
          </p>

          <p>
            <strong>Prawnik</strong> zapewni uczestnikom wsparcie prawne w zakresie praw
            przysługujących osobom z niepełnosprawnościami, pomagając im lepiej zrozumieć
            obowiązujące przepisy oraz możliwości korzystania z przysługujących im uprawnień.
          </p>

          <p>
            <strong>Psycholog</strong> będzie świadczyć pomoc psychologiczną, której celem jest
            wspieranie zdrowia psychicznego uczestników, wzmacnianie ich motywacji do rozwoju oraz
            poprawa samopoczucia i jakości życia.
          </p>

          <p>
            <strong>Logopeda</strong> pomoże uczestnikom rozwijać umiejętności komunikacyjne,
            poprawiać mowę i artykulację oraz doskonalić rozumienie wypowiedzi.
          </p>

          <p>
            Zajęcia logopedyczne będą wspierać samodzielne wyrażanie potrzeb, myśli i emocji, a
            także ułatwiać codzienne funkcjonowanie i nawiązywanie relacji z innymi osobami.
          </p>

          <p>
            <strong>Fizjoterapeuta</strong> pomoże uczestnikom poprawić sprawność ruchową,
            koordynację i równowagę oraz zwiększyć siłę mięśniową, dostosowując ćwiczenia do
            indywidualnych potrzeb i możliwości każdej osoby.
          </p>

          <p>
            Zajęcia fizjoterapeutyczne będą wspierać samodzielność w codziennym funkcjonowaniu,
            poprawiać komfort życia oraz zapobiegać ograniczeniom ruchowym.
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
              href={FormularzAsystenta}
              download="Formularz zgłoszeniowy - asystentura „Krok w stronę zdrowia”.odt"
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
