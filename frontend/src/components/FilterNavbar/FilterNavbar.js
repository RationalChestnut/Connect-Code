import React from "react";
import styles from "./FilterNavbar.module.css";
import { VscFilter } from "react-icons/vsc";

export const FilterNavbar = (props) => {
  const changeFilter = () => {
    props.setIsFilter(!props.isShown);
  };
  return (
    <div className={styles.filterNavbarContainer} onClick={changeFilter}>
      <VscFilter className={styles.filter} />
    </div>
  );
};
