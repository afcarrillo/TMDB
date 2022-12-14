import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar has-background-black mb-4">
      <h2 className="navbar-item">
        <Link to="/">
          <strong className="has-text-white is-size-2">TMDB</strong>
        </Link>
      </h2>
      <div className="navbar-item navbar-end">
        <Link to="/movie">
          <button className="button is-ghost has-text-white">
            <strong>Movies</strong>
          </button>
        </Link>
        <Link to="/tv">
          <button className="button is-ghost has-text-white">
            <strong>TV Shows</strong>
          </button>
        </Link>
        <Link to="/">
          <button className="button is-black">
            <span className="icon has-text-info">
              <i className="fas fa-lg fa-search"></i>
            </span>
          </button>
        </Link>
      </div>

      <div className="navbar-item navbar-end">
        {user.fullname ? (
          <div className="buttons">
            <Link to={`/user/${user.nickname}`}>
              <button className="button is-ghost has-text-whitemr mr-2">
                <strong>{user.fullname}</strong>
              </button>
            </Link>
            <Link to="/logout">
              <button className="button is-info is-rounded">Log out</button>
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <Link to="/signup">
              <button className="button is-info is-rounded mr-2">
                <strong className="has-text-white">Sign up</strong>
              </button>
            </Link>
            <Link to="/login">
              <button className="button is-info is-light is-rounded">
                Log in
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
