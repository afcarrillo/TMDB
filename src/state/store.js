import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import favoritesReducer from "./favorites";

const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export default store;
