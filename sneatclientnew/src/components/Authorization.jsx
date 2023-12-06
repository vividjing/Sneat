import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function Authorization(props) {
  const { isLogged } = useSelector((state) => state.global);
  const location = useLocation();
  return (
    <div>
      {isLogged ? (
        props.children
      ) : (
        <Navigate to={"/login"} replace state={{ prelocation: location }} />
      )}
    </div>
  );
}
