import React, { useRef } from "react";
import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSearch } from "./HeroSearch";
import { PopularSection } from "./PopularSection";
import EndlessReading from "../assets/bookshelf_.png";

export const Home = () => {
  const exploreRef = useRef();
  let executeExploreScroll = () => {
    exploreRef.current.scrollIntoView();
  };

  return (
    <div>
      <Header exploreRefProp={executeExploreScroll} />
      <HeroSearch
        searchmain="Once you learn to read, you will be forever free."
        searchimage={EndlessReading}
      />
      <Categories />
      <div ref={exploreRef}>
        <PopularSection />
      </div>
      <Footer />
    </div>
  );
};
