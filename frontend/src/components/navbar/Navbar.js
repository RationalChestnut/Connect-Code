import React, { useState } from "react";
import Navitem from "./Navitem";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";
import { data } from "./Navbardata";
import { SignupButton } from "./SignupButton";
import Burger from "./burger/Burger";

export const Navbar = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div></div>
      <div className={styles.logo}>
        <NavLogo
          url="/"
          name="Connect Code"
          onClick={() => {
            if (isBurger) {
              setIsBurger(false);
            }
          }}
        />
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
        <Navitem key={5} url={"/login"} name="Login" />
        {/* <SignupButton text="" /> */}
        <SignupButton text="Signup" />
      </div>
      <div className={styles.burgerContainer}>
        <Burger setBurgerStatus={setIsBurger} burgerStatus={isBurger} />
      </div>
      {isBurger ? (
        <div>
          <ul className={styles.mobileNavLinks}>
            {data.map((navData) => {
              return (
                <li className={styles.mobileNavItem}>
                  <Navitem
                    key={navData.id}
                    url={navData.url}
                    name={navData.name}
                    onClick={() => {
                      if (isBurger) {
                        setIsBurger(false);
                      }
                    }}
                  />
                </li>
              );
            })}

            <div className={styles.mobileSignupContainer}>
              <div>
                <Navitem
                  key={5}
                  url={"/login"}
                  name="Login"
                  onClick={() => {
                    if (isBurger) {
                      setIsBurger(false);
                    }
                  }}
                />
              </div>

              <SignupButton
                text="Signup"
                className={styles.mobileSignupButton}
                onClick={() => {
                  if (isBurger) {
                    setIsBurger(false);
                  }
                }}
              />
            </div>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
