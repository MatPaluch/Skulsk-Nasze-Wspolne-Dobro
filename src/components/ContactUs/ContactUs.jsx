import styles from "./ContactUs.module.css";
export const ContactUs = () => {
  return (
    <section className={styles.container}>
      <h2>Masz jakieś pytania? Potrzebujesz pomocy?</h2>
      <p>Śmiało pisz do nas!</p>
      <button>Napisz wiadomość!</button>
    </section>
  );
};
