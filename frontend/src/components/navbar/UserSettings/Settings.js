import React from "react";
import styles from "./Settings.module.css";
import { Link } from "react-router-dom";

export const Settings = (props) => {
  return (
    <div
      className={`${styles.settingsContainer} ${
        props.display ? styles.display : styles.displayNone
      }`}
    >
      <div className={styles.settings}>
        <div className={`${styles.setting}`}>
          <Link className={styles.link} to={`/profile/${props.userId}`}>
            Profile
          </Link>
        </div>
        <div className={`${styles.setting}`}>
          <Link className={styles.link} to={"/user/logout"}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
