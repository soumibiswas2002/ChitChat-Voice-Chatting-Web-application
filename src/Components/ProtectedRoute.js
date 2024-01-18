import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace />;
  return children;
};

export const GuestRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/userProfile" replace />;
  return children;
};
