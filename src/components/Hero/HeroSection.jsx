import styles from "./HeroSection.module.css";
export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.darkFilter}></div>
      <h1 className={styles.nameHeader}>Stowarzyszenie &quot;SKULSK - NASZE WSPÓLNE DOBRO&quot;</h1>
    </section>
  );
};
