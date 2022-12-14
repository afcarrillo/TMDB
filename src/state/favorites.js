import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

export const getFavorites = createAsyncThunk("GET_FAVORITES", () => {
  return axios
    .get("/api/favorites")
    .then((res) => res.data)
    .then((favorites) => favorites)
    .catch(() => {
      alert("Error getting favorites");
      return [];
    });
});

export const clearFavorites = createAction("CLEAR_FAVORITES");

export const addFavorite = createAsyncThunk(
  "ADD_TO_FAVORITE",
  ({ type, item }, { getState }) => {
    const user = { ...getState().user };
    const favorites = [...getState().favorites];

    if (!user.email) {
      alert(`To add a favorite you need to be logged in.`);
      return favorites;
    }
    if (
      favorites.find(
        (fav) => fav.media_type === type && fav.media_id === item.id
      )
    ) {
      alert(`${type} already in favorites`);
      return favorites;
    }

    return axios
      .post(`/api/favorites/add/${type}/${item.id}`, {
        name: item.name || item.title,
        poster: item.poster_path,
      })
      .then((res) => res.data)
      .then((favorite) => {
        alert(`${type} added to favorites`);
        return [...favorites, favorite];
      })
      .catch(() => {
        alert("Error: adding to favorites");
      });
  }
);

export const removeFavorite = createAsyncThunk(
  "REMOVE_FROM_FAVORITE",
  (favorite, { getState }) => {
    const favorites = [...getState().favorites];
    return axios
      .delete(`/api/favorites/remove/${favorite.id}`)
      .then(() => {
        alert(`${favorite.media_type} removed from favorites`);
        return favorites.filter((fav) => fav.id !== favorite.id);
      })
      .catch(() => {
        alert("Error: removing rom favorites");
      });
  }
);

const initialState = [];

const favoritesReducer = createReducer(initialState, {
  [getFavorites.fulfilled]: (state, action) => action.payload,
  [clearFavorites]: (state, action) => [],
  [addFavorite.fulfilled]: (state, action) => action.payload,
  [removeFavorite.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;
