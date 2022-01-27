//Required imports
import React from "react";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import EndlessReading from "../assets/bookshelf_.png";
import { Books } from "../data/BooksData";
import { BookCard } from "./PopularSection";
import { Footer } from "./Footer";
import { Categories } from "./Categories";

export const Novels = () => {
  return (
    <div>
      <Header />
      <HeroSearch
        searchmain="Reading one book is like eating one potato chip!"
        searchimage={EndlessReading}
      />
      <div className="popular-section-cards">
        {Books.filter((bk) => bk.category === "novels").map((filteredbook) => (
          <BookCard book={filteredbook} key={filteredbook.id} />
        ))}
      </div>
      <Categories />
      <Footer />
    </div>
  );
};
