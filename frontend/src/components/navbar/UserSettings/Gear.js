import React from "react";
import styles from "./Gear.module.css";
import { BsGear } from "react-icons/bs";
export const Gear = () => {
  return (
    <div className={styles.gearContainer}>
      <BsGear className={styles.gearIcon} />
    </div>
  );
};
