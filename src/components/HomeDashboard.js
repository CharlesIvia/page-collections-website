import React from "react";
import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { AuthenticatedHeader } from "./AuthenticatedHeader";
import { HeroSearch } from "./HeroSearch";
import { PopularSection } from "./PopularSection";
import EndlessReading from "../assets/bookshelf_.png";

export const HomeDashboard = () => {
  return (
    <div>
      <AuthenticatedHeader />
      <HeroSearch
        searchmain="Once you learn to read, you will be forever free."
        searchimage={EndlessReading}
      />
      <Categories />
      <PopularSection />
      <Footer />
    </div>
  );
};
