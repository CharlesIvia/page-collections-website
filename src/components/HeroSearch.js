import React from "react";

export const HeroSearch = ({ searchmain, searchimage }) => {
  return (
    <div className="hero-search">
      <div className="hero-search-left">
        <div>
          <h2>{searchmain}</h2>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Search a book, an author or genre"
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="hero-search-right">
        <img src={searchimage} alt="endless reading"></img>
      </div>
    </div>
  );
};
