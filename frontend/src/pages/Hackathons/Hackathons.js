import React, { useState } from "react";

import styles from "./Hackathons.module.css";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
import { HackathonFilters } from "./HackathonFilters";
import { data } from "../../data/HackathonData";
import { Hackathon } from "../../components/Hackathon/Hackathon";
const Hackathons = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [hackathons, setHackathons] = useState([]);

  return (
    <div className={styles.hackathonPageContainer}>
      <div className={styles.filterNavbarContainer}>
        <FilterNavbar setIsFilter={setIsFilter} isShown={isFilter} />
      </div>
      <div
        className={`${styles.filterMobile} ${
          isFilter ? styles.displayFilter : styles.hideFilter
        }`}
      >
        <HackathonFilters />
      </div>
      <div className={styles.hackathonPage}>
        <div className={styles.filterDesktop}>
          <HackathonFilters setHackathons={setHackathons} />
        </div>
        <div className={styles.hackathonDisplayContainer}>
          {hackathons.map((hackathon, index) => {
            return <Hackathon key={hackathon.title + index} data={hackathon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
