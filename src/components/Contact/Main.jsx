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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.1599101412804!2d18.331595106733612!3d52.477180726592564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b4d7c95e6bb49%3A0xa91088afd3b636c4!2sSzko%C5%82a%20Podstawowa%20im.%20H.%20Sienkiewicza!5e1!3m2!1spl!2spl!4v1732207180035!5m2!1spl!2spl"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};
