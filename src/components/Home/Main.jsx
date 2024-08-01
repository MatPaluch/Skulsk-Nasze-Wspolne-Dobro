import styles from "./Main.module.css";
export const Main = () => {
  const participants = []; // management will change
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.nameHeader}>
          Stowarzyszenie &quot;SKULSK - NASZE WSPÓLNE DOBRO&quot;
        </h1>
      </section>
      <section className={styles.container}>
        <div className={styles.wraper}>
          <h2>Kilka słów o naszej działalności</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia voluptatum
            inventore officiis earum animi cum aut ipsam beatae aperiam suscipit quas, laudantium ut
            nisi nemo, illo accusantium magni doloremque.
          </p>
        </div>
      </section>
      <section className={styles.container}>
        <div>
          <h2>Poznaj nas</h2>
          <div>
            <ul className={styles.participantList}>
              {participants.map((ob) => (
                <li key={ob.id}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    viewBox="0 0 32 32"
                    className={styles.user}
                  >
                    <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                  </svg>
                  <div className={styles.divMembers}>
                    <h3>{ob.name}</h3>
                    <p>{ob.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
