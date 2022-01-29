//Required components
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ReadingWomanImg from "../assets/reading woman.gif";

export const AboutMain = () => {
  return (
    <div className="about-main">
      <div>
        <img src={ReadingWomanImg} alt="reading" />
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <Header />
      <AboutMain />
      <Footer />
    </div>
  );
};
