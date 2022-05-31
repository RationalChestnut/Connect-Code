import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import styles from "./FindOthers.module.css";
import { storage } from "../../firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Loading from "../../components/Loading/Loading";
import { profiles } from "../../data/ProfileData.js";
import Profile from "../../components/Profile/Profile";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
import { Filter } from "./Filter";
import { Link } from "react-router-dom";

export const FindOthers = ({ userId }) => {
  const [peopleProfiles, setPeopleProfiles] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [skills, setSkills] = useState([]);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(100);
  const [minExperience, setMinExperience] = useState(0);
  const [maxExperience, setMaxExperience] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [doneLoading, setDoneLoading] = useState(false);
  const notFirstRender = useRef(false);

  const query = async () => {
    setIsLoading(true);
    let queryLink = `https://ConnectCodeBackend.yxli666.repl.co/user/query?minExperience=${Math.min(
      minExperience,
      maxExperience
    )}&maxExperience=${Math.max(
      minExperience,
      maxExperience
    )}&skills=${skills.join(",")}`;

    try {
      const profiles = [];
      const res = await axios.get(queryLink);
      const users = res.data.users;

      for (let user of users) {
        if (userId) {
          if (
            user.userId !== userId &&
            user.age >= minAge &&
            user.age <= maxAge
          ) {
            const userImageRef = ref(storage, `images/${user.userId}`);
            let url;
            try {
              url = await getImageFile(userImageRef);
            } catch (err) {
              url = user.userImage;
            }
            const newUser = {
              ...user,
              image: url,
            };
            profiles.push(newUser);
          }
        } else {
          if (user.age >= minAge && user.age <= maxAge) {
            const userImageRef = ref(storage, `images/${user.userId}`);
            let url;
            try {
              url = await getImageFile(userImageRef);
            } catch (err) {
              url = user.userImage;
            }
            const newUser = {
              ...user,
              image: url,
            };
            profiles.push(newUser);
          }
        }
      }

      setPeopleProfiles(profiles);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    let queryLink = `https://ConnectCodeBackend.yxli666.repl.co/user/query?minExperience=${Math.min(
      minExperience,
      maxExperience
    )}&maxExperience=${Math.max(
      minExperience,
      maxExperience
    )}&skills=${skills.join(",")}&startAfter=${
      peopleProfiles[peopleProfiles.length - 1].userId
    }`;

    try {
      const profiles = [];
      const res = await axios.get(queryLink);
      const users = res.data.users;

      if (users.length > 0) {
        for (let user of users) {
          if (userId) {
            if (
              user.userId !== userId &&
              user.age >= minAge &&
              user.age <= maxAge
            ) {
              const userImageRef = ref(storage, `images/${user.userId}`);
              let url;
              try {
                url = await getImageFile(userImageRef);
              } catch (err) {
                url = user.userImage;
              }
              const newUser = {
                ...user,
                image: url,
              };
              profiles.push(newUser);
            }
          } else {
            if (user.age >= minAge && user.age <= maxAge) {
              const userImageRef = ref(storage, `images/${user.userId}`);
              let url;
              try {
                url = await getImageFile(userImageRef);
              } catch (err) {
                url = user.userImage;
              }
              const newUser = {
                ...user,
                image: url,
              };
              profiles.push(newUser);
            }
          }
        }
      } else {
        setDoneLoading(true);
      }

      setPeopleProfiles((currentProfiles) => {
        return [...currentProfiles, ...profiles];
      });
      setIsLoading(false);
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

  const populateLookingFor = async () => {
    if (userId) {
      try {
        const res = await axios.get(
          `https://ConnectCodeBackend.yxli666.repl.co/user/${userId}`
        );
        const user = res.data;

        setSkills(user.seeking);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    populateLookingFor();
  }, [userId]);

  useEffect(() => {}, [peopleProfiles]);

  useEffect(() => {
    if (notFirstRender.current || !userId) {
      query();
    } else {
      notFirstRender.current = true;
    }
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
              <Link
                to={`/profile/${person.userId}`}
                key={index}
                className={styles.profileLink}
              >
                <Profile
                  className={styles.profile}
                  image={person.image}
                  name={person.name}
                  languages={person.languages}
                  yearsOfExperience={person.yearsOfExperience}
                  skills={person.skills}
                  lookingFor={person.seeking}
                  style={{ border: "none" }}
                />
              </Link>
            );
          })}
        </div>
        <div></div>
        {!doneLoading && peopleProfiles.length >= 1 ? (
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load more
          </button>
        ) : (
          <p className={styles.endText}>End of results</p>
        )}
      </section>
    </section>
  );
};
