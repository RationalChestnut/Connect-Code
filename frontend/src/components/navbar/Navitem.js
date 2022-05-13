import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navitem = (props) => {
    const { url, name, token} = props;

    return (
        <div className={styles.navItemContainer}>
            <Link to={url} className={styles.navItem}>
                <h4 className={styles.link}>{name}</h4>
            </Link>
        </div>
    );
};

export default Navitem;
