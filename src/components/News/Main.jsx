import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import rehabilitacjaNaTy from "../../assets/CardImg/RehabilitacjaNaTY.png";
import youAreNotAlone2 from "../../assets/CardImg/youAreNotAlone2.png";
import logoMisio from "../../assets/CardImg/logoMisio.jpg";
import zainwestujWZdrowie from "../../assets/CardImg/zainwestujWZdrowie.jpg";
import { useNavigate } from "react-router-dom";
import { ContactUs } from "../ContactUs/ContactUs";
export const Main = () => {
  const navigate = useNavigate();
  const handleClickActicle_0 = () => {
    navigate("/article/z-rehabilitacją-na-ty");
  };
  const handleClickActicle_1 = () => {
    navigate("/article/nie-jestes-sama-nie-jestes-sam-ii");
  };
  const handleClickActicle_2 = () => {
    navigate("/article/rozwijam-sie-w-misio");
  };
  const handleClickActicle_3 = () => {
    navigate("/article/zainwestuj-w-zdrowie-to-sie-oplaca");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Aktualności</h1>
        <div className={styles.wrapperCard}>
          <img src={zainwestujWZdrowie} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Zainwestuj w zdrowie - to się opłaca”</h2>
            <p>
              Celem projektu jest wsparcie zdrowia fizycznego oraz psychicznego w walce z
              nadwagą/otyłością oraz wdrożenie nawyków zdrowego stylu życia i prawidłowego
              odżywiania. ...
            </p>
            <button onClick={handleClickActicle_3}>Czytaj więcej...</button>
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
            <button onClick={handleClickActicle_2}>Czytaj więcej...</button>
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
            <button onClick={handleClickActicle_1}>Czytaj więcej...</button>
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
            <button onClick={handleClickActicle_0}>Czytaj więcej...</button>
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};
