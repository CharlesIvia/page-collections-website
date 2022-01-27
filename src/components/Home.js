import React from "react";
import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import { PopularSection } from "./PopularSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <HeroSearch />
      <Categories />
      <PopularSection />
      <Footer />
    </div>
  );
};
