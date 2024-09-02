import styles from "./article_1.module.css";
import { HeroSection } from "../../../Hero/HeroSection";
import logo from "../../../../assets/logo.jpg";
import logoWojewoda from "../../../../assets/wojewoda_wielkopolski.png";
import invalid from "../../../../assets/invalid_art1.webp";
import { ReactSVG } from "react-svg";
import file from "../../../../assets/file-text.svg";
import Formularz_zgloszeniowy from "../../../../assets/Article_1/Formularz_zgłoszeniowy.odt";
import Katalog_uslug from "../../../../assets/Article_1/Katalog_usług.docx";

export const Art1 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logoWojewoda} className={styles.logoWojewoda} />
          <img src={logo} className={styles.logo} />
        </div>
        <h2>
          „Nie jesteś sama, nie jesteś sam” - w ramach realizacji zadania publicznego z zakresu
          pomocy społecznej w obszarze wsparcia osób z niepełnosprawnościami po 60 roku życia.
        </h2>
        <p className={styles.secondHeader}>
          Zadanie publiczne jest współfinansowane ze środków{" "}
          <a href="https://www.poznan.uw.gov.pl" target="_blanc">
            Wielkopolskiego Urzędu Wojewódzkiego
          </a>
        </p>
        <div className={styles.infoWrapper}>
          <img src={invalid} className={styles.imgInvalid} />
          <p>
            <b>Termin realizacji projektu:</b> 1 sierpnia – 30 listopada 2024 roku
            <br />
            <b>Miejsce realizacji:</b> gmina Skulsk - powiat koniński
            <br />
            <b>Koordynator projektu:</b> Iwona Milas
            <br />
            <b>Kontakt:</b> <a href="tel:512194260">tel. 512194260</a>,{" "}
            <a href="mailto:iwona-milas@wp.pl" target="_blanc">
              iwona-milas@wp.pl
            </a>
          </p>
        </div>
        <h3>Główny cel projektu:</h3>
        <p style={{ textIndent: 30 }}>
          Kompleksowe wsparcie dla 10 niepełnosprawnych osób z terenu gminy Skulsk poprzez
          zwiększenie liczby godzin świadczenia usług asystenckich/usług wspierających w miejscu
          zamieszkania oraz specjalistycznych porad (psycholog, prawnik) w okresie 01.08.2024 r. do
          30.11.2024 r.
        </p>
        <h3>Odbiorcy działań projektowych:</h3>
        <p style={{ textIndent: 30 }}>
          10 osób posiadających orzeczenie o znacznym lub umiarkowanym stopniu niepełnosprawności,
          wydanym na podstawie ustawy ustawy z dnia 27 sierpnia 1997 r. o rehabilitacji zawodowej i
          społecznej oraz zatrudnieniu osób niepełnosprawnych (Dz.U. z 2023 r.poz. 100 z późn. zm.),
          albo orzeczeń równoważnych do w/w w tym do osób z niepełnosprawnościami sprzężonymi i
          trudnościami związanymi z mobilnością i komunikacją. Osoby powyżej 60 roku życia. Długość
          i zakres wsparcia dobierany ndywidualnie, średniomiesięcznie 4h/UP ( wartość uśredniona
          część UP może potrzebować większej część mniejszej liczby godz. wsparcia - zakres
          godzinowy wsparcia dla każdego UP zgodnie z określonymi potrzebami ).
        </p>
        <b style={{ color: "#00a933" }}>I. USŁUGI ASYSTENCKIE/WSPIERAJĄCE W MIEJSCU ZAMIESZKANIA</b>
        <p>
          W zadaniu wsparcie otrzyma dla 10 osób, długość i zakres wsparcia dobierany
          indywidualnie,średniomiesięcznie 4h/UP ( wartość uśredniona część UP może potrzebować
          większej część mniejszej liczby godz. wsparcia - zakres godzinowy wsparcia dla każdego UP
          zgodnie z określonymi potrzebami ).
        </p>
        <p>Łącznie 200 godzin</p>
        <b style={{ color: "#00a933" }}>
          II. USŁUGI SPECJALISTYCZNE DLA OSÓB DOŚWIADCZAJĄCYCH RÓŻNEGO RODZAJU PROBLEMÓW.
        </b>
        <p>
          Wsparcie dla 10 osób w celu przełamania problemów UP związanych z ich sytuacją i
          utrudniającym im codzienne funkcjonowanie, pogłębiających marginalizację społeczną.
          Wsparcie w ramach zadania będzie realizowane w ramach koszyka świadczeń - przewidziano
          średnio 6h/UP - łącznie w ramach projektu zaplanowano 60 h wsparcia, w ramach
          następującego wsparcia specjalistycznego:
        </p>
        <p>
          <b>Wsparcie prawne</b> - 30 h w ramach projektu - przełamanie barier prawnych związanych
          np. z mieszkaniem, prawem pracy, opieką, prawem spadkowym, ubezwłasnowolnieniem osoby
          niepełnosprawnej.
        </p>
        <p>
          <b>Wsparcie psychologiczne</b> - 30 h w ramach projektu - w celu przełamania barier
          psychologicznych i traum UP związanych z ich sytuacją związaną z chorobą,
          niepełnosprawnością , które często przyczyniają się do wycofania z życia społecznego itp.
        </p>
        <p>Łącznie 60 godzin.</p>
        <b style={{ color: "#00a933" }}>III. TRENING UMIEJĘTNOŚCI SPOŁECZNYCH.</b>
        <p>
          Wsparcie dla osób zainteresowanych mający na celu wzmocnienie wiary w możliwości
          wprowadzenia pozytywnych zmian w życiu.
        </p>
        <p>Łącznie 10 godzin</p>
        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki:</h3>
        <ul className={styles.downloadList}>
          <li>
            <a
              className={styles.downloadLinks}
              href={Formularz_zgloszeniowy}
              download="Formularz_zgłoszeniowy.odt"
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
              Formularz zgłoszeniowy
            </a>
          </li>

          <li>
            <a className={styles.downloadLinks} href={Katalog_uslug} download="Katalog_usług.docx">
              <ReactSVG
                className={styles.svgFile}
                src={file}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "rgb(75, 185, 103)");
                }}
              />
              Katalog_usług
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
