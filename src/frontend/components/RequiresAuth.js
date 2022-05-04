import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({ children, token }) {
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to={"/login"}  state={{ from: location }} replace />
  );
}

export default RequiresAuth;
