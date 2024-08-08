import styles from "./Main.module.css";
import userSvg from "../../assets/user.svg";
import { ReactSVG } from "react-svg";
import { ContactUs } from "../ContactUs/ContactUs.jsx";
export const Main = () => {
  const participants = [{ id: 1, name: "Milas", role: "Master" }];
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
            "Skulsk - Nasze Wspólne Dobro" stowarzyszenie, które angażuje się w działalność
            społeczną i kulturalną w gminie Skulsk. Organizacja podejmuje inicjatywy na rzecz
            rozwoju lokalnej społeczności, promuje lokalne tradycje i dziedzictwo kulturowe, a także
            wspiera różnorodne projekty mające na celu poprawę jakości życia mieszkańców.
          </p>
        </div>
      </section>
      <section className={styles.container}>
        {participants.length > 1 && (
          <div>
            <h2>Poznaj nas</h2>
            <div>
              <ul className={styles.participantList}>
                {participants.map((ob) => (
                  <li key={ob.id}>
                    <ReactSVG
                      src={userSvg}
                      beforeInjection={(svg) => {
                        svg.setAttribute("fill", "rgb(45, 211, 67)");
                        svg.setAttribute("width", "86");
                        svg.setAttribute("height", "86");
                        svg.setAttribute("stroke", "black");
                        svg.setAttribute("stroke-width", "1");
                      }}
                      afterInjection={(svg) => {
                        svg.parentElement.classList.add(styles.user);
                      }}
                    />
                    <div className={styles.divMembers}>
                      <h3>{ob.name}</h3>
                      <p>{ob.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <ContactUs />
    </main>
  );
};
