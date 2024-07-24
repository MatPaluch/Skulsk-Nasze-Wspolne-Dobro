import styles from "./Nav.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}></div>
      <ul className={styles.navList}>
        <li>Aktualności</li>
        <li>O nas</li>
        <li>Nasze projekty</li>
        <li>Statut</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};
