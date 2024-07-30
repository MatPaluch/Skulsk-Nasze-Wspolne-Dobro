import { Navigation } from "../Nav/Nav";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
};
