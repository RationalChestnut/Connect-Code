import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

export const Logout = (props) => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    props.setUserId(null);
    navigate("/login");
  };

  useEffect(() => {
    logout();
  }, []);

  return <div>Logout</div>;
};
