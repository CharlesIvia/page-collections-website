import React from "react";
import EndlessReadingGif from "../assets/bookshelf_.png";

export const HeroSearch = () => {
  return (
    <div className="hero-search">
      <div className="hero-search-left">
        <div>
          <h2>Once you learn to read, you will be forever free.</h2>
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
        <img src={EndlessReadingGif} alt="endless reading"></img>
      </div>
    </div>
  );
};
