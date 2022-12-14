import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const sendLoginRequest = createAsyncThunk(
  "LOGIN_USER",
  ({ email, password }) => {
    return axios
      .post("/api/login", { email, password })
      .then((res) => res.data)
      .then((user) => user)
      .catch(() => {
        alert("Error: user or password incorrect");
        return {};
      });
  }
);

export const userCookie = createAsyncThunk("GET_USER_COOKIE", () => {
  return axios
    .get("/api/me")
    .then((res) => res.data)
    .then((user) => user)
    .catch(() => {
      return {};
    });
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT_USER", () => {
  return axios
    .post("/api/logout")
    .then(() => {
      return {};
    })
    .catch(() => {
      alert("Error: logout problem");
    });
});

const initialState = {};

const userReducer = createReducer(initialState, {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [userCookie.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
