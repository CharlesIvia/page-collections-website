//Required components
import React from "react";
import { Books } from "../../data/BooksData";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { BookPage } from "../PromisedLand";

//Bookpage components

export const Drunk = () => {
  return (
    <div>
      <Header />
      {Books.filter((bk) => bk.name.toLowerCase().includes("drunk")).map(
        (filteredbook) => (
          <BookPage book={filteredbook} key={filteredbook.id} />
        )
      )}
      <Footer />
    </div>
  );
};
