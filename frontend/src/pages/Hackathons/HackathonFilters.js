import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HackathonFilters.module.css";
import { Skill } from "../../components/Filters/Skill/Skill";
import { Scale } from "../../components/Filters/Scale/Scale";
export const HackathonFilters = ({ setHackathons }) => {
  const [theme, setTheme] = useState("");
  const [themes, setThemes] = useState([]);
  const [minPrize, setMinPrize] = useState(0);
  const [maxPrize, setMaxPrize] = useState(100000);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [inPerson, setInPerson] = useState(false);
  const [online, setOnline] = useState(false);

  const addTheme = () => {
    if (theme !== "" && theme !== null) {
      setThemes((themes) => [...themes, theme]);

      setTimeout(() => {
        query();
      }, 500);
    }
    setTheme("");
  };

  const query = () => {
    const queryLink = `https://ConnectCodeBackend.yxli666.repl.co/hackathons/query?minPrize=${Math.min(
      minPrize,
      maxPrize
    )}&maxPrize=${Math.max(
      minPrize,
      maxPrize
    )}&inPerson=${inPerson}&online=${online}&startDateString=${fromDate}&endDateString=${toDate}&tags=${themes.join(
      ","
    )}`;

    axios.get(queryLink).then((res) => {
      setHackathons(res.data.hackathons);
    });
  };

  useEffect(() => {
    query();
  }, []);

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
        <Scale
          min={0}
          max={100000}
          setMin={setMinPrize}
          setMax={setMaxPrize}
          onMouseUp={query}
        />
      </div>
      {/* <div className={styles.teamsContainer}>
        <h1>Open Teams</h1>
        <Scale min={0} max={500} />
      </div> */}
      <div className={styles.locationContainer}>
        <h1>Location</h1>
        <div className={styles.row}>
          <input
            type="checkbox"
            checked={inPerson}
            onChange={(e) => {
              setInPerson(e.target.checked);
              query();
            }}
          />
          <p className={styles.choice}>In Person</p>
        </div>
        <div className={styles.row}>
          <input
            type="checkbox"
            checked={online}
            onChange={(e) => {
              setOnline(e.target.checked);
              query();
            }}
          />
          <p className={styles.choice}>Online</p>
        </div>
      </div>
      <div className={styles.dateContainer}>
        <h1>Date</h1>
        <div className={styles.row}>
          <p>From</p>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => {
              setFromDate(e.target.value);
              query();
            }}
            className={styles.dateInput}
          />
        </div>
        <div className={styles.row}>
          <p>To</p>
          <input
            type="date"
            className={styles.dateInput}
            value={toDate}
            onChange={(e) => {
              setToDate(e.target.value);
              query();
            }}
          />
        </div>
      </div>
    </div>
  );
};
