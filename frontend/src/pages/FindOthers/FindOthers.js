import React, { useEffect, useState } from "react";
import styles from "./FindOthers.module.css";
import { Skill } from "./Filters/Skill/Skill";
import { Scale } from "./Filters/Scale/Scale";
import { profiles } from "../../pages/HomePage/Profiles/ProfileData.js";
export const FindOthers = () => {
  const [skill, setSkill] = useState("");
  const [totalSkills, setTotalSkills] = useState([]);
  const [peopleProfiles, setPeopleProfiles] = useState([]);
  const addSkill = () => {
    if (skill !== "" && skill !== null) {
      setTotalSkills((totalSkills) => [...totalSkills, skill]);
    }
    setSkill("");
  };

  const loadProfiles = () => {
    setPeopleProfiles(...peopleProfiles, profiles);
  };
  useEffect(() => {
    loadProfiles();
  }, []);
  return (
    <section className={styles.findOthersContainer}>
      <div className={styles.filtersContainer}>
        <div className={styles.skillsContainer}>
          <h1>Skills</h1>
          <div className={styles.skillForm}>
            <input
              className={styles.skillInput}
              type="text"
              placeholder="Looking for..."
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <button onClick={addSkill}>Submit</button>
          </div>
          <div className={styles.skills}>
            {totalSkills.map((skill) => {
              return (
                <Skill
                  skill={skill}
                  totalSkills={totalSkills}
                  setTotalSkills={setTotalSkills}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.ageContainer}>
          <h1>Age Range</h1>
          <Scale min={18} max={100} />
        </div>
        <div className={styles.experienceContainer}>
          <h1>Experience</h1>
          <Scale min={0} max={20} />
        </div>
      </div>
      <div className={styles.peopleContainer}>
        {peopleProfiles.map((person) => {
          return <Profile />;
        })}
      </div>
    </section>
  );
};
