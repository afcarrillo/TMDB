import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { removeFavorite } from "../state/favorites";

import "../index.css";

const MediaListItem = ({ favorite, index }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <th>
        <Link to={`/${favorite.media_type}/${favorite.media_id}`}>
          {index + 1}
        </Link>
      </th>

      <td>
        <Link to={`/${favorite.media_type}/${favorite.media_id}`}>
          <figure className="image is-48x48 has-text-centered">
            <img
              className="is-rounded"
              src={`https://www.themoviedb.org/t/p/w64_and_h64_bestv2${favorite.poster_path}`}
              alt={""}
            />
          </figure>
        </Link>
      </td>

      <td>
        <Link to={`/${favorite.media_type}/${favorite.media_id}`}>
          <strong>{favorite.name}</strong>
        </Link>
      </td>

      <td>
        <Link to={`/${favorite.media_type}/${favorite.media_id}`}>
          {favorite.media_type.toUpperCase()}
        </Link>
      </td>

      <td>
        <button
          className="button is-danger is-small"
          onClick={() => dispatch(removeFavorite(favorite))}
        >
          <span>Delete</span>
          <span className="icon is-small">
            <i className="fas fa-times"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default MediaListItem;
