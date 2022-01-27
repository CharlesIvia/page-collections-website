//Required imports
import React from "react";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import EndlessReading from "../assets/bookshelf_.png";
import { Books } from "../data/BooksData";
import { BookCard } from "./PopularSection";
import { Footer } from "./Footer";
import { Categories } from "./Categories";

export const NonFiction = () => {
  return (
    <div>
      <Header />
      <HeroSearch
        searchmain="People respect non-fiction but they read novels."
        searchimage={EndlessReading}
      />
      <div className="popular-section-cards personalgrowth">
        {Books.filter((bk) => bk.category === "nonfiction").map(
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
