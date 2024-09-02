import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import invalidHelper from "../../assets/invalidHelper.jpg";
import youAreNotAlone from "../../assets/youAreNotAlone.jpg";
import { useNavigate } from "react-router-dom";
import { ContactUs } from "../ContactUs/ContactUs";
export const Main = () => {
  const navigate = useNavigate();
  const handleClickActicle_0 = () => {
    navigate("/news/dzialalnosc-na-rzecz-osob-niepelnosprawnych");
  };
  const handleClickActicle_1 = () => {
    navigate("/news/nie-jestes-sama-nie-jestes-sam");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Aktualności</h1>
        <div className={styles.wrapperCard}>
          <img src={youAreNotAlone} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>„Nie jesteś sama, nie jesteś sam” - Zapraszamy do udziału w programie!</h2>
            <p>
              „Nie jesteś sama, nie jesteś sam” w ramach realizacji zadania publicznego z zakresu
              pomocy społecznej w obszarze wsparcia osób z niepełnosprawnościami po 60 roku życia.
            </p>
            <button onClick={handleClickActicle_1}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={invalidHelper} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>„Świadczenie usług wspierających” - Zapraszamy do udziału w projekcie!</h2>
            <p>
              „Działalność na rzecz osób niepełnosprawnych - świadczenie usług wspierających, które
              mają na celu umożliwienie lub wspomaganie niezależnego życia osób niepełnosprawnych, a
              w szczególności usług asystencji osobistej”
            </p>
            <button onClick={handleClickActicle_0}>Czytaj więcej...</button>
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};
