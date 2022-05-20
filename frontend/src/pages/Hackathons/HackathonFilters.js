import React, { useState } from "react";
import styles from "./HackathonFilters.module.css";
import { Skill } from "../../components/Filters/Skill/Skill";
import { Scale } from "../../components/Filters/Scale/Scale";
export const HackathonFilters = () => {
  const [theme, setTheme] = useState("");
  const [themes, setThemes] = useState([]);

  const addTheme = () => {
    if (theme !== "" && theme !== null) {
      setThemes((themes) => [...themes, theme]);
    }
    setTheme("");
  };

  return (
    <div className={styles.hackathonFiltersContainer}>
      <div className={styles.themeContainer}>
        <h1>Theme</h1>
        <div className={styles.themeForm}>
          <input
            className={styles.themeInput}
            type="text"
            placeholder="Looking for..."
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                addTheme();
              }
            }}
          />
          <button className={styles.submit} onClick={addTheme}>
            Submit
          </button>
        </div>
        <div className={styles.themes}>
          {themes.map((theme, index) => {
            return (
              <Skill
                key={theme + index}
                skill={theme}
                totalSkills={themes}
                setTotalSkills={setThemes}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.prizeContainer}>
        <h1>Prize Pool</h1>
        <Scale min={0} max={100000} />
      </div>
      <div className={styles.teamsContainer}>
        <h1>Open Teams</h1>
        <Scale min={0} max={500} />
      </div>
      <div className={styles.locationContainer}>
        <h1>Location</h1>
        <div className={styles.row}>
          <input type="checkbox" />
          <p className={styles.choice}>In Person</p>
        </div>
        <div className={styles.row}>
          <input type="checkbox" />
          <p className={styles.choice}>Online</p>
        </div>
      </div>
      <div className={styles.dateContainer}>
        <h1>Date</h1>
        <div className={styles.row}>
          <p>From</p>
          <input type="date" />
        </div>
        <div className={styles.row}>
          <p>To</p>
          <input type="date" />
        </div>
      </div>
    </div>
  );
};
