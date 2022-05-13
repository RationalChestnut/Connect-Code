import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const NavLogo = (props) => {
  const { url, name } = props;

  return (
    <>
      <Link to={url} className={styles.logo}>
        <h4>{name}</h4>
      </Link>
    </>
  );
};

export default NavLogo;
