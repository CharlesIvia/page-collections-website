//Required components
import React from "react";
import { AboutMain } from "./About";
import { AuthenticatedHeader } from "./AuthenticatedHeader";
import { Footer } from "./Footer";

export const AuthenticatedAbout = () => {
  return (
    <div>
      <AuthenticatedHeader />
      <AboutMain />
      <Footer />
    </div>
  );
};
