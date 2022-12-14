import React from "react";
import useInput from "../hooks/useInput";

const Search = () => {
  const query = useInput();

  return (
    <form className="search control has-icons-left" action="/search">
      <span>
        <label>
          <input
            className="input is-rounded ds-input"
            name="query"
            type="text"
            placeholder="Search movies or tv shows..."
            {...query}
          />
        </label>
      </span>
      <span className="icon is-small is-left has-text-info">
        <i className="fas fa-search"></i>
      </span>
    </form>
  );
};

export default Search;
