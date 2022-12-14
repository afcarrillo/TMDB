import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user);

  return !user.email ? (
    <Navigate to="404" />
  ) : (
    <div className="columns">
      <div className="column is-centered">
        <div className="block">
          <h1 className="title is-size-2 mb-0">{user.fullname}</h1>
          <p className="help mb-3">{`Member since ${new Date(
            user.createdAt
          ).toDateString()}`}</p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Nickname: </strong>
            {user.nickname}
          </p>
        </div>
      </div>
      <div className="column is-one-third is-centered">
        <div className="block">
          <Link to="favorites">
            <button className="button has-text-info mt-4">
              <span className="icon has-text-love has-text-info">
                <i className="fas fa-heart"></i>
              </span>
              <span>
                <strong>Favorites</strong>
              </span>
            </button>
          </Link>
        </div>
        <div className="block">
          <Link to="/find_users">
            <button className="button has-text-info mt-4">
              <span className="icon has-text-love has-text-info">
                <i className="fas fa-search"></i>
              </span>
              <span>
                <strong>Find users</strong>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
