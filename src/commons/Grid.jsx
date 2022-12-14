import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

import Card from "../commons/Card";

import getTitle from "../utils/getTitle";
import getPathRequest from "../utils/getPathRequest";

const Grid = () => {
  const URL = useLocation();
  const { type } = useParams();
  const [collection, setCollection] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/${getPathRequest(type, URL)}`)
      .then((res) => res.data)
      .then((media) => setCollection(media.results))
      .catch(() => navigate("/404"));
  }, [URL, type, navigate]);

  return (
    <div>
      <h2 className="title is-size-2 has-text-centered mb-6">
        {getTitle(type, URL)}
      </h2>
      <div className="columns is-multiline layout">
        {collection
          ? collection.map((item, i) => (
              <div className="column is-3" key={i}>
                <Link
                  to={
                    item.media_type
                      ? `/${item.media_type}/${item.id}`
                      : `${URL.pathname}/${item.id}`
                  }
                >
                  <Card item={item} />
                </Link>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Grid;
