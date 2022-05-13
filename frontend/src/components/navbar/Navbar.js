import React from "react";
import Navitem from "./Navitem";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";
import navAnimationHandler from "./NavAnimationHandler";
import hideNavbar from "./HideNavbar";
import { data } from "./Navbardata";
export const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={hideNavbar}>
        <NavLogo url="/" name="Connect Code" />
      </div>
      <ul className={styles.navLinks}>
        {data.map((navData) => {
          return (
            <li>
              <Navitem key={navData.id} url={navData.url} name={navData.name} />
            </li>
          );
        })}
      </ul>
      <div className={styles.burger} onClick={navAnimationHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
