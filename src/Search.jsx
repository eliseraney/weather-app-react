import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form className="Search" id="search-form">
      <input
        type="search"
        name="Search City"
        id="search-input"
        placeholder="SEARCH CITY"
        className="searchCity"
        autoComplete="off"
        autoFocus="on"
      />
      <input id="submit-button" type="submit" value="Search" />
      <input id="current-city-button" type="submit" value="Current City" />
    </form>
  );
}
