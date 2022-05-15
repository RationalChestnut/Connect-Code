import React from "react";
import styles from "./Burger.module.css";
const Burger = (props) => {
  const changeStatus = () => {
    props.setBurgerStatus(!props.burgerStatus);
  };
  return (
    <div className={styles.burgerContainer} onClick={changeStatus}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
