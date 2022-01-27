//Required components
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Books } from "../data/BooksData";

//Bookpage components

export const BookPage = ({ book }) => {
  return (
    <div className="bookpage">
      <div className="bookpage-left">
        <img src={book.src} alt={book.name} />
        <button>Buy Now</button>
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
