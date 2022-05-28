import React, { useEffect } from "react";
import styles from "./Logout.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

export const Logout = (props) => {
  const logout = async () => {
    await signOut(auth);
    props.setUserId(null);
  };

  useEffect(() => logout, []);

  return <div>Logout</div>;
};
