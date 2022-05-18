import React, { useState } from "react";
import styles from "./Scale.module.css";
import "./script";
export const Scale = ({ min, max }) => {
  const value = (min + max) / 2;
  const [valueMinRange, setValueMinRange] = useState(value);
  const [valueMaxRange, setValueMaxRange] = useState(value + 1);
  return (
    <div className={styles.scaleContainer}>
      <div className={styles.inputs}>
        <div className={styles.scaleField}>
          <span>Min</span>
          <input
            type="number"
            className={styles.inputMin}
            val={valueMinRange}
            onChange={(e) => {
              let newValue = e.target.value;
              setValueMinRange(newValue);
            }}
          />
        </div>
        <div className={styles.separator}>-</div>
        <div className={styles.scaleField}>
          <span>Max</span>
          <input
            type="number"
            className={styles.inputMax}
            val={valueMaxRange}
            onChange={(e) => setValueMaxRange(e.target.value)}
          />
        </div>
      </div>
      {/* <div className={styles.slider}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles.rangeInput}>
        <input
          type="range"
          className={styles.rangeMin}
          min={min}
          max={max}
          value={valueMinRange}
          onChange={(e) => {
            setValueMinRange(e.target.value);
          }}
        />
        <input
          type="range"
          className={styles.rangeMax}
          min={min}
          max={max}
          value={valueMaxRange}
          onChange={(e) => {
            setValueMaxRange(e.target.value);
          }}
        />
      </div> */}
    </div>
  );
};
