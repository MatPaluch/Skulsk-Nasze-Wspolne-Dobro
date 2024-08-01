import { HeroSection } from "../../../Hero/HeroSection";
import img from "../../../../assets/imgStick.png";
import styles from "./article_1.module.css";
export const Art1 = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <div className={styles.headerArticle}>
          <h2>
            „Działalność na rzecz osób niepełnosprawnych - świadczenie usług wspierających, które
            mają na celu umożliwienie lub wspomaganie niezależnego życia osób niepełnosprawnych, a w
            szczególności usług asystencji osobistej”
          </h2>
          <img src={img} className={styles.imgStick} />
        </div>
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
      </section>
    </main>
  );
};
