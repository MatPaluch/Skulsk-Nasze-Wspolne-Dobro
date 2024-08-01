import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
export const ContactUs = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/contact");
  };
  return (
    <section className={styles.container}>
      <h2>Masz jakieś pytania? Potrzebujesz pomocy?</h2>
      <button onClick={handleClick}>Skontaktuj się!</button>
    </section>
  );
};
