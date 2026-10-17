import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import invalidHelper from "../../assets/CardImg/invalidHelper.jpg";
import youAreNotAlone from "../../assets/CardImg/youAreNotAlone.jpg";
import rehabilitacjaNaTy from "../../assets/CardImg/RehabilitacjaNaTY.png";
import youAreNotAlone2 from "../../assets/CardImg/youAreNotAlone2.png";
import logoMisio from "../../assets/CardImg/logoMisio.jpg";
import zainwestujWZdrowie from "../../assets/CardImg/zainwestujWZdrowie.jpg";
import { useNavigate } from "react-router-dom";
import { ContactUs } from "../ContactUs/ContactUs";
export const Main = () => {
  const navigate = useNavigate();
  const handleClickArticle_0 = () => {
    navigate("/article/dzialalnosc-na-rzecz-osob-niepelnosprawnych");
  };
  const handleClickArticle_1 = () => {
    navigate("/article/nie-jestes-sama-nie-jestes-sam");
  };
  const handleClickArticle_2 = () => {
    navigate("/article/z-rehabilitacją-na-ty");
  };
  const handleClickArticle_3 = () => {
    navigate("/article/nie-jestes-sama-nie-jestes-sam-ii");
  };
  const handleClickArticle_4 = () => {
    navigate("/article/rozwijam-sie-w-misio");
  };
  const handleClickArticle_5 = () => {
    navigate("/article/zainwestuj-w-zdrowie-to-sie-oplaca");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Nasze projekty</h1>
        <div className={styles.wrapperCard}>
          <img src={zainwestujWZdrowie} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Zainwestuj w zdrowie - to się opłaca”</h2>
            <p>
              Celem projektu jest wsparcie zdrowia fizycznego oraz psychicznego w walce z
              nadwagą/otyłością oraz wdrożenie nawyków zdrowego stylu życia i prawidłowego
              odżywiania. ...
            </p>
            <button onClick={handleClickArticle_5}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={logoMisio} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Rozwijam się w MISIO!”</h2>
            <p>
              W celu ustalenia indywidualnej sytuacji oraz potrzeb każdego z uczestników. Zostanie
              opracowany Indywidualny Plan Wsparcia pozwalający dostosować formy terapii, by
              osiągnąć jak najwyższe rezultaty. ...
            </p>
            <button onClick={handleClickArticle_4}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={youAreNotAlone2} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>
              Projekt „Nie jesteś sama, nie jesteś sam” - edycja II - Zapraszamy do udziału w II
              edycji programu!
            </h2>
            <p>
              Projekt ma na celu wspomaganie funkcjonowania osób z niepełnosprawnościami w
              codziennym życiu poprzez świadczenie usług asystenckich, usług doradczych prawnika
              oraz usług doradczych psychologa. ...
            </p>
            <button onClick={handleClickArticle_3}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={rehabilitacjaNaTy} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Z rehabilitacją na TY!” - Zapraszamy do udziału w projekcie!</h2>
            <p>
              Celem projektu jest wspomaganie osób z niepełnosprawnościami w codziennym
              funkcjonowaniu poprzez rehabilitację, co wiąże się z poprawą zdrowia fizycznego oraz
              psychicznego. ...
            </p>
            <button onClick={handleClickArticle_2}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={youAreNotAlone} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>„Nie jesteś sama, nie jesteś sam” - Zapraszamy do udziału w programie!</h2>
            <p>
              „Nie jesteś sama, nie jesteś sam” w ramach realizacji zadania publicznego z zakresu
              pomocy społecznej w obszarze wsparcia osób z niepełnosprawnościami po 60 roku życia.
            </p>
            <button onClick={handleClickArticle_1}>Czytaj więcej...</button>
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
            <button onClick={handleClickArticle_0}>Czytaj więcej...</button>
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};
