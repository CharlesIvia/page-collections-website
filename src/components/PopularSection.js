//Required imports
import React from "react";
import { Books } from "../data/BooksData";

//Book card

export const BookCard = ({ book }) => {
  return (
    <div className="bookcard">
      <div>
        <img src={book.src} alt={book.name} />
      </div>
      <div className="bookcard-details">
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <p>{`KSH ${book.price}`}</p>
      </div>
    </div>
  );
};

export const PopularSection = () => {
  return (
    <div className="popular-section">
      <div>
        <h3 className="popular-section-h3">Popular books</h3>
      </div>
      <div className="popular-section-cards">
        {Books.filter((bk) => bk.popular).map((filteredbook) => (
          <BookCard book={filteredbook} key={filteredbook.id} />
        ))}
      </div>
    </div>
  );
};
