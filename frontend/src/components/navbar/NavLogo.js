import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const NavLogo = (props) => {
  const { url, name } = props;

  return (
    <div onClick={props.onClick}>
      <Link to={url} className={styles.logo}>
        <p className={styles.logoText}>
          <span className={styles.red}>Connect</span>
          <span className={styles.yellow}>Code</span>
        </p>
      </Link>
    </div>
  );
};

export default NavLogo;
