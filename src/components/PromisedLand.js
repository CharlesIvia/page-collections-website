//Required components
import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Books } from "../data/BooksData";

//Bookpage components

export const BookPage = ({ book }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bookpage">
      <div className="bookpage-left">
        <img src={book.src} alt={book.name} />
        <a href="tel:0111854222">
          <button onClick={() => setClicked(!clicked)} className="call">
            {clicked ? "0111-384-222" : "Call to buy"}
          </button>
        </a>
      </div>
      <div>
        <h3>
          {book.name} - {book.author}
        </h3>
        <h4>KSH {book.price}</h4>

        <h5>About the book</h5>
        <p className="description">{book.description}</p>
      </div>
    </div>
  );
};

export const PromisedLand = () => {
  return (
    <div>
      <Header />
      {Books.filter((bk) =>
        bk.name.toLowerCase().includes("promised land")
      ).map((filteredbook) => (
        <BookPage book={filteredbook} key={filteredbook.id} />
      ))}
      <Footer />
    </div>
  );
};
