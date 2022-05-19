import React, { useState } from "react";

import styles from "./Hackathons.module.css";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
const Hackathons = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div className={styles.hackathonPageContainer}>
      <div className={styles.filterNavbarContainer}>
        <FilterNavbar setIsFilter={setIsFilter} isShown={false} />
      </div>
    </div>
  );
};

export default Hackathons;
