import React from "react";
import styles from "./ProfileContainer.module.css";
import { profiles } from "../../../data/ProfileData";
import Profile from "../../../components/Profile/Profile";
const ProfileContainer = () => {
  return (
    <section className={styles.profile}>
      <h1 className={styles.adText}>Find Others Your Skill Level</h1>
      <div className={`${styles.profileContainer} ${styles.profilesContainer}`}>
        {profiles.map((person, index) => {
          return (
            <Profile
              image={person.image}
              name={person.name}
              languages={person.languages}
              github={person.github}
              yearsOfExperience={person.yearsOfExperience}
              skills={person.skills}
              lookingFor={person.lookingFor}
              project={person.projectInMind}
              key={index}
              styleImage={{ objectFit: "cover" }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProfileContainer;
