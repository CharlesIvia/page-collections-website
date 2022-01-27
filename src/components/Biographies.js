//Required imports
import React from "react";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import EndlessReading from "../assets/bookshelf_.png";
import { Books } from "../data/BooksData";
import { BookCard } from "./PopularSection";
import { Footer } from "./Footer";
import { Categories } from "./Categories";

export const Biographies = () => {
  return (
    <div>
      <Header />
      <HeroSearch
        searchmain="Read no history: nothing but biography, for that is life without theory."
        searchimage={EndlessReading}
      />
      <div className="popular-section-cards personalgrowth">
        {Books.filter((bk) => bk.category === "biography").map(
          (filteredbook) => (
            <BookCard book={filteredbook} key={filteredbook.id} />
          )
        )}
      </div>
      <Categories />
      <Footer />
    </div>
  );
};
