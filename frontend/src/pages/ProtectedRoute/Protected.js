import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";

export const Protected = ({ userId, children, hasRendered }) => {
  const isUser = localStorage.getItem("user");

  // let component = children;

  return (
    <div>
      {!isUser && <Navigate to="/signup" replace />}
      {children}
    </div>
  );
};
