import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navitem = (props) => {
  const { url, name } = props;

  return (
    <div className={styles.navItemContainer} onClick={props.onClick}>
      <Link to={url} className={styles.navItem}>
        <p className={styles.link}>{name}</p>
      </Link>
    </div>
  );
};

export default Navitem;
