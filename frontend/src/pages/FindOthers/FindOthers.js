import React, { useEffect, useState } from "react";
import styles from "./FindOthers.module.css";

import { profiles } from "../../data/ProfileData.js";
import Profile from "../../components/Profile/Profile";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
import { Filter } from "./Filter";

export const FindOthers = () => {
  const [peopleProfiles, setPeopleProfiles] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const loadProfiles = () => {
    setPeopleProfiles(...peopleProfiles, profiles);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <section className={styles.findOthersPage}>
      <div className={styles.filterNavbarContainer}>
        <FilterNavbar setIsFilter={setIsFilter} isShown={isFilter} />
      </div>
      <section className={styles.findOthersContainer}>
        <div className={styles.filterDesktop}>
          <Filter />
        </div>
        <div
          className={`${styles.filterMobile} ${
            isFilter ? styles.displayFilter : styles.hideFilter
          }`}
        >
          <Filter />
        </div>
        <div className={styles.peopleContainer}>
          {peopleProfiles.map((person, index) => {
            return (
              <Profile
                key={index}
                className={styles.profile}
                image={person.image}
                name={person.name}
                languages={person.languages}
                yearsOfExperience={person.yearsOfExperience}
                skills={person.skills}
                lookingFor={person.lookingFor}
                style={{ border: "none" }}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};
