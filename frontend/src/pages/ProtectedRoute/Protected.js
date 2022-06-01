import React, { useEffect } from "react";
import { Navigate } from "react-router";

export const Protected = ({ children }) => {
  const isUser = localStorage.getItem("user");
  if (!isUser) {
    localStorage.setItem("message", "Please login first.");
  }
  // let component = children;

  return (
    <div>
      {!isUser && <Navigate to="/signup" replace />}
      {children}
    </div>
  );
};
