//Required imports
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const BuyNow = () => {
  return (
    <div>
      <button>Buy Now</button>
    </div>
  );
};

export const HeaderTwo = ({ exploreRefProp }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="book store" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/">
          <button>Popular</button>
        </Link>
      </div>
    </div>
  );
};
