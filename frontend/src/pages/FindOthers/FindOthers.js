import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./FindOthers.module.css";
import { storage } from "../../firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Loading from "../../components/Loading/Loading";
import { profiles } from "../../data/ProfileData.js";
import Profile from "../../components/Profile/Profile";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
import { Filter } from "./Filter";

export const FindOthers = () => {
  const [peopleProfiles, setPeopleProfiles] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [skills, setSkills] = useState([]);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(100);
  const [minExperience, setMinExperience] = useState(0);
  const [maxExperience, setMaxExperience] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const query = async () => {
    setIsLoading(true);
    let queryLink = `https://ConnectCodeBackend.yxli666.repl.co/user/query?minExperience=${Math.min(
      minExperience,
      maxExperience
    )}&skills=${skills.join(",")}`;

    try {
      axios.get(queryLink).then((res) => {
        // const profiles = [];
        setPeopleProfiles([]);
        res.data.users.forEach(async (user) => {
          if (user.age >= minAge && user.age <= maxAge) {
            const userImageRef = ref(storage, `images/${user.userId}`);
            const url = await getImageFile(userImageRef);
            const newUser = {
              ...user,
              image: url,
            };
            setPeopleProfiles((profiles) => {
              return [...profiles, newUser];
            });
          }
        });
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getImageFile = async (userImageRef) => {
    setIsLoading(true);
    let res = await listAll(userImageRef);
    let item = res.items[0];
    let url = await getDownloadURL(item);

    return url;
  };

  useEffect(() => {
    query();
  }, [skills]);

  return (
    <section className={styles.findOthersPage}>
      <div className={styles.filterNavbarContainer}>
        <FilterNavbar setIsFilter={setIsFilter} isShown={isFilter} />
      </div>
      <section className={styles.findOthersContainer}>
        <div className={styles.filterDesktop}>
          <Filter
            skills={skills}
            setSkills={setSkills}
            setMinAge={setMinAge}
            setMaxAge={setMaxAge}
            setMinExperience={setMinExperience}
            setMaxExperience={setMaxExperience}
            query={query}
          />
        </div>
        <div
          className={`${styles.filterMobile} ${
            isFilter ? styles.displayFilter : styles.hideFilter
          }`}
        >
          <Filter
            skills={skills}
            setSkills={setSkills}
            setMinAge={setMinAge}
            setMaxAge={setMaxAge}
            setMinExperience={setMinExperience}
            setMaxExperience={setMaxExperience}
            query={query}
          />
        </div>
        <div className={styles.peopleContainer}>
          <Loading isLoading={isLoading} />
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
                lookingFor={person.seeking}
                style={{ border: "none" }}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};
