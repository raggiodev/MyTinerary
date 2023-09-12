import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ children, statusToNotProtect }) => {
  const { status } = useSelector((store) => store.authReducer);
  if (status === statusToNotProtect) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default ProtectedRoute;