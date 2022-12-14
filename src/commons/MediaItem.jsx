import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useDispatch } from "react-redux";
import { addFavorite } from "../state/favorites";

import axios from "axios";

const MediaItem = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => res.data)
      .then((media) => setItem(media));
  }, [type, id]);

  return (
    <div className="columns">
      <div className="column is-one-third is-centered">
        <div className="block">
          <figure className="image">
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
              alt={item.title || item.name}
            />
          </figure>
        </div>
        <div className="tags">
          {item.genres
            ? item.genres.map((genre, i) => (
                <span key={i} className="tag is-info">
                  {genre.name}
                </span>
              ))
            : ""}
        </div>
      </div>
      <div className="column">
        <div className="block">
          <h1 className="title has-text-weight-bold mb-1">
            {item.title || item.name}
          </h1>
          <p className="help">{item.release_date || item.first_air_date}</p>
        </div>
        {item.tagline ? (
          <div className="block notification p-2">
            <blockquote className="is-family-code has-text-grey has-text-centered is-italic has-text-weight-medium">
              {`<< ${item.tagline} >>`}
            </blockquote>
          </div>
        ) : (
          ""
        )}
        <div className="block">
          <h2 className="title is-size-4 mb-2">Overview</h2>
          <p>{item.overview}</p>
        </div>
        {item.networks ? (
          <div className="block">
            <figure>
              <img
                className="logo"
                height="32"
                width="auto"
                src={`https://image.tmdb.org/t/p/original${item.networks[0].logo_path}`}
                alt={item.networks[0].name}
              />
            </figure>
          </div>
        ) : (
          ""
        )}
        {item.imdb_id ? (
          <div className="block">
            <a href={`https://www.imdb.com/title/${item.imdb_id}`}>
              <button className=" button has-text-weight-bold is-warning has-text-black">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fab fa-2x fa-imdb"></i>
                  </span>
                  <span className="ml-2">Rating and rewies</span>
                </span>
              </button>
            </a>
          </div>
        ) : (
          ""
        )}
        {item.homepage ? (
          <div className="block">
            <p>
              <span className="has-text-grey has-text-weight-medium">
                Official site:{" "}
              </span>
              <a href={item.homepage}>{item.homepage}</a>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="block">
          <button
            className="button is-white has-text-info"
            onClick={() => dispatch(addFavorite({ type, item }))}
          >
            <span className="icon has-text-love has-text-info">
              <i className="fas fa-heart"></i>
            </span>
            <span>Add to Favorites</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
