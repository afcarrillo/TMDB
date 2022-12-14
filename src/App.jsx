import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";

import { useDispatch } from "react-redux";
import { userCookie } from "./state/user";
import { getFavorites } from "./state/favorites";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import User from "./components/User";
import Favorites from "./components/Favorites";
import SearchUsers from "./components/SearchUsers";
import NotFound from "./components/NotFound";

import MediaItem from "./commons/MediaItem";
import Grid from "./commons/Grid";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCookie())
      .then((res) => res.payload)
      .then((user) => {
        if (user.email) dispatch(getFavorites());
      });
  });

  return (
    <div>
      <Navbar />

      <section className="container is-max-desktop mx-auto my-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup" element={<Signup />} />
          <Route path="find_users" element={<SearchUsers />} />
          <Route path="user/:nickname" element={<User />} />
          <Route path="user/:nickname/favorites" element={<Favorites />} />
          <Route path=":type" element={<Grid />} />
          <Route path=":type/:id" element={<MediaItem />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </section>

      <Footer />
    </div>
  );
};

export default App;
