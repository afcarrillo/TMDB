import React, { useEffect } from "react";
import { Navigate } from "react-router";

import { useDispatch } from "react-redux";
import { sendLogoutRequest } from "../state/user";
import { clearFavorites } from "../state/favorites";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendLogoutRequest()).then(() => dispatch(clearFavorites()));
  });

  return <Navigate to="/" />;
};

export default Logout;
