import React from "react";
import Navitem from "./Navitem";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";
import { data } from "./Navbardata";
import { SignupButton } from "./SignupButton";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLogo url="/" name="Connect Code" />
      </div>
      <ul className={styles.navLinks}>
        {data.map((navData) => {
          return (
            <li className={styles.navItem}>
              <Navitem key={navData.id} url={navData.url} name={navData.name} />
            </li>
          );
        })}
      </ul>
      <div className={styles.signupContainer}>
        <p>Login</p>
        {/* <SignupButton text="" /> */}
        <SignupButton text="Signup" />
      </div>
      <div className={styles.burgerContainer}>
        <GiHamburgerMenu className={styles.burger} />
      </div>
    </nav>
  );
};

export default Navbar;
