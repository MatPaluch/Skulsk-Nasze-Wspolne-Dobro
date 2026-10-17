import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import krokWStroneZdrowia from "../../assets/CardImg/krokWStronęZdrowia.png";
import zainwestujWZdrowieII from "../../assets/CardImg/zainwestujwZdrowieII.png";
import { useNavigate } from "react-router-dom";
import { ContactUs } from "../ContactUs/ContactUs";
export const Main = () => {
  const navigate = useNavigate();
  const handleClickArticle_7 = () => {
    navigate("/article/krok-w-strone-zdrowia");
  };
  const handleClickArticle_6 = () => {
    navigate("/article/zainwestuj-w-zdrowie-to-sie-oplaca-edycja-ii");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Aktualności</h1>
        <div className={styles.wrapperCard}>
          <img src={krokWStroneZdrowia} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Krok w stronę zdrowia”</h2>
            <p>
              Projekt ma na celu wspomaganie funkcjonowania osób z niepełnosprawnościami w
              codziennym życiu poprzez świadczenie usług asystenckich, usług doradczych prawnika,
              usług doradczych psychologa, usług logopedy oraz usług fizjoterapeuty. ...
            </p>
            <button onClick={handleClickArticle_7}>Czytaj więcej...</button>
          </div>
        </div>
        <div className={styles.wrapperCard}>
          <img src={zainwestujWZdrowieII} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Projekt „Zainwestuj w zdrowie - to się opłaca” - edycja II</h2>
            <p>
              Celem projektu jest wsparcie zdrowia fizycznego oraz psychicznego w walce z
              nadwagą/otyłością oraz wdrożenie nawyków zdrowego stylu życia i prawidłowego
              odżywiania. ...
            </p>
            <button onClick={handleClickArticle_6}>Czytaj więcej...</button>
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};
