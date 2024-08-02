import { HeroSection } from "../../../Hero/HeroSection";
import img from "../../../../assets/imgStick.png";
import logotypes from "../../../../assets/logotypwojewodztwawielkopolskiegoiherbsamorzaduwojewodztwawielkopolskiego.jpg";
import logo from "../../../../assets/logo.jpg";
import styles from "./article_1.module.css";
export const Art1 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <img src={logotypes} className={styles.logotypes} />
          <img src={logo} className={styles.logo} />
        </div>
         <h2>
          „Działalność na rzecz osób niepełnosprawnych - świadczenie usług wspierających, które
          mają na celu umożliwienie lub wspomaganie niezależnego życia osób niepełnosprawnych, a w
          szczególności usług asystencji osobistej”
        </h2>
        <img src={img} className={styles.imgStick} />
        <p className={styles.links}>
          Projekt współfinansowany ze środków{" "}
          <a href="https://www.facebook.com/fundusz.pfron">
            PFRON - Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych{" "}
          </a>
          będących w 2024 roku w dyspozycji Samorządu Województwa Wielkopolskiego{" "}
          <a href="https://www.facebook.com/ROPSwPoznaniu">
            Regionalny Ośrodek Polityki Społecznej w Poznaniu.
          </a>
        </p>
        <p>
          <b>Termin realizacji projektu:</b> 1 lipca – 15 grudnia 2024 roku
          <br />
          <b>Miejsce realizacji:</b> gmina Skulsk - powiat koniński
          <br />
          <b>Koordynator projektu:</b> Iwona Milas
          <br />
          <b>Kontakt:</b> <a href="tel:512194260">tel. 512194260</a>,{" "}
          <a href="mailto:iwona-milas@wp.pl">iwona-milas@wp.pl</a>
        </p>
        <h3>Główny cel projektu:</h3>
        <p>
          Zwiększenie liczby miejsc świadczenia usług asystenckich/usług wspierających w miejscu
          zamieszkania i specjalistycznych usług opiekuńczych w gminie Skulsk w okresie 01.07.2024
          do 31.11.2024 poprzez objęcie wsparciem w ramach projektu 20 osób wymagających wsparcia w
          codziennym funkcjonowaniu.
        </p>
        <h3>Odbiorcy działań projektowych:</h3>
        <p>
          20 osób nieletnich i pełnoletnich posiadających orzeczenie o znacznym lub umiarkowanym
          stopniu niepełnosprawności, wydanym na podstawie ustawy z dnia 27 sierpnia 1997 r. o
          rehabilitacji zawodowej i społecznej oraz zatrudnieniu osób niepełnosprawnych (Dz.U. z
          2023 r.poz. 100 z późn. zm.), albo orzeczeń równoważnych, w tym osoby z
          niepełnosprawnościami sprzężonymi i trudnościami związanymi z mobilnością i komunikacją.
          Długość i zakres wsparcia dobierany indywidualnie, średniomiesięcznie 6h/UP (wartość
          uśredniona - część UP może potrzebować większej, część mniejszej liczby godzin wsparcia -
          zakres godzinowy wsparcia dla każdego UP zgodnie z określonymi potrzebami).
        </p>
        <b>I. Usługi Asystenckie/Wspierające w Miejscu Zamieszkania</b>
        <p>
          <i>
            Wsparcie otrzyma 20 osób, długość i zakres wsparcia dobierany indywidualnie,
            średniomiesięcznie 6h/UP (wartość uśredniona - część UP może potrzebować większej, część
            mniejszej liczby godzin wsparcia - zakres godzinowy wsparcia dla każdego UP zgodnie z
            określonymi potrzebami). Łącznie 400 godzin.
          </i>
        </p>
        <b>II. Usługi Specjalistyczne</b>
        <p>
          <i>
            Wsparcie dla 20 osób w celu przełamania problemów UP związanych z ich sytuacją i
            utrudniającym im codzienne funkcjonowanie, pogłębiających marginalizację społeczną.
            Wsparcie w ramach zadania będzie realizowane w ramach koszyka świadczeń - przewidziano
            średnio 6h/UP - łącznie w ramach projektu zaplanowano 120 godzin wsparcia, w ramach
            następującego wsparcia specjalistycznego:
          </i>
          <ul>
            <li>
              <b>Wsparcie prawne: </b>45 godzin w ramach projektu - przełamanie barier prawnych
              związanych np. z mieszkaniem, prawem pracy, opieką, prawem spadkowym,
              ubezwłasnowolnieniem osoby niepełnosprawnej.
            </li>
            <li>
              <b>Wsparcie psychologiczne: </b>45 godzin - w celu przełamania barier psychologicznych
              i traum UP związanych z ich sytuacją związaną z chorobą, niepełnosprawnością, które
              często przyczyniają się do wycofania z życia społecznego itp.
            </li>
          </ul>
          <p>Łącznie 90 godzin.</p>
        </p>
        <h3>Dokumenty informacyjne i rekrutacyjne stanowią załączniki:</h3>
        <ul>
          <li>Dokument 1</li>
          <li>Dokument 2</li>
        </ul>
      </section>
    </main>
  );
};
