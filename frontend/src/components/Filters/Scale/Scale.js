import React, { useState } from "react";
import styles from "./Scale.module.css";

export const Scale = ({ min, max, setMin, setMax, onMouseUp }) => {
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
          onMouseUp={onMouseUp}
          onTouchEnd={onMouseUp}
          onChange={(e) => {
            setValueMinRange(parseInt(e.target.value));
            setMin(e.target.value);
          }}
        />
        <input
          type="range"
          className={styles.rangeMax}
          min={min}
          max={max}
          value={valueMaxRange}
          onMouseUp={onMouseUp}
          onTouchEnd={onMouseUp}
          onChange={(e) => {
            setValueMaxRange(parseInt(e.target.value));
            setMax(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
