import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import invalidHelper from "../../assets/CardImg/invalidHelper.jpg";
import youAreNotAlone from "../../assets/CardImg/youAreNotAlone.jpg";
import { useNavigate } from "react-router-dom";
import { ContactUs } from "../ContactUs/ContactUs";
export const Main = () => {
  const navigate = useNavigate();
  const handleClickActicle_0 = () => {
    navigate("/article/dzialalnosc-na-rzecz-osob-niepelnosprawnych");
  };
  const handleClickActicle_1 = () => {
    navigate("/article/nie-jestes-sama-nie-jestes-sam");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Nasze projekty</h1>
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
            <h2>
              „Działalność na rzecz osób niepełnosprawnych” - Zapraszamy do udziału w projekcie!
            </h2>
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
