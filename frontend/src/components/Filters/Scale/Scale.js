import React, { useState } from "react";
import styles from "./Scale.module.css";

export const Scale = ({ min, max }) => {
  const [valueMinRange, setValueMinRange] = useState(min);
  const [valueMaxRange, setValueMaxRange] = useState(max);

  return (
    <div className={styles.scaleContainer}>
      <span className={styles.minRangeLabel}>
        {valueMaxRange < valueMinRange ? valueMaxRange : valueMinRange}
      </span>
      <span className={styles.maxRangeLabel}>
        {valueMaxRange > valueMinRange ? valueMaxRange : valueMinRange}
      </span>
      <div className={styles.slider}></div>
      <div className={styles.rangeInput}>
        <input
          type="range"
          className={styles.rangeMin}
          min={min}
          max={max}
          value={valueMinRange}
          onChange={(e) => {
            // if (e.target.value < valueMaxRange) {
            setValueMinRange(parseInt(e.target.value));
            // }
          }}
        />
        <input
          type="range"
          className={styles.rangeMax}
          min={min}
          max={max}
          value={valueMaxRange}
          onChange={(e) => {
            // if (e.target.value > valueMinRange) {
            setValueMaxRange(parseInt(e.target.value));
            // }
          }}
        />
      </div>
    </div>
  );
};
