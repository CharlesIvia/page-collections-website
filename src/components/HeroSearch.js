import React, { useState } from "react";
import { Books } from "../data/BooksData";
import { BookCard } from "./PopularSection";

export const HeroSearch = ({ searchmain, searchimage }) => {
  const [query, setQuery] = useState("");
  const [bK, setBk] = useState([]);
  const [message, setMessage] = useState("");

  let bufferBk = {
    name: "Book not found",
  };
  const handleOnChange = (e) => {
    let value = e.target.value;
    setQuery(value);
  };

  const SearchBook = (searchQuery) => {
    setQuery(searchQuery);
    let searchedBk = Books.filter(
      (bk) =>
        bk.name.toLowerCase().includes(query) ||
        bk.author.toLowerCase().includes(query)
    );

    // console.log(searchedBk);
    // console.log(query);
    searchedBk.length > 0
      ? setBk([...searchedBk])
      : setBk([]) &&
        setMessage("Sorry! We do not that book on our catalogue yet.");
  };

  return (
    <div className="hero">
      <div className="hero-search">
        <div className="hero-search-left">
          <div>
            <h2>{searchmain}</h2>
          </div>
          <div>
            <form onSubmit={SearchBook}>
              <input
                type="text"
                placeholder="Search a book, an author or genre"
                onChange={handleOnChange}
              ></input>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="hero-search-right">
          <img src={searchimage} alt="endless reading"></img>
        </div>
      </div>
      <div className="search-results">
        {bK.length > 0 ? (
          bK.map((book) => <BookCard book={book} key={book.id} />)
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
};
