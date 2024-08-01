import { HeroSection } from "../Hero/HeroSection";
import styles from "./Main.module.css";
import invalidHelper from "../../assets/invalidHelper.jpg";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Skulsk-Nasze-Wspolne-Dobro/news/dzialalnosc-na-rzecz-osob-niepelnosprawnych");
  };
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Aktualności</h1>
        <div className={styles.wrapperCard}>
          <img src={invalidHelper} alt="Obraz" className={styles.image} />
          <div className={styles.cardDesc}>
            <h2>Zapraszamy do udziału w projekcie!</h2>
            <p>
              „Działalność na rzecz osób niepełnosprawnych - świadczenie usług wspierających, które
              mają na celu umożliwienie lub wspomaganie niezależnego życia osób niepełnosprawnych, a
              w szczególności usług asystencji osobistej”
            </p>
            <button onClick={handleClick}>Czytaj więcej...</button>
          </div>
        </div>
      </section>
    </main>
  );
};
