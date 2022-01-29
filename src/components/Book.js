//Required components
import React from "react";
import { Books } from "../data/BooksData";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BookPage } from "./PromisedLand";
import { useParams } from "react-router-dom";

//Bookpage components

export const Book = () => {
  const { id } = useParams();
  const book = Books.find((bk) => bk.id == id);

  return (
    <div>
      <Header />
      {book ? (
        <BookPage book={book} key={book.id} />
      ) : (
        <p>
          Oops! Book not found. But we have <a href="/">more</a>
        </p>
      )}
      <Footer />
    </div>
  );
};
