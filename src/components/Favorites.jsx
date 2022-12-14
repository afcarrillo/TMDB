import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import MediaListItem from "../commons/MediaListItem";

const Favorites = () => {
  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  return !user.email ? (
    <Navigate to="404" />
  ) : (
    <div>
      <h1 className="title is-size-3 my-6">Favorites</h1>
      {favorites.length ? (
        <table className="table is-hoverable is-striped is-info">
          <thead>
            <tr className="content has-text-centered">
              <th>Id</th>
              <th>Poster</th>
              <th>Name</th>
              <th>Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite, i) => (
              <MediaListItem key={i} favorite={favorite} index={i} />
            ))}
          </tbody>
        </table>
      ) : (
        "You don't have any favorites"
      )}
    </div>
  );
};

export default Favorites;
