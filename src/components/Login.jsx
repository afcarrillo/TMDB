import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { sendLoginRequest } from "../state/user";
import { getFavorites } from "../state/favorites";

import useInput from "../hooks/useInput";

const Login = () => {
  const user = useSelector((state) => state.user);
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.email) navigate("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendLoginRequest({ email: email.value, password: password.value })
    ).then(() => dispatch(getFavorites()));

    navigate("");
  };

  return user.email ? (
    <Navigate to="/" />
  ) : (
    <div>
      <h2 className="is-title is-size-2">Login to your account</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input is-rounded"
              type="email"
              placeholder="example@example.com"
              {...email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="password"
              placeholder="Password"
              {...password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-rounded is-link">Log In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
