import React from "react";
import { Navigate } from "react-router";
export const Protected = ({ userId, children }) => {
  // if (userId == null || userId == "") {
  //   return <Navigate to="/signup" replace />;
  // }
  return children;
};
