import { HeroSection } from "../Hero/HeroSection.jsx";
import { ContactUs } from "../ContactUs/ContactUs.jsx";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h2>O nas</h2>
        <p>
          Celem Stowarzyszenia jest poprawa warunków życia społeczności Gminy Skulsk oraz jej rozwój
          poprzez działania w różnych obszarach. Należą do nich pomoc społeczna i wyrównywanie szans
          osób w trudnej sytuacji, integracja zawodowa i społeczna osób zagrożonych wykluczeniem,
          działalność charytatywna oraz pielęgnowanie tradycji narodowej i świadomości
          obywatelskiej. Stowarzyszenie dba także o ochronę zdrowia, wsparcie dla osób
          niepełnosprawnych, promocję zatrudnienia, równouprawnienie kobiet i mężczyzn oraz wsparcie
          osób starszych. Zajmuje się również rozwojem gospodarczym i innowacyjnością, edukacją,
          kulturą, sportem, ochroną środowiska, turystyką, bezpieczeństwem publicznym i ochroną praw
          człowieka. Ponadto, prowadzi działania ratownicze, pomaga ofiarom katastrof, wspiera
          integrację europejską, rozwija współpracę międzynarodową, organizuje wolontariat, wspiera
          Polonię, promuje Polskę za granicą, wspiera rodziny, przeciwdziała uzależnieniom i wspiera
          organizacje pozarządowe.
        </p>
      </section>
      <ContactUs />
    </main>
  );
};
