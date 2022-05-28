import React from "react";
import styles from "./Skill.module.css";

export const Skill = (props) => {
  const { skills, setSkills, skill } = props;
  const deleteSelf = () => {
    let copy = [...skills];
    const index = copy.findIndex((element) => element === skill);
    if (index != -1) {
      copy.splice(index, 1);
      setSkills(copy);
    }
  };
  return (
    <div className={styles.skillContainer}>
      <p>{skill}</p>
      <p onClick={deleteSelf} className={styles.cancel}>
        X
      </p>
    </div>
  );
};
