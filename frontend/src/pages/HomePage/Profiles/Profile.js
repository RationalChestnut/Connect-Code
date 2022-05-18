import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const {
    image,
    name,
    languages,
    github,
    yearsOfExperience,
    skills,
    lookingFor,
    project,
  } = props;
  return (
    <div className={styles.profileContainer}>
      <img src={image} alt={name} className={styles.profileImage} />
      <p className={styles.name}>{name}</p>
      <div className={styles.basicInfo}>
        <p>Languages: {languages.join(", ")}</p>
        <p>Years of Experience: {yearsOfExperience}</p>
        <p>Skills: {skills.join(", ")}</p>
        <p>Looking For: {lookingFor.join(", ")}</p>
      </div>
      <button className={styles.reachOut}>Reach Out</button>
    </div>
  );
};

export default Profile;
