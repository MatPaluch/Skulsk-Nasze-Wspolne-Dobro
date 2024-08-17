import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu3.svg";
import { useEffect, useState } from "react";
import styles from './MobileNav.module.css';

export const MobileNav = ({ isSmallScreen, mobileMenuHandler }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
        return () => setShow(false);
    }, []);

    const handleLinkClick = () => {
        setShow(false);
        setTimeout(() => mobileMenuHandler(), 300);
    };

    return (
        <>
            {isSmallScreen && (
                <div className={`${styles.mobileNav} ${show ? styles.show : ''}`}>
                    <div className={styles.divButton}>
                        <button className={styles.mobileButton} onClick={handleLinkClick}>
                            <ReactSVG
                                src={menu}
                                beforeInjection={(svg) => {
                                    svg.setAttribute("fill", "white");
                                }}
                            />
                        </button>
                    </div>
                    <ul className={styles.mobileList}>
                        <li>
                            <NavLink to="news" onClick={handleLinkClick}>
                                Aktualności
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about" onClick={handleLinkClick}>
                                O nas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" onClick={handleLinkClick}>
                                Nasze projekty
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="statute" onClick={handleLinkClick}>
                                Statut
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contact" onClick={handleLinkClick}>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
