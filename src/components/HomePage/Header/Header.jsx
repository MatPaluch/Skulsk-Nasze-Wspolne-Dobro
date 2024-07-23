import styles from "./Header.module.css";
import { Navigation } from "./Nav/Nav";
export const Header = () => {
  return (
    <header>
      <div className={styles.logo}></div>
      <Navigation />
    </header>
  );
};
