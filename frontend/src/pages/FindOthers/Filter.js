import React, { useState } from "react";
import { Skill } from "../../components/Filters/Skill/Skill";
import { Scale } from "../../components/Filters/Scale/Scale";
import styles from "./Filter.module.css";

export const Filter = ({
  skills,
  setSkills,
  setMinAge,
  setMaxAge,
  setMinExperience,
  setMaxExperience,
  query,
}) => {
  const [skill, setSkill] = useState("");
  const addSkill = () => {
    if (skill !== "" && skill !== null) {
      setSkills((skills) => [...skills, skill]);
    }
    setSkill("");
  };
  return (
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
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                addSkill();
              }
            }}
          />
          <button className={styles.submit} onClick={addSkill}>
            Submit
          </button>
        </div>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <Skill
                key={skill + index}
                skill={skill}
                skills={skills}
                setSkills={setSkills}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.ageContainer}>
        <h1>Age Range</h1>
        <Scale
          min={18}
          max={100}
          setMin={setMinAge}
          setMax={setMaxAge}
          onMouseUp={query}
        />
      </div>
      <div className={styles.experienceContainer}>
        <h1>Years of Experience</h1>
        <Scale
          min={0}
          max={20}
          setMin={setMinExperience}
          setMax={setMaxExperience}
          onMouseUp={query}
        />
      </div>
    </div>
  );
};
