import React from "react";

import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <h1 className="title is-size-2 has-text-centered mb-6">
        Welcome to The Movie Database
      </h1>
      <Search />
    </div>
  );
};

export default Home;
