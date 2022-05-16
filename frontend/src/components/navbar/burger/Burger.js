import React from "react";
import styles from "./Burger.module.css";
const Burger = (props) => {
  const changeStatus = () => {
    props.setBurgerStatus(!props.burgerStatus);
  };
  const burgerOne = props.burgerStatus ? styles.burgerOne : "";
  const burgerTwo = props.burgerStatus ? styles.burgerTwo : "";
  const burgerThree = props.burgerStatus ? styles.burgerThree : "";
  return (
    <div className={styles.burgerContainer} onClick={changeStatus}>
      <div className={burgerOne}></div>
      <div className={burgerTwo}></div>
      <div className={burgerThree}></div>
    </div>
  );
};

export default Burger;
