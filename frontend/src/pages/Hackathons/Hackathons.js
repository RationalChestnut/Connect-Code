import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Hackathons.module.css";
import { FilterNavbar } from "../../components/FilterNavbar/FilterNavbar";
import { HackathonFilters } from "./HackathonFilters";
import { data } from "../../data/HackathonData";
import { Hackathon } from "../../components/Hackathon/Hackathon";
import Loading from "../../components/Loading/Loading";

const Hackathons = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [hackathons, setHackathons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [minPrize, setMinPrize] = useState(0);
  const [maxPrize, setMaxPrize] = useState(100000);
  const [themes, setThemes] = useState([]);
  const [inPerson, setInPerson] = useState(false);
  const [online, setOnline] = useState(false);

  const query = () => {
    setIsLoading(true);
    let queryLink = `https://ConnectCodeBackend.yxli666.repl.co/hackathons/query?minPrize=${Math.min(
      minPrize,
      maxPrize
    )}&maxPrize=${Math.max(
      minPrize,
      maxPrize
    )}&inPerson=${inPerson}&online=${online}&tags=${themes.join(",")}`;

    axios.get(queryLink).then((res) => {
      setHackathons(res.data.hackathons);
      setIsLoading(false);
    });
  };

  const loadMore = () => {
    setIsLoading(true);
    let queryLink = `https://ConnectCodeBackend.yxli666.repl.co/hackathons/query?minPrize=${Math.min(
      minPrize,
      maxPrize
    )}&maxPrize=${Math.max(
      minPrize,
      maxPrize
    )}&inPerson=${inPerson}&online=${online}&tags=${themes.join(
      ","
    )}&startAfter=${hackathons[hackathons.length - 1].id}`;

    axios.get(queryLink).then((res) => {
      setHackathons((currentHackathons) => {
        return [...currentHackathons, ...res.data.hackathons];
      });
      setIsLoading(false);
    });
  };

  useEffect(() => {
    console.log("ran");
    query();
  }, [themes, inPerson, online]);

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
        <HackathonFilters
          setMinPrize={setMinPrize}
          setMaxPrize={setMaxPrize}
          themes={themes}
          setThemes={setThemes}
          inPerson={inPerson}
          online={online}
          setInPerson={setInPerson}
          setOnline={setOnline}
          query={query}
        />
      </div>
      <div className={styles.hackathonPage}>
        <div className={styles.filterDesktop}>
          <HackathonFilters
            setMinPrize={setMinPrize}
            setMaxPrize={setMaxPrize}
            themes={themes}
            setThemes={setThemes}
            inPerson={inPerson}
            online={online}
            setInPerson={setInPerson}
            setOnline={setOnline}
            query={query}
          />
        </div>
        <div className={styles.hackathonDisplayContainer}>
          <Loading isLoading={isLoading} />
          {hackathons.map((hackathon, index) => {
            return <Hackathon key={hackathon.title + index} data={hackathon} />;
          })}
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
