import { HeroSection } from "../Hero/HeroSection.jsx";
import { ReactSVG } from "react-svg";
import styles from "./Main.module.css";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import envelop from "../../assets/envelop.svg";
import creditCard from "../../assets/credit-card.svg";
import office from "../../assets/office.svg";

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.container}>
        <h1>Kontakt</h1>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li>
              <ReactSVG
                src={location}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>Lokalizacja:</b>
                <br />
                <span>ul. Konińska 39,</span>
                <br />
                <span> 62-560 Skulsk</span>
              </div>
            </li>
            <li>
              <ReactSVG
                src={phone}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "46");
                  svg.setAttribute("height", "46");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>Telefon:</b>
                <br />
                <a href="tel:+48 512 194 260">+48 512 194 260</a>
              </div>
            </li>
            <li>
              <ReactSVG
                src={envelop}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>Poczta:</b>
                <br />
                <a href="mailto:stowarzyszenie@gmail.com">stowarzyszenie@gmail.com</a>
              </div>
            </li>
            <li>
              <ReactSVG
                src={creditCard}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>Numer konta bankowego:</b>
                <br />
                54 8534 0006 0100 0102 2000 0010
              </div>
            </li>
            <li>
              <ReactSVG
                src={office}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>NIP:</b>
                <br />
                665-297-26-20
              </div>
            </li>
            <li>
              <ReactSVG
                src={office}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>REGON:</b>
                <br />
                301686728
              </div>
            </li>
            <li>
              <ReactSVG
                src={office}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "48");
                  svg.setAttribute("height", "48");
                  svg.setAttribute("fill", "seagreen");
                }}
              />
              <div>
                <b>KRS:</b>
                <br />
                0000379501
              </div>
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1444.9345253475892!2d18.32964342947034!3d52.477677696734695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b4d7d2ff2323f%3A0xf7c94957a49478f8!2sKoni%C5%84ska%2039%2C%2062-560%20Skulsk!5e0!3m2!1spl!2spl!4v1722363447651!5m2!1spl!2spl"
            width="500"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};
