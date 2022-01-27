//Required imports
import React from "react";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import EndlessReading from "../assets/bookshelf_.png";
import { Books } from "../data/BooksData";
import { BookCard } from "./PopularSection";
import { Footer } from "./Footer";
import { Categories } from "./Categories";

export const ChildrenBooks = () => {
  return (
    <div>
      <Header />
      <HeroSearch
        searchmain="To improve oneself, one must be a live long learner."
        searchimage={EndlessReading}
      />
      <div className="popular-section-cards">
        {Books.filter((bk) => bk.category === "children").map(
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
