import React from "react";
import { ImSpinner2 } from "react-icons/im";

import styles from "./Loading.module.css";

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className={styles.loading}>
        <ImSpinner2 className={styles.icon} size={70} />
      </div>
    )
  );
};

export default Loading;
